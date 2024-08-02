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

declare global {
  interface Window {
    google: any;
  }
}

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
