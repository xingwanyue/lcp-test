<script setup lang="ts"></script>

<template>
  <el-container class="wrap">
    <el-header class="header" height="60px"> HEADER </el-header>
    <el-main class="main">
      <slot />
    </el-main>
    <el-footer>Footer</el-footer>
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
    padding: 60px 0 0;
    min-height: calc(100vh - 60px);
  }
}
</style>
