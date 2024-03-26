<script setup lang="ts">
const switchType = ref('1');
const changeSwitchType = (type: string) => {
  switchType.value = type;
};
const MembershipArr = ref([]);
const CurrentMembershipId = ref(0);
const changeCurrentMembershipId = (id: number) => {
  CurrentMembershipId.value = id;
};

onMounted(() => {
  makeMMembershipArr();
});
const makeMMembershipArr = () => {
  const data = [0, 1, 2, 3];
  data.forEach((item, index) => {
    MembershipArr.value.push({
      id: index,
      title: 'Most Popular Choice',
      day: '30 Days',
      off: '26% off',
      text: '80% of students have chosen this plan, which is the most cost-effective option.',
      big_price: '$19.99',
      small_price: '$8.00',
      qlList: [
        {
          font: '30 days of unlimited practice',
          tips: '123132',
        },
        {
          font: '30 days of unlimited practice',
          tips: '123132',
        },
        {
          font: '30 days of unlimited practice',
          tips: '123132',
        },
        {
          font: '30 days of unlimited practice',
          tips: '123132',
        },
        {
          font: '30 days of unlimited practice',
          tips: '123132',
        },
        {
          font: '30 days of unlimited practice',
          tips: '',
        },
      ],
    });
  });
};
</script>
<template>
  <div class="pricing">
    <div class="part1_wrapper">
      <div class="part1">
        <div class="title1">
          <h1>Plans & Pricing</h1>
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
            :class="[switchType === '1' ? 'switch_btn yellow common_btn_hover_bgColor' : 'switch_btn']"
          >
            Membership
          </div>
          <div
            @click="changeSwitchType('2')"
            :class="[switchType === '2' ? 'switch_btn yellow common_btn_hover_bgColor' : 'switch_btn']"
          >
            More Service
          </div>
        </div>
        <div class="Membership_dom">
          <div
            v-for="(item, index) in MembershipArr"
            :key="index"
            :class="[item.id === CurrentMembershipId ? 'one_price ' : 'one_price currentMembership_no']"
            @click="changeCurrentMembershipId(item.id)"
          >
            <div class="title">Most Popular Choice</div>
            <div class="card_price">
              <div class="card_price_part1">
                <div class="day">{{ item.day }}</div>
                <div class="off">{{ item.off }}</div>
              </div>
              <div class="card_price_part2">
                {{ item.text }}
              </div>
              <div class="card_price_part3">
                <div class="big_price">{{ item.big_price }}</div>
                <div class="small_price">{{ item.small_price }}</div>
              </div>
              <div class="card_price_buy_btn">Buy Now</div>
              <div class="card_price_qllist">
                <div v-for="(itemin, indexin) in item.qlList" :key="index * 10 + indexin" class="one_ql">
                  <div class="icon">
                    <img src="../public/img/pricing/check.svg" />
                  </div>
                  <div class="font">
                    <!-- <span class="bigger">30 days</span> -->
                    {{ itemin.font }}
                  </div>
                  <div v-if="itemin.tips" class="tips"><img src="../public/img/pricing/tip.svg" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="Service_dom"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pricing {
  min-height: 100vh;
  background: linear-gradient(to bottom, #fff4f1 0%, #fff4f1 804px, #ffffff 804px);
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
                color: #4c2929;
              }
            }
            .card_price_part2 {
              font-weight: 400;
              font-size: 14px;
              color: #403f3e;
              margin-top: 11px;
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
              }
            }
            .card_price_buy_btn {
              padding: 11px 0px;
              background: #edc295;
              border-radius: 4px;
              font-weight: 500;
              font-size: 16px;
              color: #4c2929;
              text-align: center;
              margin-top: 32px;
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
                  font-weight: 500;
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
    }
  }
}
</style>
