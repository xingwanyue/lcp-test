<script lang="ts" setup>
import { urlGet } from '@/utils';
import { useStore } from '@/store';
import vHighscorewriting from '../../components/highscorewriting.vue';
const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);
useServerSeoMeta({
  title: 'DET Practice:Correction Service powered by AI for your Duolingo Learning',
  description:
    'Correction service provided by "AI + Teachers". Get personalized feedback from language experts to improve your responses and strategies for higher DET scores.',
});
// 获取平台数据
const {
  data: platformData = {
    v1Total: 0,
    userTotal: 0,
    questionTotal: 0,
    examTotal: 0,
    correctTotal: 0,
  },
} = (await useFetch(`${api}/common/platformData`, {
  server: false,
  lazy: true,
})) as any;
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
const isLoad5 = ref(false);
const onLoad5 = () => {
  isLoad5.value = true;
};
const isLoad1 = ref(false);
const onLoad1 = () => {
  isLoad1.value = true;
};
</script>
<template>
  <div class="bankW100 service_out">
    <div class="bank_wrapper">
      <div class="bank">
        <div class="banner_wrapper">
          <div class="banner">
            <div class="banner_left">
              <div class="big_title">
                <h1>The best new way to check your writing answers.</h1>
              </div>
              <div class="desc">
                Correction service provided by "AI + Teachers".Your essay will be corrected based on DET scoring rules,
                and you will receive detailed feedback in a moment.
              </div>
              <div class="people_num">
                <div class="icon_continer">
                  <div class="one_icon left0">
                    <img
                      src="/img/products/service_user_icon1.png"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                  <div class="one_icon left24">
                    <img
                      src="/img/products/service_user_icon2.png"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                  <div class="one_icon left48">
                    <img
                      src="/img/products/service_user_icon3.png"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                  <div class="one_icon left72">
                    <img
                      src="/img/products/service_user_icon4.png"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                  <div class="one_icon left96">
                    <img
                      src="/img/products/service_user_icon5.png"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </div>
                <div v-if="platformData" class="font">
                  {{ platformData.correctTotal }} people used Correction service.
                </div>
              </div>
              <NuxtLink v-if="user.id" class="btn common_btn_hover_bgColor" :href="urlGet('/correct')">
                <div class="font">Get Started</div>
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
                :to="localePath(`/login?url=${encodeURIComponent(`${host}/correct`)}`)"
              >
                <div class="font">Get Started</div>
                <div class="icon">
                  <img
                    src="/img/products/white_arrow_right.svg"
                    alt="DET Practice:The best Duolingo English Test Practice platform"
                  />
                </div>
              </NuxtLink>
            </div>
            <div class="banner_right">
              <!-- <img src="/img/products/service_banner.png" /> -->
              <el-image
                v-show="isLoad"
                src="/img/products/service_banner.png"
                alt="The best new way to check your writing answers."
                @load="onLoad"
              />
              <el-skeleton v-show="!isLoad" style="width: 100%; height: 100%" animated>
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
              <!-- <img src="/img/products/service_picture1.png" /> -->
              <el-image
                v-show="isLoad1"
                src="/img/products/service_picture1.png"
                alt="Accurate score"
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
                <h2 class="right_title">Accurate score</h2>
                <div class="right_desc">
                  Submit your essay by inputting or from the question bank, and you can receive a clear and detailed
                  report and score immediately.
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/correct')">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img
                      src="/img/products/yellow_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink v-else class="right_click" :to="localePath(`/login?url=/products/service`)">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img
                      src="/img/products/yellow_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <!-- <img src="/img/products/service_picture2.png" /> -->
              <el-image v-show="isLoad2" src="/img/products/service_picture2.png" alt="Word analysis" @load="onLoad2" />
              <el-skeleton v-show="!isLoad2" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">Word analysis</h2>
                <div class="right_desc">
                  Word count and mining, discovering the highlight words in the composition, enhancing your expression;
                  Detecting and annotating the repeated words in the composition, helping you maintain diversity in your
                  expression.
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/correct')">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img
                      src="/img/products/yellow_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink v-else class="right_click" :to="localePath(`/login?url=/products/service`)">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img
                      src="/img/products/yellow_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_left" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <!-- <img src="/img/products/service_picture3.png" /> -->
              <el-image
                v-show="isLoad3"
                src="/img/products/service_picture3.png"
                alt="Essay correction"
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
                <h2 class="right_title">Essay correction</h2>
                <div class="right_desc">
                  You can immediately see your vocabulary mistakes, grammar errors, and learn how to avoid them.
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/correct')">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img
                      src="/img/products/yellow_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink v-else class="right_click" :to="localePath(`/login?url=/products/service`)">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img
                      src="/img/products/yellow_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <!-- <img src="/img/products/service_picture4.png" /> -->
              <el-image
                v-show="isLoad4"
                src="/img/products/service_picture4.png"
                alt="Professional guidance"
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
                <h2 class="right_title">Professional guidance</h2>
                <div class="right_desc">
                  According to the DET scoring elements, we provide professional guidance to help you identify the
                  weaknesses in your paper and make it perfect.
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/correct')">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img
                      src="/img/products/yellow_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink v-else class="right_click" :to="localePath(`/login?url=/products/service`)">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img
                      src="/img/products/yellow_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_left" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <!-- <img src="/img/products/service_picture5.png" /> -->
              <el-image
                v-show="isLoad5"
                src="/img/products/service_picture5.png"
                alt="Essay polishing"
                @load="onLoad5"
              />
              <el-skeleton v-show="!isLoad5" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <div class="right_title">Essay polishing</div>
                <div class="right_desc">
                  Accurately modify every word and sentence, reasonably adjust the paragraph structure, and revitalize
                  the writing style to further improve your composition and transform it into a high-scoring one.
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/correct')">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img
                      src="/img/products/yellow_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink v-else class="right_click" :to="localePath(`/login?url=/products/service`)">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img
                      src="/img/products/yellow_arrow_right.svg"
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
    <v-Highscorewriting />
  </div>
</template>

<style lang="scss" scoped>
@import './common/prod.scss';
</style>
