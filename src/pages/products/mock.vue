<script lang="ts" setup>
import { urlGet } from "@/utils";
import { useStore } from "@/store";
import vEasyexam from "../../components/easyexam.vue";
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

// 将数字格式化 306281变为306k 3062811变为3061k
// const toThousands = (num) => {
//   if (!num) {
//     return 0;
//   }
//   let result = "";
//   const numStr = num.toString();
//   for (let i = 0; i < numStr.length; i++) {
//     if (i % 3 === 0 && i !== 0) {
//       result = ``;
//     }
//     result = numStr[numStr.length - i - 1] + result;
//   }
//   return result;
// };
</script>
<template>
  <div class="bankW100 mock_out">
    <div class="bank_wrapper">
      <div class="bank">
        <div class="banner_wrapper">
          <div class="banner">
            <div class="banner_left">
              <div class="big_title">
                <h1>Duolingo 1:1 Full-scale Mock Exam</h1>
              </div>
              <div class="desc">
                Fully recreate the formal examination environment, allowing you to
                experience the examination process in advance. Receive scores and
                diagnostic reports within a short period, identify weaknesses, and make
                targeted breakthroughs.
              </div>
              <div class="people_num">
                <div class="icon_continer">
                  <div class="one_icon left0">
                    <img src="/img/products/mock_user_icon1.png" />
                  </div>
                  <div class="one_icon left24">
                    <img src="/img/products/mock_user_icon2.png" />
                  </div>
                  <div class="one_icon left48">
                    <img src="/img/products/mock_user_icon3.png" />
                  </div>
                  <div class="one_icon left72">
                    <img src="/img/products/mock_user_icon4.png" />
                  </div>
                  <div class="one_icon left96">
                    <img src="/img/products/mock_user_icon5.png" />
                  </div>
                </div>
                <div v-if="platformData" class="font">
                  {{ platformData.examTotal }} people used mock exams for self-assessment.
                  practice.
                </div>
              </div>
              <NuxtLink
                v-if="user.id"
                class="btn common_btn_hover_bgColor"
                :href="urlGet('/exam')"
              >
                <div class="font">Mock Now</div>

                <div class="icon">
                  <img src="/img/products/white_arrow_right.svg" />
                </div>
              </NuxtLink>
              <NuxtLink
                v-else
                :to="localePath(`login`)"
                class="btn common_btn_hover_bgColor"
              >
                <div class="font">Mock Now</div>

                <div class="icon">
                  <img src="/img/products/white_arrow_right.svg" />
                </div>
              </NuxtLink>
            </div>
            <div class="banner_right">
              <img src="/img/products/mock_banner.png" />
            </div>
          </div>
        </div>
        <div class="content">
          <div class="one_card img_left">
            <div class="one_card_left">
              <img src="/img/products/mock_picture1.png" />
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <div class="right_title">Algorithmic intelligence</div>
                <div class="right_desc">
                  Intelligent adaptive question generation algorithm covering all question
                  types, replicating the real examination process.
                </div>
                <div class="right_click">
                  <NuxtLink v-if="user.id" :href="urlGet('/login')" class="font">
                    Start experiencing
                  </NuxtLink>
                  <NuxtLink v-else :to="localePath(`login`)" class="font">
                    Start experiencing
                  </NuxtLink>
                  <div class="arrow">
                    <img src="/img/products/orange_arrow_right.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <img src="/img/products/mock_picture2.png" />
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <div class="right_title">Accurate Scoring & Comprehensive Reports</div>
                <div class="right_desc">
                  Detailed mock exam reports provide precise diagnosis and analysis of
                  current strengths and weaknesses, automatically updating study plans to
                  enhance exam preparation efficiency.
                </div>
                <div class="right_click">
                  <NuxtLink v-if="user.id" :href="urlGet('/login')" class="font">
                    Start experiencing
                  </NuxtLink>
                  <NuxtLink v-else :to="localePath(`login`)" class="font">
                    Start experiencing
                  </NuxtLink>
                  <div class="arrow">
                    <img src="/img/products/orange_arrow_right.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="one_card img_left" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <img src="/img/products/mock_picture3.png" />
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <div class="right_title">Convenient Exam Experience</div>
                <div class="right_desc">
                  No need for exam appointments, participate in tests anytime, anywhere
                  after purchase.If necessary, you can pause or exit the exam midway.
                </div>
                <div class="right_click">
                  <NuxtLink v-if="user.id" :href="urlGet('/login')" class="font">
                    Start experiencing
                  </NuxtLink>
                  <NuxtLink v-else :to="localePath(`login`)" class="font">
                    Start experiencing
                  </NuxtLink>
                  <div class="arrow">
                    <img src="/img/products/orange_arrow_right.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <img src="/img/products/mock_picture4.png" />
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <div class="right_title">Quick Score Release</div>
                <div class="right_desc">
                  Scores are released within 24 hours after completing the mock exam.
                </div>
                <div class="right_click">
                  <NuxtLink v-if="user.id" :href="urlGet('/login')" class="font">
                    Start experiencing
                  </NuxtLink>
                  <NuxtLink v-else :to="localePath(`login`)" class="font">
                    Start experiencing
                  </NuxtLink>
                  <div class="arrow">
                    <img src="/img/products/orange_arrow_right.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-easyexam />
  </div>
</template>

<style lang="scss" scoped>
@import "./common/prod.scss";
</style>
