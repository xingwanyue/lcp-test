<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { saveStorage, getStorage } from '@/utils';
import { useStore } from '@/store';
import { reactive } from 'vue';

const localePath = useLocalePath();
const store = useStore();
const { locale, t } = useI18n();
const state = reactive({
  isMore1: false,
  isMore2: false,
});
const prod = {
  name: 'Products',
  list: [
    {
      name: 'DET Practice',
      url: '/products/bank',
    },
    {
      name: 'AI Correction Service',
      url: '/products/service',
    },
    {
      name: 'DET Mock',
      url: '/products/mock',
    },
    {
      name: 'Duolingo English Test Course',
      url: '/products/guide',
    },
  ],
};

const Learn = ref({
  name: 'Learn',
  list: [] as any,
});
const Blog = ref({
  name: 'Blog',
  list: [] as any,
});
const getLearn = async () => {
  let args = { type: '2', flag: '1' } as any;
  if (!state.isMore2) {
    args = { ...args, page: 1, pageSize: 4 };
  }
  const { data: Learnjk } = (await useFetch(`${api}/common/article`, {
    server: true,
    query: { ...args },
  })) as any;
  Learn.value.list = Learnjk.value.data.map((item: any) => {
    return {
      name: item.title,
      url: `${item.path}`,
    };
  });
};
const showMore2 = async () => {
  state.isMore2 = !state.isMore2;
  getLearn();
};
const getBlob = async () => {
  let args = { type: '1', flag: '1' } as any;
  if (!state.isMore1) {
    args = { ...args, page: 1, pageSize: 4 };
  }
  const { data: blogsjk } = (await useFetch(`${api}/common/article`, {
    server: true,
    query: { ...args },
  })) as any;
  Blog.value.list = blogsjk.value.data.map((item: any) => {
    return {
      name: item.title,
      url: `${item.path}`,
    };
  });
};

const showMore1 = async () => {
  state.isMore1 = !state.isMore1;
  getBlob();
};
const Company = {
  name: 'Company',
  list: [
    {
      name: 'About us',
      url: '/company/aboutus',
    },
    {
      name: 'Contact us',
      url: '/company/contactus',
    },
    {
      name: 'Terms and Conditions',
      url: '/company/termsService',
    },
    {
      name: 'Privacy Policy',
      url: '/company/privacyPolicy',
    },
  ],
};
const language = ref('en');
const userSelectLanguage = getStorage('detlanguage');

if (userSelectLanguage) {
  language.value = userSelectLanguage;
  locale.value = userSelectLanguage;
  store.userChangeLanguage(userSelectLanguage);
}
getLearn();
getBlob();
watch(language, (newVal) => {
  locale.value = newVal;
  saveStorage('detlanguage', newVal);
});

const options = [
  {
    value: 'en',
    label: 'English',
  },
  // {
  //   value: 'id',
  //   label: 'Indonesian',
  // },
  // {
  //   value: 'Option3',
  //   label: 'Option3',
  // },
  // {
  //   value: 'Option4',
  //   label: 'Option4',
  // },
  // {
  //   value: 'Option5',
  //   label: 'Option5',
  // },
];
</script>

<template>
  <div class="common_footer">
    <div class="footer_link_dom">
      <div class="one_link_list">
        <div class="one_link_list_title">{{ prod.name }}</div>
        <div v-for="(itemin, indexin) in prod.list" :key="indexin" class="one_link_list_detail">
          <NuxtLink :to="localePath(`${itemin.url}`)"> {{ itemin.name }}</NuxtLink>
        </div>
      </div>
      <div class="one_link_list">
        <div class="one_link_list_title">{{ Learn.name }}</div>
        <div v-for="(itemin, indexin) in Learn.list" :key="indexin" class="one_link_list_detail">
          <NuxtLink :to="localePath(`/${itemin.url}`)"> {{ itemin.name }}</NuxtLink>
        </div>
        <div class="one_link_list_detail">
          <div :class="['show-more', state.isMore2 && 'show-more1']" @click="showMore2()">
            show more</div>
        </div>
      </div>
      <div class="one_link_list">
        <div class="one_link_list_title">{{ Blog.name }}</div>
        <div v-for="(itemin, indexin) in Blog.list" :key="indexin" class="one_link_list_detail">
          <NuxtLink :to="localePath(`/${itemin.url}`)"> {{ itemin.name }}</NuxtLink>
        </div>
        <div class="one_link_list_detail">
          <div :class="['show-more', state.isMore1 && 'show-more1']" @click="showMore1()">
            show more</div>
        </div>
      </div>
      <div class="one_link_list">
        <div class="one_link_list_title">{{ Company.name }}</div>
        <div v-for="(itemin, indexin) in Company.list" :key="indexin" class="one_link_list_detail">
          <NuxtLink :to="localePath(`${itemin.url}`)"> {{ itemin.name }}</NuxtLink>
        </div>
      </div>
    </div>
    <div class="footer_logo_dom">
      <div class="footer_logo_left">
        <div class="logo_img_out">
          <img src="/img/footer/small_logo.svg" />
        </div>
        <div class="logo_icon_out">
          <NuxtLink to="https://www.youtube.com/@detpracticecom" target="_blank">
            <div class="one_icon youtube"></div>
          </NuxtLink>
          <!-- <NuxtLink to="">
            <div class="one_icon x"></div>
          </NuxtLink> -->
          <NuxtLink to="https://www.facebook.com/detpractice" target="_blank">
            <div class="one_icon facebook"></div>
          </NuxtLink>
          <!-- <NuxtLink to="">
            <div class="one_icon tiktok"></div>
          </NuxtLink> -->
        </div>
      </div>
      <div class="footer_logo_right">
        <div class="tips_out">{{ t('footer.inc') }}</div>
        <div v-if='options.length !== 1' class="select_out">
          <el-select v-model="language" placeholder="Select" style="width: 240px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.common_footer {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 56px;
  padding-bottom: 37px;
  .footer_link_dom {
    text-align: left;
    // display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    // grid-column-gap: 40px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 496px) {
      text-align: center;
    }
    // grid-row-gap: 24px;
    .one_link_list {
      // border: 1px red solid;
      width: auto;
      max-width: 22%;
      .one_link_list_title {
        margin-bottom: 24px;
        font-weight: 500;
        font-size: 20px;
        color: #201515;
      }
      .one_link_list_detail {
        font-weight: 400;
        font-size: 14px;
        color: #201515;
        margin-bottom: 16px;
        line-height: 20px;
        cursor: pointer;
        &:hover {
          a {
            color: #f66442;
          }
        }
      }
      // .show_more {
      //   width: fit-content;
      //   border-bottom: 1px #201515 solid;
      //   &:hover {
      //     border-bottom: 1px #f66442 solid;
      //   }
      // }
      .show-more{
        text-decoration: underline !important;
        &:hover{
          color: #f66442;
        }
      }
      .show-more1{
        color: #f66442;
      }
    }
  }
  .footer_logo_dom {
    margin-top: 68px;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    @media (max-width: 1009px) {
      grid-template-columns: 1fr;
      grid-row-gap: 24px;
    }
    .footer_logo_left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      grid-column-gap: 40px;
      //  border: 1px red solid;
      @media (max-width: 420px) {
        grid-column-gap: 20px;
      }
      @media (max-width: 1009px) {
        justify-content: center;
      }
      .logo_img_out {
        width: 132px;
        height: 24px;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }

        @media (max-width: 420px) {
          width: 100px;
          height: 18px;
        }
      }
      .logo_icon_out {
        display: flex;
        grid-column-gap: 8px;
        .one_icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
          }

          @media (max-width: 420px) {
            width: 24px;
            height: 24px;
          }
        }
        .youtube {
          background-image: url('/img/footer/youtube_logo.svg');
          &:hover {
            background-image: url('/img/footer/youtube_logo_active.svg');
          }
        }
        .x {
          background-image: url('/img/footer/x_logo.svg');
          &:hover {
            background-image: url('/img/footer/x_logo_active.svg');
          }
        }
        .facebook {
          background-image: url('/img/footer/facebook_logo.svg');
          &:hover {
            background-image: url('/img/footer/facebook_logo_active.svg');
          }
        }
        .tiktok {
          background-image: url('/img/footer/tiktok_logo.svg');
          &:hover {
            background-image: url('/img/footer/tiktok_logo_active.svg');
          }
        }
      }
    }
    .footer_logo_right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      grid-column-gap: 24px;
      @media (max-width: 1009px) {
        justify-content: center;
      }
      @media (max-width: 668px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 24px;
      }
      .tips_out {
        font-weight: 400;
        font-size: 14px;
        color: #403f3e;
        @media (max-width: 668px) {
          text-align: center;
        }
      }
      .select_out {
        @media (max-width: 668px) {
          text-align: center;
        }
      }
    }
  }
}
</style>
