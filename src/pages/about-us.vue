<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
import { domain, cdn } from '@/utils';
const state = reactive({});
useServerSeoMeta({
  title: t('aboutUs.seometa.title'),
  description: '',
});
useHead({
  link: [{ rel: 'canonical', href: `https://www.${domain}/about-us` }],
});

const our_v_bg = `${cdn}/store/portal/aboutus/our_v_bg.svg`;
const our_m_bg = `${cdn}/store/portal/aboutus/our_m_bg.svg`;
const our_val_bg = `${cdn}/store/portal/aboutus/our_val_bg.svg`;
const youtube_bg = `${cdn}/store/portal/aboutus/youtube_bg.png`;
const youtube_icon = `${cdn}/store/portal/aboutus/youtube_icon.svg`;
</script>
<template>
  <div class="aboutus">
    <div class="learn_hader" :style="`background-image: url(/img/aboutus/banner-aboutus.svg);`">
      <div class="learn_hader_content">
        <div class="title">
          <h1>{{ $t('aboutUs.title') }}</h1>
        </div>
        <div class="titledesc">
          <h2 v-html="$t('aboutUs.title_desc')"></h2>
        </div>
      </div>
    </div>
    <div class="content padding">
      <div class="check_out">
        <h2>{{ $t('aboutUs.check_out.h2') }}</h2>
      </div>
      <div class="four_prod_out">
        <div class="one_prod bank">
          <div class="one_prod_top">
            <div class="one_prod_icon">
              <img src="/img/home/product_icon1.svg" :alt="$t('header.prod1.alt')" />
            </div>
            <div class="one_prod_title">{{ $t('aboutUs.check_out.qbt') }}</div>
          </div>
          <div class="one_prod_bottom">
            {{ $t('aboutUs.check_out.qbtdesc') }}
          </div>
        </div>
        <div class="one_prod mock">
          <div class="one_prod_top">
            <div class="one_prod_icon">
              <img src="/img/home/product_icon3.svg" :alt="$t('header.prod4.alt')" />
            </div>
            <div class="one_prod_title">{{ $t('aboutUs.check_out.flm') }}</div>
          </div>
          <div class="one_prod_bottom">
            {{ $t('aboutUs.check_out.flmdesc') }}
          </div>
        </div>
        <div class="one_prod service">
          <div class="one_prod_top">
            <div class="one_prod_icon">
              <img src="/img/home/product_icon2.svg" :alt="$t('header.prodwriting.alt')" />
            </div>
            <div class="one_prod_title">
              {{ $t('aboutUs.check_out.acs') }}
            </div>
          </div>
          <div class="one_prod_bottom">
            {{ $t('aboutUs.check_out.acsdesc') }}
          </div>
        </div>
        <div class="one_prod courses">
          <div class="one_prod_top">
            <div class="one_prod_icon">
              <img src="/img/home/head_course.svg" :alt="$t('header.prod3.alt')" />
            </div>
            <div class="one_prod_title">{{ $t('aboutUs.check_out.dc') }}</div>
          </div>
          <div class="one_prod_bottom">
            {{ $t('aboutUs.check_out.dedesc') }}
          </div>
        </div>
      </div>

      <div class="three_our_our">
        <div class="young_title">
          <h2>{{ $t('aboutUs.three_our_our.h2') }}</h2>
        </div>
        <div class="three_dom_out">
          <div class="left">
            <div class="left_title">{{ $t('aboutUs.three_our_our.ov') }}</div>
            <div class="left_desc">{{ $t('aboutUs.three_our_our.me') }}</div>
            <div class="bg_img" :style="`background-image: url(${our_v_bg});`"></div>
          </div>
          <div class="right">
            <div class="right_one mission">
              <div class="right_one_title">{{ $t('aboutUs.three_our_our.om') }}</div>
              <div class="right_one_desc" v-html="$t('aboutUs.three_our_our.omdesc')"></div>
              <div class="bg_img" :style="`background-image: url(${our_m_bg});`"></div>
            </div>
            <div class="right_one values">
              <div class="right_one_title">{{ $t('aboutUs.three_our_our.ovs') }}</div>
              <div class="right_one_desc" v-html="$t('aboutUs.three_our_our.ovsdesc')"></div>
              <div class="bg_img bigger" :style="`background-image: url(${our_val_bg});`"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="get_in_touch_wrapper">
      <div class="get_in_touch">
        <div class="get_in_touch_title">
          <h2>{{ $t('aboutUs.get_in_touch.h2') }}</h2>
        </div>
        <div class="get_in_touch_email">Email：support@detpractice.com</div>
        <div class="youtube_out" :style="`background-image: url(${youtube_bg});`">
          <NuxtLink class="youtube_btn" to="https://youtube.com/@duolingoenglishtestpractices" target="_blank">
            <div class="youtube_icon">
              <img class="imgself" alt="youtube_icon" :src="youtube_icon" />
            </div>
            <div class="youtube_font">{{ $t('aboutUs.get_in_touch.goytb') }}</div>
          </NuxtLink>
          <NuxtLink class="get_more" to="https://youtube.com/@duolingoenglishtestpractices" target="_blank">
            {{ $t('aboutUs.get_in_touch.getmore') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.aboutus {
  .learn_hader {
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .learn_hader_content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 100px 0;
      .title {
        h1 {
          font-weight: 600;
          font-size: 56px;
          color: #201515;
          line-height: 72px;
          margin: 0px;
        }
      }
      .titledesc {
        h2 {
          font-weight: 400;
          font-size: 32px;
          color: #201515;
        }
      }
    }
  }
  .content {
    max-width: 1260px;
    margin: auto;
    margin-top: 104px;
    box-sizing: border-box;
    .check_out {
      h2 {
        font-weight: 600;
        font-size: 40px;
        color: #201515;
        text-align: center;
      }
    }
    .four_prod_out {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      grid-gap: 24px;
      .one_prod {
        padding: 32px;
        border-radius: 8px;
        min-height: 138px;
        .one_prod_top {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          grid-gap: 24px;
          .one_prod_icon {
            width: 48px;
            height: 48px;
            flex-shrink: 0;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .one_prod_title {
            font-weight: 500;
            font-size: 32px;
            color: #201515;
          }
        }
        .one_prod_bottom {
          margin-top: 16px;
          font-weight: 400;
          font-size: 18px;
          color: #403f3e;
          padding-left: 72px;
        }
      }
      .bank {
        background: linear-gradient(0, #f5fcff 0%, #ecf7ff 100%);
      }
      .mock {
        background: linear-gradient(0, #fffaf4 0%, #ffefe1 100%);
      }
      .service {
        background: linear-gradient(0, #fff8f5 0%, #fff0ec 100%);
      }
      .courses {
        background: linear-gradient(0, #f2fff6 0%, #e7fdec 100%);
      }
    }
    .three_our_our {
      margin-top: 120px;
      .young_title {
        h2 {
          font-weight: 600;
          font-size: 40px;
          color: #201515;
          text-align: center;
        }
      }
      .three_dom_out {
        display: grid;
        grid-template-columns: 43% 1fr;
        grid-gap: 32px;
        .left {
          padding: 32px;
          border-radius: 8px;
          box-sizing: border-box;
          overflow: hidden;
          min-height: 472px;
          position: relative;
          background: linear-gradient(0, #fff8f5 0%, #fff0ec 100%);
          .left_title {
            font-weight: 500;
            font-size: 32px;
            color: #201515;
          }
          .left_desc {
            font-weight: 400;
            font-size: 18px;
            color: #403f3e;
            margin-top: 12px;
          }
          .bg_img {
            width: 100%;
            height: 100%;
            position: absolute;
            right: 0;
            left: 20px;
            top: 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            @media (max-width: 1200px) {
              left: 0;
            }
          }
        }
        .right {
          display: flex;
          flex-direction: column;
          row-gap: 32px;

          .right_one {
            position: relative;
            border-radius: 8px;
            padding: 32px;
            box-sizing: border-box;
            min-height: 220px;
            .right_one_title {
              position: relative;
              font-weight: 500;
              font-size: 32px;
              color: #201515;
              z-index: 10;
            }
            .right_one_desc {
              position: relative;
              font-weight: 400;
              font-size: 18px;
              color: #403f3e;
              margin-top: 12px;
              z-index: 10;
            }
            .bg_img {
              position: absolute;
              width: 50%;
              height: 80%;
              right: 10px;
              bottom: 0;
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              z-index: 0;
            }
            .bigger {
              height: 100%;
            }
          }
          .mission {
            background: linear-gradient(180deg, #eaeafe 0%, #fbf9ff 100%);
          }
          .values {
            background: linear-gradient(0, #fffaf4 0%, #ffefe1 100%);
          }
        }
      }
    }

    // old
    .title {
      font-weight: 500;
      font-size: 28px;
      color: #201515;
      line-height: 36px;
    }
    .author {
      font-size: 16px;
      color: #201515;
      line-height: 24px;
      margin-top: 8px;
    }
    .content1 {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.8);
      line-height: 24px;
      margin-top: 24px;
    }
  }
  .get_in_touch_wrapper {
    background: #fff4f1;
    margin-top: 100px;
    .get_in_touch {
      max-width: 1260px;
      margin: auto;
      padding: 100px 30px;
      box-sizing: border-box;

      .get_in_touch_title {
        h2 {
          font-weight: 600;
          font-size: 40px;
          color: #201515;
          text-align: center;
          margin: 0;
        }
      }
      .get_in_touch_email {
        font-weight: 400;
        font-size: 24px;
        color: #403f3e;
        text-align: center;
        margin-top: 16px;
      }
      .youtube_out {
        width: 100%;
        height: 400px;
        position: relative;
        margin-top: 40px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 8px;
        overflow: hidden;

        .youtube_btn {
          padding: 13px 40px;
          background: #ff0000;
          border-radius: 25px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          column-gap: 8px;
          cursor: pointer;
          &:hover {
            background: #d61e1e;
          }
          .youtube_icon {
            width: 32px;
            height: 24px;
            flex-shrink: 0;
            .imgself {
              width: 100%;
              height: 100%;
            }
          }
          .youtube_font {
            font-weight: 500;
            font-size: 16px;
            color: #ffffff;
          }
        }
        .get_more {
          padding: 4px 8px;
          background: #201515;
          border-radius: 4px;
          font-weight: 400;
          font-size: 14px;
          color: #ffffff;
          position: absolute;
          left: 12px;
          bottom: 12px;
        }
      }
    }
  }
  .con-list {
    background: linear-gradient(180deg, #ffffff 0%, #fff4f1 100%);
    padding-bottom: 120px !important;
    // margin-top: 100px;
    .con-list1 {
      max-width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .content-l {
        width: calc(50% - 24px);
        padding: 0px 0px;
      }
    }
  }
  .padding {
    padding: 0px 30px;
  }
}
@media (max-width: 800px) {
  .aboutus {
    .learn_hader {
      .learn_hader_content {
        max-width: 100%;
        margin: 0 auto;
        padding: 30px 15px;
        .title {
          h1 {
            font-size: 24px;
            line-height: 30px;
          }
        }
        .titledesc {
          h2 {
            font-size: 12px;
          }
        }
      }
    }
    .content {
      max-width: 100%;
      margin: auto;
      margin-top: 50px;

      .check_out {
        h2 {
          font-size: 20px;
        }
      }
      .four_prod_out {
        grid-template-columns: 1fr;
        grid-gap: 16px;
        .one_prod {
          padding: 15px;

          .one_prod_top {
            .one_prod_icon {
              width: 24px;
              height: 24px;
            }
            .one_prod_title {
              font-size: 20px;
            }
          }
          .one_prod_bottom {
            font-size: 14px;
            padding-left: 48px;
            margin-top: 8px;
          }
        }
      }
      .three_our_our {
        margin-top: 50px;
        .young_title {
          h2 {
            font-size: 20px;
          }
        }
        .three_dom_out {
          grid-template-columns: 1fr;
          .left {
            padding: 15px;
            .left_title {
              font-size: 20px;
            }
            .left_desc {
              font-size: 14px;
              margin-top: 8px;
            }
          }
          .right {
            .right_one {
              padding: 15px;
              .right_one_title {
                font-size: 20px;
              }
              .right_one_desc {
                font-size: 14px;
                margin-top: 8px;
              }
            }
          }
        }
      }
      // old
      .title {
        font-size: 20px;
        line-height: 28px;
      }
      .author {
        font-size: 14px;
        line-height: 18px;
      }
      .content1 {
        font-size: 14px;
        line-height: 18px;
        margin-top: 12px;
      }
    }
    .get_in_touch_wrapper {
      margin-top: 50px;
      .get_in_touch {
        padding: 50px 15px;
        .get_in_touch_title {
          h2 {
            font-size: 24px;
          }
        }
        .get_in_touch_email {
          font-size: 16px;
          margin-top: 8px;
        }
        .youtube_out {
          height: 300px;
          .youtube_btn {
            .youtube_icon {
              width: 24px;
              height: 18px;
            }
            padding: 8px 24px;
            .youtube_font {
              font-size: 12px;
            }
          }
          .get_more {
            padding: 2px 4px;
            font-size: 12px;
          }
        }
      }
    }
    // old
    .con-list {
      background: linear-gradient(180deg, #ffffff 0%, #fff4f1 100%);
      padding-bottom: 60px !important;
      margin-top: 50px;
      .con-list1 {
        max-width: 100%;
        margin: auto;
        display: block;
        .content-l {
          width: 100%;
          padding: 0px 0px;
        }
      }
    }
    .padding {
      padding: 0px 15px;
    }
  }
}
</style>
