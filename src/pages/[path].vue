<script lang="ts" setup>
import { api } from '@/utils';
import LearnDetail from '@/components/articleDetail.vue';

const route = useRoute();

const { data: article } = (await useFetch(`${api}/common/article?path=${route.params.path}`, {
  server: true,
})) as any;
const isLearn = article.value?.type === '2' || article.value?.type === '1';

useServerSeoMeta({
  title: () => article.value?.title || 'DET Pratice Blog',
  description: () => article.value?.description || 'DET Pratice Blog',
  keywords: () => article.value?.keywords,
});
useHead({
  link: [{ rel: 'canonical', href: () => `https://www.${domain}/${article.value?.path}` }],
});
</script>
<template>
  <NuxtLayout :type="article?.type">
    <div v-if="!isLearn" class="article_detail">
      <div class="detail_hader">
        <div class="detail_hader_content">
          <h1>{{ article.name }}</h1>
        </div>
      </div>
      <div class="article" v-if="article?.content">
        <div class="articleContent" v-html="article?.content"></div>
      </div>
    </div>
    <div v-else>
      <LearnDetail :id="article?.id" :categoryId="article?.categoryId" :type="article?.type" :article="article" />
    </div>
  </NuxtLayout>
</template>
<style scoped lang="scss">
.article_detail {
  .detail_hader {
    text-align: center;

    background: #fff4f1;
    .detail_hader_content {
      // max-width: 1200px;
      margin: 0 auto;
      padding: 120px 30px;
      background: url('/img/aboutus/banner-aboutus.svg') center no-repeat;
      background-size: cover;
      @media (max-width: 650px) {
        padding: 60px 0;
      }
      h1 {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        margin: 0;
        @media (max-width: 650px) {
          font-size: 36px;
        }
      }
    }
  }

  .article {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 30px;
    .articleContent {
      max-width: 1200px;
      width: 100%;
    }
  }
}
</style>
