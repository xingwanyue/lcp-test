<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
import { domain } from '@/utils';
const state = reactive({});
useServerSeoMeta({
  title: t('sitemap.seometa.title'),
  description: t('sitemap.seometa.description'),
  keywords: t('sitemap.seometa.keywords'),
});
useHead({
  link: [{ rel: 'canonical', href: `https://www.${domain}/sitemap` }],
  link: [{ rel: 'alternate', href: `https://www.${domain}/sitemap`, hreflang: 'en-GB' }],
});
</script>
<template>
  <div class="privacyPolicy">
    <div class="learn_hader" :style="`background-image: url(/img/aboutus/banner-aboutus.svg);`">
      <div class="learn_hader_content">
        <h1 class="title">{{ $t('sitemap.h1') }}</h1>
      </div>
    </div>
    <div class="bg">
      <ul>
        <li>
          <a
            style="color: rgba(0, 0, 0, 0.8); font-size: 16px; line-height: 20px; margin-top: 12px"
            title="DET Practice"
            href="/"
            >Home</a
          >
        </li>
        <li>
          <a style="color: rgba(0, 0, 0, 0.8); font-size: 16px; line-height: 20px; margin-top: 12px" href="#"
            >Products</a
          >
        </li>
      </ul>
      <ul>
        <li>
          <a
            style="color: rgba(0, 0, 0, 0.8); font-size: 16px; line-height: 20px; margin-top: 12px"
            title="Duolingo English Practice Test Online"
            href="/practice"
            >Duolingo English Test Practice</a
          >
        </li>
        <li>
          <a
            style="color: rgba(0, 0, 0, 0.8); font-size: 16px; line-height: 20px; margin-top: 12px"
            title="AI Correction Service for Duolingo Test"
            href="/correction"
            >Duolingo English Test Correction Service</a
          >
        </li>
        <li>
          <a
            style="color: rgba(0, 0, 0, 0.8); font-size: 16px; line-height: 20px; margin-top: 12px"
            title="Duolingo Mock Test"
            href="/mock-exam"
            >Duolingo English Test Mock</a
          >
        </li>
        <li>
          <a
            style="color: rgba(0, 0, 0, 0.8); font-size: 16px; line-height: 20px; margin-top: 12px"
            title="Duolingo English Test Course Online"
            href="/courses"
            >Duolingo English Test Course</a
          >
        </li>
      </ul>
      <ul>
        <li>
          <a
            style="color: rgba(0, 0, 0, 0.8); font-size: 16px; line-height: 20px; margin-top: 12px"
            title="Learn"
            href="/learn"
            >Learn</a
          >
        </li>
        <li>
          <a
            style="color: rgba(0, 0, 0, 0.8); font-size: 16px; line-height: 20px; margin-top: 12px"
            title="Duolingo English Test Preparation"
            href="/pricing"
            >Pricing</a
          >
        </li>
        <li>
          <a
            style="color: rgba(0, 0, 0, 0.8); font-size: 16px; line-height: 20px; margin-top: 12px"
            title="DET Pratice Blog"
            href="/blog"
            >Blog</a
          >
        </li>
        <li>
          <a
            style="color: rgba(0, 0, 0, 0.8); font-size: 16px; line-height: 20px; margin-top: 12px"
            title="About DET Practice"
            href="/about-us"
            >About us</a
          >
        </li>
        <li>
          <a
            style="color: rgba(0, 0, 0, 0.8); font-size: 16px; line-height: 20px; margin-top: 12px"
            title="Terms and Conditions"
            href="/tos"
            >Terms and Conditions</a
          >
        </li>
        <li>
          <a
            style="color: rgba(0, 0, 0, 0.8); font-size: 16px; line-height: 20px; margin-top: 12px"
            title="Privacy Policy"
            href="/privacy-policy"
            >Privacy Policy</a
          >
        </li>
        <li>
          <a
            style="color: rgba(0, 0, 0, 0.8); font-size: 16px; line-height: 20px; margin-top: 12px"
            title="Contact DET Practice"
            href="/contact-us"
            >Contact us</a
          >
        </li>
      </ul>
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
