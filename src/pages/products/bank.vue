<script lang="ts" setup>
import { urlGet } from '@/utils';
import { useStore } from '@/store';
import vEmbark from '../../components/embark.vue';
const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);
useSeoMeta({
  title: 'DET Practice:The most powerful website for Duolingo practice test. ',
  description:
    'The most powerful website for Duolingo practice. Our test bank includes thousands of questions for extensive training, complete with detailed explanations and AI analysis to help you succeed.',
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
                "Abundant test questions, Answer analysis & templates, intelligent planning , AI speaking evaluation " —
                achieve score improvement quickly at the lowest cost through a scientific approach.
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
                  {{ platformData.userTotal }} people used the question bank for practice.
                </div>
              </div>
              <NuxtLink v-if="user.id" class="btn common_btn_hover_bgColor" :to="urlGet('/questions')">
                <div class="font">Practice For Free</div>
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
                <div class="font">Practice For Free</div>
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
              <el-image
                v-show="isLoad"
                src="/img/products/bank_banner.png"
                alt="Duolingo Practice Question Bank"
                @load="onLoad"
              />
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
              <!-- <img src="/img/products/bank_picture1.png" /> -->
              <el-image
                v-show="isLoad1"
                src="/img/products/bank_picture1.png"
                alt="Abundant test questions"
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
                <h2 class="right_title">Abundant test questions</h2>
                <div class="right_desc">
                  Providing over <span class="strong">ten thousand questions</span>, covering various types of exams,
                  and continuously updating the question bank. It helps you systematically enhance your test-taking
                  abilities in different question formats.
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/questions')">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img
                      src="/img/products/blue_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink v-else class="right_click" :to="localePath(`/login?url=/products/bank`)">
                  <div class="font">Start experiencing</div>
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
              <!-- <img src="/img/products/bank_picture2.png" /> -->
              <el-image
                v-show="isLoad2"
                src="/img/products/bank_picture2.png"
                alt="Intelligent planning"
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
                <h2 class="right_title">Intelligent planning</h2>
                <div class="right_desc">
                  We have developed an intelligent learning knowledge graph to recommend a
                  <span class="strong">personalized practice plan</span> for you. Through intelligent analysis of your
                  daily learning behavior, we suggest the most suitable practice questions to help you study more
                  intelligently.
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/questions')">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img
                      src="/img/products/blue_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink v-else class="right_click" :to="localePath(`/login?url=/products/bank`)">
                  <div class="font">Start experiencing</div>
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
              <!-- <img src="/img/products/bank_picture3.png" /> -->
              <el-image
                v-show="isLoad3"
                src="/img/products/bank_picture3.png"
                alt="AI speaking evaluation"
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
                <h2 class="right_title">AI speaking evaluation</h2>
                <div class="right_desc">
                  <span class="strong"> AI-based spoken language scoring</span> makes oral practice more efficient. Once
                  you submit a spoken language question, you instantly receive a comprehensive assessment of your oral
                  skills.
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/questions')">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img
                      src="/img/products/blue_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink v-else class="right_click" :to="localePath(`/login?url=/products/bank`)">
                  <div class="font">Start experiencing</div>
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
              <!-- <img src="/img/products/bank_picture4.png" /> -->
              <el-image v-show="isLoad4" src="/img/products/bank_picture4.png" alt="Answer analysis" @load="onLoad4" />
              <el-skeleton v-show="!isLoad4" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">Answer analysis</h2>
                <div class="right_desc">
                  Providing <span class="strong"> detailed answer explanations</span> to help you gain a profound
                  understanding of key concepts and solution approaches. Through these explanations, you not only can
                  answer questions correctly but also enhance your grasp of knowledge points, improving your learning
                  effectiveness.
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/questions')">
                  <div class="font">Start experiencing</div>
                  <div class="arrow">
                    <img
                      src="/img/products/blue_arrow_right.svg"
                      alt="DET Practice:The best Duolingo English Test Practice platform"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink v-else class="right_click" :to="localePath(`/login?url=/products/bank`)">
                  <div class="font">Start experiencing</div>
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
@import './common/prod.scss';
</style>
