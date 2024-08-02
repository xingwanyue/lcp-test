<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { useRouter } from 'vue-router';
import { sesCodeSend } from '@/api';
import { fetchmy } from '@/utils/request';
definePageMeta({
  layout: 'noheaderfooter',
});

const router = useRouter();

const formData = ref({});
const loading = ref(false);
const errMessage = ref('');
const errShow = ref(false);

const submit = async () => {
  if (loading.value) return false;
  const { email } = formData.value || {};
  errShow.value = false;
  if (!email) {
    errShow.value = true;
    errMessage.value = t('forget.Please_enter');
    return false;
  }
  const pan = /\w+[@][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)+/;
  if (!pan.test(email)) {
    errShow.value = true;
    errMessage.value = t('forget.Invalid_email');
    return false;
  }
  loading.value = true;
  const { err } = await sesCodeSend({
    email: formData.value.email,
    type: 'findPassword',
  });
  loading.value = false;
  if (!err) {
    router.push({ path: '/resetPassword', query: { email: formData.value.email } });
  } else {
    errShow.value = true;
    errMessage.value = err.message;
  }
};
</script>

<template>
  <div class="login">
    <div class="left">
      <img src="/img/login/lock.svg" alt="" />
      <div class="t1">{{ $t('forget.t1') }}</div>
      <h1 class="t2">{{ $t('forget.t2') }}</h1>
      <el-form
        ref="ruleFormRef"
        :rules="rules"
        :model="formData"
        size="default"
        class="login-form"
        @submit.native.prevent
      >
        <el-form-item prop="email" label="" style="margin-top: 80px; margin-bottom: 16px">
          <el-input v-model="formData.email" :placeholder="$t('forget.Enter_your_email')"> </el-input>
        </el-form-item>
        <div class="desc">{{ $t('forget.desc') }}</div>
        <el-form-item style="margin-top: 24px; margin-bottom: 16px">
          <div v-if="errShow" class="err-message">
            <img src="/img/login/errIcon.svg" class="errIcon" :alt="$t('forget.alt')" />
            <span>{{ errMessage }}</span>
          </div>
          <div class="login_btn_out">
            <el-button v-loading="loading" type="primary" class="submit" @click="submit">
              {{ $t('forget.Send_reset_code') }}
            </el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="zhuce">
            <NuxtLink class="goLogin" :to="localePath('/login')">＜ {{ $t('forget.Back_to_login') }}</NuxtLink>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <!-- <div class="right">
      <el-image :src="loginImg" class="loginImg" fit="contain"></el-image>
    </div> -->
  </div>
</template>

<style lang="scss">
.login {
  .login_btn_out {
    // border: 1px red solid;
    border-radius: 25px;
    background-color: red;
    width: 100%;
    .el-loading-mask {
      border-radius: 25px;
    }
  }
  .submit {
    width: 400px;
    border-radius: 25px;
    height: 50px;
    color: #fff;
    background-color: #f66442;
    border-color: #f66442;
    font-size: 18px;
    &:hover,
    &:active {
      color: #fff !important;
      background-color: darken(#f66442, 10%) !important;
    }
  }
  .el-input__inner {
    // 设置光标颜色
    caret-color: rgba(0, 0, 0, 0.45) !important;
    &:hover,
    &:active,
    &:focus {
      border-color: rgba(0, 0, 0, 0.45) !important;
    }
  }
  .el-input__wrapper {
    height: 40px;
  }
  .el-input__suffix-inner > img {
    margin-top: 1px !important;
  }
}
</style>
<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: #f7f8f9;
  .left {
    flex: none;
    width: 400px;

    background-color: #f7f8f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // max-height: 960px;
    .t1 {
      width: 400px;
      font-size: 32px;
      font-weight: 600;
      color: #333333;
      line-height: 45px;
      text-align: center;
      word-break: break-all;
    }
    .t2 {
      width: 410px;
      // white-space: nowrap;
      font-size: 16px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
      margin-top: 8px;
      text-align: center;
      word-break: break-all;
    }
    .err-message {
      display: flex;
      align-items: center;
      width: 400px;
      height: 40px;
      background: #fef7f5;
      border-radius: 4px;
      border: 1px solid rgba(246, 100, 66, 0.1);
      box-sizing: border-box;
      color: #f66442;
      font-size: 14px;
      margin-bottom: 8px;
      .errIcon {
        width: 16px;
        height: 16px;
        margin-right: 8px;
        margin-left: 8px;
      }
    }
    .desc {
      font-size: 14px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
      line-height: 20px;
    }
    .goLogin {
      width: 400px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
      line-height: 20px;
      text-align: center;
      cursor: pointer;
      &:hover {
        color: #f66442;
      }
    }
    .zhuce {
      width: 100%;
      // border: 1px red solid;
      text-align: center;
    }
  }
  .right {
    width: 50%;
    flex: none;
    background: #f66442;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    .loginImg {
      width: calc(100% - 40px);
      display: block;
      // margin: auto;
      // flex: none;
    }
  }
}
@media screen and (max-width: 958px) {
  .login {
    .right {
      display: none;
    }
    .left {
      height: 100vh;
    }
  }
}
@media screen and (max-width: 600px) {
  .login {
    .left {
      width: calc(100% - 48px);
      .t1 {
        width: calc(100% - 48px);
      }
      .t2 {
        width: calc(100% - 48px);
      }
      // .err-message {
      //   width: calc(100% - 48px);
      // }
      .goLogin {
        width: calc(100% - 48px);
      }
    }
    .login-form {
      width: calc(100% - 48px);
    }
    .submit {
      width: 100%;
    }
  }
}
</style>
