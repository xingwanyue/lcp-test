<script setup lang="ts">
import { urlGet, staticUrlGet } from '@/utils';
// 接收参数
const props = defineProps<{
  src: string;
  alt: string;
}>();
const loaded = ref(false);
const imgOnload = () => {
  loaded.value = true;
};
</script>

<template>
  <div class="my_image_out">
    <el-image v-show="loaded" :src="staticUrlGet(`/${props.src}`)" :alt="props.alt" @load="imgOnload"></el-image>
    <el-skeleton v-show="!loaded" :rows="10" animated>
      <template #template>
        <el-skeleton-item variant="image" style="width: 100%; height: 250px" />
      </template>
    </el-skeleton>
  </div>
</template>
<style lang="scss" scoped>
.my_image_out {
  width: auto;
}
</style>
