<script lang="ts" setup>
import { api } from '@/utils';
import _ from 'lodash';

const route = useRoute();

const { data: article } = (await useFetch(`${api}/common/article?path=${route.params.path}`, {
  server: true,
})) as any;

useSeoMeta({
  title: () => article.value?.title,
  description: () => article.value?.description,
  keywords: () => article.value?.keywords,
});
</script>
<template>
  <div class="article" v-if="article?.content">
    <div class="articleContent" v-html="article?.content"></div>
  </div>
</template>
<style scoped lang="scss">
.article {
  display: flex;
  flex-direction: column;
  align-items: center;
  .articleContent {
    max-width: 1200px;
    width: 100%;
  }
}
</style>
