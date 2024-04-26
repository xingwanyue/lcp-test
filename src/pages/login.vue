<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useStore } from '@/store';
import { oauth2SignIn } from '@/utils/googleAuth';
import { getToken, saveToken } from '@/utils';

const localePath = useLocalePath();
const route = useRoute();
const router = useRouter();
const store = useStore();

const url = route.query.url ? decodeURIComponent(route.query.url as string) : '/';
const formData = ref({}) as any;
const loading = ref(false);
const pwdShow = ref(false);
const errMessage = ref('');
const errShow = ref(false);
definePageMeta({
  layout: 'noheaderfooter',
});

onMounted(async () => {
  const token = await getToken();
  if (token) {
    await store.getUserInfo();
    if (url.startsWith('http')) {
      window.location.href = url;
      return;
    }
    router.push(url);
  }
});

const submit = async () => {
  if (loading.value) return false;
  const { email, password } = formData.value || {};
  errShow.value = false;
  if (!email) {
    errShow.value = true;
    errMessage.value = 'Please enter your email address.';
    return false;
  }
  const pan = /\w+[@][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)+/;
  if (!pan.test(email)) {
    errShow.value = true;
    errMessage.value = 'Invalid email.';
    return false;
  }
  if (!password) {
    errShow.value = true;
    errMessage.value = 'Please enter your password.';
    return false;
  }
  loading.value = true;
  const { err, data: { token = '' } = {} } = await store.userClickLogin({
    email: formData.value.email,
    password: formData.value.password,
  });

  if (!err) {
    await saveToken(token);
    await store.getUserInfo();
    // 如果url 包含 http 则打开一个新窗口 去应用内
    if (url.startsWith('http')) {
      window.location.href = url;
      return;
    }
    router.push(url);
  } else {
    errShow.value = true;
    errMessage.value = err.message;
  }
  loading.value = false;
};

const googleLogin = async () => {
  return oauth2SignIn(url);
};
</script>

<template>
  <div class="login">
    <div class="left">
      <div class="t1">Welcome back</div>
      <h1 class="t2">Login to practice</h1>
      <div class="loginGoogle" @click="googleLogin">
        <img src="/img/login/google_logo.svg" alt="Login with Google" />
        <span style="margin-left: 16px">Login with Google</span>
      </div>
      <el-divider class="fengeline"><span>Or continue with</span></el-divider>
      <el-form ref="ruleFormRef" :model="formData" size="default" class="login-form" @submit.native.prevent>
        <el-form-item prop="email" label="">
          Email address
          <el-input v-model="formData.email" placeholder="you@example.com"> </el-input>
        </el-form-item>
        <el-form-item prop="password" label="">
          Password
          <el-input v-model="formData.password" :type="pwdShow ? 'text' : 'password'" placeholder="Password">
            <template #suffix>
              <img
                :src="pwdShow ? '/img/login/look.svg' : '/img/login/unlook.svg'"
                alt="DET Practice:The best Duolingo English Test Practice platform"
                @click="pwdShow = !pwdShow"
              />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-top: 24px; margin-bottom: 16px">
          <div v-if="errShow" class="err-message">
            <img
              src="/img/login/errIcon.svg"
              class="errIcon"
              alt="DET Practice:The best Duolingo English Test Practice platform"
            />
            <span>{{ errMessage }}</span>
          </div>
          <div class="login_btn_out">
            <el-button v-loading="loading" type="primary" native-type="submit" class="submit" @click="submit">
              Login
            </el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="zhuce">
            <div class="goforget">
              <NuxtLink :to="localePath('/forget')" style="color: #f66442; cursor: pointer">Forgot password?</NuxtLink>
            </div>
            <div class="goregister">
              Don't have an account?
              <NuxtLink :to="localePath('/register')" style="color: #f66442; cursor: pointer">Sign up here</NuxtLink>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <!-- <div class="right">1</div> -->
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
  background-color: #f7f8f9;
  //   overflow: hidden;
  .left {
    // border: 1px red solid;
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
      font-size: 12px;
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
      }
    }
    .zhuce {
      // border: 1px red solid;
      margin: 0 auto;
    }
    .goforget {
      color: #f66442 !important;
      cursor: pointer;
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
        margin-top: 48px;
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
