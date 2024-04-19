<script lang="ts" setup>
import { reactive } from 'vue';
import _ from 'lodash';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';
import type { FormInstance } from 'element-plus';
import { ElMessage } from 'element-plus';
import { portalContact } from '@/utils';
import subscribe from '../../components/subscribe.vue';

const router = useRouter();
const route = useRoute();
const ruleFormRef = ref<FormInstance>();
const state = reactive({
  loading: false,
  formData: {} as any,
});
const rules = reactive({
  name: [{ required: true, message: 'Please enter your name.', trigger: 'blur' }],
  email: [{ required: true, message: 'Please enter your email address.', trigger: 'blur' }],
  message: [{ required: true, message: 'Please enter your message.', trigger: 'blur' }],
});
const submit = async () => {
  if (state.loading) {
    return;
  }
  const formNode1 = ruleFormRef.value as any;
  formNode1.validate(async (valid: any) => {
    state.loading = true;
    if (valid) {
      // 验证通过
      const { err } = await useFetch(`${portalContact}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state.formData),
      }) as any;
      if (!err) {
        ElMessage({ type: 'success', message: 'Submitted successfully' });
        state.formData = {};
      }
    }
    state.loading = false;
  });
};
</script>
<template>
  <div class="contactus">
    <div class="learn_hader" :style="`background-image: url(/img/aboutus/banner-aboutus.svg);`">
      <div class="learn_hader_content">
        <h1 class="title">Contact Us</h1>
        <h2 class="title2">Questions, bug reports, feedback - we’re here to help!</h2>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <div class="title">Fill in the form</div>
        <div class="desc">Thank you for choosing to get in touch with us. Please fill out this contact form and our
          staff will reach
          out to you as soon as possible to address your inquiries.</div>
        <div class="info">
          <el-image src="/img/aboutus/email.svg" class="email-img"></el-image>
          <div class="info-right">
            <div class="name">Email</div>
            <div class="address">support@detpractice.com</div>
          </div>
        </div>
      </div>
      <div class="right">
        <el-form ref="ruleFormRef" :rules="rules" :model="state.formData" size="default" class="login-form"
          @submit.native.prevent>
          <el-form-item prop="name" label="">
            <el-input v-model="state.formData.name" placeholder="Name"> </el-input>
          </el-form-item>
          <el-form-item prop="email" label="">
            <el-input v-model="state.formData.email" placeholder="Email Address"> </el-input>
          </el-form-item>
          <el-form-item prop="message" label="">
            <el-input v-model="state.formData.message" type="textarea" :rows="6" placeholder="Message"> </el-input>
          </el-form-item>
          <el-form-item style="margin-top: 24px; margin-bottom: 16px">
            <el-button v-loading="state.loading" class="submit" @click="submit">
              Subit
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <subscribe />
  </div>
</template>
<style lang="scss">
.contactus{
  .el-input__inner{
    height: 50px;
  }
  .el-loading-spinner .path{
    stroke: #f66442;
  }
}
</style>
<style lang="scss" scoped>
.contactus{
  .learn_hader {
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .learn_hader_content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 88px 0 88px;
      .title {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        line-height: 72px;
      }
      .title2{
        font-weight: 400;
        font-size: 24px;
        color: #201515;
        line-height: 32px;
        margin-top: 24px;
      }
    }
  }
  .content{
    max-width: 1200px;
    margin: auto;
    padding: 100px 30px;
    box-sizing: border-box;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }
  .left{
     width: 40%;
    .title{
      font-weight: 500;
      font-size: 32px;
      color: #201515;
    }
    .desc{
      font-size: 20px;
      color: #403F3E;
      line-height: 28px;
      margin-top: 40px;
    }
    .info{
      margin-top: 48px;
      display: flex;
      .email-img{
        width: 56px;
        height: 56px;
        display: block;
      }
      .info-right{
        margin-left: 16px;
      }
      .name{
        font-weight: 600;
        font-size: 20px;
        color: #201515;
        line-height: 32px;
      }
      .address{
        font-size: 16px;
        color: #403F3E;
        line-height: 20px;
        margin-top: 4px;
      }
    }
  }
  .right{
    width: 53%;
    .submit{
      width: 160px;
      height: 50px;
      background: #F66442;
      border-radius: 8px;
      color: #fff;
      font-size: 18px;
    }
  }
}
@media (max-width: 800px){
  .contactus{
    .learn_hader {
      text-align: center;
      background: #fff4f1;
      .learn_hader_content {
        max-width: 100%;
        margin: 0 auto;
        padding: 20px 14px 12px;
        .title {
          font-size: 24px;
          line-height: 30px;
        }
        .title2{
          font-size: 14px;
          line-height: 22px;
          margin-top: 12px;
        }
      }
    }
    .content{
      max-width: calc(100% - 30px);
      padding: 50px 15px;
      display: block;
    }
    .left{
      width: 100%;
      .title{
        font-size: 22px;
      }
      .desc{
        font-size: 14px;
        line-height: 18px;
        margin-top: 20px;
      }
      .info{
        margin-top: 24px;
        .email-img{
          width: 44px;
          height: 44px;
        }
        .info-right{
          margin-left: 8px;
        }
        .name{
          font-size: 16px;
          line-height: 22px;
        }
        .address{
          font-size: 14px;
          line-height: 16px;
          margin-top: 4px;
        }
      }
    }
    .right{
      width: 100%;
      margin-top: 12px;
      .submit{
        width: 100%;
      }
    }
  }
}
</style>
