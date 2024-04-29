<script lang="ts" setup>
import { urlGet, host, domain } from '@/utils';
import { useStore } from '@/store';
import vEasyexam from '../components/easyexam.vue';

const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);
useServerSeoMeta({
  title: 'DET Practice: Full-Scale Mock Exam for Realistic Preparation',
  description:
    'Experience the closest simulation to the real Duolingo English Test with our full-scale mock exams. Get accurate scoring, comprehensive reports, and fast feedback to identify and work on your weaknesses.',
});
useHead({
  link: [{ rel: 'canonical', href: `https://www.${domain}/mock-exam` }],
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
</script>
<template>
  <div class="bankW100 mock_out">
    <div class="bank_wrapper">
      <div class="bank">
        <div class="banner_wrapper">
          <div class="banner">
            <div class="banner_left">
              <div class="big_title">
                <h1>Duolingo English Test 1:1 Mock Exam</h1>
              </div>
              <div class="desc">
                Immerse yourself in a true-to-life examination experience with our full-scale mock exams. Get a taste of
                the actual testing process before the real deal and quickly receive scores and detailed diagnostic
                reports to pinpoint areas for improvement.
              </div>
              <div class="people_num">
                <div class="icon_continer">
                  <div class="one_icon left0">
                    <img
                      src="/img/products/mock_user_icon1.png"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                  <div class="one_icon left24">
                    <img
                      src="/img/products/mock_user_icon2.png"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                  <div class="one_icon left48">
                    <img
                      src="/img/products/mock_user_icon3.png"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                  <div class="one_icon left72">
                    <img
                      src="/img/products/mock_user_icon4.png"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                  <div class="one_icon left96">
                    <img
                      src="/img/products/mock_user_icon5.png"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </div>
                <div v-if="platformData" class="font">
                  {{ platformData.examTotal }} learners have taken our mock exams for self-assessment and practice.
                </div>
              </div>
              <NuxtLink v-if="user.id" class="btn common_btn_hover_bgColor" :href="urlGet('/exam')">
                <div class="font">Mock Now</div>

                <div class="icon">
                  <img
                    src="/img/products/white_arrow_right.svg"
                    alt="DET Practice:The best Duolingo English Test Practice platform"
                  />
                </div>
              </NuxtLink>
              <NuxtLink
                v-else
                :to="localePath(`/login?url=${encodeURIComponent(`${host}/exam`)}`)"
                class="btn common_btn_hover_bgColor"
              >
                <div class="font">Mock Now</div>

                <div class="icon">
                  <img
                    src="/img/products/white_arrow_right.svg"
                    alt="DET Practice:The best Duolingo English Test Practice platform"
                  />
                </div>
              </NuxtLink>
            </div>
            <div class="banner_right">
              <!-- <img src="/img/products/mock_banner.png" /> -->
              <el-image
                v-show="isLoad"
                src="/img/products/mock_banner.png"
                alt="Duolingo 1:1 Full-scale Mock Exam"
                @load="onLoad"
              />
              <el-skeleton v-show="!isLoad" style="width: 100%; height: 466px" animated>
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
              <!-- <img src="/img/products/mock_picture1.png" /> -->
              <el-image
                v-show="isLoad1"
                src="/img/products/mock_picture1.png"
                alt="Algorithmic Intelligence"
                @load="onLoad1"
              />
              <el-skeleton v-show="!isLoad1" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">Algorithmic Intelligence</h2>
                <div class="right_desc">
                  Experience real exam conditions with our advanced adaptive testing algorithm. Quickly master various
                  question types and gain precise assessments.
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/exam')">
                  <div class="font">Mock Now</div>
                  <div class="arrow">
                    <img
                      src="/img/products/orange_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(`${host}/exam`)}`)"
                >
                  <div class="font">Mock Now</div>
                  <div class="arrow">
                    <img
                      src="/img/products/orange_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <!-- <img src="/img/products/mock_picture2.png" /> -->
              <el-image
                v-show="isLoad2"
                src="/img/products/mock_picture2.png"
                alt="Precise Scoring & In-Depth Reports"
                @load="onLoad2"
              />
              <el-skeleton v-show="!isLoad2" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">Precise Scoring & In-Depth Reports</h2>
                <div class="right_desc">
                  Detailed mock exam reports provide precise diagnosis and analysis of current strengths and weaknesses,
                  automatically updating study plans to enhance exam preparation efficiency.
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/exam')">
                  <div class="font">Mock Now</div>
                  <div class="arrow">
                    <img
                      src="/img/products/orange_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(`${host}/exam`)}`)"
                >
                  <div class="font">Mock Now</div>
                  <div class="arrow">
                    <img
                      src="/img/products/orange_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_left" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <!-- <img src="/img/products/mock_picture3.png" /> -->
              <el-image
                v-show="isLoad3"
                src="/img/products/mock_picture3.png"
                alt="Convenient Exam Experience"
                @load="onLoad3"
              />
              <el-skeleton v-show="!isLoad3" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">Convenient Exam Experience</h2>
                <div class="right_desc">
                  Enjoy flexible test-taking on your schedule, no appointments needed. Start your mock exam immediately
                  after purchase and have the freedom to pause or resume anytime.
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/exam')">
                  <div class="font">Mock Now</div>
                  <div class="arrow">
                    <img
                      src="/img/products/orange_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(`${host}/exam`)}`)"
                >
                  <div class="font">Mock Now</div>
                  <div class="arrow">
                    <img
                      src="/img/products/orange_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <!-- <img src="/img/products/mock_picture4.png" /> -->
              <el-image
                v-show="isLoad4"
                src="/img/products/mock_picture4.png"
                alt="Rapid Score Reporting"
                @load="onLoad4"
              />
              <el-skeleton v-show="!isLoad4" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">Rapid Score Reporting</h2>
                <div class="right_desc">
                  Get your mock exam results delivered within 24 hours, fast-tracking your progress review.
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/exam')">
                  <div class="font">Mock Now</div>
                  <div class="arrow">
                    <img
                      src="/img/products/orange_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(`${host}/exam`)}`)"
                >
                  <div class="font">Mock Now</div>
                  <div class="arrow">
                    <img
                      src="/img/products/orange_arrow_right.svg"
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
    <v-easyexam />
  </div>
</template>

<style lang="scss" scoped>
@import './products/common/prod.scss';
</style>
