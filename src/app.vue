<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script>
import AOS from 'aos';

export default {
  async beforeMount() {
    this.AOS = new AOS.init({ disable: 'phone' ,once:true}); // 你可以在这里设置 AOS 的选项
  },
};
</script>
