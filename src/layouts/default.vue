<script setup lang="ts">
import { loginBycredential } from '@/utils/googleAuth';
import { saveToken, getToken } from '@/utils';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
import { sinupEvent } from '@/utils/gtag';
import vHeader from './header.vue';
import vFooter from './footer.vue';
import vChangeLanguagetk from './changeLanguage_TK.vue';

const router = useRouter();

const store = useStore();
const layouProps = useAttrs();

useHead({
  script: [{ src: 'https://accounts.google.com/gsi/client', async: true }],
});
declare global {
  interface Window {
    google: any;
  }
}
onMounted(async () => {
  const token = await getToken();
  if (token) {
    store.getUserInfo();
    return;
  }
  window.google?.accounts?.id?.initialize({
    client_id: '1044858520955-9ua24gpj8m98avtbp030t6dp624fi689.apps.googleusercontent.com',
    use_fedcm_for_prompt: false,
    callback: async function (response: any) {
      console.log(response.credential);
      const {
        data: { token, isNew },
        err,
      } = await loginBycredential(response.credential);
      if (!err) {
        if (isNew) {
          sinupEvent();
        }
        await saveToken(token);
        store.getUserInfo();
        router.push('/');
      }
    },
  });
  window.google?.accounts?.id?.prompt();
});
</script>

<template>
  <el-container class="wrap">
    <el-header class="header" height="62px"> <v-header :type="layouProps.type as string" /> </el-header>
    <el-main class="main">
      <slot />
    </el-main>
    <el-footer class="footer_wrap">
      <v-footer />
    </el-footer>
    <v-changeLanguagetk />
  </el-container>
</template>
<style lang="scss" scoped>
.wrap {
  .header {
    position: fixed;
    left: 0;
    top: 0;
    padding: 0;
    z-index: 999;
    width: 100%;
    border-bottom: 0px solid #ebeef5 !important;
  }
  .main {
    padding: 60px 0 0 0;
    min-height: calc(100vh - 60px);
  }
  .footer_wrap {
    padding: 0 30px;
    @media (max-width: 450px) {
      padding: 0px 15px;
    }
    // border: 1px red solid;
  }
}
</style>
