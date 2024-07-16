<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
import { domain } from '@/utils';
const state = reactive({});
useServerSeoMeta({
  title: t('refundPolicy.seometa.title'),
  description: t('refundPolicy.seometa.description'),
  keywords: t('privacyPolicy.seometa.keywords'),
});
useHead({
  link: [
    { rel: 'canonical', href: `https://www.${domain}/refund-policy` },
    { rel: 'alternate', href: `https://www.${domain}/refund-policy`, hreflang: 'en-GB' },
  ],
});
</script>
<template>
  <div class="privacyPolicy">
    <div class="learn_hader" :style="`background-image: url(/img/aboutus/banner-aboutus.svg);`">
      <div class="learn_hader_content">
        <h1 class="title">{{ $t('refundPolicy.h1') }}</h1>
      </div>
    </div>
    <div class="bg">
      <div class="content margin-top0" data-aos="fade-up" data-aos-duration="1000">
        <!-- <div class="title">{{ $t('refundPolicy.q1.title') }}</div> -->
        <div class="content1">
          {{ $t('refundPolicy.q1.a1') }}
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">{{ $t('refundPolicy.q2.title') }}</div>
        <div class="content1">
          {{ $t('refundPolicy.q2.a1') }}
          <div class="line-break"></div>
          {{ $t('refundPolicy.q2.a2') }}
          <div class="line-break"></div>
          {{ $t('refundPolicy.q2.a3') }}
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">{{ $t('refundPolicy.q3.title') }}</div>
        <div class="content1">
          {{ $t('refundPolicy.q3.a1') }}
          <div class="line-break"></div>
          {{ $t('refundPolicy.q3.a2') }}
          <div class="line-break"></div>
          <div v-html="$t('refundPolicy.q3.a3')"></div>
          <div class="line-break"></div>
          {{ $t('refundPolicy.q3.a4') }}
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">{{ $t('refundPolicy.q4.title') }}</div>
        <div class="content1">
          {{ $t('refundPolicy.q4.a1') }}
          <div class="line-break"></div>
          {{ $t('refundPolicy.q4.a2') }}
          <div class="line-break"></div>
          {{ $t('refundPolicy.q4.a3') }}
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">{{ $t('refundPolicy.q5.title') }}</div>
        <div class="content1">
          {{ $t('refundPolicy.q5.a1') }}
          <div class="line-break"></div>
          <div v-html="$t('refundPolicy.q5.a2')"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.privacyPolicy {
  .learn_hader {
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .learn_hader_content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 120px 0px;
      .title {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        line-height: 72px;
        margin: 0px;
      }
    }
  }
  .bg {
    background: linear-gradient(180deg, #ffffff 0%, #fff4f1 100%);
    background-size: 100% 50%;
    background-repeat: no-repeat;
    background-position: 0 100%;
    padding-bottom: 120px;
    padding-top: 120px;
  }
  .margin-top0 {
    margin-top: 0 !important;
  }
  .content {
    max-width: 1260px;
    margin: auto;
    margin-top: 30px;
    padding: 0px 30px;
    box-sizing: border-box;
    .title {
      font-weight: 500;
      font-size: 20px;
      color: #201515;
    }
    .content1 {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.8);
      line-height: 20px;
      margin-top: 12px;
      .line-break {
        margin-top: 8px;
      }
      ::v-deep .website {
        color: #f66442;
      }
      .website {
        color: #f66442;
      }
    }
  }
}
@media (max-width: 800px) {
  .privacyPolicy {
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
    .bg {
      padding-bottom: 40px;
      padding-top: 40px;
    }
    .content {
      max-width: 100%;
      margin-top: 15px;
      padding: 0px 15px;
    }
  }
}
</style>
