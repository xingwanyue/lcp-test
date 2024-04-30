<script lang="ts" setup>
import { reactive } from 'vue';
import { domain } from '@/utils';
const state = reactive({});
useServerSeoMeta({
  title: 'Terms and Conditions - DET Practice',
  description: '',
});
useHead({
  link: [{ rel: 'canonical', href: `https://www.${domain}/tos` }],
});
</script>
<template>
  <div class="termsService">
    <div class="learn_hader" :style="`background-image: url(/img/aboutus/banner-aboutus.svg);`">
      <div class="learn_hader_content">
        <div class="title">Terms of Service</div>
      </div>
    </div>
    <div class="bg">
      <div class="content margin-top0" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Last updated: 2023-11-20</div>
        <div class="content1">
          Please read these Terms of Service (“Terms”, “TOS”) carefully before using the
          <nuxt-link to="https://detpractice.com" target="_blank" class="website"> https://detpractice.com </nuxt-link>
          website (the “Service”) operated by DET Practice (“us”, “we”, or “our”).
          <div class="line-break"></div>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
          These Terms apply to all visitors, users, and others who access or use the Service.
          <div class="line-break"></div>
          By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the
          terms then you may not access the Service.
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Accounts</div>
        <div class="content1">
          When you create an account with us, you must provide us with information that is accurate, complete, and
          current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
          termination of your account on our Service.
          <div class="line-break"></div>
          You are responsible for safeguarding the password that you use to access the Service and for any activities or
          actions under your password, whether your password is with our Service or a third-party service.
          <div class="line-break"></div>
          You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware
          of any breach of security or unauthorized use of your account.
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Links To Other Web Sites</div>
        <div class="content1">
          Our Service may contain links to third-party websites or services that are not owned or controlled by DET
          Practice.
          <div class="line-break"></div>
          DET Practice has no control over and assumes no responsibility for, the content, privacy policies, or
          practices of any third-party websites or services. You further acknowledge and agree that DET Practice shall
          not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by
          or in connection with the use of or reliance on any such content, goods, or services available on or through
          any such web sites or services.
          <div class="line-break"></div>
          We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or
          services that you visit.
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Termination</div>
        <div class="content1">
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason
          whatsoever, including without limitation if you breach the Terms.
          <div class="line-break"></div>
          Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account,
          you may simply discontinue using the Service.
          <div class="line-break"></div>
          All provisions of the Terms which by their nature should survive termination shall survive termination,
          including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of
          liability.
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Disclaimer</div>
        <div class="content1">
          Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE” basis.
          The Service is provided without warranties of any kind, whether express or implied, including, but not limited
          to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of
          performance.
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Governing Law</div>
        <div class="content1">
          These Terms shall be governed and construed in accordance with the laws of the United Kingdom without regard
          to its conflict of law provisions.
          <div class="line-break"></div>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of
          these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our
          Service and supersede and replace any prior agreements we might have between us regarding the Service.
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Changes</div>
        <div class="content1">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
          material we will try to provide at least 15 days’ notice prior to any new terms taking effect. What
          constitutes a material change will be determined at our sole discretion.
          <div class="line-break"></div>
          By continuing to access or use our Service after those revisions become effective, you agree to be bound by
          the revised terms. If you do not agree to the new terms, please stop using the Service.
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Contact Us</div>
        <div class="content1">If you have any questions about these Terms, please contact us.</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.termsService {
  .learn_hader {
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .learn_hader_content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 120px 0;
      .title {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        line-height: 72px;
        margin: 0px;
      }
    }
  }
  .bg {
    background: linear-gradient(180deg, #ffffff 0%, #fff4f1 100%);
    background-size: 100% 50%;
    background-repeat: no-repeat;
    background-position: 0 100%;
    padding-bottom: 120px;
    padding-top: 120px;
  }
  .margin-top0 {
    margin-top: 0 !important;
  }
  .content {
    max-width: 1260px;
    margin: auto;
    margin-top: 30px;
    padding: 0px 30px;
    box-sizing: border-box;
    .title {
      font-weight: 500;
      font-size: 20px;
      color: #201515;
    }
    .content1 {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.8);
      line-height: 20px;
      margin-top: 12px;
      .line-break {
        margin-top: 8px;
      }
      .website {
        color: #f66442;
      }
    }
  }
}
@media (max-width: 800px) {
  .termsService {
    .learn_hader {
      .learn_hader_content {
        max-width: 100%;
        margin: 0 auto;
        padding: 30px 15px;
        .title {
          font-size: 24px;
          line-height: 30px;
        }
      }
    }
    .bg {
      padding-bottom: 40px;
      padding-top: 40px;
    }
    .content {
      max-width: 100%;
      margin-top: 15px;
      padding: 0px 15px;
    }
  }
}
</style>
