<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({});
useSeoMeta({
  title: 'Privacy Policy - DET Practice',
});
</script>
<template>
  <div class="privacyPolicy">
    <div class="learn_hader" :style="`background-image: url(/img/aboutus/banner-aboutus.svg);`">
      <div class="learn_hader_content">
        <h1 class="title">Privacy Policy</h1>
      </div>
    </div>
    <div class="bg">
      <div class="content margin-top0" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Last updated: 2023-11-20</div>
        <div class="content1">
          DET Pratice (“us”, “we”, or “our”) operates the DET Pratice website (the “Service”).
          <div class="line-break"></div>
          This page informs you of our policies regarding the collection, use, and disclosure of Personal Information
          when you use our Service.
          <div class="line-break"></div>
          We will not use or share your information with anyone except as described in this Privacy Policy.
          <div class="line-break"></div>
          We use your Personal Information to provide and improve the Service. By using the Service, you agree to the
          collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy
          Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at
          <nuxt-link to="https://detpractice.com" target="_blank" class="website"> https://detpractice.com </nuxt-link>
          <div class="line-break"></div>
          Information Collection And Use
          <div class="line-break"></div>
          While using our Service, we may ask you to provide us with certain personally identifiable information that
          can be used to contact or identify you. Personally identifiable information (“Personal Information”) may
          include, but is not limited to:
          <div class="line-break"></div>
          • Name
          <div class="line-break"></div>
          • Email address
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Log Data</div>
        <div class="content1">
          We collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may
          include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version,
          the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and
          other statistics.
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Cookies</div>
        <div class="content1">
          Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are
          sent to your browser from a website and stored on your computer’s hard drive.
          <div class="line-break"></div>
          We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate
          when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions
          of our Service.
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Service Providers</div>
        <div class="content1">
          We may employ third-party companies and individuals to facilitate our Service, to provide the Service on our
          behalf, to perform Service-related services, or to assist us in analyzing how our Service is used.
          <div class="line-break"></div>
          These third parties have access to your Personal Information only to perform these tasks on our behalf and are
          obligated not to disclose or use it for any other purpose.
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Security</div>
        <div class="content1">
          The security of your Personal Information is important to us, but remember that no method of transmission over
          the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable
          means to protect your Personal Information, we cannot guarantee its absolute security.
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Payment Info & Security</div>
        <div class="content1">
          In order to collect payments on your behalf from your customers, and provide payments to you, we, using Stripe
          as a third-party payment processor, collect payment information from you, your attendees and customers, your
          vendors, and other parties to whom we provide payments on your behalf and from whom we collect payments on
          your behalf. This information is used solely to collect and provide payments related to the Services and is
          only stored by Stripe. You should review the terms of service and privacy policies of Stripe, available at
          <nuxt-link to="https://stripe.com/us/legal" target="_blank" class="website">
            https://stripe.com/us/legal
          </nuxt-link>
          &
          <nuxt-link to="https://stripe.com/us/privacy" target="_blank" class="website">
            https://stripe.com/us/privacy.
          </nuxt-link>
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Links To Other Sites</div>
        <div class="content1">
          Our Service may contain links to other sites that are not operated by us. If you click on a third-party link,
          you will be directed to that third-party’s site. We strongly advise you to review the Privacy Policy of every
          site you visit.
          <div class="line-break"></div>
          We have no control over and assume no responsibility for the content, privacy policies, or practices of any
          third-party sites or services.
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.privacyPolicy {
  .learn_hader {
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .learn_hader_content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 120px 0px;
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
  .privacyPolicy {
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
