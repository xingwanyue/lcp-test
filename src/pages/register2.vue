<template>
  <div class="login">
    <div class="left">
      <div class="t1">Sign up</div>
      <div class="t2">Create your free DETPractice account</div>
      <div class="loginGoogle" @click="googleRegister">
        <img src="/img/login/google_logo.svg" alt="" />
        <span style="margin-left: 16px">Sign up with Google</span>
      </div>
      <el-divider class="fengeline"><span>Or continue with</span></el-divider>
      <el-form
        ref="ruleFormRef"
        :rules="rules"
        :model="formData"
        size="default"
        class="login-form"
        @submit.native.prevent
      >
        <el-form-item prop="code" label="">
          Register code
          <el-input v-model="formData.code" placeholder="Enter your code"> </el-input>
        </el-form-item>
        <el-form-item prop="nickname" label="">
          Full Name
          <el-input v-model="formData.nickname" maxlength="100" placeholder="Full Name"> </el-input>
        </el-form-item>
        <el-form-item prop="password" label="">
          Password
          <el-input
            v-model="formData.password"
            :type="pwdShow ? 'text' : 'password'"
            maxlength="20"
            placeholder="Password"
          >
            <template #suffix>
              <img
                :src="pwdShow ? '/img/login/look.svg' : '/img/login/unlook.svg'"
                style="cursor: pointer"
                alt=""
                @click="pwdShow = !pwdShow"
              />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-top: 24px; margin-bottom: 16px">
          <div v-if="errShow" class="err-message">
            <img src="/img/login/errIcon.svg" class="errIcon" alt="" />
            <span>{{ errMessage }}</span>
          </div>
          <el-button v-loading="loading" type="primary" native-type="submit" class="submit" @click="submit">
            Create Account
          </el-button>
        </el-form-item>
        <el-form-item>
          <div class="zhuce">
            <div class="goregister">
              Already have an account?
              <span style="color: #f66442; cursor: pointer" @click="goLogin">Login here.</span>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { register } from '@/api';
import { oauth2SignIn } from '@/utils/googleAuth';
import { sinupEvent } from '@/utils/gtag';

definePageMeta({
  layout: 'noheaderfooter',
});

const router = useRouter();
const route = useRoute();

const formData = ref({});
const loading = ref(false);
const pwdShow = ref(false);
const errMessage = ref('');
const errShow = ref(false);

const submit = async () => {
  if (loading.value) return false;
  const { code, nickname, password } = formData.value || {};
  const email = route.query.email;
  errShow.value = false;
  if (!code) {
    errShow.value = true;
    errMessage.value = 'Please enter your code.';
    return false;
  }
  if (!nickname) {
    errShow.value = true;
    errMessage.value = 'Please enter your full name.';
    return false;
  }
  if (!password) {
    errShow.value = true;
    errMessage.value = 'Please enter your email address.';
    return false;
  }
  if (password.length < 6) {
    errShow.value = true;
    errMessage.value = 'Password too short.';
    return false;
  }
  const temp = {
    email,
    nickname,
    code,
    password,
  };
  loading.value = true;
  const { err } = await register(temp);
  loading.value = false;
  if (!err) {
    sinupEvent();
    router.push('/login');
  } else {
    errShow.value = true;
    errMessage.value = err.message;
  }
};

const goLogin = () => {
  router.push('/login');
};

const googleRegister = async () => {
  // TODO: Implement Google registration
  return oauth2SignIn();
};
</script>

<style lang="scss">
.login {
  .el-loading-mask {
    border-radius: 25px !important;
  }
  .login_btn_out {
    // border: 1px red solid;
    border-radius: 25px;
    width: 100%;
    background-color: red;
  }
  .submit {
    width: 400px;
    color: #fff;
    background-color: #f66442;
    border-color: #f66442;
    font-size: 14px;
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
    width: 400px;
    flex: none;
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
        font-size: 12px;
        color: rgba(0, 0, 0, 0.45);
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
