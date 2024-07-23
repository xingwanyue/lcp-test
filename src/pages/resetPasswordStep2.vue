<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { findPassword } from '@/api';

definePageMeta({
  layout: 'noheaderfooter',
});

const router = useRouter();
const route = useRoute();

const formData = ref({});
const loading = ref(false);
const pwdShow = ref(false);
const pwdShow1 = ref(false);
const errMessage = ref('');
const errShow = ref(false);

const submit = async () => {
  if (loading.value) return false;
  const { email } = route.query || {};
  const { pwd, pwd1 } = formData.value || {};
  errShow.value = false;
  if (!pwd) {
    errShow.value = true;
    errMessage.value = t('resetPasswordStep2.peue');
    return false;
  }
  if (pwd.length < 6) {
    errShow.value = true;
    errMessage.value = t('resetPasswordStep2.pts');
    return false;
  }
  if (pwd !== pwd1) {
    errShow.value = true;
    errMessage.value = t('resetPasswordStep2.pi');
    return false;
  }
  const temp = {
    email,
    password: pwd,
  };
  loading.value = true;
  const { err } = await findPassword(temp);
  if (!err) {
    router.push('/login');
  } else {
    errShow.value = true;
    errMessage.value = err.message;
  }
  loading.value = false;
};

const goLogin = () => {
  router.push('/login');
};
</script>
<template>
  <div class="login">
    <div class="left">
      <img src="/img/login/lock.svg" :alt="$t('resetPasswordStep2.alt')" />
      <div class="t1">{{ $t('resetPasswordStep2.fp') }}</div>
      <div class="t2">{{ $t('resetPasswordStep2.pete') }}</div>
      <el-form
        ref="ruleFormRef"
        :rules="rules"
        :model="formData"
        size="default"
        class="login-form"
        @submit.native.preven
      >
        <el-form-item prop="pwd" label="" style="margin-top: 80px">
          {{ $t('resetPasswordStep2.np') }}
          <el-input
            v-model="formData.pwd"
            :type="pwdShow ? 'text' : 'password'"
            maxlength="20"
            :placeholder="$t('resetPasswordStep2.eanp')"
          >
            <template #suffix>
              <img
                :src="pwdShow ? '/img/login/look.svg' : '/img/login/unlook.svg'"
                style="cursor: pointer"
                :alt="$t('resetPasswordStep2.alt')"
                @click="pwdShow = !pwdShow"
              />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd1" label="" style="margin-top: 0px">
          {{ $t('resetPasswordStep2.cnp') }}
          <el-input
            v-model="formData.pwd1"
            :type="pwdShow1 ? 'text' : 'password'"
            maxlength="20"
            :placeholder="$t('resetPasswordStep2.cynp')"
          >
            <template #suffix>
              <img
                :src="pwdShow1 ? '/img/login/look.svg' : '/img/login/unlook.svg'"
                style="cursor: pointer"
                :alt="$t('resetPasswordStep2.alt')"
                @click="pwdShow1 = !pwdShow1"
              />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-top: 24px; margin-bottom: 16px">
          <div v-if="errShow" class="err-message">
            <img src="/img/login/errIcon.svg" class="errIcon" :alt="$t('resetPasswordStep2.alt')" />
            <span>{{ errMessage }}</span>
          </div>
          <div class="login_btn_out">
            <el-button v-loading="loading" type="primary" class="submit" @click="submit">
              {{ $t('resetPasswordStep2.rmp') }}
            </el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="zhuce">
            <div class="goLogin" @click="goLogin">＜ {{ $t('resetPasswordStep2.btl') }}</div>
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
    border-radius: 25px;
    background-color: red;
    width: 100%;
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
      font-size: 16px;
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
