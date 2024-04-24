<script lang="ts" setup>
import { reactive } from "vue";
useSeoMeta({
  title: "Cookie Policy - DET Practice",
});

const state = reactive({});
</script>
<template>
  <div class="aboutus">
    <div
      class="learn_hader"
      :style="`background-image: url(/img/aboutus/banner-aboutus.svg);`"
    >
      <div class="learn_hader_content">
        <div class="title"><h1>Cookie Policy</h1></div>
      </div>
    </div>
    <div class="content padding">
      <div class="title">Last updated : 2024-03-27</div>
      <div class="content1">
        This Cookie Policy explains what cookies are, how we use them, and your choices
        regarding cookies on our website.
      </div>
    </div>
    <div class="content padding">
      <div class="title">What are cookies?</div>
      <div class="content1">
        Cookies are small pieces of text sent by your web browser by a website you visit.
        A cookie file is stored in your web browser and allows the website or a
        third-party to recognize you and make your next visit easier and the website more
        useful to you. Cookies can be "persistent" or "session" cookies. Persistent
        cookies remain on your personal computer or mobile device when you go offline,
        while session cookies are deleted as soon as you close your web browser.
      </div>
    </div>
    <div class="content padding">
      <div class="title">How we use cookie?</div>
      <div class="content1">
        When you use and access our website, we may place a number of cookies files in
        your web browser.
      </div>
      <div class="content1">
        We use cookies for the following purposes :
        <ul>
          <li>To enable certain functions of the website</li>
          <li>To provide analytics</li>
          <li>To store your preferences</li>
          <li>
            To enable advertisements delivery (which are cookies from a domain different
            than the domain of the website you are visiting – for our advertising and
            marketing efforts.)
          </li>
        </ul>
      </div>
      <div class="content1">
        We use both session and persistent cookies on our website and we use different
        types of cookies to run the website:
        <ul>
          <li>
            Essential cookies: We may use essential cookies to authenticate users and
            prevent fraudulent use of user accounts.
          </li>
          <li>
            Analytical/performance cookies: We may use analytical/performance cookies to
            track user activity on the website and gather data about how visitors use the
            website. This information is used to improve the website experience for our
            users.
          </li>
          <li>
            Functionality cookies: We may use functionality cookies to recognize you when
            you return to the website and personalize content for you.
          </li>
          <li>
            Targeting cookies: We may use targeting cookies to record your visit to the
            website, the pages you have visited, and the links you have followed.
          </li>
        </ul>
      </div>
    </div>
    <div class="content padding">
      <div class="title">Your choices regarding cookies</div>
      <div class="content1">
        If you prefer to avoid the use of cookies on our website, you must disable the use
        of cookies in your browser and then delete the cookies saved in your browser
        associated with this website. You may use this option for preventing the use of
        cookies at any time.
      </div>
    </div>
    <div class="content padding">
      <div class="title">Contact us</div>
      <div class="content1">
        If you have any questions about our Cookie Policy, please contact us :
      </div>
      <div class="content1">
        <ul>
          <li>
            By email:
            <a href="mailto:info@aitogether.uk" class="yellow">info@aitogether.uk</a>
          </li>
          <li>
            By visiting this page on our website:
            <a
              class="yellow"
              href="https://www.detpractice.com/contact-us/"
              target="_blank"
              >https://www.detpractice.com/contact-us/</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="content padding">
      <div class="title">Changes to our Cookie Policy</div>
      <div class="content1">
        We may update our Cookie Policy from time to time. We will notify you of any
        changes by posting the new Cookie Policy on this page.
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.aboutus {
  .learn_hader {
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .learn_hader_content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 66px 0 120px;
      .title {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        line-height: 72px;
      }
    }
  }
  .content {
    max-width: 1260px;
    margin: auto;
    margin-top: 100px;
    box-sizing: border-box;
    .title {
      font-weight: 500;
      font-size: 28px;
      color: #201515;
      line-height: 36px;
    }
    .author {
      font-size: 16px;
      color: #201515;
      line-height: 24px;
      margin-top: 8px;
    }
    .content1 {
      font-size: 16px;
      color: #201515;
      line-height: 24px;
      margin-top: 24px;
      .yellow {
        color: #f66442;
        text-decoration: underline;
      }
    }
  }
  .con-list {
    background: linear-gradient(180deg, #ffffff 0%, #fff4f1 100%);
    padding-bottom: 120px !important;
    margin-top: 100px;
    .con-list1 {
      max-width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .content-l {
        width: calc(50% - 24px);
        padding: 0px 0px;
      }
    }
  }
  .padding {
    padding: 0px 30px;
  }
}
@media (max-width: 800px) {
  .aboutus {
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
      }
    }
    .content {
      max-width: 100%;
      margin: auto;
      margin-top: 50px;
      .title {
        font-size: 20px;
        line-height: 28px;
      }
      .author {
        font-size: 14px;
        line-height: 18px;
      }
      .content1 {
        font-size: 14px;
        line-height: 18px;
        margin-top: 12px;
      }
    }
    .con-list {
      background: linear-gradient(180deg, #ffffff 0%, #fff4f1 100%);
      padding-bottom: 60px !important;
      margin-top: 50px;
      .con-list1 {
        max-width: 100%;
        margin: auto;
        display: block;
        .content-l {
          width: 100%;
          padding: 0px 0px;
        }
      }
    }
    .padding {
      padding: 0px 14px;
    }
  }
}
</style>
