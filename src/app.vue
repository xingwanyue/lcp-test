<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script>
import AOS from "aos";

export default {
  async beforeMount() {
    if (process.server) {
      // 在服务器端，强制触发 AOS 动画
      this.AOS = new AOS.init({
        startEvent: "load", // 当页面加载时立即开始动画
        once: true, // 动画只播放一次，然后元素保持其动画结束后的状态
      });
    } else {
      // 在客户端，正常初始化 AOS
      this.AOS = new AOS.init({ once: true });
    }
  },
};
</script>
<style lang="scss"></style>
