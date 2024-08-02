<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
import vSlogen from '../components/slogen.vue';
import vSubscribe from '../components/subscribe.vue';
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
   HOME
  </div>
</template>

