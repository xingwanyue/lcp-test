<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { useStore } from '@/store';
import { staticUrlGet, domain, cdn } from '@/utils';
import Vtwocourse from '../components/courseBottom.vue';
import Vcoursezh from '../components/courseZonghe.vue';
const guide1 = `${cdn}/store/portal/guid/guide111.png`;
const guide2 = `${cdn}/store/portal/guid/guide222.png`;
useSeoMeta({
  title: t('courses.seometa.title'),
  description: t('courses.seometa.description'),
});
useHead({
  link: [
    { rel: 'canonical', href: `https://www.${domain}/courses` },
    { rel: 'alternate', href: `https://www.${domain}/courses`, hreflang: 'en-GB' },
  ],
});
const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);
const isVip = computed(() => store.isVip);
const { data: pricedata } = (await useFetch(`${api}/common/vips`, {
  server: false,
  lazy: true,
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
  server: false,
  lazy: true,
  transform: (data: any) => {
    const { DETSpeakingExamExcellence, DETWritingExamExcellence2024 } = data;
    return { DETSpeakingExamExcellence, DETWritingExamExcellence2024 };
  },
})) as any;

const article1 = ref({
  title: t('courses.article1.title'),
  list: [
    {
      content: t('courses.article1.list[0].content'),
    },
    {
      content: t('courses.article1.list[1].content'),
    },
    {
      content: t('courses.article1.list[2].content'),
    },
    {
      content: t('courses.article1.list[3].content'),
    },
    {
      content: t('courses.article1.list[4].content'),
    },
    {
      content: t('courses.article1.list[5].content'),
    },
    {
      content: t('courses.article1.list[6].content'),
    },
    {
      content: t('courses.article1.list[7].content'),
    },
    {
      content: t('courses.article1.list[8].content'),
    },
  ],
});
const article2 = ref({
  title: t('courses.article2.title'),
  list: [
    {
      content: t('courses.article2.list[0].content'),
    },
    {
      content: t('courses.article2.list[1].content'),
    },
    {
      content: t('courses.article2.list[2].content'),
    },
    {
      content: t('courses.article2.list[3].content'),
    },
    {
      content: t('courses.article2.list[4].content'),
    },
    {
      content: t('courses.article2.list[5].content'),
    },
    {
      content: t('courses.article2.list[6].content'),
    },
    {
      content: t('courses.article2.list[7].content'),
    },
  ],
});

const contaceUsList = ref([
  {
    icon: '/img/guid/wallet.svg',
    font: t('courses.contaceUsList[0].font'),
    tip: t('courses.contaceUsList[0].tip'),
    btn: t('courses.contaceUsList[0].btn'),
    btn1: t('courses.contaceUsList[0].btn1'),
    id: '1',
  },
  {
    icon: '/img/guid/download.svg',
    font: t('courses.contaceUsList[1].font'),
    tip: t('courses.contaceUsList[1].tip'),
    btn: t('courses.contaceUsList[1].btn'),
    btn1: t('courses.contaceUsList[1].btn1'),
    id: '2',
  },
  {
    icon: '/img/guid/book.svg',
    font: t('courses.contaceUsList[2].font'),
    tip: t('courses.contaceUsList[2].tip'),
    btn: '',
    btn1: t('courses.contaceUsList[2].btn1'),
    id: '3',
  },
]);
// 0 未购买 1 已购买sepaking 2 已购买writing 3 已购买sepaking和writing
const buystatus = ref(3);

let zongheData = ref({
  img: '/img/courses/courses_group.webp',
  price: 10,
  priceid: '123',
  title: 'DET Ultimate Exam Mastery Package',
  desc: 'The course package includes the "<span class="yellow">DET Speaking Exam Excellence</span>" and the "<span class="yellow">DET Writing Exam Excellence</span>." Upon subscription, you will be able to download the guides at any time and study them with ease, anytime and anywhere. Buy Now Subscription takes effect immediately. Scroll up on the page, view, and click to download the course to start learning.',
  isbuyed: false,
});
let bottomData = ref([
  {
    img: guide1,
    price: 10,
    priceid: 123,
    title: 'DET Speaking Exam Excellence: A Comprehensive Guide',
    article: article1,
    isbuyed: false,
  },
  {
    img: guide2,
    price: 10,
    priceid: 123,
    title: 'DET Writing Exam Excellence: A Comprehensive Guide',
    article: article2,
    isbuyed: false,
  },
]);
// 0 未购买 1 已购买sepaking 2 已购买writing 3 已购买sepaking和writing
// user 的转态 支付后会更新
if (user.value.speak === 1 && user.value.write === 1) {
  buystatus.value = 3;
} else if (user.value.speak === 1) {
  buystatus.value = 1;
} else if (user.value.write === 1) {
  buystatus.value = 2;
} else {
  buystatus.value = 0;
}
if (buystatus.value === 1) {
  zongheData.value = {
    img: guide1,
    price: 10,
    priceid: '123',
    title: 'DET Speaking Exam Excellence: A Comprehensive Guide',
    desc: '',
    isbuyed: true,
  };
  bottomData.value = [
    {
      img: guide2,
      price: 10,
      priceid: 123,
      title: 'DET Writing Exam Excellence: A Comprehensive Guide',
      article: article2,
      isbuyed: false,
    },
  ];
} else if (buystatus.value === 2) {
  zongheData.value = {
    img: guide2,
    price: 10,
    priceid: '123',
    title: 'DET Writing Exam Excellence: A Comprehensive Guide',
    desc: '',
    isbuyed: true,
  };
  bottomData.value = [
    {
      img: guide1,
      price: 10,
      priceid: 123,
      title: 'DET Speaking Exam Excellence: A Comprehensive Guide',
      article: article1,
      isbuyed: false,
    },
  ];
} else if (buystatus.value === 3) {
  zongheData.value = {
    img: guide1,
    price: 10,
    priceid: '123',
    title: 'DET Ultimate Exam Mastery Package',
    desc: 'The course package includes the "DET Speaking Exam Excellence" and the "DET Writing Exam Excellence." Upon subscription, you will be able to download the guides at any time and study them with ease, anytime and anywhere. Buy Now Subscription takes effect immediately. Scroll up on the page, view, and click to download the course to start learning.',
    isbuyed: true,
  };
  bottomData.value = [
    {
      img: guide1,
      price: 0,
      priceid: 123,
      title: 'DET Speaking Exam Excellence: A Comprehensive Guide',
      article: [],
      isbuyed: true,
    },
    {
      img: guide2,
      price: 0,
      priceid: 123,
      title: 'DET Writing Exam Excellence: A Comprehensive Guide',
      article: [],
      isbuyed: true,
    },
  ];
}

const buyMembership = (id: number) => {
  store.stripePay({ vipId: id });
};

// 引入cdn图片

const team_bg = `${cdn}/store/portal/guid/team_bg.png`;
</script>

<template>
  <div class="guide_out">
    <div class="guide_wrapper_out">
      <div class="guide_wrapper">
        <template v-if="buystatus === 0">
          <Vcoursezh :zongheData="zongheData" :buystatus="buystatus" />
          <div class="you_can">You can also buy them separately :</div>
          <Vtwocourse :bottomData="bottomData" :buystatus="buystatus"
        /></template>
        <template v-if="buystatus === 1">
          <Vcoursezh :zongheData="zongheData" :buystatus="buystatus" />
          <div class="you_can">You can buy DET Writing Exam Excellence for $5 :</div>
          <Vtwocourse :bottomData="bottomData" :buystatus="buystatus"
        /></template>
        <template v-if="buystatus === 2">
          <Vcoursezh :zongheData="zongheData" :buystatus="buystatus" />
          <div class="you_can">You can buy DET Writing Exam Excellence for $5 :</div>
          <Vtwocourse :bottomData="bottomData" :buystatus="buystatus"
        /></template>
        <template v-if="buystatus === 3">
          <Vcoursezh :zongheData="zongheData" :buystatus="buystatus">
            <template #footer>
              <Vtwocourse :bottomData="bottomData" :buystatus="buystatus" />
            </template>
          </Vcoursezh>
        </template>
      </div>
    </div>

    <div class="part3_wrapper">
      <div class="part3">
        <div class="title">{{ $t('courses.pagefont.How_to') }}</div>
        <div class="three_out">
          <div v-for="(item, index) in contaceUsList" :key="index" class="one_card">
            <div class="icon">
              <img :src="`${item.icon}`" :alt="$t('courses.pagefont.alt')" />
            </div>
            <img
              src="/img/guid/Double_Right_Arrow.svg"
              class="Double_Right_Arrow"
              :alt="$t('courses.pagefont.Double_Right_Arrow')"
            />
            <div class="method_font">{{ item.font }}</div>
            <div class="method_tip">{{ item.tip }}</div>
            <template v-if="item.id === '1'">
              <template v-if="user.id">
                <div
                  v-if="item.btn"
                  @click="buyMembership(pricedata?.speakData?.id)"
                  :class="user.speak === 1 ? 'btn disbtn' : 'btn'"
                >
                  {{ item.btn }}
                </div>
                <div
                  v-if="item.btn1"
                  @click="buyMembership(pricedata?.writeData?.id)"
                  :class="user.write === 1 ? 'btn disbtn' : 'btn'"
                >
                  {{ item.btn1 }}
                </div>
              </template>
              <template v-else>
                <NuxtLink v-if="item.btn" :to="localePath(`/login?url=/courses`)" class="btn">
                  {{ item.btn }}
                </NuxtLink>
                <NuxtLink v-if="item.btn1" :to="localePath(`/login?url=/courses`)" class="btn"
                  >{{ item.btn1 }}
                </NuxtLink>
              </template>
            </template>

            <template v-if="item.id === '2'">
              <template v-if="user.id">
                <template v-if="user.speak === 1">
                  <a
                    v-if="item.btn"
                    :href="staticUrlGet(`/${downloadhref.DETSpeakingExamExcellence}`)"
                    class="btn"
                    target="_blank"
                    >{{ item.btn }}
                  </a>
                </template>
                <template v-else>
                  <div v-if="item.btn" class="disbtn">{{ item.btn }}</div>
                </template>
                <template v-if="user.write === 1">
                  <a
                    v-if="item.btn1"
                    :href="staticUrlGet(`/${downloadhref.DETWritingExamExcellence2024}`)"
                    class="btn"
                    target="_blank"
                    >{{ item.btn1 }}
                  </a>
                </template>
                <template v-else>
                  <div v-if="item.btn1" class="disbtn">
                    {{ item.btn1 }}
                  </div>
                </template>
              </template>
              <template v-else>
                <NuxtLink class="btn" :to="localePath(`/login?url=/courses`)">
                  {{ item.btn }}
                </NuxtLink>
                <NuxtLink class="btn" :to="localePath(`/login?url=/courses`)">
                  {{ item.btn1 }}
                </NuxtLink>
              </template>
            </template>
            <template v-if="item.id === '3'">
              <div class="btnNone">{{ $t('courses.pagefont.spa') }}</div>
              <template v-if="user.id">
                <template v-if="user.speak === 1">
                  <NuxtLink class="btn" :to="localePath(`/listen`)">
                    {{ item.btn1 }}
                  </NuxtLink>
                </template>
                <template v-else>
                  <div class="disbtn">
                    {{ item.btn1 }}
                  </div>
                </template>
              </template>
              <template v-else>
                <NuxtLink class="btn" :to="localePath(`/login?url=/listen`)">
                  {{ item.btn1 }}
                </NuxtLink></template
              >
            </template>
          </div>
        </div>
        <div class="tips">
          {{ $t('courses.pagefont.tips') }}
        </div>
      </div>
    </div>
    <div class="orange_block_wrapper">
      <div class="orange_block">
        <div class="orange_title">{{ $t('courses.pagefont.orange_title') }}</div>
        <div class="team_desc">
          {{ $t('courses.pagefont.team_desc') }}
        </div>
        <div class="team_img">
          <img :src="team_bg" :alt="$t('courses.pagefont.Elite_Language_Educators')" />
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
    @media (max-width: 450px) {
      padding: 0 15px;
    }
    .guide_wrapper {
      // border: 1px red solid;
      max-width: 1200px;
      margin: 0 auto;
      .you_can {
        margin-bottom: 16px;
      }
    }
  }

  .part3_wrapper {
    padding: 0px 30px;
    @media screen and (max-width: 450px) {
      padding: 0px 15px;
    }
    background: #fff4f1;
    margin-top: 120px;
    @media screen and (max-width: 450px) {
      margin-top: 60px;
    }
    .part3 {
      padding: 100px 0;
      padding-bottom: 92px;
      @media screen and (max-width: 450px) {
        padding: 50px 0;
      }

      max-width: 1200px;
      margin: 0 auto;
      .title {
        font-weight: 500;
        font-size: 40px;
        color: #201515;
        text-align: center;
        margin-bottom: 64px;
        @media screen and (max-width: 450px) {
          font-size: 20px;
          margin-bottom: 32px;
        }
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
            // border: 1px red solid;
            min-height: 36px;
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
      .tips {
        font-weight: 400;
        font-size: 14px;
        color: #666666;
        margin-top: 16px;
        line-height: 22px;
      }
    }
  }
  .orange_block_wrapper {
    padding: 0px 30px;
    @media screen and (max-width: 450px) {
      padding: 0px 15px;
    }
    background: #f66442;
    .orange_block {
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 100px;
      @media screen and (max-width: 450px) {
        padding-top: 50px;
      }
      .orange_title {
        font-weight: 500;
        font-size: 40px;
        @media screen and (max-width: 450px) {
          font-size: 22px;
        }
        color: #ffffff;
        text-align: center;
        margin: 0;
      }
      .team_desc {
        margin: 0 auto;
        font-weight: 400;
        font-size: 20px;
        @media screen and (max-width: 450px) {
          font-size: 14px;
        }
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
