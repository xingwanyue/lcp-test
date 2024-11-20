<script lang="ts" setup>
import { articleCategoryGet } from '@/utils';
import find from 'lodash/find';

const route = useRoute();

const getSelect = async () => {
  if (route.query.c) {
    // 路由带分类
    const { data = {} } = (await useFetch(`${articleCategoryGet}`, {
      server: true,
    })) as any;
    const { path } = find(data.value, { id: Number(route.query.c) }) || {};
    return navigateTo(path ? `/blog/${path}` : `/blog`, { redirectCode: 301 });
  }
  return navigateTo(`/blog`, { redirectCode: 301 });
};
await getSelect();
</script>
<template></template>
