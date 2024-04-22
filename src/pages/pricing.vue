<script setup lang="ts">
import { staticUrlGet } from "@/utils";
import { useStore } from "@/store";
const store = useStore();
const user = computed(() => store.user);
const isVip = computed(() => store.isVip);
const localePath = useLocalePath();
const { data: buyData = [] } = (await useFetch(`${api}/common/portalData?type=2`, {
  server: false,
  transform: (data: any) => {
    return data.map((d: any) => ({
      ...d,
      data: JSON.parse(d.data),
    }));
  },
})) as any;

const aqList = ref([]) as any;
const { data: aqlistjk } = (await useFetch(`${api}/common/article`, {
  server: true,
  query: {
    type: "3",
  },
})) as any;
aqList.value = aqlistjk.value.data;

const { data: vipsData } = (await useFetch(`${api}/common/vips`, {
  server: true,
  transform: ({ freeNum, correct, exam, speak, write, data: vips }: any) => {
    const membershipArr = [] as any;
    const moreServiceArr = [] as any;
    vips.forEach((item: any) => {
      if (item.type === "1") {
        if (item.day === 0) {
          item.qlList = [
            { name: 1, desc: `${freeNum}Free Practices / day`, tips: "" },
            {
              name: 2,
              desc: `$${correct.price / 100} / 5 Correction Services`,
              tips: "",
            },
            { name: 3, desc: `$${exam.price / 100} / 1 Mock Exam`, tips: "" },
            {
              name: 4,
              desc: `$${speak.price / 100} / Speaking Guide`,
              tips: "",
              style: "font-weight: 500;",
            },
            {
              name: 5,
              desc: `$${write.price / 100} / Writing Guide`,
              tips: "",
              style: "font-weight: 500;",
            },
          ];
        }
        if (item.day === 7) {
          item.qlList = [
            {
              name: 1,
              desc: `Unlimited for Practice Sessions`,
              tips: "",
              style: "font-weight: 500;",
            },
            {
              name: 2,
              desc: `${item.correctNum} Correction Services`,
              style: "font-weight: 500;",
              tips: "for speaking and writing",
            },
            {
              name: 3,
              desc: `$${correct.vipPrice / 100} / 5 Correction Services`,
              style: "font-weight: 500;",
              tips: "Exclusive Discount",
            },
            { name: 4, desc: `${item.examNum} Mock Exam`, tips: "" },
            { name: 5, desc: `$${exam.vipPrice / 100} / 1 Mock Exam`, tips: "" },
            {
              name: 6,
              desc: `$${speak.vipPrice / 100} / Speaking Guide`,
              tips: "",
              style: "font-weight: 500;",
            },
            {
              name: 7,
              desc: `$${write.vipPrice / 100} / Writing Guide`,
              tips: "",
              style: "font-weight: 500;",
            },
          ];
        }
        if (item.day === 15) {
          item.qlList = [
            { name: 1, desc: `Unlimited for Practice Sessions`, tips: "" },
            {
              name: 2,
              desc: `${item.correctNum} Correction Services`,
              style: "font-weight: 500;",
              tips: "for speaking and writing",
            },
            {
              name: 3,
              desc: `$${correct.vipPrice / 100} / 5 Correction Services`,
              style: "font-weight: 500;",
              tips: "Exclusive Discount",
            },
            { name: 4, desc: `${item.examNum} Mock Exam`, tips: "" },
            { name: 5, desc: `$${exam.vipPrice / 100} / 1 Mock Exam`, tips: "" },
            {
              name: 6,
              desc: `$${speak.vipPrice / 100} / Speaking Guide`,
              tips: "",
              style: "font-weight: 500;",
            },
            {
              name: 7,
              desc: `$${write.vipPrice / 100} / Writing Guide`,
              tips: "",
              style: "font-weight: 500;",
            },
          ];
        }
        if (item.day === 30) {
          item.qlList = [
            {
              name: 1,
              desc: `Unlimited for Practice Sessions`,
              tips: "",
              style: "font-weight: 500;",
            },
            {
              name: 2,
              desc: `${item.correctNum} Correction Services`,
              style: "font-weight: 500;",
              tips: "for speaking and writing",
            },
            {
              name: 3,
              desc: `$${correct.vipPrice / 100} / 5 Correction Services`,
              style: "font-weight: 500;",
              tips: "Exclusive Discount",
            },
            { name: 4, desc: `${item.examNum} Mock Exam`, tips: "" },
            { name: 5, desc: `$${exam.vipPrice / 100} / 1 Mock Exam`, tips: "" },
            {
              name: 6,
              desc: `$${speak.vipPrice / 100} / Speaking Guide`,
              tips: "",
              style: "font-weight: 500;",
            },
            {
              name: 7,
              desc: `$${write.vipPrice / 100} / Writing Guide`,
              tips: "",
              style: "font-weight: 500;",
            },
          ];
        }
        membershipArr.push(item);
      } else {
        moreServiceArr.push(item);
      }
    });
    return { membershipArr, moreServiceArr };
  },
})) as any;

const switchType = ref("1");
const changeSwitchType = (type: string) => {
  switchType.value = type;
};

const CurrentMembershipId = ref(0);
const changeCurrentMembershipId = (id: number) => {
  CurrentMembershipId.value = id;
};
const buyMembership = (id: number) => {
  store.stripePay({ vipId: id });
};

const openOrCloseOneQuestion = (item: any) => {
  item.open = !item.open;
};

const contaceUsList = ref([
  {
    type: "1",
    icon: "/img/pricing/online.svg",
    font: "Online Customer Service",
    tip: "Online hours: Monday to Friday, 10:00 - 19:00.",
    btn: "Initiate a conversation",
  },
  {
    type: "2",
    icon: "/img/pricing/email.svg",
    font: "Consultation Email",
    tip: "We will respond to you within one business day.",
    btn: "info@aitogether.uk",
  },
  {
    type: "3",
    icon: "/img/pricing/message.svg",
    font: "Leave a message",
    tip: "We will respond to you within one business day.",
    btn: "Leave a message now",
  },
]);
const membershipUnchanging = ref([
  {
    name: "1",
    desc: "View all practice questions",
    tips: "",
  },
  {
    name: "2",
    desc: "High-scoring Answers",
    tips: "",
  },
  {
    name: "3",
    desc: "Question Analysis",
    tips: "",
  },
  {
    name: "4",
    desc: "Vocabulary Book",
    tips: "high-frequency vocabulary in the exam",
  },
  {
    name: "5",
    desc: "Intelligent question brushing plan",
    tips: "",
  },
  {
    name: "6",
    desc: "Read aloud AI ratings",
    tips: "",
  },
]) as any;

const copy = async (email: any) => {
  await navigator.clipboard.writeText(`${email}`);
  // element3提示成功
  ElMessage.success("Copy successfully");
};
const openchat = () => {
  (window as any).$crisp.push(["do", "chat:open"]);
};
</script>
<template>
  <div class="pricing">
    <div class="part1_wrapper">
      <div class="part1">
        <div class="title1">
          <h1>Plans & Pricing{{ Boolean(isVip) }}</h1>
        </div>
        <div class="title2">
          <h4>
            In the future, there may be a certain increase in prices. lf necessary,<br />
            please make a timely purchase.
          </h4>
        </div>
        <div class="switch_out">
          <div
            @click="changeSwitchType('1')"
            :class="[
              switchType === '1'
                ? 'switch_btn yellow common_btn_hover_bgColor'
                : 'switch_btn',
            ]"
          >
            Membership
          </div>
          <div
            @click="changeSwitchType('2')"
            :class="[
              switchType === '2'
                ? 'switch_btn yellow common_btn_hover_bgColor'
                : 'switch_btn',
            ]"
          >
            More Service
          </div>
        </div>
        <div v-if="switchType === '1'" class="Membership_dom">
          <div
            v-for="(item, index) in vipsData.membershipArr"
            :key="index"
            :class="[
              item.id === CurrentMembershipId
                ? 'one_price '
                : 'one_price currentMembership_no',
            ]"
            @click="changeCurrentMembershipId(item.id)"
          >
            <div class="title">Most Popular Choice</div>
            <div class="card_price" :style="item.id === CurrentMembershipId ? '' : ''">
              <div class="card_price_part1">
                <div class="day">{{ item.tag }}</div>
                <div v-if="Number(item.originalPrice)" class="off">
                  <span>
                    {{
                      ((Number(item.price) / Number(item.originalPrice)) * 100).toFixed(
                        0
                      )
                    }}% off</span
                  >
                </div>
              </div>
              <div class="card_price_part2">{{ item.description }}</div>
              <div class="card_price_part3">
                <div v-if="isVip" class="big_price">${{ item.vipPrice / 100 }}</div>
                <div v-else class="big_price">${{ item.price / 100 }}</div>
                <div class="small_price">
                  ${{ (item.originalPrice / 100).toFixed(2) }}
                </div>
              </div>
              <div v-if="user.id">
                <div
                  v-if="item.day !== 0"
                  :class="[
                    'card_price_buy_btn',
                    item.id === CurrentMembershipId && 'card_price_buy_btn1',
                  ]"
                  @click="buyMembership(item.id)"
                >
                  Buy Now
                  <div class="scroll-line"></div>
                </div>
                <div
                  v-else
                  class="card_price_buy_btn try_free"
                  @click="buyMembership(item.id)"
                >
                  Try for free
                </div>
              </div>
              <div v-else>
                <div
                  v-if="item.day !== 0"
                  :class="[
                    'card_price_buy_btn',
                    item.id === CurrentMembershipId && 'card_price_buy_btn1',
                  ]"
                >
                  <NuxtLink :to="localePath(`/login`)">Buy Now</NuxtLink>
                  <div class="scroll-line"></div>
                </div>
                <div v-else class="card_price_buy_btn try_free">
                  <NuxtLink :to="localePath(`/`)"> Try for free</NuxtLink>
                </div>
              </div>

              <div class="card_price_qllist">
                <div
                  v-for="(itemin, indexin) in item.qlList"
                  :key="index * 10 + indexin"
                  class="one_ql"
                >
                  <div class="icon">
                    <img src="/img/pricing/check.svg" />
                  </div>
                  <div class="font" :style="itemin?.style">
                    <!-- <span class="bigger">30 days</span> -->
                    {{ itemin.desc }}
                  </div>
                  <div v-if="itemin.tips" class="tips">
                    <el-tooltip
                      :content="itemin.tips"
                      placement="right-start"
                      effect="light"
                    >
                      <img src="/img/pricing/tip.svg" />
                    </el-tooltip>
                  </div>
                </div>
              </div>
              <div class="card_price_qllist" style="margin-top: 16px">
                <div
                  v-for="(itemuc, indexin) in membershipUnchanging"
                  :key="itemuc.name"
                  class="one_ql"
                >
                  <div class="icon">
                    <img src="/img/pricing/check.svg" />
                  </div>
                  <div class="font" :style="itemuc?.style">
                    <!-- <span class="bigger">30 days</span> -->
                    {{ itemuc.desc }}
                  </div>
                  <div v-if="itemuc.tips" class="tips">
                    <el-tooltip
                      :content="itemuc.tips"
                      placement="right-start"
                      effect="light"
                    >
                      <img src="/img/pricing/tip.svg" />
                    </el-tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="switchType === '2'" class="Service_dom">
          <div
            v-for="(item, index) in vipsData.moreServiceArr"
            :key="index"
            :class="[
              item.id === CurrentMembershipId
                ? 'one_price '
                : 'one_price currentMembership_no',
            ]"
            @click="changeCurrentMembershipId(item.id)"
          >
            <div class="title">Most Popular Choice</div>
            <div class="card_price">
              <div class="card_price_part1">{{ item.tag }}</div>
              <div class="card_price_part2">
                {{ item.description }}
              </div>
              <div class="card_price_part3">
                <div class="member_price">${{ (item.vipPrice / 100).toFixed(2) }}</div>
                <div class="member_font">Member's price</div>
              </div>
              <div class="card_price_part4">
                <div class="off_price">${{ (item.price / 100).toFixed(2) }}</div>
                <div class="old_price">${{ (item.originalPrice / 100).toFixed(2) }}</div>
              </div>
              <div v-if="user.id">
                <div
                  class="card_price_buy_btn common_btn_hover_bgColor"
                  @click="buyMembership(item.id)"
                >
                  Buy Now
                  <div class="scroll-line"></div>
                </div>
              </div>
              <div v-else>
                <div class="card_price_buy_btn common_btn_hover_bgColor">
                  <NuxtLink :to="localePath(`/login`)">Buy Now</NuxtLink>
                  <div class="scroll-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- {{buyData}} -->
        <div v-if="buyData && buyData.length" class="scroll_buyed_wrapper">
          <Carousel
            :itemsToShow="1"
            :autoplay="2000"
            :wrap-around="true"
            :pauseAutoplayOnHover="true"
          >
            <Slide v-for="item in buyData" :key="item.id" class="scroll_buyed">
              <div class="scroll_buyed_left">
                <div class="icon">
                  <img src="/img/pricing/green_check.svg" />
                </div>
                <div class="name">{{ item.data.nickname }}</div>
                <div class="type">purchased</div>
                <div class="days">{{ item.data.examNum }}-day membership</div>
              </div>
              <div class="scroll_buyed_right">
                <div class="flag">
                  <img v-if="item.data.avatar" :src="staticUrlGet(item.data.avatar)" />
                </div>
                <div class="country_name">{{ item.data.country }}</div>
                <div class="time">20 mins ago</div>
              </div>
            </Slide>
          </Carousel>
        </div>

        <div class="bank_card">
          <div class="title">Secure Payment:</div>
          <div class="img_self">
            <img src="/img/pricing/payment.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="part2_wrapper">
      <div class="part2">
        <div class="title">Frequently Asked Questions</div>
        <div class="list_out">
          <div
            v-for="(item, index) in aqList"
            :key="index"
            :class="[item.open ? 'one_question one_question_open' : 'one_question']"
            @click="openOrCloseOneQuestion(item)"
          >
            <div class="header">
              <div class="icon">
                <img src="/img/pricing/arrow_down.svg" />
              </div>
              <div class="qusetion">{{ item.title }}</div>
            </div>
            <div v-if="item.open" class="answer">
              <div v-html="item.content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part3_wrapper">
      <div class="part3">
        <div class="title">Contact Us</div>
        <div class="three_out">
          <div v-for="(item, index) in contaceUsList" :key="index" class="one_card">
            <div class="icon"><img :src="`${item.icon}`" /></div>
            <div class="method_font">{{ item.font }}</div>
            <div class="method_tip">{{ item.tip }}</div>
            <div v-if="item.type === '1'" class="btn" @click="openchat">
              {{ item.btn }}
            </div>
            <div v-if="item.type === '2'" class="btn" @click="copy(item.btn)">
              {{ item.btn }}
            </div>
            <div v-if="item.type === '3'" class="btn">
              <NuxtLink :to="localePath(`/company/contactus`)">{{ item.btn }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pricing {
  /* 左右滚动效果 */
  .scroll-line {
    width: 12px;
    height: 128%;
    transform: rotate(30deg);
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    z-index: 3;
    left: 0px;
    top: -15%;
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

    .part1 {
      max-width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .title1 {
        h1 {
          font-weight: 600;
          font-size: 56px;
          color: #201515;
          text-align: center;
          padding: 0px 0px;
          margin: 0px 0px 0px 0px;
          margin-top: 56px;

          @media (max-width: 834px) {
            font-size: 36px;
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

          @media (max-width: 834px) {
            font-size: 20px;
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
        }

        .yellow {
          background: #f66442;
          color: #ffffff;
        }
      }

      .Membership_dom {
        margin-top: 40px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
        grid-gap: 16px;

        .one_price {
          border-radius: 8px;
          //   border: 1px red solid;
          display: grid;
          background: #4c2929;
          padding: 0px 4px;
          padding-bottom: 4px;
          grid-template-rows: 50px 1fr;
          cursor: pointer;

          .title {
            // border: 1px red solid;
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

            .card_price_part1 {
              display: flex;
              justify-content: space-between;
              align-items: center;

              .day {
                font-weight: 600;
                font-size: 24px;
                color: #4c2929;
              }

              .off {
                padding: 4px 10px;
                background: #edc295;
                border-radius: 16px;
                font-weight: 500;
                font-size: 14px;
                color: #fff;
              }
            }

            .card_price_part2 {
              font-weight: 400;
              font-size: 14px;
              color: #403f3e;
              margin-top: 11px;
              min-height: 51px;
            }

            .card_price_part3 {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              margin-top: 32px;
              grid-gap: 8px;

              .big_price {
                font-weight: 600;
                font-size: 40px;
                color: #4c2929;
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
              &:hover {
                background: #f66442;
              }
              a {
                color: #fff;
              }
            }
            .card_price_buy_btn1 {
              background: #edc295;
              a {
                color: #4c2929;
              }
            }
            .try_free {
              background: white;
              border: 1px solid #201515;
              font-size: 16px;
              color: #201515;
              a {
                color: #4c2929;
              }
              &:hover {
                background: white;
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

                  .bigger {
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

        .currentMembership_no {
          background: rgba(76, 41, 41, 0);

          .title {
            color: rgba(76, 41, 41, 0);
          }

          .off {
            background: linear-gradient(90deg, #f7ba96 0%, #f66442 100%) !important;
          }

          .card_price {
            border: 1px solid #e9e9e9;
          }
        }
      }

      .Service_dom {
        margin-top: 80px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
        grid-gap: 16px;

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

            .card_price_part1 {
              font-weight: 600;
              font-size: 24px;
              color: #201515;
            }

            .card_price_part2 {
              font-weight: 400;
              font-size: 14px;
              color: #403f3e;
              margin-top: 11px;
              min-height: 68px;
            }

            .card_price_part3 {
              height: 84px;

              .member_price {
                font-weight: 600;
                font-size: 32px;
                color: #f66442;
                margin-top: 24px;
              }

              .member_font {
                font-weight: 400;
                font-size: 14px;
                color: #f66442;
              }
            }

            .card_price_part4 {
              .off_price {
                font-weight: 600;
                font-size: 32px;
                color: #201515;
              }

              .old_price {
                font-weight: 400;
                font-size: 14px;
                color: #403f3e;
                text-decoration: line-through;
              }
            }

            .card_price_buy_btn {
              padding: 11px 0px;
              background: #f66442;
              border-radius: 4px;
              font-weight: 500;
              font-size: 16px;
              text-align: center;
              margin-top: 32px;
              position: relative;
              color: white;
              a {
                color: white;
              }
            }
          }
        }
      }

      .scroll_buyed_wrapper {
        height: 56px;
        border: 1px #fff4f1 solid;
        margin-top: 32px;

        .scroll_buyed {
          // border: 1px red solid;
          padding: 16px 24px;
          background: #fff4f1;
          border-radius: 8px;
          width: 100%;

          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;

          // overflow: hidden;
          @media (max-width: 846px) {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 16px;
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
            }

            .type {
              font-weight: 400;
              font-size: 16px;
              color: #201515;
              margin-left: 12px;
            }

            .days {
              font-weight: 400;
              font-size: 16px;
              color: #f66442;
              margin-left: 12px;
            }
          }

          .scroll_buyed_right {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex: 1;

            .flag {
              width: 36px;
              height: 24px;
              //   border: 1px red solid;
              margin-left: 40px;
              //   margin-top: 10px;
              position: relative;

              @media (max-width: 846px) {
                margin-left: 0px;
              }

              top: 2px;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .country_name {
              font-weight: 400;
              font-size: 16px;
              color: #201515;
              margin-left: 16px;
              flex: 1;
            }

            .time {
              font-weight: 400;
              font-size: 16px;
              color: #201515;
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
    margin-top: 120px;

    .part2 {
      max-width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .title {
        font-weight: 500;
        font-size: 40px;
        color: #201515;
        text-align: center;

        @media (max-width: 662px) {
          font-size: 30px;
        }
      }

      .list_out {
        // border: 1px red solid;
        margin-top: 56px;

        .one_question {
          padding: 18px 24px;
          background: #f2f4f6;
          border-radius: 8px;
          cursor: pointer;
          margin-bottom: 8px;

          .header {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            grid-gap: 24px;

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

            @media (max-width: 662px) {
              font-size: 16px;
            }
          }
        }

        .one_question_open {
          background: #ffffff;
          border: 1px solid #e9e9e9;
          box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);

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
    background: #fff4f1;
    margin-top: 100px;

    .part3 {
      padding: 100px 0;
      //   border: 1px red solid;
      max-width: 1200px;
      margin: 0 auto;

      .title {
        font-weight: 500;
        font-size: 40px;
        color: #201515;
        text-align: center;
        margin-bottom: 64px;
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
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
