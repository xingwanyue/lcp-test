<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
import { domain } from '@/utils';
const state = reactive({});
useServerSeoMeta({
  title: t('aboutUs.seometa.title'),
  description: '',
});
useHead({
  link: [{ rel: 'canonical', href: `https://www.${domain}/about-us` }],
});
</script>
<template>
  <div class="aboutus">
    <div class="learn_hader" :style="`background-image: url(/img/aboutus/banner-aboutus.svg);`">
      <div class="learn_hader_content">
        <div class="title">{{ $t('aboutUs.title') }}</div>
      </div>
    </div>
    <div class="content padding">
      <div class="title">{{ $t('aboutUs.oelet') }}</div>
      <div class="content1">
        {{ $t('aboutUs.oeletdesc') }}
      </div>
    </div>
    <div class="con-list padding">
      <div class="con-list1">
        <div class="content-l">
          <div class="content" data-aos="fade-up" data-aos-duration="1000">
            <div class="title">{{ $t('aboutUs.p1title') }}</div>
            <div class="author">{{ $t('aboutUs.p1author') }}</div>
            <div class="content1">
              {{ $t('aboutUs.p1content1') }}
            </div>
          </div>
          <div class="content" data-aos="fade-up" data-aos-duration="1000">
            <div class="title">{{ $t('aboutUs.p2title') }}</div>
            <div class="author">{{ $t('aboutUs.p2author') }}</div>
            <div class="content1">
              {{ $t('aboutUs.p2content1') }}
            </div>
          </div>
        </div>
        <div class="content-l">
          <div class="content" data-aos="fade-up" data-aos-duration="1000">
            <div class="title">{{ $t('aboutUs.p3title') }}</div>
            <div class="author">{{ $t('aboutUs.p3author') }}</div>
            <div class="content1">
              {{ $t('aboutUs.p3content1') }}
            </div>
          </div>

          <div class="content" data-aos="fade-up" data-aos-duration="1000">
            <div class="title">{{ $t('aboutUs.p4title') }}</div>
            <div class="author">{{ $t('aboutUs.p4author') }}</div>
            <div class="content1">
              {{ $t('aboutUs.p4content1') }}
            </div>
          </div>
          <div class="content" data-aos="fade-up" data-aos-duration="1000">
            <div class="title">{{ $t('aboutUs.p5title') }}</div>
            <div class="author">{{ $t('aboutUs.p5author') }}</div>
            <div class="content1">
              {{ $t('aboutUs.p5content1') }}
            </div>
          </div>
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
      padding: 120px 0;
      .title {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        line-height: 72px;
        margin: 0px;
      }
    }
  }
  .content {
    max-width: 1260px;
    margin: auto;
    margin-top: 104px;
    box-sizing: border-box;
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
          font-size: 24px;
          line-height: 30px;
        }
      }
    }
    .content {
      max-width: 100%;
      margin: auto;
      margin-top: 50px;
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
