<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
import { domain } from '@/utils';
const state = reactive({});
useServerSeoMeta({
  title: t('affiliate.seometa.title'),
  description: t('affiliate.seometa.description'),
  keywords: t('affiliate.seometa.keywords'),
});
useHead({
  link: [
    { rel: 'canonical', href: `https://www.${domain}/affiliate` },
    { rel: 'alternate', href: `https://www.${domain}/affiliate`, hreflang: 'en-GB' },
  ],
});
const contaceUsList = ref([
  {
    type: '1',
    icon: '/img/affiliate/user_add_icon.svg',
    font: t('affiliate.contaceUsList[0].font'),
    btn: t('affiliate.contaceUsList[0].btn'),
  },
  {
    type: '2',
    icon: '/img/affiliate/share_icon.svg',
    font: t('affiliate.contaceUsList[1].font'),
    btn: t('affiliate.contaceUsList[1].btn'),
  },
  {
    type: '3',
    icon: '/img/affiliate/do_icon.svg',
    font: t('affiliate.contaceUsList[2].font'),
    btn: t('affiliate.contaceUsList[2].btn'),
  },
]);
const dosList = ref([
  {
    id: '1',
    font: t('affiliate.dosList[0].font'),
  },
  {
    id: '2',
    font: t('affiliate.dosList[1].font'),
  },
  { id: '3', font: t('affiliate.dosList[2].font') },
  { id: '4', font: t('affiliate.dosList[3].font') },
]);
const dontsList = ref([
  {
    id: '1',
    font: t('affiliate.dontsList[0].font'),
  },
  {
    id: '2',
    font: t('affiliate.dontsList[1].font'),
  },
  {
    id: '3',
    font: t('affiliate.dontsList[2].font'),
  },
  {
    id: '4',
    font: t('affiliate.dontsList[3].font'),
  },
]);
const faqList = ref([
  {
    id: '1',
    q: t('affiliate.faqList[0].q'),
    a: t('affiliate.faqList[0].a'),
  },
  {
    id: '2',
    q: t('affiliate.faqList[1].q'),
    a: t('affiliate.faqList[1].a'),
  },
  {
    id: '3',
    q: t('affiliate.faqList[2].q'),
    a: t('affiliate.faqList[2].a'),
  },
  {
    id: '4',
    q: t('affiliate.faqList[3].q'),
    a: t('affiliate.faqList[3].a'),
  },
  {
    id: '5',
    q: t('affiliate.faqList[4].q'),
    a: t('affiliate.faqList[4].a'),
  },
  {
    id: '6',
    q: t('affiliate.faqList[5].q'),
    a: t('affiliate.faqList[5].a'),
  },
  {
    id: '7',
    q: t('affiliate.faqList[6].q'),
    a: t('affiliate.faqList[6].a'),
  },
]);
</script>
<template>
  <div class="aff_out">
    <div class="aff_header">
      <div class="aff_header_content" :style="`background-image: url(/img/affiliate/30off.svg);`">
        <div class="tag">{{ $t('affiliate.tag') }}</div>
        <h1 class="title" v-html="$t('affiliate.h1')"></h1>
        <NuxtLink class="sing_up_now common_btn_hover_bgColor" :title="$t('affiliate.sun')">{{
          $t('affiliate.sun')
        }}</NuxtLink>
      </div>
    </div>
    <div class="content">
      <div class="join_out">
        <div class="join">
          <div class="jion_top_content">
            <div class="join_title" v-html="$t('affiliate.join_title')"></div>
            <div class="join_tips">
              {{ $t('affiliate.join_tips') }}
            </div>
          </div>
          <div class="jion_bottom_content">
            <div class="earth_with_title">{{ $t('affiliate.earth_with_title') }}</div>
            <div class="earth_with_content">
              <div class="one_block one_block_blue">
                <div class="one_block_icon">
                  <img src="/img/home/product_icon1.svg" :alt="$t('affiliate.question_bank')" />
                </div>
                <div class="one_block_title">{{ $t('affiliate.question_bank') }}</div>
              </div>
              <div class="one_block one_block_red">
                <div class="one_block_icon">
                  <img src="/img/home/product_icon2.svg" :alt="$t('affiliate.acs')" />
                </div>
                <div class="one_block_title">{{ $t('affiliate.acs') }}</div>
              </div>
              <div class="one_block one_block_yellow">
                <div class="one_block_icon">
                  <img src="/img/home/product_icon3.svg" :alt="$t('affiliate.Mock_Test')" />
                </div>
                <div class="one_block_title">{{ $t('affiliate.Mock_Test') }}</div>
              </div>
              <div class="one_block one_block_green">
                <div class="one_block_icon">
                  <img src="/img/home/product_icon4.svg" :alt="$t('affiliate.Courses')" />
                </div>
                <div class="one_block_title">{{ $t('affiliate.Courses') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="become_out_wrapper"></div> -->
      <div class="become_out_wrapper">
        <div class="part3">
          <div class="title">{{ $t('affiliate.bada') }}</div>
          <div class="three_out">
            <div v-for="(item, index) in contaceUsList" :key="index" class="one_card">
              <div class="icon">
                <img :src="`${item.icon}`" :alt="item.font" />
              </div>
              <div class="method_font">{{ item.font }}</div>
              <!-- <div class="method_tip">{{ item.tip }}</div> -->
              <NuxtLink v-if="item.type === '1'" class="btn" :title="item.btn">
                {{ item.btn }}
              </NuxtLink>
              <NuxtLink v-if="item.type === '2'" class="btn" :title="item.btn">
                {{ item.btn }}
              </NuxtLink>
              <NuxtLink v-if="item.type === '3'" class="btn" :title="item.btn">
                <div>{{ item.btn }}</div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="white_dom_out">
        <div class="white_dom">
          <div class="img_left_dom">
            <div class="img_content">
              <img src="/img/affiliate/high_earning_potenti.svg" :alt="$t('affiliate.hep')" />
            </div>
            <div class="font_content">
              <div class="font_content_tite">{{ $t('affiliate.hep') }}</div>
              <div class="font_content_tips">
                <div class="one_tips">
                  {{ $t('affiliate.heptips[0]') }}
                </div>
                <div class="one_tips">
                  {{ $t('affiliate.heptips[1]') }}
                </div>
              </div>
            </div>
          </div>
          <div class="img_right_dom img_left_dom">
            <div class="font_content">
              <div class="font_content_tite">{{ $t('affiliate.ctw') }}</div>
              <div class="font_content_tips">
                <div class="one_tips">
                  {{ $t('affiliate.ctwtips[0]') }}
                </div>
                <div class="one_tips">{{ $t('affiliate.ctwtips[1]') }}</div>
                <div class="one_tips">{{ $t('affiliate.ctwtips[2]') }}</div>
              </div>
            </div>
            <div class="img_content">
              <img src="/img/affiliate/cre_th_w_l.svg" :alt="$t('affiliate.ctw')" />
            </div>
          </div>
        </div>
      </div>
      <div class="dos_dom_out_wrapper">
        <div class="dos_dom_out">
          <div class="do_dom">
            <div class="title">{{ $t('affiliate.dos') }}</div>
            <div v-for="item in dosList" :key="item.id" class="one_tips">
              <div class="icon">
                <img src="/img/affiliate/green_right_icon.svg" :alt="$t('affiliate.dos_icon_alt')" />
              </div>
              <div class="font">{{ item.font }}</div>
            </div>
          </div>
          <div class="do_dom">
            <div class="title title_red">{{ $t('affiliate.donts') }}</div>
            <div v-for="item in dontsList" :key="item.id" class="one_tips">
              <div class="icon">
                <img src="/img/affiliate/red_err_icon.svg" :alt="$t('affiliate.donts_icon_alt')" />
              </div>
              <div class="font">{{ item.font }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="aff_faq_out">
        <div class="aff_faq">
          <div class="title">{{ $t('affiliate.faqs') }}</div>
          <div class="aff_faq_article_out">
            <div v-for="item in faqList" :key="item.id" class="one_faq">
              <div class="one_faq_question">{{ item.q }}</div>
              <div class="one_faq_answer" v-html="item.a"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="start_earn_out_wrapper">
        <div class="start_earn_out">
          <div class="title">{{ $t('affiliate.sew') }}</div>
          <NuxtLink class="btn common_btn_hover_bgColor" :title="$t('affiliate.sun')">{{
            $t('affiliate.sun')
          }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.aff_out {
  .aff_header {
    text-align: center;
    background: #fff4f1;
    overflow: hidden;
    .aff_header_content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 120px 0;
      padding-top: 74px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

      // margin-top: 28px;
      @media (max-width: 906px) {
        padding: 100px 0;
      }
      @media (max-width: 744px) {
        padding: 80px 0;
      }
      @media (max-width: 570px) {
        padding: 60px 0;
      }
      @media (max-width: 450px) {
        padding: 40px 0;
      }
      .tag {
        width: fit-content;
        padding: 5px 16px;

        background: rgba(255, 255, 255, 0.75);
        border-radius: 16px;
        margin: 0 auto;
        font-weight: 600;
        font-size: 16px;
        color: #f66442;
      }
      .title {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        max-width: 1000px;
        text-align: center;
        margin: 0 auto;
        ::v-deep(.yellow_font) {
          color: #f66442;
        }

        margin-top: 40px;
        @media (max-width: 906px) {
          font-size: 46px;
          margin-top: 30px;
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
      .sing_up_now {
        padding: 9px 24px;
        background-color: #f66442;
        border-radius: 22px;
        font-weight: 500;
        font-size: 18px;
        color: #ffffff;
        width: fit-content;
        margin: 0 auto;
        margin-top: 40px;
        cursor: pointer;
        display: block;
      }
    }
  }
  .content {
    .join_out {
      margin: auto;
      box-sizing: border-box;
      max-width: 1260px;
      padding: 0px 30px;
      @media (max-width: 450px) {
        padding: 0px 15px;
      }

      .join {
        padding: 120px 0;
        .jion_top_content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 80px;
          @media (max-width: 906px) {
            grid-template-columns: 1fr;
            grid-gap: 40px;
          }
          .join_title {
            font-weight: 600;
            font-size: 40px;
            color: #201515;
            line-height: 56px;
            ::v-deep(.yellow_font) {
              color: #f66442;
            }
          }
          .join_tips {
            font-weight: 400;
            font-size: 20px;
            color: #403f3e;
            line-height: 28px;
          }
        }
        .jion_bottom_content {
          margin-top: 160px;
          .earth_with_title {
            font-weight: 600;
            font-size: 40px;
            color: #201515;
            text-align: center;
          }
          .earth_with_content {
            margin-top: 40px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
            grid-gap: 24px;
            .one_block {
              padding-top: 24px;
              padding-bottom: 24px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              border: 2px white solid;
              border-radius: 8px;
              .one_block_icon {
                width: 48px;
                height: 48px;

                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .one_block_title {
                font-weight: 500;
                font-size: 18px;
                margin-top: 16px;
              }
            }
            .one_block_blue {
              background: linear-gradient(0, #f5fcff 0%, #ecf7ff 100%);
              &:hover {
                border: 2px solid #3e8bf8;
              }
              .one_block_title {
                color: #3e8bf8;
              }
            }
            .one_block_red {
              background: linear-gradient(0, #fff8f5 0%, #fff0ec 100%);
              &:hover {
                border: 2px solid #f66442;
              }
              .one_block_title {
                color: #f66442;
              }
            }
            .one_block_yellow {
              background: linear-gradient(0, #fffaf4 0%, #ffefe1 100%);
              &:hover {
                border: 2px solid #ff7c0e;
              }
              .one_block_title {
                color: #ff7c0e;
              }
            }
            .one_block_green {
              background: linear-gradient(0, #f2fff6 0%, #e7fdec 100%);
              &:hover {
                border: 2px solid #06cc76;
              }
              .one_block_title {
                color: #06cc76;
              }
            }
          }
        }
      }
    }
    .become_out_wrapper {
      padding: 0px 30px;
      background: #fff4f1;
      margin-top: 100px;
      @media screen and (max-width: 450px) {
        padding: 0px 15px;
      }

      @media (max-width: 450px) {
        margin-top: 50px;
      }
      .part3 {
        padding: 100px 0;
        max-width: 1200px;
        margin: 0 auto;
        @media (max-width: 450px) {
          padding: 50px 0;
        }

        .title {
          font-weight: 500;
          font-size: 40px;
          color: #201515;
          text-align: center;
          margin-bottom: 64px;
          @media (max-width: 450px) {
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

            .icon {
              width: 56px;
              height: 56px;
              margin: 0 auto;
            }

            .method_font {
              font-weight: 500;
              font-size: 18px;
              color: #403f3e;
              margin-top: 16px;
              text-align: center;
              line-height: 26px;
            }

            .method_tip {
              font-weight: 400;
              font-size: 14px;
              color: #403f3e;
              margin-top: 8px;
              text-align: center;
            }

            .btn {
              padding: 11px;
              text-align: center;
              border-radius: 4px;
              border: 1px solid #201515;
              font-weight: 500;
              font-size: 16px;
              color: #201515;
              margin-top: 24px;
              display: block;
              cursor: pointer;
              &:hover {
                border: 2px solid #201515;
                padding: 10px;
              }
            }
          }
        }
      }
    }
    .white_dom_out {
      margin: auto;
      box-sizing: border-box;
      max-width: 1260px;
      padding: 0px 30px;
      @media (max-width: 450px) {
        padding: 0px 15px;
      }
      .white_dom {
        // border: 1px red solid;
        padding: 120px 0;
        .img_left_dom {
          display: grid;
          grid-template-areas: 'imgarea  fontarea';
          grid-gap: 80px;
          grid-template-columns: repeat(auto-fit, minmax(419px, 1fr));
          @media (max-width: 1024px) {
            grid-template-areas:
              'imgarea'
              'fontarea';
          }
          @media (max-width: 486px) {
            grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
          }
          .img_content {
            grid-area: imgarea;
            text-align: center;
            img {
              width: 100%;

              max-width: 560px;
            }
          }
          .font_content {
            grid-area: fontarea;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .font_content_tite {
              font-weight: 500;
              font-size: 40px;
              color: #201515;
              margin-bottom: 40px;
            }
            .font_content_tips {
              display: flex;
              flex-direction: column;
              grid-gap: 24px;

              .one_tips {
                font-weight: 400;
                font-size: 18px;
                color: #403f3e;
                line-height: 26px;
              }
            }
          }
        }
        .img_right_dom {
          margin-top: 120px;
          grid-template-areas: ' fontarea imgarea';
          @media (max-width: 1024px) {
            grid-template-areas:
              'imgarea'
              'fontarea';
          }
        }
      }
    }
    .dos_dom_out {
    }
    .dos_dom_out_wrapper {
      background: #f2f4f6;
      padding: 0px 30px;
      @media (max-width: 450px) {
        padding: 0px 15px;
      }

      .dos_dom_out {
        padding: 120px 0;
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        grid-gap: 24px;
        .do_dom {
          padding: 40px;
          background: #ffffff;
          border-radius: 8px;
          .title {
            font-weight: 600;
            font-size: 40px;
            text-align: center;
            margin-bottom: 40px;
            color: #06cc76;
          }
          .title_red {
            color: #f66442;
          }
          .one_tips {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            grid-gap: 16px;
            margin-bottom: 16px;
            .icon {
              width: 18px;
              height: 18px;
            }
            .font {
              font-weight: 400;
              font-size: 18px;
              color: #403f3e;
            }
          }
        }
      }
    }
    .aff_faq_out {
      margin: auto;
      box-sizing: border-box;
      max-width: 1260px;
      padding: 0px 30px;
      @media (max-width: 450px) {
        padding: 0px 15px;
      }
      .aff_faq {
        padding: 120px 0;
        .title {
          font-weight: 600;
          font-size: 40px;
          color: #201515;
          text-align: center;
          margin-bottom: 54px;
        }
        .aff_faq_article_out {
          display: grid;
          grid-gap: 24px 80px;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          .one_faq {
            padding: 23px 0px;
            border-bottom: 1px solid #e9e9e9;
            .one_faq_question {
              font-weight: 600;
              font-size: 20px;
              color: #201515;
              line-height: 28px;
            }
            .one_faq_answer {
              font-weight: 400;
              font-size: 18px;
              color: #201515;
              line-height: 26px;
              margin-top: 16px;
              ::v-deep(.yellow_font) {
                color: #f66442;
              }
            }
          }
        }
      }
    }
    .start_earn_out_wrapper {
      background: #fff4f1;
      padding: 0px 30px;
      @media (max-width: 450px) {
        padding: 0px 15px;
      }

      .start_earn_out {
        padding: 80px 0;
        max-width: 1200px;
        margin: 0 auto;
        .title {
          font-weight: 600;
          font-size: 48px;
          color: #201515;
          text-align: center;
        }
        .btn {
          padding: 9px 24px;
          background-color: #f66442;
          border-radius: 22px;
          font-weight: 500;
          font-size: 18px;
          color: #ffffff;
          width: fit-content;
          margin: 0 auto;
          margin-top: 40px;
          display: block;
          cursor: pointer;
        }
      }
    }
  }

  .yellow_font {
    color: #f66442;
  }
}
</style>
