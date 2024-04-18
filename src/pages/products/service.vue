<script lang="ts" setup>
import { urlGet } from "@/utils";
import { useStore } from "@/store";
import vEmbark from "../../components/embark.vue";
const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);
useSeoMeta({
  title: "Duolingo Practice Question Bank",
  description:
    "Abundant test questions, Answer analysis & templates, intelligent planning , AI speaking evaluation — achieve score improvement quickly at the lowest cost through a scientific approach.",
  keywords: "Duolingo Practice Question Bank",
});
// 获取平台数据
const {
  data: platformData = {
    v1Total: 0,
    userTotal: 0,
    questionTotal: 0,
    examTotal: 0,
  },
} = (await useFetch(`${api}/common/platformData`, {
  server: true,
})) as any;
</script>
<template>
  <div class="bankW100">
    <div class="bank_wrapper">
      <div class="bank">
        <div class="banner_wrapper">
          <div class="banner">
            <div class="banner_left">
              <div class="big_title">
                <h1>The best new way to check your writing answers.</h1>
              </div>
              <div class="desc">
                Correction service provided by "AI + Teachers".Your essay will be
                corrected based on DET scoring rules, and you will receive detailed
                feedback in a moment.
              </div>
              <div class="people_num">
                <div class="icon_continer">
                  <div class="one_icon left0">
                    <img src="../../public/img/products/bank_user_icon1.png" />
                  </div>
                  <div class="one_icon left24">
                    <img src="../../public/img/products/bank_user_icon2.png" />
                  </div>
                  <div class="one_icon left48">
                    <img src="../../public/img/products/bank_user_icon3.png" />
                  </div>
                  <div class="one_icon left72">
                    <img src="../../public/img/products/bank_user_icon4.png" />
                  </div>
                  <div class="one_icon left96">
                    <img src="../../public/img/products/bank_user_icon5.png" />
                  </div>
                </div>
                <div v-if="platformData" class="font">
                  {{ platformData.v1Total }}+ people used Correction service.
                </div>
              </div>
              <div class="btn common_btn_hover_bgColor">
                <NuxtLink v-if="user.id" class="font" :href="urlGet('/login')">
                  Practice For Free
                </NuxtLink>
                <NuxtLink v-else class="font" :to="localePath(`login`)">
                  Practice For Free
                </NuxtLink>
                <div class="icon">
                  <img src="../../public/img/products/white_arrow_right.svg" />
                </div>
              </div>
            </div>
            <div class="banner_right">
              <img src="../../public/img/products/service_banner.png" />
            </div>
          </div>
        </div>
        <div class="content">
          <div class="one_card img_left">
            <div class="one_card_left">
              <img src="../../public/img/products/service_picture1.png" />
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <div class="right_title">Accurate score</div>
                <div class="right_desc">
                  Submit your essay by inputting or from the question bank, and you can
                  receive a clear and detailed report and score immediately.
                </div>
                <div class="right_click">
                  <NuxtLink v-if="user.id" :href="urlGet('/login')" class="font">
                    Start experiencing
                  </NuxtLink>
                  <NuxtLink v-else :to="localePath(`login`)" class="font">
                    Start experiencing
                  </NuxtLink>
                  <div class="arrow">
                    <img src="../../public/img/products/yellow_arrow_right.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <img src="../../public/img/products/service_picture2.png" />
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <div class="right_title">Word analysis</div>
                <div class="right_desc">
                  Word count and mining, discovering the highlight words in the
                  composition, enhancing your expression; Detecting and annotating the
                  repeated words in the composition, helping you maintain diversity in
                  your expression.
                </div>
                <div class="right_click">
                  <NuxtLink v-if="user.id" :href="urlGet('/login')" class="font">
                    Start experiencing
                  </NuxtLink>
                  <NuxtLink v-else :to="localePath(`login`)" class="font">
                    Start experiencing
                  </NuxtLink>
                  <div class="arrow">
                    <img src="../../public/img/products/yellow_arrow_right.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="one_card img_left" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <img src="../../public/img/products/service_picture3.png" />
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <div class="right_title">Essay correction</div>
                <div class="right_desc">
                  You can immediately see your vocabulary mistakes, grammar errors, and
                  learn how to avoid them.
                </div>
                <div class="right_click">
                  <NuxtLink v-if="user.id" :href="urlGet('/login')" class="font">
                    Start experiencing
                  </NuxtLink>
                  <NuxtLink v-else :to="localePath(`login`)" class="font">
                    Start experiencing
                  </NuxtLink>
                  <div class="arrow">
                    <img src="../../public/img/products/yellow_arrow_right.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <img src="../../public/img/products/service_picture4.png" />
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <div class="right_title">Professional guidance</div>
                <div class="right_desc">
                  According to the DET scoring elements, we provide professional guidance
                  to help you identify the weaknesses in your paper and make it perfect.
                </div>
                <div class="right_click">
                  <NuxtLink v-if="user.id" :href="urlGet('/login')" class="font">
                    Start experiencing
                  </NuxtLink>
                  <NuxtLink v-else :to="localePath(`login`)" class="font">
                    Start experiencing
                  </NuxtLink>
                  <div class="arrow">
                    <img src="../../public/img/products/yellow_arrow_right.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="one_card img_left" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <img src="../../public/img/products/service_picture5.png" />
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <div class="right_title">Essay polishing</div>
                <div class="right_desc">
                  Accurately modify every word and sentence, reasonably adjust the
                  paragraph structure, and revitalize the writing style to further improve
                  your composition and transform it into a high-scoring one.
                </div>
                <div class="right_click">
                  <NuxtLink v-if="user.id" :href="urlGet('/login')" class="font">
                    Start experiencing
                  </NuxtLink>
                  <NuxtLink v-else :to="localePath(`login`)" class="font">
                    Start experiencing
                  </NuxtLink>
                  <div class="arrow">
                    <img src="../../public/img/products/yellow_arrow_right.svg" />
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
  background: linear-gradient(#fff3f0 0%, #ffffff 657px, #ffffff 0px, #ffffff);
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
        @media (max-width: 986px) {
          grid-template-columns: 1fr;
        }

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
              flex-shrink: 0;
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
            cursor: pointer;
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
          display: flex;
          justify-content: center;
          align-items: center;
          @media (max-width: 986px) {
            display: none;
          }
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
    .content {
      .one_card {
        margin-bottom: 120px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 80px;
        grid-template-areas: "one_card_left  one_card_right";
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
                color: #f66442;
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
        grid-template-areas: "one_card_left  one_card_right";
        @media (max-width: 986px) {
          grid-template-columns: 1fr;
          grid-template-areas: "one_card_left" "one_card_right";
          grid-gap: 40px;
        }
      }
      .img_right {
        grid-template-areas: " one_card_right one_card_left";
        @media (max-width: 986px) {
          grid-template-columns: 1fr;
          grid-template-areas: "one_card_left" "one_card_right";
          grid-gap: 40px;
        }
      }
    }
  }
}
</style>
