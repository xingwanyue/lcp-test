<script setup lang="ts">
const email = ref('');
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const emailErrShow = ref(false);
const emailErrMessage = ref('');
const loading = ref(false);
const sendEmail = async () => {
  // 验证email合法性
  const pan = /\w+[@][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)+/;
  if (!pan.test(email.value)) {
    if (email.value) {
      emailErrMessage.value = t('subscribe.emailErrMessage1');
    } else {
      emailErrMessage.value = t('subscribe.emailErrMessage2');
    }
    emailErrShow.value = true;
    return;
  }
  if (loading.value) {
    return false;
  }
  loading.value = true;
  const { err } = (await useFetch(`${api}/common/portalSubscribe`, {
    method: 'post',
    body: { email: email.value },
  })) as any;
  if (!err) {
    ElMessage.success(t('subscribe.Subscribe_successfully'));
    email.value = '';
    emailErrShow.value = false;
    emailErrMessage.value = '';
    loading.value = false;
  }
};
</script>

<template>
  <div class="subscribe_out_wrapper">
    <div class="subscribe_out">
      <div class="subscribe_in_left">
        <div class="left_font1">{{ $t('subscribe.Subscribe!') }}</div>
        <div class="left_font2">
          {{ $t('subscribe.Subscribe_for') }}
        </div>
      </div>
      <div class="subscribe_in_right">
        <el-input
          size="large"
          v-model="email"
          style="width: 100%"
          :placeholder="$t('subscribe.Email')"
          class="input_self"
          @input="emailErrShow = false"
        >
          <template #append>
            <el-button @click="sendEmail" class="subscribe-btn">{{ $t('subscribe.Subscribe') }}</el-button></template
          >
        </el-input>
        <div class="errDom">
          <span v-if="emailErrShow">{{ emailErrMessage }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.subscribe_out_wrapper {
  padding: 64px 30px;
  @media (max-width: 450px) {
    padding: 32px 15px;
  }
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
    @media (max-width: 768px) {
      grid-row-gap: 20px;
    }
    .subscribe_in_left {
      min-width: 300px;
      .left_font1 {
        font-weight: 500;
        font-size: 40px;
        color: #201515;
        @media (max-width: 768px) {
          font-size: 26px;
          text-align: center;
        }
      }
      .left_font2 {
        font-weight: 400;
        font-size: 20px;
        color: #201515;
        margin-top: 8px;
        @media (max-width: 768px) {
          font-size: 16px;
          text-align: center;
        }
      }
    }
    .subscribe_in_right {
      flex: 1;
      min-width: 300px;
      @media (max-width: 450px) {
        padding-bottom: 20px;
      }
      .subscribe-btn {
        width: 100%;
        height: 100%;
        border-radius: 0px 8px 8px 0px;
        background: #f66442;
        border-color: #f66442;
        font-size: 18px;
        &:hover {
          background: rgba(0, 0, 0, 0.1);
        }
      }
      .errDom {
        padding: 12px;
        padding-left: 0px;
        color: #f66442;
        font-size: 16px;
        position: absolute;
        @media (max-width: 450px) {
          width: calc(100% - 24px);
          text-align: center;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.el-input-group__append {
  background: #f66442;
  color: #fff;
  padding: 0px;
  width: 150px;
  box-shadow: none;
}

.el-input__wrapper.is-focus {
  box-shadow: 0 0 0 2px #201515 inset !important;
}
.subscribe_in_right {
  .input_self {
    height: 50px;
    @media (max-width: 450px) {
      height: 40px;
    }
  }
  .el-input__inner {
    font-size: 18px;
    @media (max-width: 450px) {
      font-size: 18px;
    }
  }
}
</style>
