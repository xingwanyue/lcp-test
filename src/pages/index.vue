<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
import { oauth2SignIn } from '@/utils/googleAuth';
import { useStore } from '@/store';
import { staticUrlGet, formatNumber, cdn, domain, getToken, saveStorage } from '@/utils';
import { platformData, portalData } from '@/api';
import { useRoute } from 'vue-router';
const route = useRoute();
// const videoPosterUrl = `${cdn}/store/portal/banner-poster.bg`
useServerSeoMeta({
  title: t('index.seometa.title'),
  description: t('index.seometa.description'),
  keywords: t('index.seometa.keywords'),
});
useHead({
  link: [
    { rel: 'canonical', href: `https://www.${domain}/` },
    { rel: 'alternate', href: `https://www.${domain}/`, hreflang: 'en-GB' },
  ],
});

const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);

const haveCookie = ref(false);

const googleLogin = () => {
  oauth2SignIn(urlGet('/home'));
};

// 引入cdn图片
const bannerImg = `${cdn}/store/portal/home/banner.svg`;
const home1 = `${cdn}/store/portal/home/home1.png`;
const home2 = `${cdn}/store/portal/home/home2.png`;
const home3 = `${cdn}/store/portal/home/home3.png`;
const home4 = `${cdn}/store/portal/home/home4.png`;
</script>

<template>
  <div class="home">
    <div class="part1_wrapper">
      <div class="bg_handle"></div>
      <div class="part1">
        <div class="power_by">Get a Higher Score Easily on the Duolingo English Test With</div>
        <div class="page_title">
          <div class="h_one isnoMobile">
            <h1>Get a Higher Score Easily on the Duolingo English Test With</h1>
          </div>
        </div>
        <div class="two_btn_out">
          <div class="common_btn common_btn_hover_bgColor yellow" @click="googleLogin">
            <img src="/img/home/google_icon.svg" alt="Get a Higher Score Easily on the Duolingo English Test With" />
            Get a Higher Score Easily on the Duolingo English Test With
          </div>
          <NuxtLink
            :to="localePath(`/login?url=${encodeURIComponent(host)}`)"
            class="common_btn common_btn_hover_borderCu white"
          >
            Get a Higher Score Easily on the Duolingo English Test With
          </NuxtLink>
        </div>

        <div class="all_stu_nums" v-html="'Get a Higher Score Easily on the Duolingo English Test With'"></div>
      </div>
    </div>

    <div>
      <v-slogen />
    </div>
    <div>
      <v-subscribe />
    </div>
  </div>
</template>
<style lang="scss">
.v-header {
  background: #fff4f1 !important;
}
</style>
