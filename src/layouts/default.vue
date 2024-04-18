<script setup lang="ts">
import vHeader from './header.vue';
import vFooter from './footer.vue';
useHead({
  script: [{ src: 'https://accounts.google.com/gsi/client' }],
});
declare global {
  interface Window {
    google: any;
  }
}
onMounted(() => {
  window.google.accounts.id.initialize({
    client_id: '1044858520955-9ua24gpj8m98avtbp030t6dp624fi689.apps.googleusercontent.com',
    callback: function (response: any) {
      console.log(response);
    },
  });
  window.google.accounts.id.prompt();
});
</script>

<template>
  <el-container class="wrap">
    <el-header class="header" height="62px"> <v-header /> </el-header>
    <el-main class="main">
      <slot />
    </el-main>
    <el-footer class="footer_wrap"> <v-footer /></el-footer>
    <!-- <div
      id="g_id_onload"
      data-client_id="1044858520955-9ua24gpj8m98avtbp030t6dp624fi689.apps.googleusercontent.com"
      data-login_uri="https://app.detpractice.com/weapp/api/common/login"
      data-auto_select
    ></div> -->
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
    // border: 1px red solid;
  }
}
</style>
