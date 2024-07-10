<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
import { reactive } from 'vue';

// import subscribe from '@/components/subscribe.vue';
import { useStore } from '@/store';
const store = useStore();
const user = computed(() => store.user);
const localePath = useLocalePath();
const props = defineProps({
  membershipArr: Array,
  type1SelectBuyTimes: Array,
  mockSelectBuyTimes: Array,
}) as any;
console.log(props.membershipArr);

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
});

const buyMembership = (item: any) => {
  console.log(item);
};
const changebuyTimes = (item: any) => {
  console.log(item);
};
</script>
<template>
  <div class="new_mb_price_out">
    <div class="new_mb_price_left">
      <div class="new_mb_price_left_top">
        <div v-for="item in props.membershipArr" :key="item.id" class="one_card_new">
          <div>
            <div class="title">{{ item.tag }}</div>
            <div class="price_out">
              <div class="do">$</div>
              <div class="price">{{ item.price }}</div>
              <div class="unit">/week</div>
            </div>
            <div class="bill">Billed $ 107.94/year</div>
          </div>

          <div class="select_out_new">
            <div class="select_out_new_font">AI-powered Correction Service</div>
            <div class="sleect_out_wrapper">
              <div class="select_out">
                <el-select v-model="item.buyTimesid" placeholder="Select" @change="changebuyTimes(item)">
                  <el-option
                    v-for="itemTimes in props.type1SelectBuyTimes"
                    :key="itemTimes.id"
                    :label="`${itemTimes.correctNum} times`"
                    :value="itemTimes.id"
                  >
                    <span style="float: left">{{ itemTimes.correctNum }}times</span>
                    <span
                      style="float: right; color: var(--el-text-color-secondary); font-size: 13px; margin-left: 60px"
                    >
                      ${{ itemTimes.price }}
                    </span>
                  </el-option>
                </el-select>
              </div>
              <div class="select_font">/month</div>
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
      </div>
      <div class="new_mb_price_left_bottom">
        <div v-for="item in state.leftQuanYiList" :key="item.key" class="one_quanyi">
          <div class="icon"></div>
          <div class="font">{{ item.font }}</div>
        </div>
      </div>
    </div>
    <div class="new_mb_price_right">
      <div class="one_card_new">
        <div>
          <div class="title">MOCK Test</div>
          <div class="price_out">
            <div class="do">$</div>
            <div class="price">100</div>
            <div class="unit">/week</div>
          </div>
          <div class="bill">Billed $ 107.94/year</div>
        </div>

        <div class="select_out_new">
          <div class="select_out_new_font">AI-powered Correction Service</div>
          <div class="sleect_out_wrapper">
            <div class="select_out">
              <el-select v-model="mockBuyTimsId" placeholder="Select">
                <el-option
                  v-for="itemTimes in props.type1SelectBuyTimes"
                  :key="itemTimes.id"
                  :label="`${itemTimes.correctNum} times`"
                  :value="itemTimes.id"
                >
                  <span style="float: left">{{ itemTimes.correctNum }}times</span>
                  <span style="float: right; color: var(--el-text-color-secondary); font-size: 13px; margin-left: 60px">
                    ${{ itemTimes.price }}
                  </span>
                </el-option>
              </el-select>
            </div>
            <div class="select_font">/month</div>
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
      <div class="mock_quanyi_list">
        <div v-for="item in state.mockQuanYiList" class="one_qyuanyi">
          <div class="icon"></div>
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
          border: 1px red solid;
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
      .one_qyuanyi {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        grid-gap: 8px;
        margin-bottom: 8px;
        .icon {
          width: 12px;
          height: 10px;
          border: 1px red solid;
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
  @media (max-width: 608px) {
    display: unset;
  }
  padding: 24px 16px;
  background: rgba(250, 250, 250, 0.05);
  border-radius: 8px;
  border: 1px solid #e9e9e9;
  .title {
    font-weight: 600;
    font-size: 20px;
    color: #333333;
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
      a {
        color: white;
      }
    }
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
