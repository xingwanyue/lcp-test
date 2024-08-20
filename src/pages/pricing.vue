<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import vMembershipprice from '../components/membershipprice.vue';
import { staticUrlGet, domain, host, cdn } from '@/utils';
import { useStore } from '@/store';
useServerSeoMeta({
  title: t('pricing.seometa.title'),
  description: t('pricing.seometa.description'),
  keywords: t('pricing.seometa.keywords'),
});
useHead({
  link: [
    { rel: 'canonical', href: `https://www.${domain}/pricing` },
    { rel: 'alternate', href: `https://www.${domain}/pricing`, hreflang: 'en-GB' },
  ],
});

const circle_check_icon = `${cdn}/store/portal/pricing/circle_check_icon.svg`;
const store = useStore();
const user = computed(() => store.user);
const isVip = computed(() => store.isVip);
const localePath = useLocalePath();

const aqList = ref([
  {
    name: t('pricing.aqList[0].name'),
    content: t('pricing.aqList[0].content'),
    open: false,
  },
  {
    name: t('pricing.aqList[1].name'),
    content: t('pricing.aqList[1].content'),
    open: false,
  },
  // {
  //   name: t('pricing.aqList[2].name'),
  //   content: t('pricing.aqList[2].content'),
  //   open: false,
  // },
  {
    name: t('pricing.aqList[3].name'),
    content: t('pricing.aqList[3].content'),
    open: false,
  },
  {
    name: t('pricing.aqList[4].name'),
    content: t('pricing.aqList[4].content'),
    open: false,
  },
  {
    name: t('pricing.aqList[5].name'),
    content: t('pricing.aqList[5].content'),
    open: false,
  },
  {
    name: t('pricing.aqList[6].name'),
    content: `${t('pricing.aqList[6].content1')}`,
    open: false,
  },
]) as any;

const { data: vipsData } = (await useFetch(`${api}/common/vips`, {
  server: false,
  lazy: true,
  transform: ({ freeNum, correct, exam, speak, write, data: vips }: any) => {
    const membershipArr = [] as any;
    const moreServiceArr = [] as any;

    const correctSelectBuyTimes = vips.filter((item: any) => item.type === '3');
    const mockSelectBuyTimes = vips.filter((item: any) => item.type === '4');
    vips.forEach((item: any) => {
      if (item.type === '1') {
        item.correctTimesid = correctSelectBuyTimes[1].id;
        onlycorrectTimesid.value = correctSelectBuyTimes[1].id;
        onlycorrectTimesprice.value = correctSelectBuyTimes[1].price;
        item.correctPrice = correctSelectBuyTimes[1].price;
        item.correctOriginalPrice = correctSelectBuyTimes[1].originalPrice;
        membershipArr.push(item);
      } else if (item.type === '2') {
        moreServiceArr.push(item);
      }
    });
    return { membershipArr, moreServiceArr, correctSelectBuyTimes, mockSelectBuyTimes };
  },
})) as any;

const switchType = ref('1');
const changeSwitchType = (type: string) => {
  switchType.value = type;
};

const CurrentMembershipId = ref(0);
const changeCurrentMembershipId = (id: number) => {
  CurrentMembershipId.value = id;
};
const buyMembership = (item: any) => {
  const { id } = item;
  store.stripePay({ vipId: id });
};

const coursrBuyedVisible = ref(false);
const openCoursrBuyed = () => {
  coursrBuyedVisible.value = true;
};
const handleCloseCoursrBuyed = () => {
  coursrBuyedVisible.value = false;
};

const openOrCloseOneQuestion = (item: any) => {
  item.open = !item.open;
};

const contaceUsList = ref([
  {
    type: '1',
    icon: '/img/pricing/online.svg',
    font: t('pricing.contaceUsList.type1.font'),
    tip: t('pricing.contaceUsList.type1.tip'),
    btn: t('pricing.contaceUsList.type1.btn'),
  },
  {
    type: '2',
    icon: '/img/pricing/email.svg',
    font: t('pricing.contaceUsList.type2.font'),
    tip: t('pricing.contaceUsList.type2.tip'),
    btn: 'support@detpractice.com',
  },
  {
    type: '3',
    icon: '/img/pricing/message.svg',
    font: t('pricing.contaceUsList.type3.font'),
    tip: t('pricing.contaceUsList.type3.tip'),
    btn: t('pricing.contaceUsList.type3.btn'),
  },
]);
const membershipUnchanging = ref([
  {
    name: '1',
    desc: t('pricing.membershipUnchanging[0]'),
    tips: '',
  },
  {
    name: '2',
    desc: t('pricing.membershipUnchanging[1]'),
    tips: '',
  },
  {
    name: '3',
    desc: t('pricing.membershipUnchanging[2]'),
    tips: '',
  },
  {
    name: '4',
    desc: t('pricing.membershipUnchanging[3]'),
    tips: '',
  },
  {
    name: '5',
    desc: t('pricing.membershipUnchanging[4]'),
    tips: '',
  },
  {
    name: '6',
    desc: t('pricing.membershipUnchanging[5]'),
    tips: '',
  },
]) as any;

const copy = async (text: any) => {
  if (navigator.clipboard) {
    // 尝试使用 Clipboard API
    try {
      await navigator.clipboard.writeText(text);
      ElMessage.success('Copy successfully');
    } catch (err) {
      ElMessage.error('Failed to copy text: ' + err);
    }
  } else if (document.execCommand) {
    // 尝试使用 document.execCommand
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      // console.log('Text copied to clipboard');
      ElMessage.success('Copy successfully');
    } catch (err) {
      // console.error('Failed to copy text: ' + err);
      ElMessage.error('Failed to copy text: ' + err);
    } finally {
      document.body.removeChild(textarea);
    }
  } else {
    ElMessage.error('Your browser does not support copying text to clipboard.');
  }
};
const openchat = () => {
  (window as any).$crisp.push(['do', 'chat:open']);
};
const formateMinToHour = (min: number) => {
  const hour = Math.floor(min / 60);
  const minute = min % 60;
  if (hour === 0) {
    return `${minute}mins ago`;
  }
  return `${hour}h ${minute}mins ago`;
};

const correctServiceQuanYi = ref([
  {
    name: '1',
    desc: t('pricing.correctServiceQuanYi[0]'),
    tips: '',
  },
  {
    name: '2',
    desc: t('pricing.correctServiceQuanYi[1]'),
    tips: '',
  },
  {
    name: '3',
    desc: t('pricing.correctServiceQuanYi[2]'),
    tips: '',
  },
  {
    name: '4',
    desc: t('pricing.correctServiceQuanYi[3]'),
    tips: '',
  },
  {
    name: '5',
    desc: t('pricing.correctServiceQuanYi[4]'),
    tips: '',
  },
]);

const onlycorrectTimesid = ref(0);
const onlycorrectTimesprice = ref(0);
const buyCorrectNum = () => {
  store.stripePay({ vipId: onlycorrectTimesid.value });
};
const changeBuyCorrectTimes = () => {
  const correctTimes = vipsData.value.correctSelectBuyTimes.find((item: any) => item.id === onlycorrectTimesid.value);
  onlycorrectTimesprice.value = correctTimes.price;
};
</script>
<template>
  <div class="pricing">
    <div class="part1_wrapper">
      <div class="part1">
        <div class="title1">
          <h1>{{ $t('pricing.pagefont.h1') }}</h1>
        </div>
        <!-- <div class="title2">
          <h4>{{ $t('pricing.pagefont.h4') }}</h4>
        </div> -->
        <div class="switch_out">
          <div @click="changeSwitchType('1')" :class="[switchType === '1' ? 'switch_btn yellow ' : 'switch_btn']">
            {{ $t('pricing.pagefont.switch1') }}
          </div>
          <div @click="changeSwitchType('2')" :class="[switchType === '2' ? 'switch_btn yellow ' : 'switch_btn']">
            {{ $t('pricing.pagefont.switch2') }}
          </div>
        </div>
        <div class="three_out_new">
          <div class="one">
            <div class="one_icon"><img :src="circle_check_icon" :alt="$t('pricing.pagefont.circle_check_icon')" /></div>
            <div class="one_font">{{ $t('pricing.pagefont.sep') }}</div>
          </div>
          <div class="one">
            <div class="one_icon"><img :src="circle_check_icon" :alt="$t('pricing.pagefont.circle_check_icon')" /></div>
            <div class="one_font">{{ $t('pricing.pagefont.ca') }}</div>
          </div>
          <div class="one">
            <div class="one_icon"><img :src="circle_check_icon" :alt="$t('pricing.pagefont.circle_check_icon')" /></div>
            <div class="one_font">{{ $t('pricing.pagefont.atde') }}</div>
          </div>
        </div>
        <div v-if="!user.id" class="free_white_dom">
          <div class="free_white_dom_left">
            <div class="free_font">{{ $t('pricing.pagefont.free_font') }}</div>
            <div class="free_tips">
              {{ $t('pricing.pagefont.free_tips') }}
            </div>
          </div>
          <div class="free_white_dom_right">
            <NuxtLink class="try_btn" :to="localePath(`/login?url=${encodeURIComponent(host)}`)">{{
              $t('pricing.pagefont.tff')
            }}</NuxtLink>
          </div>
        </div>
        <div v-show="switchType === '1'" class="Membership_dom">
          <v-membershipprice
            :membershipArr="vipsData?.membershipArr || []"
            :correctSelectBuyTimes="vipsData?.correctSelectBuyTimes || []"
            :mockSelectBuyTimes="vipsData?.mockSelectBuyTimes || []"
          ></v-membershipprice>
        </div>
        <div v-show="switchType === '2'" class="Service_dom">
          <!-- 固定一个批改购买 -->
          <div class="one_price">
            <div class="title">{{ $t('pricing.pagefont.mpc') }}</div>
            <div class="card_price">
              <div class="card_price_part1">Correction Services</div>
              <div class="card_price_part2">Can be used for writing and speaking during your membership</div>
              <div class="card_price_part4 min_heighthack">
                <div class="your_price">{{ $t('pricing.pagefont.your_price') }}</div>
                <div class="off_price">
                  <span class="small">{{ $t('pricing.pagefont.do') }}</span
                  >{{ (onlycorrectTimesprice / 100).toFixed(2) }}
                </div>
                <div class="no_member_font"></div>
              </div>
              <div class="card_price_part3" style="padding-bottom: 1px">
                <div class="select_out_new">
                  <div class="select_out_new_font">{{ $t('pricing.pagefont.apcs1') }}</div>
                  <div class="sleect_out_wrapper">
                    <div class="select_out">
                      <el-select v-model="onlycorrectTimesid" placeholder="Select" @change="changeBuyCorrectTimes()">
                        <el-option
                          v-for="itemTimes in vipsData?.correctSelectBuyTimes?.filter((item) => item.price !== 0) || []"
                          :key="itemTimes.id"
                          :label="`${itemTimes.correctNum} ${$t('pricing.pagefont.times')}`"
                          :value="itemTimes.id"
                        >
                          <span style="float: left">{{ itemTimes.correctNum }} {{ $t('pricing.pagefont.times') }}</span>
                          <span style="float: right; font-size: 13px; margin-left: 60px">
                            {{ $t('pricing.pagefont.do') }}{{ (itemTimes.price / 100).toFixed(2) }}
                          </span>
                        </el-option>
                      </el-select>
                    </div>
                    <!-- <div class="select_font">
                      <template v-if="item.day === 7"> {{ $t('pricing.pagefont.week') }}</template>
                      <template v-else>{{ $t('pricing.pagefont.month') }}</template>
                    </div> -->
                  </div>
                </div>
              </div>
              <!-- 11 -->
              <div v-if="user.id">
                <div class="card_price_buy_btn common_btn_hover_bgColor" @click="buyCorrectNum()">
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
              <div class="correct_service_quanyi">
                <div v-for="item in correctServiceQuanYi" class="one_quanyi">
                  <div class="icon">
                    <img src="/img/pricing/black_check_icon.svg" :alt="$t('pricing.pagefont.bci')" />
                  </div>
                  <div class="font" v-html="item.desc"></div>
                </div>
              </div>
              <!-- 55 -->
            </div>
          </div>
          <div
            v-for="(item, index) in vipsData?.moreServiceArr || []"
            :key="index"
            :class="[item.id === CurrentMembershipId ? 'one_price' : 'one_price ']"
            @click="changeCurrentMembershipId(item.id)"
          >
            <div class="title">{{ $t('pricing.pagefont.mpc') }}</div>
            <div class="card_price">
              <div class="card_price_part1">{{ item.tag }}</div>
              <div class="card_price_part2">
                {{ item.description }}
              </div>

              <div :class="[!isVip ? 'card_price_part4 min_heighthack' : 'card_price_part4 min_heighthack2']">
                <div v-if="!isVip && item.day !== 7" class="your_price">{{ $t('pricing.pagefont.your_price') }}</div>
                <div class="off_price">
                  <span class="small">{{ $t('pricing.pagefont.do') }}</span
                  >{{ (item.price / 100).toFixed(2) }}
                </div>
                <!-- <div class="old_price">${{ (item.originalPrice / 100).toFixed(2) }}</div> -->
                <div class="no_member_font" v-if="item.day !== 7">{{ $t('pricing.pagefont.Non_member') }}</div>
              </div>
              <div class="card_price_part3">
                <div class="your_price" v-if="isVip && item.day !== 7">
                  <span>{{ $t('pricing.pagefont.your_price') }}</span>
                </div>
                <div class="member_price">
                  <span v-if="item.vipPrice !== item.price"
                    ><span class="small">{{ $t('pricing.pagefont.do') }}</span
                    >{{ (item.vipPrice / 100).toFixed(2) }}
                  </span>
                </div>
                <div class="member_font">
                  <span v-if="item.vipPrice !== item.price">
                    {{ $t('pricing.pagefont.mp') }}
                  </span>
                </div>
              </div>

              <div v-if="user.id">
                <template v-if="item.write === 1">
                  <template v-if="user.write">
                    <div class="card_price_buy_btn card_price_buy_btn_dis" @click="openCoursrBuyed()">
                      {{ $t('pricing.pagefont.Buy_Now') }}
                      <!-- <div class="scroll-line"></div> -->
                    </div>
                  </template>
                  <template v-else>
                    <div class="card_price_buy_btn common_btn_hover_bgColor" @click="buyMembership(item)">
                      {{ $t('pricing.pagefont.Buy_Now') }}
                      <div class="scroll-line"></div>
                    </div>
                  </template>
                </template>
                <template v-if="item.speak === 1">
                  <template v-if="user.speak">
                    <div class="card_price_buy_btn card_price_buy_btn_dis" @click="openCoursrBuyed()">
                      {{ $t('pricing.pagefont.Buy_Now') }}
                      <!-- <div class="scroll-line"></div> -->
                    </div>
                  </template>
                  <template v-else>
                    <div class="card_price_buy_btn common_btn_hover_bgColor" @click="buyMembership(item)">
                      {{ $t('pricing.pagefont.Buy_Now') }}
                      <div class="scroll-line"></div>
                    </div>
                  </template>
                </template>
                <template v-if="item.speak !== 1 && item.write !== 1">
                  <div class="card_price_buy_btn common_btn_hover_bgColor" @click="buyMembership(item)">
                    {{ $t('pricing.pagefont.Buy_Now') }}
                    <div class="scroll-line"></div>
                  </div>
                </template>
              </div>
              <div v-else>
                <NuxtLink class="card_price_buy_btn common_btn_hover_bgColor" :to="localePath(`/login?url=/pricing`)">
                  {{ $t('pricing.pagefont.Buy_Now') }}
                  <div class="scroll-line"></div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div v-if="!vipsData?.moreServiceArr" class="no-load">
            <el-skeleton :rows="9" animated />
          </div>
          <div v-if="!vipsData?.moreServiceArr" class="no-load">
            <el-skeleton :rows="9" animated />
          </div>
          <div v-if="!vipsData?.moreServiceArr" class="no-load">
            <el-skeleton :rows="9" animated />
          </div>
        </div>

        <div class="bank_card">
          <div class="title">{{ $t('pricing.pagefont.Secure_Payment') }}</div>
          <div class="img_self">
            <img src="/img/pricing/payment.png" :alt="$t('pricing.pagefont.Secure_Payment')" />
          </div>
        </div>
      </div>
    </div>
    <div class="part2_wrapper">
      <div class="part2">
        <div class="title">{{ $t('pricing.pagefont.faq') }}</div>
        <div class="list_out">
          <div
            v-for="(item, index) in aqList"
            :key="index"
            :class="[item.open ? 'one_question one_question_open' : 'one_question']"
          >
            <div class="header" @click="openOrCloseOneQuestion(item)">
              <div class="icon">
                <img src="/img/pricing/arrow_down.svg" :alt="$t('pricing.pagefont.arrow_down')" />
              </div>
              <div class="qusetion">{{ item.name }}</div>
            </div>
            <div v-if="item.open" class="answer">
              <div class="answer_content" v-html="item.content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part3_wrapper">
      <div class="part3">
        <div class="title">{{ $t('pricing.pagefont.Contact_Us') }}</div>
        <div class="three_out">
          <div v-for="(item, index) in contaceUsList" :key="index" class="one_card">
            <div class="icon">
              <img :src="`${item.icon}`" :alt="$t('pricing.pagefont.alt')" />
            </div>
            <div class="method_font">{{ item.font }}</div>
            <div class="method_tip">{{ item.tip }}</div>
            <div v-if="item.type === '1'" class="btn" @click="openchat">
              {{ item.btn }}
            </div>
            <div v-if="item.type === '2'" class="btn" @click="copy(item.btn)">
              {{ item.btn }}
            </div>
            <NuxtLink v-if="item.type === '3'" class="btn" :to="localePath(`/contact-us`)">
              <div>{{ item.btn }}</div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="Purchase courses"
      v-model="coursrBuyedVisible"
      :before-close="handleCloseCoursrBuyed"
      class="pay_result_dialog"
    >
      <span class="no_wrap"
        >You have successfully purchased the course, you only need to purchase it once, please visit
        <span class="yellow">https://www.detpractice.com/courses</span> to view and download your course information.
      </span>
      <template #footer>
        <div class="footer_wrapp"><div class="close_btn" @click="handleCloseCoursrBuyed">I get it</div></div>
      </template>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
.pricing {
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
}
</style>
<style lang="scss" scoped>
.pricing {
  min-height: 100vh;
  background: linear-gradient(to bottom, #fff4f1 0%, #fff4f1 604px, #ffffff 604px);

  .part1_wrapper {
    padding: 0px 30px;
    @media screen and (max-width: 450px) {
      padding: 0px 15px;
    }
    .part1 {
      max-width: 1200px;
      margin: 0 auto;
      // overflow-x: hidden;
      // overflow-y: auto;

      .title1 {
        overflow: hidden;
        h1 {
          font-weight: 600;
          font-size: 56px;
          color: #201515;
          text-align: center;
          padding: 0px 0px;
          margin: 0px 0px 0px 0px;
          margin-top: 56px;

          @media (max-width: 450px) {
            font-size: 24px;
          }
        }
      }

      .title2 {
        h4 {
          font-weight: 500;
          font-size: 24px;
          color: #201515;
          text-align: center;
          margin: 0px 0px 0px 0px;
          margin-top: 32px;

          @media (max-width: 450px) {
            font-size: 16px;
          }
        }
      }

      .switch_out {
        background: #ffffff;
        border-radius: 22px;
        margin: 0 auto;
        // border: 1px red solid;
        width: fit-content;
        margin-top: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        grid-gap: 16px;
        padding: 4px;

        .switch_btn {
          padding: 8px 32px;
          font-weight: 500;
          font-size: 16px;
          color: #ffffff;
          border-radius: 22px;
          color: #484848;
          cursor: pointer;
          @media (max-width: 450px) {
            font-size: 14px;
          }
        }

        .yellow {
          background: #f66442;
          color: #ffffff;
        }
      }
      .three_out_new {
        margin-top: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
        grid-gap: 56px;
        flex-wrap: wrap;
        @media (max-width: 800px) {
          grid-gap: 16px;
        }

        .one {
          display: flex;
          justify-content: center;
          align-items: center;
          grid-gap: 8px;
          .one_icon {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .one_font {
            font-weight: 400;
            font-size: 16px;
            color: #403f3e;
          }
        }
      }
      .free_white_dom {
        border: 1px red solid;
        background: white;
        padding: 16px 24px;
        border-radius: 8px;
        border: 1px solid #e9e9e9;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-top: 32px;
        grid-gap: 12px;

        .free_white_dom_left {
          .free_font {
            font-weight: 600;
            font-size: 20px;
            color: #333333;
          }
          .free_tips {
            font-weight: 400;
            font-size: 14px;
            color: #403f3e;
            margin-top: 4px;
          }
        }
        .free_white_dom_right {
          @media (max-width: 450px) {
            flex-grow: 1;
          }

          .try_btn {
            padding: 11px;
            text-align: center;
            border-radius: 4px;
            border: 1px solid #201515;
            font-weight: 500;
            font-size: 16px;
            color: #201515;

            display: block;
            cursor: pointer;
            &:hover {
              border: 2px solid #201515;
              padding: 10px;
            }
          }
        }
      }

      .Membership_dom {
        margin-top: 16px;
        // display: grid;
        // grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
        // grid-gap: 16px;
        @media (max-width: 450px) {
          margin-top: 20px;
        }

        .one_price {
          border-radius: 8px;
          display: grid;
          cursor: pointer;

          .card_price {
            padding: 20px;
            background: #ffffff;
            border-radius: 8px;
            border: 1px solid #e9e9e9;
            .card_in_card {
              padding: 24px 16px;
              background: rgba(250, 250, 250, 0.05);
              border-radius: 8px;
              border: 1px solid #e9e9e9;
              .card_price_part1 {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .day {
                  font-weight: 600;
                  font-size: 24px;
                  color: #4c2929;
                  @media (max-width: 450px) {
                    font-size: 18px;
                  }
                }

                .off {
                  padding: 4px 10px;
                  background: #edc295;
                  border-radius: 16px;
                  font-weight: 500;
                  font-size: 14px;
                  color: #fff;
                }
                .off1 {
                  color: #4c2929;
                }
              }

              .card_price_part2 {
                display: none;
                font-weight: 400;
                font-size: 14px;
                color: #403f3e;
                margin-top: 11px;
                min-height: 61px;
                // border: 1px red solid;
              }

              .card_price_part3 {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-top: 24px;
                grid-gap: 8px;

                .big_price {
                  font-weight: 600;
                  font-size: 40px;
                  color: #4c2929;
                  @media (max-width: 450px) {
                    font-size: 40px;
                  }
                  .symbol {
                    font-size: 20px;
                    @media (max-width: 450px) {
                      font-size: 16px;
                    }
                  }
                }

                .small_price {
                  font-weight: 400;
                  font-size: 14px;
                  color: #403f3e;
                  position: relative;
                  top: 10px;
                  text-decoration: line-through;
                }
              }
              .card_price_part4 {
                .tip_font {
                  font-weight: 400;
                  font-size: 14px;
                  color: #333333;
                  margin-bottom: 10px;
                }

                .sleect_out_wrapper {
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
              .card_price_buy_btn {
                padding: 11px 0px;
                background: #f66442;
                border-radius: 4px;
                font-weight: 500;
                font-size: 16px;
                color: white;
                text-align: center;
                margin-top: 16px;
                position: relative;
                display: block;
                a {
                  color: white;
                }
              }
              .card_price_buy_btn1 {
                color: #4c2929 !important;
                background: #edc295;

                &:hover {
                  background: #d0aa83 !important;
                }
              }
              .try_free {
                background: white;
                border: 1px solid #201515;
                font-size: 16px;
                color: #201515;
                display: block;
                a {
                  color: #4c2929;
                }
                &:hover {
                  padding: 10px 0px;
                  background: white;
                  border: 2px solid #201515;
                }
              }
            }

            .card_price_qllist {
              margin-top: 40px;
              display: flex;
              flex-direction: column;
              grid-gap: 16px;

              .one_ql {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                grid-gap: 8px;

                .icon {
                  width: 12px;
                  height: 10px;
                  display: flex;
                }

                .font {
                  // font-weight: 500;
                  font-size: 14px;
                  color: #403f3e;
                  :deep(.bigger) {
                    color: #201515;
                    font-weight: 600;
                  }
                }

                .tips {
                  width: 12px;
                  height: 12px;
                  display: flex;
                }
              }
            }
          }
        }
        .box_shadow {
          &:hover {
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.08);
          }
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

      .Service_dom {
        margin-top: 16px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
        grid-gap: 16px;
        // border: 1px red solid;
        // padding: 0px 30px;

        .one_price {
          border-radius: 8px;
          display: grid;
          cursor: pointer;

          .title {
            display: none;
            font-weight: 600;
            font-size: 16px;
            color: #ffffff;
            text-align: center;
            flex: 1;
            padding: 9px 0px;
          }

          .card_price {
            padding: 20px;
            background: #ffffff;
            border-radius: 8px;
            border: 1px solid #e9e9e9;
            &:hover {
              box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.08);
            }

            .card_price_part1 {
              font-weight: 600;
              font-size: 24px;
              color: #201515;
              // border: 1px red solid;
              min-height: 26px;
            }

            .card_price_part2 {
              font-weight: 400;
              font-size: 14px;
              color: #403f3e;
              margin-top: 11px;
              min-height: 68px;
            }

            .card_price_part3 {
              // height: 84px;
              margin-top: 16px;
              // border: 1px red solid;
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
                    width: 100%;
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
              .member_price {
                font-weight: 600;
                font-size: 32px;
                color: #f66442;
                // margin-top: 24px;
                .small {
                  font-size: 20px;
                }
              }

              .member_font {
                font-weight: 400;
                font-size: 14px;
                color: #f66442;
              }
            }

            .card_price_part4 {
              min-height: 92px;
              // border: 1px blue solid;
              .off_price {
                font-weight: 600;
                font-size: 32px;
                color: #201515;
                .small {
                  font-size: 20px;
                }
              }

              .old_price {
                font-weight: 400;
                font-size: 14px;
                color: #403f3e;
                text-decoration: line-through;
              }
              .no_member_font {
                font-weight: 400;
                font-size: 14px;
                color: #403f3e;
              }
            }
            .min_heighthack {
              min-height: 92px;
            }
            .min_heighthack2 {
              min-height: 62px;
            }
            .your_price {
              width: 80px;
              font-weight: 400;
              font-size: 12px;
              color: #f66442;
              padding: 4px 8px;
              background: rgba(246, 100, 66, 0.1);
              border-radius: 12px;
              text-align: center;
              margin-bottom: 6px;
            }

            .card_price_buy_btn {
              padding: 11px 0px;
              background: #f66442;
              border-radius: 4px;
              font-weight: 500;
              font-size: 16px;
              text-align: center;
              margin-top: 16px;
              position: relative;
              color: white;
              display: block;
              &:hover {
                opacity: 0.9;
              }
              a {
                color: white;
              }
            }
            .card_price_buy_btn_dis {
              opacity: 0.5;
              &:hover {
                opacity: 0.5;
              }
            }

            .correct_service_quanyi {
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
                  flex-shrink: 0;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                .font {
                  font-weight: 400;
                  font-size: 14px;
                  color: #403f3e;
                  ::v-deep(.strongfont) {
                    font-weight: 650;
                  }
                }
              }
            }
          }
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

      .scroll_buyed_wrapper {
        height: 46px;
        margin-top: 32px;
        height: fit-content;
        padding: 10px 20px;
        background: #fff4f1;
        border-radius: 8px;

        .scroll_buyed {
          padding: 0px 0px;
          background: #fff4f1;

          // width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;

          // overflow: hidden;
          @media (max-width: 846px) {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 8px;
          }

          .scroll_buyed_left {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .icon {
              width: 20px;
              height: 20px;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .name {
              font-weight: 400;
              font-size: 16px;
              color: #201515;
              margin-left: 12px;
              @media (max-width: 528px) {
                font-size: 12px;
              }
            }

            .type {
              font-weight: 400;
              font-size: 16px;
              color: #201515;
              margin-left: 12px;
              @media (max-width: 528px) {
                font-size: 12px;
              }
            }

            .days {
              font-weight: 400;
              font-size: 16px;
              color: #f66442;
              margin-left: 12px;
              @media (max-width: 528px) {
                font-size: 12px;
              }
            }
          }
          .scroll_buyed_mid {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            grid-gap: 16px;
            flex: 1;
            .flag {
              width: 36px;
              height: 24px;
              margin-left: 40px;
              position: relative;

              @media (max-width: 846px) {
                margin-left: 0px;
              }

              // top: 2px;
              @media (max-width: 528px) {
                width: 24px;
                height: 16px;
              }

              img {
                width: 100%;
                height: 100%;
              }
            }

            .country_name {
              font-weight: 400;
              font-size: 16px;
              color: #201515;
              flex: 1;
              text-align: left;
              @media (max-width: 528px) {
                font-size: 12px;
              }
            }
            .time {
              font-weight: 400;
              font-size: 16px;
              color: #201515;
              @media (max-width: 528px) {
                font-size: 12px;
              }
            }
          }
        }
      }

      .bank_card {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 32px;
        grid-gap: 6px;
        flex-wrap: wrap;

        .title {
          font-weight: 400;
          font-size: 14px;
          color: #403f3e;
        }

        .img_self {
          max-width: 422px;

          // border: 1px red solid;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }

  .part2_wrapper {
    padding: 0px 30px;
    @media screen and (max-width: 450px) {
      padding: 0px 15px;
    }
    margin-top: 60px;
    @media (max-width: 450px) {
      margin-top: 30px;
    }

    .part2 {
      max-width: 1200px;
      margin: 0 auto;
      // overflow: hidden;

      .title {
        font-weight: 500;
        font-size: 40px;
        color: #201515;
        text-align: center;

        @media (max-width: 450px) {
          font-size: 20px;
        }
      }

      .list_out {
        // border: 1px red solid;
        margin-top: 56px;

        .one_question {
          padding: 18px 24px;
          background: #f2f4f6;
          border-radius: 8px;

          margin-bottom: 8px;

          .header {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            grid-gap: 24px;
            cursor: pointer;

            .icon {
              width: 16px;
              height: 16px;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .qusetion {
              font-weight: 500;
              font-size: 20px;
              color: #201515;

              @media (max-width: 662px) {
                font-size: 16px;
              }
            }
          }

          .answer {
            font-weight: 400;
            font-size: 18px;
            color: #201515;
            margin-top: 24px;
            padding-left: 44px;
            :deep(.email_address) {
              color: #f66442;
              text-decoration: underline;
            }

            @media (max-width: 662px) {
              font-size: 16px;
            }
            .answer_content {
              line-height: 26px;
            }
          }
        }

        .one_question_open {
          background: #ffffff;
          border: 1px solid #e9e9e9;
          box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);

          .header {
            .icon {
              transform: rotate(180deg);
            }
          }
        }
      }
    }
  }

  .part3_wrapper {
    // border: 1px red solid;
    padding: 0px 30px;
    @media screen and (max-width: 450px) {
      padding: 0px 15px;
    }
    background: #fff4f1;
    margin-top: 100px;
    @media (max-width: 450px) {
      margin-top: 50px;
    }

    .part3 {
      padding: 100px 0;
      @media (max-width: 450px) {
        padding: 50px 0;
      }
      max-width: 1200px;
      margin: 0 auto;

      .title {
        font-weight: 500;
        font-size: 40px;
        color: #201515;
        text-align: center;
        margin-bottom: 64px;
        @media (max-width: 450px) {
          margin-bottom: 32px;
        }
      }

      .three_out {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 24px;

        .one_card {
          padding: 32px 20px;
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid #f0e8e8;

          .icon {
            width: 56px;
            height: 56px;
            margin: 0 auto;
          }

          .method_font {
            font-weight: 600;
            font-size: 24px;
            color: #201515;
            margin-top: 16px;
            text-align: center;
          }

          .method_tip {
            font-weight: 400;
            font-size: 14px;
            color: #403f3e;
            margin-top: 8px;
            text-align: center;
          }

          .btn {
            padding: 11px;
            text-align: center;
            border-radius: 4px;
            border: 1px solid #201515;
            font-weight: 500;
            font-size: 16px;
            color: #201515;
            margin-top: 24px;
            display: block;
            cursor: pointer;
            &:hover {
              border: 2px solid #201515;
              padding: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.el-button--primary {
  background: #f66442 !important;
  border-color: #f66442 !important;
}
.el-message-box__content {
  margin-top: 10px;
}
.pay_result_dialog {
  width: 500px;
  @media screen and (max-width: 524px) {
    width: 360px;
  }

  .no_wrap {
    word-break: normal;
    line-height: 1.2;
    .yellow {
      color: #f66442;
    }
  }
  .footer_wrapp {
    display: flex;
    justify-content: flex-end;
  }
  .close_btn {
    color: red;
    padding: 10px 14px;
    background: #f66442;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    width: fit-content;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
