<script setup lang="ts">
import vSlogen from "../components/slogen.vue";
import vSubscribe from "../components/subscribe.vue";
import { oauth2SignIn } from "@/utils/googleAuth";
import { useStore } from "@/store";
import { staticUrlGet, formatNumber } from "@/utils";
useSeoMeta({
  title: "DET Practice:The best Duolingo English Test Practice platform",
  description:
    "Your one-stop learning hub for mastering the Duolingo English Test. We have the largest test bank, full-scale mock exam, correction service powered by AI, and professional courses.",
});
const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);
const isMobile = ref(false);
onMounted(() => {
  isMobile.value = window.innerWidth < 450;
});

const [
  { data: platformData },
  { data: commentTopFontResponse },
  { data: userPingLunResponse },
  { data: usersockerArrResponse },
  { data: usersockerTopFontResponse },
] = (await Promise.all([
  useFetch(`${api}/common/platformData`, {
    server: false,
    lazy: true,
  }),
  useFetch(`${api}/common/portalData?type=5`, { server: false, lazy: true }),
  useFetch(`${api}/common/portalData?type=1`, {
    server: false,
    lazy: true,
    transform: (data: any) => {
      const pinglunArr = [] as any;
      let pinglunMid = [] as any;
      for (let i = 0; i < data.length; i += 2) {
        pinglunMid[i] = JSON.parse(data[i].data);
        pinglunMid[i + 1] = JSON.parse(data[i + 1].data);
        pinglunMid[i].rate = Number(pinglunMid[i].rate);
        pinglunMid[i + 1].rate = Number(pinglunMid[i + 1].rate);
        pinglunArr.push([pinglunMid[i], pinglunMid[i + 1]]);
      }
      return pinglunArr;
    },
  }),
  useFetch(`${api}/common/portalData?type=3`, {
    server: false,
    lazy: true,
    transform: (data: any) => {
      const scorearr = [] as any;
      data.forEach((item: any) => {
        try {
          item.data = JSON.parse(item.data);
          scorearr.push(item);
        } catch (error) {
          console.log(error);
        }
      });
      return scorearr;
    },
  }),
  useFetch(`${api}/common/portalData?type=4`, { server: false, lazy: true }),
])) as any;

onMounted(() => {
  // 如果是在浏览器环境下，执行movePingLun
  if (process.client) {
    moveAnamit();
  }
});
const moveAnamit = () => {
  const small_title_wrap = document.querySelector(".small_title_wrap");
  const small_title = document.querySelectorAll(".one_small_title");
  let index = 0;
  let timer = null;
  timer = setInterval(() => {
    small_title.forEach((item) => {
      item.classList.remove("current");
      item.classList.remove("per");
      item.classList.remove("start");
    });
    small_title[index].classList.add("current");
    if (index === 0) {
      small_title[small_title.length - 1].classList.add("per");
    } else {
      small_title[index - 1].classList.add("per");
    }
    index++;
    if (index === small_title.length) {
      index = 0;
    }
  }, 2000);
};

// 将数字格式化 306281变为306k 3062811变为3061k
const toThousands = (num: any) => {
  if (!num) {
    return 0;
  }
  let result = "";
  const numStr = num.toString();
  for (let i = 0; i < numStr.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      result = ``;
    }
    result = numStr[numStr.length - i - 1] + result;
  }
  return result;
};
const googleLogin = () => {
  oauth2SignIn();
};
const isLoad = ref(false);
const onLoad = () => {
  isLoad.value = true;
};
const isLoad2 = ref(false);
const onLoad2 = () => {
  isLoad2.value = true;
};
const isLoad3 = ref(false);
const onLoad3 = () => {
  isLoad3.value = true;
};
const isLoad4 = ref(false);
const onLoad4 = () => {
  isLoad4.value = true;
};
</script>

<template>
  <div class="home">
    <div class="part1_wrapper">
      <div class="bg_handle"></div>
      <div class="part1">
        <div class="power_by">Powered by AI</div>
        <div class="page_title">
          <div class="h_one">
            <h1 v-if="isMobile">
              Get Higher Score Easily <br />in the Duolingo <br />English Test With
              <span class="seo_hack">DET Practice</span>
            </h1>
            <h1 v-else>
              Get Higher Score Easily in the <br />
              Duolingo English Test With <span class="seo_hack">DET Practice</span>
            </h1>
          </div>
          <div class="animat_wrap">
            <div class="small_title_wrap">
              <div class="one_small_title current">DET Practice</div>
              <div class="one_small_title">AI Correction</div>
              <div class="one_small_title">Full-length Mock</div>
              <div class="one_small_title">DET Courses</div>
            </div>
          </div>
        </div>
        <div v-if="!user.id" class="two_btn_out">
          <div class="common_btn common_btn_hover_bgColor yellow" @click="googleLogin">
            <img src="/img/home/google_icon.svg" />
            Start free with Google
          </div>
          <NuxtLink
            :to="localePath('/login')"
            class="common_btn common_btn_hover_borderCu white"
          >
            Start free with email
          </NuxtLink>
        </div>
        <div class="all_stu_nums">
          Trusted by
          <span class="yellow">{{ formatNumber(platformData?.userTotal) }} students</span>
          worldwide to improve Duolingo English Test scores within one month.
        </div>
        <div class="big_img_out">
          <div class="big_img">
            <video
              width="100%"
              height="100%"
              muted
              autoplay
              loop
              controlslist="nodownload"
              webkit-playsinline="true"
              playsinline="true"
              x5-video-player-fullscreen="true"
              x5-video-orientation="portraint"
              x5-video-player-type="h5"
              src="/img/video_banner.mp4"
              poster="/img/video_banner.png"
            ></video>
          </div>
        </div>
      </div>
    </div>
    <div class="part2_wrapper">
      <div class="part2">
        <div class="title1" data-aos="fade-up" data-aos-duration="1000">
          <h2>
            The best platform for enhancing your scores in the<br />
            Duolingo English Test
          </h2>
        </div>
        <div class="title2" data-aos="fade-up" data-aos-duration="1000">
          <h2>
            Utilize our comprehensive resources to accelerate your score improvement
          </h2>
        </div>
        <div class="one_img_article" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <el-image
              v-show="isLoad"
              src="/img/home/home1.png"
              alt="Duolingo English Test Practice"
              @load="onLoad"
            />
            <el-skeleton v-show="!isLoad" style="width: 100%" animated>
              <template #template>
                <el-skeleton-item variant="image" style="width: 100%; height: 300px" />
              </template>
            </el-skeleton>
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h3>Duolingo English Test Practice</h3>
            </div>
            <div class="tips">
              Having nearly {{ formatNumber(platformData?.questionTotal) }}+ practice
              questions, the question bank is continuously updated and improved.
            </div>
            <div class="tips">
              Covering all types of exams, detailed explanations are provided for each
              question.
            </div>
            <div class="tips">
              Thorough answers, intelligent recognition, and scoring allow you to
              constantly monitor your performance in answering questions.
            </div>
            <NuxtLink class="get_more" :to="localePath('/products/bank')">
              <div class="font">Get more information</div>
              <div class="icon">
                <img
                  src="/img/home/yellow_arrow_right.svg"
                  alt="DET Practice:The best Duolingo English Test Practice platform"
                />
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="one_article_img" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <el-image
              v-show="isLoad2"
              src="/img/home/home2.png"
              alt="Correction Service powered by AI"
              @load="onLoad2"
            />
            <el-skeleton v-show="!isLoad2" style="width: 100%" animated>
              <template #template>
                <el-skeleton-item variant="image" style="width: 100%; height: 300px" />
              </template>
            </el-skeleton>
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h3>Correction Service powered by AI</h3>
            </div>
            <div class="tips">
              "AI + Teacher" provides precise correction services, thoroughly reviewing
              your essay.
            </div>
            <div class="tips">
              Just submit your writing content, and you will receive a clear, detailed
              report and band score in a moment.
            </div>
            <div class="tips">Improve your writing score within two weeks.</div>
            <NuxtLink class="get_more" :to="localePath('/products/service')">
              <div class="font">Get more information</div>
              <div class="icon">
                <img
                  src="/img/home/yellow_arrow_right.svg"
                  alt="DET Practice:The best Duolingo English Test Practice platform"
                />
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="one_img_article" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <el-image
              v-show="isLoad3"
              src="/img/home/home3.png"
              alt="Duolingo English Test Mock"
              @load="onLoad3"
            />
            <el-skeleton v-show="!isLoad3" style="width: 100%" animated>
              <template #template>
                <el-skeleton-item variant="image" style="width: 100%; height: 300px" />
              </template>
            </el-skeleton>
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h3>Duolingo English Test Mock</h3>
            </div>
            <div class="tips">
              Replicate the formal examination, allowing you to experience the examination
              process and content in advance.
            </div>
            <div class="tips">
              Provide detailed simulated test reports, accurately analyzing your strengths
              and weaknesses.
            </div>
            <div class="tips">
              Take online mock exams anytime, anywhere, with rapid scoring within 24
              hours.
            </div>
            <NuxtLink class="get_more" :to="localePath('/products/mock')">
              <div class="font">Get more information</div>
              <div class="icon">
                <img
                  src="/img/home/yellow_arrow_right.svg"
                  alt="DET Practice:The best Duolingo English Test Practice platform"
                />
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="one_article_img" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <el-image
              v-show="isLoad4"
              src="/img/home/home4.png"
              alt="Duolingo English Test Course"
              @load="onLoad4"
            />
            <el-skeleton v-show="!isLoad4" style="width: 100%" animated>
              <template #template>
                <el-skeleton-item variant="image" style="width: 100%; height: 300px" />
              </template>
            </el-skeleton>
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h3>Duolingo English Test Course</h3>
            </div>
            <div class="tips">
              Comprehensive Mastery.Gain a thorough grasp of DET speaking and writing with
              detailed breakdowns, ensuring you confidently handle all exam components.
            </div>
            <div class="tips">
              Access proven techniques from ESL professionals for improved speaking and
              writing performance, personalized learning, and effective self-assessment.
            </div>
            <div class="tips">
              Stay ahead with up-to-date insights on DET formats and trends, ensuring your
              preparation aligns seamlessly with the latest exam standards.
            </div>
            <NuxtLink class="get_more" :to="localePath('/products/guide')">
              <div class="font">Get more information</div>
              <div class="icon">
                <img
                  src="/img/home/yellow_arrow_right.svg"
                  alt="DET Practice:The best Duolingo English Test Practice platform"
                />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="part3_wrapper">
      <div class="part3">
        <div
          v-if="usersockerTopFontResponse && usersockerTopFontResponse.length"
          class="title"
        >
          {{ usersockerTopFontResponse[0].data }}
        </div>
        <div v-if="platformData" class="user_nums_out">
          <div class="one_num">
            <div class="bigger_num">{{ toThousands(platformData?.userTotal) }}k</div>
            <div class="small_font">Users</div>
          </div>
          <div class="one_num">
            <div class="bigger_num">{{ toThousands(platformData?.questionTotal) }}k</div>
            <div class="small_font">Questions</div>
          </div>
          <div class="one_num">
            <div class="bigger_num">{{ toThousands(platformData?.examTotal) }}k</div>
            <div class="small_font">Mock Test</div>
          </div>
        </div>
        <div class="btn_out">
          <NuxtLink
            v-if="!user.id"
            :to="localePath('/login')"
            class="common_btn common_btn_hover_bgColor yellow"
          >
            Join Them
          </NuxtLink>
        </div>
        <div
          v-if="usersockerArrResponse && usersockerArrResponse.length"
          class="score_scroll_out"
        >
          <!-- {{ usersockerArr }} -->
          <Carousel
            :itemsToShow="6"
            :autoplay="2000"
            :wrap-around="true"
            :pauseAutoplayOnHover="true"
          >
            <Slide
              v-for="(item, index) in usersockerArrResponse"
              :key="index"
              class="one_score"
            >
              <div class="one_score_content">
                <div class="one_score_head">
                  <div class="user_icon">
                    <img
                      :src="staticUrlGet(item.data.avatar)"
                      :alt="item.data.nickname"
                    />
                  </div>
                  <div class="user_detail">
                    <div class="user_name">{{ item.data.nickname }}</div>
                    <div class="user_country">{{ item.data.country }}</div>
                  </div>
                </div>
                <div class="one_score_content_img">
                  <img
                    :src="staticUrlGet(`/${item.data.scoreImg}`)"
                    :alt="item.data.nickname"
                  />
                </div>
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>

    <div class="review_wrapper">
      <div class="review">
        <div
          v-if="commentTopFontResponse && commentTopFontResponse.length"
          class="review_title"
        >
          {{ commentTopFontResponse[0].data }}
        </div>
        <div class="review_scroll_out">
          <div
            v-if="userPingLunResponse && userPingLunResponse.length"
            class="review_scroll_out_it"
          >
            <Carousel
              :itemsToShow="4"
              :autoplay="2000"
              :wrap-around="true"
              :pauseAutoplayOnHover="true"
            >
              <Slide
                v-for="(item, index) in userPingLunResponse"
                :key="index"
                class="two_card_out"
              >
                <div>
                  <div class="one_card">
                    <div class="one_card_top">
                      <div class="one_card_top_left">
                        <div class="icon_touxiang">
                          <img :src="item[0].avatar" :alt="item[0].nickname" />
                        </div>
                        <div class="name_out">
                          <div class="name">{{ item[0].nickname }}</div>
                          <div class="country">{{ item[0].country }}</div>
                        </div>
                      </div>
                      <div class="one_card_top_right">
                        <el-rate
                          v-model="item[0].rate"
                          allow-half
                          disabled
                          size="large"
                        />
                      </div>
                    </div>
                    <div class="one_card_font">{{ item[0].content }}</div>
                  </div>
                  <div class="one_card" style="margin-top: 24px">
                    <div class="one_card_top">
                      <div class="one_card_top_left">
                        <div class="icon_touxiang">
                          <img :src="item[1].avatar" :alt="item[1].nickname" />
                        </div>
                        <div class="name_out">
                          <div class="name">{{ item[1].nickname }}</div>
                          <div class="country">{{ item[1].country }}</div>
                        </div>
                      </div>
                      <div class="one_card_top_right">
                        <el-rate
                          v-model="item[1].rate"
                          allow-half
                          disabled
                          size="large"
                        />
                      </div>
                    </div>
                    <div class="one_card_font">{{ item[1].content }}</div>
                  </div>
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
    <div>
      <v-slogen />
    </div>
    <div>
      <v-subscribe />
    </div>
  </div>
</template>
<style lang="scss">
.v-header {
  background: #fff4f1 !important;
}
.home {
  .scrolls {
    // border: 1px red solid;
    display: flex;
    align-items: flex-start;
    animation-name: around;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes around {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
}
</style>
<style lang="scss" scoped>
.home {
  margin: 0 auto;
  overflow: hidden;

  .part1_wrapper {
    padding: 0px 30px;
    @media (max-width: 450px) {
      padding: 0px 15px;
    }
    position: relative;
    .bg_handle {
      position: absolute;
      top: 0px;
      left: 0;
      width: 100%;
      height: 808px;
      z-index: -1;
      background: linear-gradient(to bottom, #fff4f1 0%, #fff4f1 100%);
      @media (max-width: 1290px) {
        height: 100%;
        padding-bottom: 40px;
      }
    }

    .part1 {
      max-width: 1200px;
      overflow: hidden;
      // border: 1px red solid;
      margin: 0 auto;
      height: 100%;
      .power_by {
        padding: 5px 15px;
        background: #fddfd7;
        border-radius: 16px;
        font-weight: 600;
        font-size: 16px;
        color: #f66442;
        width: fit-content;
        margin: 0 auto;
        margin-top: 56px;
      }
      .page_title {
        .h_one {
          font-weight: 600;
          font-size: 56px;
          color: #201515;
          h1 {
            text-align: center;
            font-weight: 600;
            font-size: 56px;
            color: #201515;
            padding: 0px;
            margin: 0px;
            @media (max-width: 906px) {
              font-size: 46px;
            }
            @media (max-width: 744px) {
              font-size: 36px;
            }
            @media (max-width: 570px) {
              font-size: 26px;
            }
            @media (max-width: 450px) {
              font-size: 24px;
            }
          }
          .seo_hack {
            display: none;
          }
        }
        .animat_wrap {
          text-align: center;
          font-weight: 600;
          font-size: 56px;
          color: #f66442;
          padding: 0px;
          margin: 0px;
          // height: 1em;
          @media (max-width: 906px) {
            font-size: 46px;
          }
          @media (max-width: 744px) {
            font-size: 36px;
          }
          @media (max-width: 570px) {
            font-size: 26px;
          }
          @media (max-width: 450px) {
            font-size: 22px;
          }

          .small_title_wrap {
            height: 1em;
            @media (max-width: 570px) {
              height: 0.5em;
            }
            position: relative;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 26px;
            overflow: hidden;
          }
          .one_small_title {
            color: #ff4f00;
            position: absolute;
            // bottom: -1em;
            z-index: 1;
            opacity: 0;
            transform: rotate(10deg);
            transform-origin: left;
            transition: none;
          }

          .current {
            color: #ff4f00;
            position: absolute;
            bottom: -1em;
            z-index: 1;
            opacity: 0;
            transform: rotate(10deg);
            transform-origin: left;
            transition: none;
            bottom: 0.1em;
            opacity: 1;
            transform: none;
            transition: all 500ms cubic-bezier(0.65, 0, 0.35, 1);
          }
          .per {
            color: #ff4f00;
            position: absolute;
            bottom: -1em;
            z-index: 1;
            opacity: 0;
            transform: rotate(10deg);
            transform-origin: left;
            transition: none;
            bottom: 1em;
            opacity: 0;
            transform: rotate(-10deg);
            transition: all 500ms cubic-bezier(0.65, 0, 0.35, 1);
          }
        }
      }
      .two_btn_out {
        clear: both;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        grid-gap: 16px;
        @media (max-width: 730px) {
          flex-direction: column;
        }

        .yellow {
          background: #f66442;
          display: flex;
          justify-content: center;
          align-items: center;
          grid-column-gap: 8px;
          img {
            width: 26px;
            height: 26px;
          }
        }
        .white {
          border: 1px solid #201515;
          color: #201515;
        }
      }
      .all_stu_nums {
        font-weight: 400;
        font-size: 16px;
        color: #201515;
        text-align: center;
        margin-top: 40px;
        .yellow {
          color: #f66442;
        }
      }
      .big_img_out {
        padding: 0px 60px;
        margin-top: 40px;
        @media (max-width: 730px) {
          padding: 0px 0px;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        .big_img {
          max-width: 1080px;
          // width: calc(100% - 80px);
          // border: 1px red solid;
        }
      }
    }
  }

  .part2_wrapper {
    padding: 0px 30px;
    @media (max-width: 450px) {
      padding: 0px 15px;
    }
    box-sizing: border-box;
    .part2 {
      max-width: 1200px;
      // border: 1px blue solid;
      margin: 0 auto;
      .title1 {
        h2 {
          font-weight: 500;
          font-size: 40px;
          color: #201515;
          text-align: center;
          padding: 0px;
          margin: 0px;
          margin-top: 120px;
          @media (max-width: 450px) {
            font-size: 23px;
          }
        }
      }
      .title2 {
        margin-top: 32px;
        margin-bottom: 80px;
        @media (max-width: 450px) {
          margin-top: 20px;
          margin-bottom: 40px;
        }
        h2 {
          font-weight: 500;
          font-size: 24px;
          color: #201515;
          text-align: center;
          margin: 0;
          @media (max-width: 450px) {
            font-size: 18px;
          }
        }
      }
      .one_img_article {
        // border:1px red solid;
        display: grid;
        margin-bottom: 120px;
        @media (max-width: 450px) {
          margin-bottom: 30px;
          grid-row-gap: 0px;
        }
        grid-template-columns: 1fr 0.75fr;
        grid-column-gap: 80px;
        grid-row-gap: 40px;
        grid-template-areas: "img_out  article_out";
        @media (max-width: 926px) {
          grid-template-columns: 1fr;
          grid-template-areas:
            "img_out"
            "article_out";
        }
        .img_out {
          grid-area: img_out;
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
            width: 100%;
            height: auto;
            border-radius: 16px;
          }
        }
        .article_out {
          grid-area: article_out;
          @media (max-width: 926px) {
            text-align: center;
          }
          .article_out_title {
            h3 {
              font-weight: 500;
              font-size: 32px;
              color: #201515;
              margin-top: 0px;
              margin-bottom: 0px;
              @media (max-width: 450px) {
                font-size: 22px;
              }
            }
            h4 {
              font-weight: 500;
              font-size: 32px;
              color: #201515;
              margin-top: 0px;
              margin-bottom: 0px;
              @media (max-width: 450px) {
                font-size: 22px;
              }
            }
          }
          .tips {
            font-weight: 400;
            font-size: 18px;
            color: #403f3e;
            margin-top: 24px;
            @media (max-width: 450px) {
              font-size: 16px;
            }
          }
          .get_more {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex: 1;
            // border: 1px red solid;
            margin-top: 34px;
            grid-column-gap: 8px;
            @media (max-width: 926px) {
              justify-content: center;
            }
            cursor: pointer;
            .font {
              font-weight: 500;
              font-size: 20px;
              color: #f66442;
            }
            .icon {
              width: 24px;
              height: 24px;
            }
            &:hover {
              .font {
                border-bottom: 1px #f66442 solid;
              }

              .icon {
                transform: translateX(8px);
                transition: all 0.2s;
              }
            }
          }
        }
      }
      .one_article_img {
        display: grid;
        margin-bottom: 120px;
        @media (max-width: 450px) {
          margin-bottom: 30px;
          grid-row-gap: 0px;
        }
        grid-template-columns: 0.75fr 1fr;
        grid-column-gap: 80px;
        grid-row-gap: 40px;
        grid-template-areas: " article_out img_out";
        @media (max-width: 926px) {
          grid-template-columns: 1fr;
          grid-template-areas:
            "img_out"
            "article_out";
        }
        .img_out {
          grid-area: img_out;
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
            width: 100%;
            height: auto;
            border-radius: 16px;
          }
        }
        .article_out {
          grid-area: article_out;
          @media (max-width: 926px) {
            text-align: center;
          }
          .article_out_title {
            h3 {
              font-weight: 500;
              font-size: 32px;
              color: #201515;
              margin-top: 0px;
              margin-bottom: 0px;
              @media (max-width: 450px) {
                font-size: 22px;
              }
            }
            h4 {
              font-weight: 500;
              font-size: 32px;
              color: #201515;
              margin-top: 0px;
              margin-bottom: 0px;
              @media (max-width: 450px) {
                font-size: 22px;
              }
            }
          }
          .tips {
            font-weight: 400;
            font-size: 18px;
            color: #403f3e;
            margin-top: 24px;
            @media (max-width: 450px) {
              font-size: 16px;
            }
          }
          .get_more {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex: 1;
            // border: 1px red solid;
            margin-top: 34px;
            grid-column-gap: 8px;
            @media (max-width: 926px) {
              justify-content: center;
            }
            cursor: pointer;
            .font {
              font-weight: 500;
              font-size: 20px;
              color: #f66442;
            }
            .icon {
              width: 24px;
              height: 24px;
            }
            &:hover {
              .font {
                border-bottom: 1px #f66442 solid;
              }
              .icon {
                transform: translateX(8px);
                transition: all 0.2s;
              }
            }
          }
        }
      }
    }
  }
  .part3_wrapper {
    overflow: hidden;
    background: #f2f4f6;
    padding-bottom: 72px;
    @media (max-width: 450px) {
      padding-bottom: 40px;
    }
    .part3 {
      .title {
        font-weight: 500;
        font-size: 40px;
        color: #201515;
        text-align: center;
        margin-top: 100px;
        @media (max-width: 450px) {
          font-size: 23px;
        }
      }
      .user_nums_out {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-column-gap: 24px;
        margin-top: 40px;

        @media (max-width: 450px) {
          flex-wrap: wrap;
          grid-column-gap: 12px;
          grid-row-gap: 12px;
        }

        .one_num {
          padding: 4px 32px;
          @media (max-width: 450px) {
            padding: 4px 16px;
          }
          background: #ffffff;
          border-radius: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          grid-column-gap: 16px;
          .bigger_num {
            font-weight: 500;
            font-size: 32px;
            color: #201515;
            @media (max-width: 450px) {
              font-size: 22px;
            }
          }
          .small_font {
            font-weight: 400;
            font-size: 18px;
            color: #201515;
            @media (max-width: 450px) {
              font-size: 16px;
            }
          }
        }
      }
      .btn_out {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        .yellow {
          background: #f66442;
        }
      }

      .score_scroll_out {
        overflow: hidden;
        margin-top: 40px;
        position: relative;
        .one_score {
          width: 312px !important;
          @media (max-width: 450px) {
            width: 176px !important;
            margin-left: 12px;
          }
          box-sizing: border-box;
          height: fit-content;
          // border: 1px blue solid;
          margin-left: 24px;
          background: #ffffff;
          box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          // height: 100px;
          .one_score_content {
            padding: 24px;

            .one_score_head {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              grid-column-gap: 16px;
              .user_icon {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                overflow: hidden;
                flex-shrink: 0;
                @media (max-width: 450px) {
                  width: 28px;
                  height: 28px;
                }
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .user_detail {
                .user_name {
                  font-weight: 500;
                  font-size: 16px;
                  color: #201515;
                  text-align: left;
                  @media (max-width: 450px) {
                    font-size: 12px;
                  }
                }
                .user_country {
                  font-weight: 400;
                  font-size: 14px;
                  color: #403f3e;
                  text-align: left;
                  @media (max-width: 450px) {
                    font-size: 10px;
                  }
                }
              }
            }
            .one_score_content_img {
              width: auto;
              margin-top: 17px;
              border-radius: 8px;
              border: 2px solid #e9e9e9;
              img {
                width: 100%;
                height: auto;
              }
            }
          }
        }
      }
    }
  }
  .review_wrapper {
    background: #f66442;
    overflow-y: hidden;

    .review {
      padding-bottom: 100px;
      .review_title {
        margin-top: 100px;
        font-weight: 500;
        font-size: 40px;
        color: #ffffff;
        padding: 0 10px;
        text-align: center;
        margin-bottom: 64px;
        @media (max-width: 450px) {
          font-size: 23px;
          margin-top: 50px;
          margin-bottom: 34px;
        }
      }
      .review_scroll_out {
        // padding: 0 20px;

        scrollbar-width: none;
        .review_scroll_out_it {
          overflow: hidden;
          .two_card_out {
            // border: 1px red solid;
            margin-left: 12px;
            width: 432px !important;
            @media (max-width: 450px) {
              width: 366px !important;
            }

            display: flex;
            justify-content: center;
            align-items: flex-start;
          }
          .one_card {
            padding: 24px;
            background: #ffffff;
            border-radius: 8px;
            .one_card_top {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .one_card_top_left {
                display: flex;
                justify-content: flex-start;
                grid-column-gap: 16px;
                align-items: center;
                .icon_touxiang {
                  width: 48px;
                  height: 48px;
                  flex-shrink: 0;
                  border-radius: 50%;
                  overflow: hidden;
                  @media (max-width: 450px) {
                    width: 28px;
                    height: 28px;
                  }
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                .name_out {
                  .name {
                    font-weight: 500;
                    font-size: 16px;
                    color: #201515;
                    text-align: left;
                    @media (max-width: 450px) {
                      font-size: 14px;
                    }
                  }
                  .country {
                    margin-top: 4px;
                    font-weight: 400;
                    font-size: 14px;
                    color: #403f3e;
                    text-align: left;
                    @media (max-width: 450px) {
                      font-size: 10px;
                    }
                  }
                }
              }
              .one_card_top_right {
                :deep(.el-rate .el-rate__icon) {
                  font-size: 28px;
                }
              }
            }
            .one_card_font {
              font-weight: 400;
              font-size: 18px;
              color: #201515;
              margin-top: 24px;
              text-align: left;
              @media (max-width: 450px) {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
  @keyframes scroll {
    0% {
      transform: translateX(0); /* 初始位置 */
    }
    100% {
      transform: translateX(-100%); /* 向上滚动 100% 的高度 */
    }
  }
}
</style>
