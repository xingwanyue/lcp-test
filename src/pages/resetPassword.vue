<template>
  <div class="login">
    <div class="left">
      <img :src="lockImg" alt="" />
      <div class="t1">Forgot Password?</div>
      <div class="t2">Please enter the email used to create your account</div>
      <el-form
        ref="ruleFormRef"
        :rules="rules"
        :model="formData"
        size="default"
        class="login-form"
        @submit.native.prevent
      >
        <!-- <el-form-item prop="email" label="" style="margin-top: 80px;margin-bottom: 16px;">
          <el-input v-model="formData.email" disabled placeholder="Enter your email"> </el-input>
        </el-form-item>
        <div class="desc">We'll send you an email with the reset link</div> -->
        <el-form-item prop="code" label="" style="margin-top: 80px; margin-bottom: 16px">
          <el-input v-model="formData.code" placeholder="Enter your code"> </el-input>
        </el-form-item>
        <div class="desc">Please wait for 120 seconds to reset code</div>
        <el-form-item style="margin-top: 24px; margin-bottom: 16px">
          <div v-if="errShow" class="err-message">
            <img :src="errIcon" class="errIcon" alt="" />
            <span>{{ errMessage }}</span>
          </div>
          <div class="login_btn_out">
            <el-button v-loading="loading" type="primary" native-type="submit" class="submit" @click="submit">
              Request Password Reset
            </el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="zhuce">
            <div class="goLogin" @click="goLogin">＜ Back to log in</div>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { sesCodeVerify } from '@/api';

import lockImg from '../public/img/login/lock.svg';
import errIcon from '../public/img/login/errIcon.svg';
definePageMeta({
  layout: 'noheaderfooter',
});
const route = useRoute();
const router = useRouter();

const { email } = route.query || {};
const formData = ref({ email });
const loading = ref(false);
const errMessage = ref('');
const errShow = ref(false);

const submit = async () => {
  if (loading.value) return false;
  const { email, code } = formData.value || {};
  errShow.value = false;
  if (!code) {
    errShow.value = true;
    errMessage.value = 'Please enter your code.';
    return false;
  }
  const temp = {
    email,
    code,
  };
  loading.value = true;
  const { err } = await sesCodeVerify(temp);
  loading.value = false;
  if (!err) {
    router.push({ path: '/resetPasswordStep2', query: { email } });
  } else {
    errShow.value = true;
    errMessage.value = err.message;
  }
};

const goLogin = () => {
  router.push('/login');
};
</script>

<style lang="scss">
.login {
  .login_btn_out {
    // border: 1px red solid;
    border-radius: 25px;
    background-color: red;
    .el-loading-mask {
      border-radius: 25px;
    }
  }
  .submit {
    width: 400px;
    color: #fff;
    border-radius: 25px;
    height: 50px;
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
      font-family: PingFangSC, PingFang SC;
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
      font-family: PingFangSC, PingFang SC;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
      margin-top: 8px;
      word-break: break-all;
    }
    .err-message {
      display: flex;
      align-items: center;
      width: 400px;
      height: 26px;
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
    .desc {
      font-size: 14px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
      line-height: 20px;
    }
    .goLogin {
      width: 400px;
      font-size: 14px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
      line-height: 20px;
      text-align: center;
      cursor: pointer;
      &:hover {
        color: #f66442;
      }
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
      .err-message {
        width: calc(100% - 48px);
      }
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
