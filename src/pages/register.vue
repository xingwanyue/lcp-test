<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { useRouter } from 'vue-router';
import { sesCodeSend } from '@/api';
definePageMeta({
  layout: 'noheaderfooter',
});

const router = useRouter();

const formData = ref({});
const loading = ref(false);
const pwdShow = ref(false);
const errMessage = ref('');
const errShow = ref(false);

const submit = async () => {
  if (loading.value) return false;
  const { email } = formData.value || {};
  errShow.value = false;
  if (!email) {
    errShow.value = true;
    errMessage.value = t('register.peyea');
    return false;
  }
  const pan = /\w+[@][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)+/;
  if (!pan.test(email)) {
    errShow.value = true;
    errMessage.value = t('register.Invalid_email');
    return false;
  }
  loading.value = true;
  const { err } = await sesCodeSend({ email: formData.value.email, type: 'register' });
  loading.value = false;
  if (!err) {
    router.push({ path: '/register2', query: { email: formData.value.email } });
  } else {
    errShow.value = true;
    errMessage.value = err.message;
  }
};

const goLogin = () => {
  router.push('/login');
};

const googleRegister = () => {};
</script>
<template>
  <div class="login">
    <div class="left">
      <div class="t1">{{ $t('register.Sign_up') }}</div>
      <h1 class="t2">{{ $t('register.cya') }}</h1>
      <div class="loginGoogle" @click="googleRegister">
        <img src="/img/login/google_logo.svg" :alt="$t('register.alt')" />
        <span style="margin-left: 16px">{{ $t('register.suwg') }}</span>
      </div>
      <el-divider class="fengeline"
        ><span>{{ $t('register.ocw') }}</span></el-divider
      >
      <el-form
        ref="ruleFormRef"
        :rules="rules"
        :model="formData"
        size="default"
        class="login-form"
        @submit.native.prevent
      >
        <el-form-item prop="email" label="" style="margin-bottom: 16px">
          {{ $t('register.Email_address') }}
          <el-input v-model="formData.email" placeholder="you@example.com"> </el-input>
        </el-form-item>
        <div class="desc">{{ $t('register.ywr') }}</div>
        <el-form-item style="margin-top: 24px; margin-bottom: 16px">
          <div v-if="errShow" class="err-message">
            <img src="/img/login/errIcon.svg" class="errIcon" :alt="$t('register.alt')" />
            <span>{{ errMessage }}</span>
          </div>
          <div class="login_btn_out">
            <el-button v-loading="loading" type="primary" native-type="submit" class="submit" @click="submit">
              {{ $t('register.cwe') }}
            </el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="zhuce">
            <div class="goregister">
              {{ $t('register.ahaa') }}
              <span style="color: #f66442; cursor: pointer" @click="goLogin"> {{ $t('register.Login_here') }}</span>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss">
.login {
  .login_btn_out {
    // border: 1px red solid;
    width: 100%;
    border-radius: 25px;
    background-color: red;
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
  background-color: #f7f8f9;
  height: 100vh;
  overflow: hidden;
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
    }
    .t2 {
      width: 400px;
      font-size: 16px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
      margin-top: 8px;
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
    .loginGoogle {
      width: 400px;
      height: 50px;
      border-radius: 25px;
      border: 1px solid #201515;
      background: #ffffff;
      font-size: 18px;
      margin-top: 49px;
      font-weight: 600;
      color: #333333;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .fengeline {
      width: 400px;
      margin-top: 48px;
      :deep(.el-divider__text) {
        background-color: #f7f8f9 !important;
        font-weight: 400;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        padding: 0 16px;
      }
    }
    .desc {
      font-size: 14px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
      line-height: 20px;
    }
    .zhuce {
      width: 100%;
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
      .loginGoogle {
        width: calc(100% - 48px);
      }
      .fengeline {
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
