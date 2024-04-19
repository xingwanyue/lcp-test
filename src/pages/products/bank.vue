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
  <div class="bankW100 bank_out">
    <div class="bank_wrapper">
      <div class="bank">
        <div class="banner_wrapper">
          <div class="banner">
            <div class="banner_left">
              <div class="big_title">
                <h1>
                  Duolingo Practice Question Bank
                </h1>
              </div>
              <div class="desc">
                "Abundant test questions, Answer analysis & templates, intelligent
                planning , AI speaking evaluation " — achieve score improvement quickly at
                the lowest cost through a scientific approach.
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
                  {{ platformData.userTotal }}+ people used the question bank for
                  practice.
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
              <img src="../../public/img/products/bank_banner.png" />
            </div>
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
                  Providing over <span class="strong">ten thousand questions</span>,
                  covering various types of exams, and continuously updating the question
                  bank. It helps you systematically enhance your test-taking abilities in
                  different question formats.
                </div>
                <div class="right_click">
                  <NuxtLink v-if="user.id" :href="urlGet('/login')" class="font">
                    Start experiencing
                  </NuxtLink>
                  <NuxtLink v-else :to="localePath(`login`)" class="font">
                    Start experiencing
                  </NuxtLink>
                  <div class="arrow">
                    <img src="../../public/img/products/blue_arrow_right.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <img src="../../public/img/products/bank_picture2.png" />
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <div class="right_title">Intelligent planning</div>
                <div class="right_desc">
                  We have developed an intelligent learning knowledge graph to recommend a
                  <span class="strong">personalized practice plan</span> for you. Through
                  intelligent analysis of your daily learning behavior, we suggest the
                  most suitable practice questions to help you study more intelligently.
                </div>
                <div class="right_click">
                  <NuxtLink v-if="user.id" :href="urlGet('/login')" class="font">
                    Start experiencing
                  </NuxtLink>
                  <NuxtLink v-else :to="localePath(`login`)" class="font">
                    Start experiencing
                  </NuxtLink>
                  <div class="arrow">
                    <img src="../../public/img/products/blue_arrow_right.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="one_card img_left" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <img src="../../public/img/products/bank_picture3.png" />
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <div class="right_title">AI speaking evaluati</div>
                <div class="right_desc">
                  <span class="strong"> AI-based spoken language scoring</span> makes oral
                  practice more efficient. Once you submit a spoken language question, you
                  instantly receive a comprehensive assessment of your oral skills.
                </div>
                <div class="right_click">
                  <NuxtLink v-if="user.id" :href="urlGet('/login')" class="font">
                    Start experiencing
                  </NuxtLink>
                  <NuxtLink v-else :to="localePath(`login`)" class="font">
                    Start experiencing
                  </NuxtLink>
                  <div class="arrow">
                    <img src="../../public/img/products/blue_arrow_right.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <img src="../../public/img/products/bank_picture4.png" />
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <div class="right_title">Answer analysis</div>
                <div class="right_desc">
                  Providing <span class="strong"> detailed answer explanations</span> to
                  help you gain a profound understanding of key concepts and solution
                  approaches. Through these explanations, you not only can answer
                  questions correctly but also enhance your grasp of knowledge points,
                  improving your learning effectiveness.
                </div>
                <div class="right_click">
                  <NuxtLink v-if="user.id" :href="urlGet('/login')" class="font">
                    Start experiencing
                  </NuxtLink>
                  <NuxtLink v-else :to="localePath(`login`)" class="font">
                    Start experiencing
                  </NuxtLink>
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
@import "./common/prod.scss";
</style>
