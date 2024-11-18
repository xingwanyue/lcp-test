<script setup lang="ts">
import Layout from './layouts/default.vue';
</script>

<template>
  <Layout>
    <div class="errPage">
      <div class="errContent">
        <img src="/img/affiliate/cre_th_w_l.svg" alt="empty" class="left" />
        <div class="right">
          <h1 class="text-404">404</h1>
          <div class="text-desc">Sorry, The Page Not Found.</div>
          <a href="/" class="goHomeBtn">Go Home</a>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.errPage {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  .errContent {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 80px 30px;
  }

  .left {
    width: 50%;
  }
  .right {
    width: calc(50% - 80px);
    margin-left: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .text-404 {
      font-weight: 700;
      font-size: 64px;
      line-height: 1.25;
      margin: 0;
    }
    .text-desc {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 2.25rem;
      padding-bottom: 1.25rem;
    }
  }
  .goHomeBtn {
    padding: 9px 0;
    width: 150px;
    text-align: center;
    background-color: #f66442;
    border-radius: 22px;
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
  }
  @media screen and (max-width: 600px) {
    .left {
      display: none;
    }
    .right {
      width: 100%;
      margin: 0;
      align-items: center;
    }
  }
}
</style>
