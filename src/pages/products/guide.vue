<script setup lang="ts">
import { useStore } from "@/store";
import { staticUrlGet } from "@/utils";
const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);
const isVip = computed(() => store.isVip);
const { data: pricedata } = (await useFetch(`${api}/common/vips`, {
  server: true,
  transform: (res: any) => {
    const { data } = res;
    const writeData = data.find((item: any) => item.write === 1);
    const speakData = data.find((item: any) => item.speak === 1);
    if (isVip.value) {
      speakData.price = speakData.vipPrice;
      writeData.price = writeData.vipPrice;
    }
    return { speakData, writeData };
  },
})) as any;

const { data: downloadhref = {} } = (await useFetch(`${api}/common/courses`, {
  server: true,
  transform: (data: any) => {
    console.log(data);
    const { DETSpeakingExamExcellence, DETWritingExamExcellence2024 } = data;
    return { DETSpeakingExamExcellence, DETWritingExamExcellence2024 };
  },
})) as any;
console.log(downloadhref);

const article1 = ref({
  title: "Key Features of DET Speaking Exam Excellence:",
  list: [
    {
      smallTitle: "• Comprehensive Exam Breakdown: ",
      content:
        " Detailed exploration of all speaking task types in the DET, providing a clear understanding of what to expect.",
    },
    {
      smallTitle: "• Effective Speaking Strategies: ",
      content:
        "Practical advice on how to approach each speaking task, including tips on organizing thoughts and expressing ideas clearly. ",
    },
    {
      smallTitle: "• Interactive Speaking Exercises: ",
      content:
        "   Engaging activities designed to improve speech clarity, fluency, and confidence in a variety of speaking scenarios.  ",
    },
    {
      smallTitle: '• Expert Insights:',
      content: ' Guidance from seasoned ESL professionals, offering techniques to enhance pronunciation, tone, and overall speaking performance.',
    },
    {
      smallTitle: "• Real-Life Speaking Examples: ",
      content:
        " Recorded speech samples and analyses to demonstrate successful speaking strategies in action. ",
    },
    {
      smallTitle: "• Personalized Learning Approaches: ",
      content:
        "Tips and techniques suitable for learners at different levels of English proficiency, ensuring everyone benefits.",
    },
    {
      smallTitle: "• Self-Assessment Tools: ",
      content:
        "Methods and criteria to evaluate your speaking skills and track progress. ",
    },
    {
      smallTitle: "• Focused Language Development: ",
      content:
        "Emphasis on key vocabulary and grammatical structures that are essential for effective communication in the DET speaking exam. ",
    },
    {
      smallTitle: "• Up-to-date and Relevant: ",
      content:
        "Incorporates the latest updates in the DET speaking format, ensuring your preparation is current and comprehensive.",
    },
  ],
});
const article2 = ref({
  title: "Key Features of DET Writing Exam Excellence:",
  list: [
    {
      smallTitle: "• All-encompassing Content: ",
      content:
        "Extensive coverage of every writing task type in the DET, with in-depth analysis and examples.",
    },
    {
      smallTitle: "• Step-by-Step Approaches: ",
      content:
        "Detailed guidelines on planning, structuring, and writing essays that meet and exceed exam standards.",
    },
    {
      smallTitle: "• Practical Writing Exercises: ",
      content:
        "Hands-on exercises to practice and refine writing skills, tailored to the specific demands of the DET.",
    },
    {
      smallTitle: "• Expert Writing Tips: ",
      content:
        "Proven tips and tricks from experienced ESL educators to enhance clarity, coherence, and sophistication in writing.",
    },
    {
      smallTitle: "• Sample Essays with Analysis: ",
      content:
        "Annotated sample responses illustrating effective writing strategies and common mistakes to avoid.",
    },
    {
      smallTitle: "• Personalized Learning Pathways: ",
      content:
        "Strategies and advice adaptable to various proficiency levels, from beginners to advanced learners.",
    },
    {
      smallTitle: "• Evaluation Techniques: ",
      content:
        "Tools and methods for self-assessment and continuous improvement in writing skills.",
    },
    {
      smallTitle: "• Grammar and Vocabulary Focus: ",
      content:
        "Special emphasis on the linguistic elements critical for success in the DET writing section.",
    },
    {
      smallTitle: "• Updated and Relevant: ",
      content:
        "Incorporating the latest trends and updates in the DET writing format, ensures you have the most current preparation.",
    },
  ],
});

const contaceUsList = ref([
  {
    icon: "/img/guid/wallet.svg",
    font: "Buying Guide",
    tip: "Please select whether you are buying a speaking guide or a writing guide",
    btn: "Buying Speaking Guide",
    btn1: "Buying Writing Guide",
    id: "1",
  },
  {
    icon: "/img/guid/download.svg",
    font: "Download",
    tip: "After purchasing the course, you can click to download it",
    btn: "Download Speaking Guide",
    btn1: "Download Writing Guide",
    id: "2",
  },
  {
    icon: "/img/guid/book.svg",
    font: "Start Learning",
    tip: "After purchasing the course, you can view audio related to the Speaking Guide.",
    btn: "",
    btn1: "Speaking practice audio",
    id: "3",
  },
]);

const buyMembership = (id: number) => {
  store.stripePay({ vipId: id });
};
</script>

<template>
  <div class="guide_out">
    <div class="guide_wrapper_out">
      <div class="guide_wrapper">
        <div class="one_article">
          <h1 class="title">DET Speaking Exam Excellence: A Comprehensive Guide</h1>
          <div class="article_out">
            <div class="left_img">
              <img src="/img/guid/guide1.png" />
            </div>
            <div class="right_article">
              <div class="one_article_title">{{ article1.title }}</div>
              <div v-for="(item, index) in article1.list" :key="index" class="one_article_detail">
                <span class="small_title">{{ item.smallTitle }}</span>
                <span class="content">{{ item.content }}</span>
              </div>
              <div class="buy_btn">
                <div class="price">
                  <span class="tag">$</span>
                  <span class="price_num">{{ pricedata.speakData.price / 100 }}</span>
                </div>
                <div v-if="user.id" class="btn common_btn_hover_bgColor" @click="buyMembership(pricedata.speakData.id)">
                  <div class="font">Buy Now</div>
                  <div class="icon">
                    <img src="/img/products/white_arrow_right.svg" />
                  </div>
                </div>
                <NuxtLink :to="localePath(`/login`)" v-else class="btn common_btn_hover_bgColor">
                  <div class="font">Buy Now</div>
                  <div class="icon">
                    <img src="/img/products/white_arrow_right.svg" />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="one_article">
          <h2 class="title">DET Writing Exam Excellence: A Comprehensive Guide</h2>
          <div class="article_out">
            <div class="left_img">
              <img src="/img/guid/guide2.png" />
            </div>
            <div class="right_article">
              <div class="one_article_title">{{ article2.title }}</div>
              <div v-for="(item, index) in article2.list" :key="index" class="one_article_detail">
                <span class="small_title">{{ item.smallTitle }}</span>
                <span class="content">{{ item.content }}</span>
              </div>
              <div class="buy_btn">
                <div class="price">
                  <span class="tag">$</span>
                  <span class="price_num">{{ pricedata.writeData.price / 100 }}</span>
                </div>
                <div v-if="user.id" class="btn common_btn_hover_bgColor" @click="buyMembership(pricedata.writeData.id)">
                  <div class="font">Buy Now</div>
                  <div class="icon">
                    <img src="/img/products/white_arrow_right.svg" />
                  </div>
                </div>
                <NuxtLink :to="localePath(`/login`)" v-else class="btn common_btn_hover_bgColor">
                  <div class="font">Buy Now</div>
                  <div class="icon">
                    <img src="/img/products/white_arrow_right.svg" />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="part3_wrapper">
      <div class="part3">
        <div class="title">How to get the guide?</div>
        <div class="three_out">
          <div v-for="(item, index) in contaceUsList" :key="index" class="one_card">
            <div class="icon"><img :src="`${item.icon}`" /></div>
            <img src="/img/guid/Double_Right_Arrow.svg" class="Double_Right_Arrow" alt="" />
            <div class="method_font">{{ item.font }}</div>
            <div class="method_tip">{{ item.tip }}</div>
            <template v-if="item.id === '1'">
              <NuxtLink v-if="item.btn" :to="localePath(`/pricing`)" class="btn">{{
                item.btn
              }}</NuxtLink>
              <NuxtLink v-if="item.btn1" :to="localePath(`/pricing`)" class="btn">{{
                item.btn1
              }}</NuxtLink>
            </template>
            <template v-if="item.id === '2'">
              <template v-if="user.speak === 1">
                <a v-if="item.btn" :href="staticUrlGet(`/${downloadhref.DETSpeakingExamExcellence}`)" class="btn"
                  target="_blank">{{ item.btn }}
                </a>
              </template>
              <template v-else>
                <div v-if="item.btn" class="disbtn">{{ item.btn }}</div>
              </template>
              <template v-if="user.write === 1">
                <a v-if="item.btn1" :href="staticUrlGet(`/${downloadhref.DETWritingExamExcellence2024}`)" class="btn"
                  target="_blank">{{ item.btn1 }}
                </a>
              </template>
              <template v-else>
                <div v-if="item.btn1" class="disbtn">
                  {{ item.btn1 }}
                </div>
              </template>
            </template>
            <template v-if="item.id === '3'">
              <div class="btnNone">Speaking practice audio</div>
              <template v-if="user.speak === 1">
                <NuxtLink class="btn" :to="localePath(`/products/common/listen`)">
                  {{ item.btn1 }}
                </NuxtLink>
              </template>
              <template v-else>
                <div class="disbtn">
                  {{ item.btn1 }}
                </div>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="orange_block_wrapper">
      <div class="orange_block">
        <h2 class="orange_title">Elite Language Educators</h2>
        <div class="team_desc">
          Our distinguished team of language educators, holding esteemed qualifications
          like TESOL and other teaching Certificates, brings a wealth of experience in
          preparing students for major English tests like TOEFL, IELTS, and Duolingo
          English Test (DET). Renowned for their impressive language skills, personalized
          teaching approaches, and innovative methods, they are committed to helping each
          student achieve their highest potential in English proficiency.
        </div>
        <div class="team_img">
          <img src="/img/guid/team_bg.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.guide_out {
  overflow: hidden;
  padding: 0 0px;
  background: linear-gradient(#e7fdec 0, #ffffff 657px, #ffffff 0px, #ffffff);
  .guide_wrapper_out {
    padding: 0px 30px;
    .guide_wrapper {
      // border: 1px red solid;
      max-width: 1200px;
      margin: 0 auto;
    }
  }

  .one_article {
    .title {
      font-weight: 600;
      font-size: 56px;
      color: #201515;
      text-align: center;
      margin: 0;
      margin-top: 56px;
      margin-bottom: 32px;
      @media (max-width: 906px) {
        font-size: 46px;
        margin-top: 36px;
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
    }
    .article_out {
      display: grid;
      grid-template-columns: 0.8fr 1fr;
      @media screen and (max-width: 974px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
        grid-template-rows: 300px auto;
      }

      grid-gap: 40px;
      .left_img {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        @media screen and (max-width: 1248px) {
          align-items: center;
        }
        img {
          width: 100%;
          height: auto;
          border-radius: 4px;
          box-shadow: 16px 16px 16px 0px rgba(0, 0, 0, 0.2);
          @media screen and (max-width: 974px) {
            height: 100%;
            width: auto;
          }
        }
      }
      .right_article {
        .one_article_title {
          font-size: var(--article-font-size);
          color: #201515;
        }
        .one_article_detail {
          margin-top: 16px;
          .small_title {
            font-size: var(--article-font-size);
            color: #201515;
            font-weight: 600;
          }
          .content {
            font-size: var(--article-font-size);
            color: #201515;
          }
        }
        .buy_btn {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-top: 32px;
          grid-gap: 40px;
          @media screen and (max-width: 974px) {
            justify-content: center;
          }

          .price {
            .tag {
              font-size: var(--article-font-size);
              color: #201515;
            }
            .price_num {
              font-size: 40px;
              color: #201515;
            }
          }
          .btn {
            width: fit-content;
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
              font-size: var(--article-font-size);
              color: #ffffff;
            }
            .icon {
              width: 24px;
              height: 24px;
            }
            &:hover {
              .icon {
                transform: translateX(8px);
                transition: all 0.2s;
              }
            }
          }
        }
        @media screen and (max-width: 1000000px) {
          --article-font-size: 18px;
        }
        @media screen and (max-width: 1440px) {
          --article-font-size: 18px;
        }
        @media screen and (max-width: 1280px) {
          --article-font-size: 16px;
        }
        @media screen and (max-width: 768px) {
          --article-font-size: 16px;
        }
        @media screen and (max-width: 414px) {
          --article-font-size: 14px;
        }
      }
    }
  }
  .part3_wrapper {
    // border: 1px red solid;
    padding: 0px 30px;
    background: #fff4f1;
    margin-top: 120px;
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
          position: relative;
          .icon {
            width: 56px;
            height: 56px;
            margin: 0 auto;
          }
          .Double_Right_Arrow {
            width: 40px;
            height: 40px;
            position: absolute;
            top: 20px;
            right: 20px;
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
            display: block;
            padding: 11px;
            text-align: center;
            border-radius: 4px;
            border: 1px solid #201515;
            outline: 1px solid transparent; /* 添加一个透明的外边框 */
            font-weight: 500;
            font-size: 16px;
            color: #201515;
            margin-top: 24px;
            cursor: pointer;

            &:hover {
              border: 2px solid #201515;
              outline: 0px solid #201515;
              padding: 10px;
            }
          }
          .disbtn {
            opacity: 0.3;
            display: block;
            padding: 11px;
            text-align: center;
            border-radius: 4px;
            border: 1px solid #201515;
            outline: 1px solid transparent; /* 添加一个透明的外边框 */
            font-weight: 500;
            font-size: 16px;
            color: #201515;
            margin-top: 24px;
            cursor: not-allowed;
          }
          .btnNone {
            display: block;
            padding: 11px;
            text-align: center;
            border-radius: 4px;
            border: 1px solid #fff;
            font-weight: 500;
            font-size: 16px;
            color: #fff;
            margin-top: 24px;
            // cursor: pointer;
          }
        }
      }
    }
  }
  .orange_block_wrapper {
    padding: 0px 30px;
    background: #f66442;
    .orange_block {
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 100px;
      .orange_title {
        font-weight: 500;
        font-size: 40px;
        color: #ffffff;
        text-align: center;
        margin: 0;
      }
      .team_desc {
        margin: 0 auto;
        font-weight: 400;
        font-size: 20px;
        color: #ffffff;
        max-width: 900px;
        line-height: 28px;
        text-align: center;
        margin-top: 32px;
      }
      .team_img {
        margin: 0 auto;
        max-width: 1078px;
        margin-top: 48px;
        display: flex;

        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>
