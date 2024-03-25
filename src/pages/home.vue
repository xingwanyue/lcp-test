<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  {{ $t('test') }}
  <NuxtLink :to="localePath('home')">{{ $t('test') }}</NuxtLink>
  <el-button type="primary">test</el-button>
</template>

<style lang="scss" scoped></style>
