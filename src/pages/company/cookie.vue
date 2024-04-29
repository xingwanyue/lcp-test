<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({});
useServerSeoMeta({
  title: 'Cookie Policy - DET Practice',
});
</script>
<template>
  <div class="privacyPolicy">
    <div class="learn_hader" :style="`background-image: url(/img/aboutus/banner-aboutus.svg);`">
      <div class="learn_hader_content">
        <h1 class="title">Cookie Policy</h1>
      </div>
    </div>
    <div class="bg">
      <div class="content margin-top0" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Last updated: <span style="color: #f66442">2024-03-27</span></div>
        <div class="content1">
          This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies on our
          website.
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">What are cookies?</div>
        <div class="content1">
          Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in
          your web browser and allows the website or a third-party to recognize you and make your next visit easier and
          the website more useful to you.
          <div class="line-break"></div>
          Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or
          mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">How we use cookie</div>
        <div class="content1">
          When you use and access our website, we may place a number of cookies files in your web browser.
          <div class="line-break"></div>
          We use cookies for the following purposes :
          <div class="line-break"></div>
          • To enable certain functions of the website
          <div class="line-break"></div>
          • To provide analytics
          <div class="line-break"></div>
          • To store your preferences
          <div class="line-break"></div>
          • To enable advertisements delivery (which are cookies from a domain different than the domain of the website
          you are visiting – for our advertising and marketing efforts.)
          <div class="line-break"></div>
          We use both session and persistent cookies on our website and we use different types of cookies to run the
          website:
          <div class="line-break"></div>
          • Essential cookies: We may use essential cookies to authenticate users and prevent fraudulent use of user
          accounts.
          <div class="line-break"></div>
          • Analytical/performance cookies: We may use analytical/performance cookies to track user activity on the
          website and gather data about how visitors use the website. This information is used to improve the website
          experience for our users.
          <div class="line-break"></div>
          • Functionality cookies: We may use functionality cookies to recognize you when you return to the website and
          personalize content for you.
          <div class="line-break"></div>
          • Targeting cookies: We may use targeting cookies to record your visit to the website, the pages you have
          visited, and the links you have followed.
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Your choices regarding cookies</div>
        <div class="content1">
          If you prefer to avoid the use of cookies on our website, you must disable the use of cookies in your browser
          and then delete the cookies saved in your browser associated with this website. You may use this option for
          preventing the use of cookies at any time.
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Contact us</div>
        <div class="content1">
          If you have any questions about our Cookie Policy, please contact us :
          <div class="line-break"></div>
          • By email: <span class="website">info@aitogether.uk</span>
          <div class="line-break"></div>
          • By visiting this page on our website:

          <nuxt-link to="https://www.detpractice.com/contact-us/" target="_blank" class="website">
            https://www.detpractice.com/contact-us/
          </nuxt-link>
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">Changes to our Cookie Policy</div>
        <div class="content1">
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie
          Policy on this page.
          <!-- <nuxt-link to="https://stripe.com/us/legal" target="_blank" class="website">
            https://stripe.com/us/legal
          </nuxt-link>
          &
          <nuxt-link to="https://stripe.com/us/privacy" target="_blank" class="website">
            https://stripe.com/us/privacy.
          </nuxt-link> -->
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
