<script setup lang="ts">
import vHeader from './header.vue';
import vFooter from './footer.vue';
</script>

<template>
  <el-container class="wrap">
    <el-header class="header" height="72px"> <v-header /> </el-header>
    <el-main class="main">
      <slot />
    </el-main>
    <el-footer class="footer_wrap"> <v-footer /></el-footer>
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
  }
  .main {
    padding: 72px 0 0 0;
    min-height: calc(100vh - 60px);
  }
  .footer_wrap {
    padding: 0 30px;
    border: 1px red solid;
  }
}
</style>
