<script setup lang="ts">
const email = ref('');
const sendEmail = async () => {
  const { err } = (await useFetch(`${api}/common/portalSubscribe`, {
    method: 'post',
    body: { email: email.value },
  })) as any;
  if (!err) {
    ElMessage.success('Subscribe successfully');
    email.value = '';
  }
};
</script>

<template>
  <div class="subscribe_out_wrapper">
    <div class="subscribe_out">
      <div class="subscribe_in_left">
        <div class="left_font1">Subscribe!</div>
        <div class="left_font2">Get the latest exam news and tips for improving your score.</div>
      </div>
      <div class="subscribe_in_right">
        <el-input size="large" v-model="email" style="width: 100%" placeholder="Email">
          <template #append>
            <el-button @click="sendEmail" class="common_btn_hover_bgColor subscribe-btn"
              type="primary">Subscribe</el-button></template>
        </el-input>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.subscribe_out_wrapper {
  padding: 64px 30px;
  background: #fff4f1;
  .subscribe_out {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    grid-column-gap: 80px;
    grid-row-gap: 40px;
    .subscribe_in_left {
      min-width: 300px;
      .left_font1 {
        font-weight: 500;
        font-size: 40px;
        color: #201515;
      }
      .left_font2 {
        font-weight: 400;
        font-size: 20px;
        color: #201515;
        margin-top: 8px;
      }
    }
    .subscribe_in_right {
      flex: 1;
      min-width: 300px;
      .subscribe-btn{
        height: 100%;
        border-radius: 0px 8px 8px 0px;
        background: #F66442;
      }
    }
  }
}
</style>
<style>
.el-input-group__append {
  background: #f66442;
  color: #fff;
}

.el-input__wrapper.is-focus {
  box-shadow: 0 0 0 2px #201515 inset !important;
}
</style>
