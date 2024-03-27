<script lang="ts" setup>
import vEmbark from '../../components/embark.vue';
// 获取 .v-header 将背景色改为透明
</script>
<template>
  <div class="bankW100">
    <div class="bank_wrapper">
      <div class="bank">
        <div class="banner_wrapper">
          <div class="banner">
            <div class="banner_left">
              <div class="big_title">
                <h1>
                  Duolingo Practice<br />
                  Question Bank
                </h1>
              </div>
              <div class="desc">
                "Abundant test questions, Answer analysis & templates, intelligent planning , AI speaking evaluation " —
                achieve score improvement quickly at the lowest cost through a scientific approach.
              </div>
              <div class="people_num">
                <div class="icon_continer">
                  <div class="one_icon left0">
                    <img src="../../public/img/products/bank_user_icon1.png" />
                  </div>
                  <div class="one_icon left24">
                    <img src="../../public/img/products/bank_user_icon1.png" />
                  </div>
                  <div class="one_icon left48">
                    <img src="../../public/img/products/bank_user_icon1.png" />
                  </div>
                  <div class="one_icon left72">
                    <img src="../../public/img/products/bank_user_icon1.png" />
                  </div>
                  <div class="one_icon left96">
                    <img src="../../public/img/products/bank_user_icon1.png" />
                  </div>
                </div>
                <div class="font">500000 + people used the question bank for practice.</div>
              </div>
              <div class="btn">
                <div class="font">Practice For Free</div>
                <div class="icon"><img src="../../public/img/products/white_arrow_right.svg" /></div>
              </div>
            </div>
            <div class="banner_right"></div>
          </div>
        </div>
        <div class="content">
          <div class="one_card img_left">
            <div class="one_card_left">
              <img src="../../public/img/products/bank_picture1.png" />
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <div class="right_title">Abundant test questions</div>
                <div class="right_desc">
                  Providing over <span class="strong">ten thousand questions</span>, covering various types of exams,
                  and continuously updating the question bank. It helps you systematically enhance your test-taking
                  abilities in different question formats.
                </div>
                <div class="right_click">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img src="../../public/img/products/blue_arrow_right.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="one_card img_right">
            <div class="one_card_left">
              <img src="../../public/img/products/bank_picture1.png" />
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <div class="right_title">Abundant test questions</div>
                <div class="right_desc">
                  Providing over <span class="strong">ten thousand questions</span>, covering various types of exams,
                  and continuously updating the question bank. It helps you systematically enhance your test-taking
                  abilities in different question formats.
                </div>
                <div class="right_click">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img src="../../public/img/products/blue_arrow_right.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="one_card img_left">
            <div class="one_card_left">
              <img src="../../public/img/products/bank_picture1.png" />
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <div class="right_title">Abundant test questions</div>
                <div class="right_desc">
                  Providing over <span class="strong">ten thousand questions</span>, covering various types of exams,
                  and continuously updating the question bank. It helps you systematically enhance your test-taking
                  abilities in different question formats.
                </div>
                <div class="right_click">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img src="../../public/img/products/blue_arrow_right.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="one_card img_right">
            <div class="one_card_left">
              <img src="../../public/img/products/bank_picture1.png" />
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <div class="right_title">Abundant test questions</div>
                <div class="right_desc">
                  Providing over <span class="strong">ten thousand questions</span>, covering various types of exams,
                  and continuously updating the question bank. It helps you systematically enhance your test-taking
                  abilities in different question formats.
                </div>
                <div class="right_click">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img src="../../public/img/products/blue_arrow_right.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-embark />
  </div>
</template>
<style lang="scss" scoped>
.bank_wrapper {
  padding: 0 30px;
  overflow: hidden;
  background: linear-gradient(0, #ffffff 0%, #ecf7ff 100%);
  .bank {
    max-width: 1200px;
    // border: 1px red solid;
    margin: 0 auto;
    margin-top: 56px;
    .banner_wrapper {
      //   border: 1px red solid;
      margin-bottom: 182px;
      .banner {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px;
        .banner_left {
          .big_title {
            h1 {
              font-weight: 600;
              font-size: 56px;
              color: #201515;
              margin: 0;
            }
          }
          .desc {
            font-weight: 400;
            font-size: 20px;
            color: #201515;
            margin-top: 32px;
          }
          .people_num {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-top: 40px;
            grid-gap: 8px;
            .icon_continer {
              width: 128px;
              position: relative;
              height: 32px;
              .one_icon {
                width: 32px;
                height: 32px;
                position: absolute;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .left0 {
                left: 0;
              }
              .left24 {
                left: 24px;
              }
              .left48 {
                left: 48px;
              }
              .left72 {
                left: 72px;
              }
              .left96 {
                left: 96px;
              }
            }
            .font {
              font-weight: 400;
              font-size: 16px;
              color: #403f3e;
            }
          }
          .btn {
            width: fit-content;
            margin-top: 40px;
            padding: 12px 32px;
            background: #f66442;
            border-radius: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-gap: 8px;
            .font {
              font-weight: 500;
              font-size: 18px;
              color: #ffffff;
            }
            .icon {
              width: 24px;
              height: 24px;
            }
          }
        }
        .banner_right {
          border: 1px red solid;
        }
      }
    }
    .content {
      .one_card {
        margin-bottom: 120px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 80px;
        grid-template-areas: 'one_card_left  one_card_right';
        .one_card_left {
          grid-area: one_card_left;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
          }
        }
        .one_card_right {
          grid-area: one_card_right;
          display: flex;
          justify-content: center;
          align-items: center;
          .one_card_right_forMid {
            .right_title {
              font-weight: 500;
              font-size: 32px;
              color: #201515;
            }
            .right_desc {
              font-weight: 400;
              font-size: 20px;
              color: #403f3e;
              margin-top: 40px;
              .strong {
                font-weight: 600;
              }
            }
            .right_click {
              margin-top: 42px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              grid-gap: 8px;
              cursor: pointer;
              .font {
                font-weight: 500;
                font-size: 20px;
                color: #3e8bf8;
              }
              .arrow {
                width: 24px;
                height: 24px;
                position: relative;
                top: 4px;
                img {
                  width: 100%;
                  height: 100%;
                }
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }
      }
      .img_left {
        grid-template-areas: 'one_card_left  one_card_right';
        @media (max-width: 986px) {
          grid-template-columns: 1fr;
          grid-template-areas: 'one_card_left' 'one_card_right';
          grid-gap: 40px;
        }
      }
      .img_right {
        grid-template-areas: ' one_card_right one_card_left';
        @media (max-width: 986px) {
          grid-template-columns: 1fr;
          grid-template-areas: 'one_card_left' 'one_card_right';
          grid-gap: 40px;
        }
      }
    }
  }
}
</style>
