<script lang="ts" setup>
import { api } from '@/utils';
import _ from 'lodash';

const { data: blogs } = (await useFetch(`${api}/common/article?type=1`, {
  server: true,
})) as any;

useSeoMeta({
  title: 'blog',
  description: 'blog',
  keywords: 'blog',
});
</script>
<template>
  <div class="blogs">
    +
    {{ JSON.stringify(blogs) }}
    <div v-for="blog in blogs" :key="blog">{{ blog.name }}</div>
  </div>
</template>
<style scoped lang="scss">
.blogs {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
