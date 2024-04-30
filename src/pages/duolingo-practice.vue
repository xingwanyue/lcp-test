<script lang="ts" setup>
import { urlGet, domain, cdn, host } from '@/utils';
import { useStore } from '@/store';
import vEmbark from '../components/embark.vue';
const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);
useServerSeoMeta({
  title: 'DET Practice - The best platform for Duolingo practice test',
  description:
    'Our DET test bank includes thousands of questions for extensive training, complete with detailed explanations and AI analysis to help you succeed.',
});
useHead({
  link: [{ rel: 'canonical', href: `https://www.${domain}/duolingo-practice` }],
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
  server: false,
  lazy: true,
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
const isLoad = ref(false);
const onLoad = () => {
  isLoad.value = true;
};
const isLoad1 = ref(false);
const onLoad1 = () => {
  isLoad1.value = true;
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
// 引入cdn图片
const bank_banner = `${cdn}/store/portal/products/bank_banner.png`;
const bank_picture1 = `${cdn}/store/portal/products/bank_picture1.png`;
const bank_picture2 = `${cdn}/store/portal/products/bank_picture2.png`;
const bank_picture3 = `${cdn}/store/portal/products/bank_picture3.png`;
const bank_picture4 = `${cdn}/store/portal/products/bank_picture4.png`;
</script>
<template>
  <div class="bankW100 bank_out">
    <div class="bank_wrapper">
      <div class="bank">
        <div class="banner_wrapper">
          <div class="banner">
            <div class="banner_left">
              <div class="big_title">
                <h1>Duolingo Practice Question Bank</h1>
              </div>
              <div class="desc">
                Gain access to an extensive collection of test questions, enhanced with answer analysis, templates,
                AI-driven speaking evaluations, and smart planning. Accelerate your score improvement efficiently and
                affordably with our AI-powered approach.
              </div>
              <div class="people_num">
                <div class="icon_continer">
                  <div class="one_icon left0">
                    <img
                      src="/img/products/bank_user_icon1.png"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                  <div class="one_icon left24">
                    <img
                      src="/img/products/bank_user_icon2.png"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                  <div class="one_icon left48">
                    <img
                      src="/img/products/bank_user_icon3.png"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                  <div class="one_icon left72">
                    <img
                      src="/img/products/bank_user_icon4.png"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                  <div class="one_icon left96">
                    <img
                      src="/img/products/bank_user_icon5.png"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </div>
                <div v-if="platformData" class="font">
                  {{ platformData.userTotal }} learners have used our question bank for DET preparation.
                </div>
              </div>
              <NuxtLink v-if="user.id" class="btn common_btn_hover_bgColor" :to="urlGet('/questions')">
                <div class="font">Start Practicing Now</div>
                <div class="icon">
                  <img
                    src="/img/products/white_arrow_right.svg"
                    alt="DET Practice:The best Duolingo English Test Practice platform"
                  />
                </div>
              </NuxtLink>
              <NuxtLink
                v-else
                class="btn common_btn_hover_bgColor"
                :to="localePath(`/login?url=${encodeURIComponent(`${host}/questions`)}`)"
              >
                <div class="font">Start Practicing Now</div>
                <div class="icon">
                  <img
                    src="/img/products/white_arrow_right.svg"
                    alt="DET Practice:The best Duolingo English Test Practice platform"
                  />
                </div>
              </NuxtLink>
            </div>
            <div class="banner_right">
              <!-- <img src="/img/products/bank_banner.png" /> -->
              <el-image v-show="isLoad" :src="bank_banner" alt="Duolingo Practice Question Bank" @load="onLoad" />
              <el-skeleton v-show="!isLoad" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="one_card img_left">
            <div class="one_card_left">
              <el-image v-show="isLoad1" :src="bank_picture1" alt="Extensive Question Library" @load="onLoad1" />
              <el-skeleton v-show="!isLoad1" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">Extensive Question Library</h2>
                <div class="right_desc">
                  Explore our extensive library of over 10,000 questions across diverse exam types, constantly refreshed
                  to keep your practice up-to-date. Our question bank is designed to systematically bolster your
                  test-taking skills across various question formats.
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/questions')">
                  <div class="font">Dive Into Practice</div>
                  <div class="arrow">
                    <img
                      src="/img/products/blue_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(`${host}/questions`)}`)"
                >
                  <div class="font">Dive Into Practice</div>
                  <div class="arrow">
                    <img
                      src="/img/products/blue_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <el-image v-show="isLoad2" :src="bank_picture2" alt="Smart Planning for Success" @load="onLoad2" />
              <el-skeleton v-show="!isLoad2" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">Smart Planning for Success</h2>
                <div class="right_desc">
                  <!-- We have developed an intelligent learning knowledge graph to recommend a
                  <span class="strong">personalized practice plan</span> for you. Through intelligent analysis of your
                  daily learning behavior, we suggest the most suitable practice questions to help you study more
                  intelligently. -->
                  Experience smart learning with our AI-generated study plans tailored to your needs. Our intelligent
                  system analyses your daily learning patterns to curate a selection of practice questions that best
                  facilitate your progress.
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/questions')">
                  <div class="font">Start Smart Study Journey</div>
                  <div class="arrow">
                    <img
                      src="/img/products/blue_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(`${host}/questions`)}`)"
                >
                  <div class="font">Start Smart Study Journey</div>
                  <div class="arrow">
                    <img
                      src="/img/products/blue_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_left" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <el-image v-show="isLoad3" :src="bank_picture3" alt="AI Speaking Evaluation" @load="onLoad3" />
              <el-skeleton v-show="!isLoad3" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">AI Speaking Evaluation</h2>
                <div class="right_desc">
                  Enhance your oral proficiency with our AI-driven speaking evaluations. Submit your response to a
                  spoken language question and instantly receive a detailed analysis of your speaking skills, helping
                  you improve with precision and speed.
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/questions')">
                  <div class="font">Begin Your Evaluation</div>
                  <div class="arrow">
                    <img
                      src="/img/products/blue_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(`${host}/questions`)}`)"
                >
                  <div class="font">Begin Your Evaluation</div>
                  <div class="arrow">
                    <img
                      src="/img/products/blue_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <el-image v-show="isLoad4" :src="bank_picture4" alt="Answer Analysis" @load="onLoad4" />
              <el-skeleton v-show="!isLoad4" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">Answer Analysis</h2>
                <div class="right_desc">
                  Delve into comprehensive answer explanations that deepen your understanding of essential concepts and
                  problem-solving techniques. Our detailed analyses don’t just guide you to the correct answers—they
                  expand your knowledge and boost your study efficiency.
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/questions')">
                  <div class="font">Explore Answer Insights</div>
                  <div class="arrow">
                    <img
                      src="/img/products/blue_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(`${host}/questions`)}`)"
                >
                  <div class="font">Explore Answer Insights</div>
                  <div class="arrow">
                    <img
                      src="/img/products/blue_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
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
@import './products/common/prod.scss';
</style>
