<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { useStore } from '@/store';
import { staticUrlGet, domain, cdn } from '@/utils';
useServerSeoMeta({
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

const buyMembership = (id: number) => {
  store.stripePay({ vipId: id });
};
const isLoad = ref(false);
const onLoad = () => {
  isLoad.value = true;
};
const isLoad2 = ref(false);
const onLoad2 = () => {
  isLoad2.value = true;
};

// 引入cdn图片
const guide1 = `${cdn}/store/portal/guid/guide111.png`;
const guide2 = `${cdn}/store/portal/guid/guide222.png`;
const team_bg = `${cdn}/store/portal/guid/team_bg.png`;
</script>

<template>
  <div class="guide_out">
    <div class="guide_wrapper_out">
      <div class="guide_wrapper">
        <div class="one_article">
          <h1 class="title">{{ $t('courses.pagefont.h1') }}</h1>
          <div class="article_out">
            <div class="left_img">
              <!-- <img src="/img/guid/guide1.png" /> -->
              <el-image v-show="isLoad" :src="guide1" :alt="$t('courses.pagefont.h1')" @load="onLoad" />
              <el-skeleton v-show="!isLoad" style="width: 100%; height: 100%" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="right_article">
              <div v-for="(item, index) in article1.list" :key="index" class="one_article_detail">
                <span class="content">{{ item.content }}</span>
              </div>
              <div class="buy_btn">
                <div class="price">
                  <span class="tag">{{ $t('courses.pagefont.do') }}</span>
                  <span class="price_num">{{ pricedata?.speakData?.price / 100 || 0 }}</span>
                </div>
                <div
                  v-if="user.id"
                  class="btn common_btn_hover_bgColor"
                  @click="buyMembership(pricedata?.speakData?.id)"
                >
                  <div class="font">{{ $t('courses.pagefont.Buy_Now') }}</div>
                  <div class="icon">
                    <img src="/img/products/white_arrow_right.svg" :alt="$t('courses.pagefont.white_arrow_right')" />
                  </div>
                </div>
                <NuxtLink :to="localePath(`/login?url=/courses`)" v-else class="btn common_btn_hover_bgColor">
                  <div class="font">{{ $t('courses.pagefont.Buy_Now') }}</div>
                  <div class="icon">
                    <img src="/img/products/white_arrow_right.svg" :alt="$t('courses.pagefont.white_arrow_right')" />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="one_article">
          <div class="title">
            {{ $t('courses.pagefont.DET_Writing') }}
          </div>
          <div class="article_out">
            <div class="left_img">
              <!-- <img src="/img/guid/guide2.png" /> -->
              <el-image v-show="isLoad2" :src="guide2" :alt="$t('courses.pagefont.DET_Writing')" @load="onLoad2" />
              <el-skeleton v-show="!isLoad2" style="width: 100%; height: 100%" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="right_article">
              <!-- <div class="one_article_title">{{ article2.title }}</div> -->
              <div v-for="(item, index) in article2.list" :key="index" class="one_article_detail">
                <span class="content">{{ item.content }}</span>
              </div>
              <div class="buy_btn">
                <div class="price">
                  <span class="tag">{{ $t('courses.pagefont.do') }}</span>
                  <span class="price_num">{{ pricedata?.writeData?.price / 100 || 0 }}</span>
                </div>
                <div
                  v-if="user.id"
                  class="btn common_btn_hover_bgColor"
                  @click="buyMembership(pricedata?.writeData?.id)"
                >
                  <div class="font">{{ $t('courses.pagefont.Buy_Now') }}</div>
                  <div class="icon">
                    <img src="/img/products/white_arrow_right.svg" :alt="$t('courses.pagefont.white_arrow_right')" />
                  </div>
                </div>
                <NuxtLink :to="localePath(`/login?url=/courses`)" v-else class="btn common_btn_hover_bgColor">
                  <div class="font">{{ $t('courses.pagefont.Buy_Now') }}</div>
                  <div class="icon">
                    <img src="/img/products/white_arrow_right.svg" :alt="$t('courses.pagefont.white_arrow_right')" />
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
                <div v-if="item.btn" @click="buyMembership(pricedata?.speakData?.id)" class="btn">
                  {{ item.btn }}
                </div>
                <div v-if="item.btn1" @click="buyMembership(pricedata?.writeData?.id)" class="btn">
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
      grid-template-columns: 0.47fr 1fr;
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

        .el-image {
          width: 100%;
          height: auto;
          box-shadow: 16px 16px 16px 0px rgba(0, 0, 0, 0.2);
          border-radius: 18px;
          @media screen and (max-width: 974px) {
            height: 100%;
            width: auto;
          }
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

          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          margin-top: 32px;
          grid-gap: 32px;
          // @media screen and (max-width: 974px) {
          //   justify-content: center;
          // }

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
