<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
import { reactive } from 'vue';
import { formatCash } from '@/utils';

// import subscribe from '@/components/subscribe.vue';
import { useStore } from '@/store';
const store = useStore();
const user = computed(() => store.user);
const localePath = useLocalePath();
const props = defineProps({
  membershipArr: Array,
  correctSelectBuyTimes: Array,
  mockSelectBuyTimes: Array,
}) as any;

const state = reactive({
  leftQuanYiList: [
    {
      key: '1',
      font: 'Unlimited for Practice Sessions',
    },
    {
      key: '2',
      font: 'Access all Practice Questions',
    },
    {
      key: '3',
      font: 'Browse High-scoring Sample Answers',
    },
    {
      key: '4',
      font: 'In-depth Question Analysis',
    },
    {
      key: '5',
      font: 'High-Frequency Exam Word Book',
    },
    {
      key: '6',
      font: 'Tailored Study Plan with Smart Question Selection',
    },
    {
      key: '7',
      font: 'AI-Powered Speaking Evaluations',
    },
  ],
  mockQuanYiList: [
    { key: 'm1', font: 'Full-scale mock exams' },
    { key: 'm2', font: 'Test at any time' },
    { key: 'm3', font: 'Close to real DET exam' },
    { key: 'm4', font: 'Accurate assessment scores' },
    { key: 'm5', font: 'Detailed evaluation report' },
    { key: 'm6', font: 'Results will be available within 5-30 minutes' },
  ],
  mockBuyTimsId: '',
  mockBuyItem: {},
});

watch(
  () => props.mockSelectBuyTimes,
  (newVal) => {
    if (newVal.length) {
      state.mockBuyTimsId = newVal[0].id;
      state.mockBuyItem = newVal[0];
    }
  },
);
const changeBuyCorrectTimes = (item: any) => {
  const { id, correctTimesid } = item;
  const correctTimes = props.correctSelectBuyTimes.find((item: any) => item.id === correctTimesid);
  item.correctPrice = correctTimes.price;
};

const buyMembership = (item: any) => {
  console.log(item);
  const { id, correctTimesid } = item;
  console.log(id, correctTimesid);
  store.stripePay({ vipId: `${id},${correctTimesid}` });
};

const buyMockTimes = () => {
  store.stripePay({ vipId: state.mockBuyTimsId });
};
const changeMockBuyTimes = () => {
  state.mockBuyItem = props.mockSelectBuyTimes.find((item: any) => item.id === state.mockBuyTimsId);
};
</script>
<template>
  <div class="new_mb_price_out">
    <div class="new_mb_price_left">
      <div class="new_mb_price_left_top">
        <div
          v-for="item in props.membershipArr"
          :key="item.id"
          :class="item.day === 365 ? 'one_card_new one_card_new_365' : 'one_card_new'"
        >
          <div>
            <div class="title_out">
              <div class="title">{{ item.tag }}</div>
              <div v-if="item.day === 365" class="save_tag">
                {{
                  $t('pricing.pagefont.save', {
                    num: 100 - ((item.price / item.originalPrice) * 100).toFixed(0),
                  })
                }}
              </div>
            </div>

            <div class="price_out">
              <div class="do">{{ $t('pricing.pagefont.do') }}</div>
              <template v-if="item.day === 7">
                <div class="price">{{ formatCash(Number(item.price) + Number(item.correctPrice || 0)) }}</div>
                <div class="unit">{{ $t('pricing.pagefont.week') }}</div>
              </template>
              <template v-if="item.day === 30">
                <div class="price">{{ formatCash(Number(item.price) + Number(item.correctPrice || 0)) }}</div>
                <div class="unit">{{ $t('pricing.pagefont.month') }}</div>
              </template>
              <template v-if="item.day === 365">
                <div class="price">{{ formatCash(Number(item.price) / 12 + Number(item.correctPrice || 0)) }}</div>
                <div class="unit">{{ $t('pricing.pagefont.month') }}</div>
              </template>
            </div>
            <div class="bill">
              <span v-if="item.day === 365">
                {{
                  $t('pricing.pagefont.Billed', {
                    num: formatCash(Number(item.price) + Number(item.correctPrice || 0) * 12),
                  })
                }}
              </span>
            </div>
          </div>

          <div class="select_out_new">
            <div class="select_out_new_font">{{ $t('pricing.pagefont.apcs') }}</div>
            <div class="sleect_out_wrapper">
              <div class="select_out">
                <el-select v-model="item.correctTimesid" placeholder="Select" @change="changeBuyCorrectTimes(item)">
                  <el-option
                    v-for="itemTimes in props.correctSelectBuyTimes"
                    :key="itemTimes.id"
                    :label="`${itemTimes.correctNum} ${$t('pricing.pagefont.times')}`"
                    :value="itemTimes.id"
                  >
                    <span style="float: left">{{ itemTimes.correctNum }}{{ $t('pricing.pagefont.times') }}</span>
                    <span
                      style="float: right; color: var(--el-text-color-secondary); font-size: 13px; margin-left: 60px"
                    >
                      {{ $t('pricing.pagefont.do') }}{{ formatCash(itemTimes.price) }}
                    </span>
                  </el-option>
                </el-select>
              </div>
              <div class="select_font">{{ $t('pricing.pagefont.month') }}</div>
            </div>
          </div>
          <div class="but_btn_new">
            <div v-if="user?.id">
              <div class="card_price_buy_btn common_btn_hover_bgColor" @click="buyMembership(item)">
                {{ $t('pricing.pagefont.Buy_Now') }}
                <div class="scroll-line"></div>
              </div>
            </div>
            <div v-else>
              <NuxtLink class="card_price_buy_btn common_btn_hover_bgColor" :to="localePath(`/login?url=/pricing`)">
                {{ $t('pricing.pagefont.Buy_Now') }}
                <div class="scroll-line"></div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div v-if="!props.membershipArr.length" class="one_card_new">
          <el-skeleton :rows="6" animated />
        </div>
        <div v-if="!props.membershipArr.length" class="one_card_new">
          <el-skeleton :rows="6" animated />
        </div>
        <div v-if="!props.membershipArr.length" class="one_card_new">
          <el-skeleton :rows="6" animated />
        </div>
      </div>
      <div v-if="props.membershipArr.length" class="new_mb_price_left_bottom">
        <div v-for="item in state.leftQuanYiList" :key="item.key" class="one_quanyi">
          <div class="icon">
            <img src="/img/pricing/black_check_icon.svg" :alt="$t('pricing.pagefont.bci')" />
          </div>
          <div class="font">{{ item.font }}</div>
        </div>
      </div>
    </div>
    <div class="new_mb_price_right">
      <div v-if="props.membershipArr.length" class="one_card_new">
        <div>
          <div class="title_out">
            <div class="title title_blue">{{ $t('pricing.pagefont.mt') }}</div>
          </div>
          <div class="price_out">
            <div class="do"></div>
            <div class="price price_blue">{{ formatCash(state.mockBuyItem.price) }}</div>
            <!-- <div class="unit">/week</div> -->
          </div>
          <div class="bill"></div>
        </div>

        <div class="select_out_new">
          <div class="select_out_new_font">{{ $t('pricing.pagefont.apmt') }}</div>
          <div class="sleect_out_wrapper">
            <div class="select_out">
              <el-select v-model="state.mockBuyTimsId" placeholder="Select" @change="changeMockBuyTimes()">
                <el-option
                  v-for="itemTimes in props.mockSelectBuyTimes"
                  :key="itemTimes.id"
                  :label="`${itemTimes.examNum} ${$t('pricing.pagefont.times')}`"
                  :value="itemTimes.id"
                >
                  <span style="float: left">{{ itemTimes.examNum }}{{ $t('pricing.pagefont.times') }}</span>
                  <span style="float: right; color: var(--el-text-color-secondary); font-size: 13px; margin-left: 60px">
                    ${{ formatCash(itemTimes.price) }}
                  </span>
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="but_btn_new">
          <div v-if="user?.id">
            <div class="card_price_buy_btn card_price_buy_btn_mock common_btn_hover_bgColor" @click="buyMockTimes()">
              {{ $t('pricing.pagefont.Buy_Now') }}
              <div class="scroll-line"></div>
            </div>
          </div>
          <div v-else>
            <NuxtLink
              class="card_price_buy_btn card_price_buy_btn_mock common_btn_hover_bgColor"
              :to="localePath(`/login?url=/pricing`)"
            >
              {{ $t('pricing.pagefont.Buy_Now') }}
              <div class="scroll-line"></div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div v-if="!props.membershipArr.length" class="one_card_new">
        <el-skeleton :rows="6" animated />
      </div>
      <div v-if="props.membershipArr.length" class="mock_quanyi_list">
        <div v-for="item in state.mockQuanYiList" class="one_quanyi">
          <div class="icon">
            <img src="/img/pricing/black_check_icon.svg" :alt="$t('pricing.pagefont.bci')" />
          </div>
          <div class="font">{{ item.font }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.new_mb_price_out {
  // display: grid;
  // display: flex;
  // justify-content: space-between;
  // @media (max-width: 1277px) {
  //   flex-direction: column;
  // }
  display: grid;
  grid-template-columns: 2.8fr 1fr;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }

  // border: 1px red solid;
  grid-gap: 16px;
  .new_mb_price_left {
    border: 1px solid #e9e9e9;
    padding: 20px;
    flex-grow: 1;
    background: white;
    border-radius: 8px;
    .new_mb_price_left_top {
      grid-gap: 16px;
      display: flex;
      @media (max-width: 1100px) {
        flex-direction: column;
      }
      .no-load {
        background: #fff;
        display: block;
        border: 1px solid #e9e9e9;
        border-radius: 8px;
        padding: 20px;
        @media (max-width: 750px) {
          padding: 10px;
        }
      }
    }
    .new_mb_price_left_bottom {
      margin-top: 20px;
      .one_quanyi {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        grid-gap: 8px;
        margin-bottom: 8px;
        .icon {
          width: 12px;
          height: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .font {
          font-weight: 400;
          font-size: 14px;
          color: #403f3e;
        }
      }
    }
  }
  .new_mb_price_right {
    padding: 20px;
    background: white;
    border: 1px solid #e9e9e9;
    border-radius: 8px;
    .mock_quanyi_list {
      margin-top: 20px;
      .one_quanyi {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        grid-gap: 8px;
        margin-bottom: 8px;
        .icon {
          width: 12px;
          height: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .font {
          font-weight: 400;
          font-size: 14px;
          color: #403f3e;
        }
      }
    }
  }
}

.one_card_new {
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: 0.8fr 1fr 0.5fr;
    align-items: center;
  }
  @media (max-width: 728px) {
    display: unset;
  }
  padding: 24px 16px;
  background: rgba(250, 250, 250, 0.05);
  border-radius: 8px;
  border: 1px solid #e9e9e9;
  .title_out {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    grid-gap: 20px;
    .title {
      font-weight: 600;
      font-size: 20px;
      color: #333333;
    }
    .title_blue {
      color: #063156;
    }
    .save_tag {
      padding: 4px 10px;
      background: #edc295;
      border-radius: 16px;
      font-weight: 500;
      font-size: 14px;
      color: #4c2929;
    }
  }

  .price_out {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    grid-gap: 2px;
    margin-top: 8px;
    .do {
      font-weight: 600;
      font-size: 18px;
      color: #333333;
    }
    .price {
      font-weight: 600;
      font-size: 40px;
      color: #333333;
    }
    .price_blue {
      color: #063156;
    }
    .unit {
      font-weight: 600;
      font-size: 18px;
      color: #333333;
    }
  }
  .bill {
    margin-top: 12px;
    font-weight: 400;
    font-size: 14px;
    color: #4c2929;
    min-height: 44px;
  }
  .select_out_new {
    .select_out_new_font {
      font-weight: 400;
      font-size: 14px;
      color: #333333;
    }
    .sleect_out_wrapper {
      margin-top: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      grid-gap: 8px;
      .select_out {
        width: 136px;
        height: 32px;
        border-radius: 4px;
      }
      .select_font {
        font-weight: 400;
        font-size: 14px;
        color: rgba(51, 51, 51, 0.88);
      }
    }
  }
  .but_btn_new {
    .card_price_buy_btn {
      padding: 11px 0px;
      background: #f66442;
      border-radius: 4px;
      font-weight: 500;
      font-size: 16px;
      color: white;
      text-align: center;
      margin-top: 32px;
      position: relative;
      display: block;
      cursor: pointer;
      a {
        color: white;
      }
    }
    .card_price_buy_btn_mock {
      background: #ffe1bc;
      color: #3c5d86;
    }
  }
}
.one_card_new_365 {
  background: rgba(246, 100, 66, 0.05);
  .card_price_buy_btn {
    background: #4c2929 !important;
  }
}
/* 左右滚动效果 */
.scroll-line {
  width: 12px;
  height: 132%;
  transform: rotate(30deg);
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  z-index: 3;
  left: 0px;
  top: -16%;
  white-space: nowrap;
  animation-name: around;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes around {
  from {
    margin-left: 0;
  }

  to {
    margin-left: 100%;
  }
}
</style>
<style lang="scss"></style>
