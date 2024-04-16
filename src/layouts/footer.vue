<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { saveStorage, getStorage } from '@/utils';
import { useStore } from '@/store';
const localePath = useLocalePath();
const store = useStore();
const { locale, t } = useI18n();
const link_arr = [];
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
  list: [],
});
const { data: learnjk } = (await useFetch(`${api}/common/article`, {
  server: true,
  query: {
    categoryId: 3,
    page: 1,
    pageSize: 4,
  },
})) as any;
Learn.value.list = learnjk.value.data.map((item) => {
  return {
    name: item.title,
    url: `${item.path}`,
  };
});

const Blog = ref({
  name: 'Blog',
  list: [],
});
const { data: blogsjk } = (await useFetch(`${api}/common/article`, {
  server: true,
  query: {
    type: '1',
    page: 1,
    pageSize: 4,
  },
})) as any;

Blog.value.list = blogsjk.value.data.map((item) => {
  return {
    name: item.title,
    url: `${item.path}`,
  };
});

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

watch(language, (newVal) => {
  locale.value = newVal;
  saveStorage('detlanguage', newVal);
});

const options = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'id',
    label: 'Indonesian',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];
</script>

<template>
  <div class="common_footer">
    <div class="footer_link_dom">
      <div class="one_link_list">
        <div class="one_link_list_title">{{ prod.name }}</div>
        <div v-for="(itemin, indexin) in prod.list" :key="index * 10 + indexin" class="one_link_list_detail">
          <NuxtLink :to="localePath(`${itemin.url}`)"> {{ itemin.name }}</NuxtLink>
        </div>
      </div>
      <div class="one_link_list">
        <div class="one_link_list_title">{{ Learn.name }}</div>
        <div v-for="(itemin, indexin) in Learn.list" :key="index * 10 + indexin" class="one_link_list_detail">
          <NuxtLink :to="localePath(`${itemin.url}`)"> {{ itemin.name }}</NuxtLink>
        </div>
        <div class="one_link_list_detail show_more">
          <NuxtLink :to="localePath(`/learn`)">show more</NuxtLink>
        </div>
      </div>
      <div class="one_link_list">
        <div class="one_link_list_title">{{ Blog.name }}</div>
        <div v-for="(itemin, indexin) in Blog.list" :key="index * 10 + indexin" class="one_link_list_detail">
          <NuxtLink :to="localePath(`/blogDetail/${itemin.url}`)"> {{ itemin.name }}</NuxtLink>
        </div>
        <div class="one_link_list_detail show_more">
          <NuxtLink :to="localePath(`/blog`)">show more</NuxtLink>
        </div>
      </div>
      <div class="one_link_list">
        <div class="one_link_list_title">{{ Company.name }}</div>
        <div v-for="(itemin, indexin) in Company.list" :key="index * 10 + indexin" class="one_link_list_detail">
          <NuxtLink :to="localePath(`${itemin.url}`)"> {{ itemin.name }}</NuxtLink>
        </div>
      </div>
    </div>
    <div class="footer_logo_dom">
      <div class="footer_logo_left">
        <div class="logo_img_out">
          <img src="../public/img/footer/small_logo.svg" />
        </div>
        <div class="logo_icon_out">
          <NuxtLink to="">
            <div class="one_icon youtube"></div>
          </NuxtLink>
          <NuxtLink to="">
            <div class="one_icon x"></div>
          </NuxtLink>
          <NuxtLink to="">
            <div class="one_icon facebook"></div>
          </NuxtLink>
          <NuxtLink to="">
            <div class="one_icon tiktok"></div>
          </NuxtLink>
        </div>
      </div>
      <div class="footer_logo_right">
        <div class="tips_out">{{ t('footer.inc') }}</div>
        <div class="select_out">
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-column-gap: 40px;
    @media (max-width: 496px) {
      text-align: center;
    }
    grid-row-gap: 24px;
    .one_link_list {
      // border: 1px red solid;
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
      .show_more {
        width: fit-content;
        border-bottom: 1px #201515 solid;
        &:hover {
          border-bottom: 1px #f66442 solid;
        }
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
          background-image: url('../public/img/footer/youtube_logo.svg');
          &:hover {
            background-image: url('../public/img/footer/youtube_logo_active.svg');
          }
        }
        .x {
          background-image: url('../public/img/footer/x_logo.svg');
          &:hover {
            background-image: url('../public/img/footer/x_logo_active.svg');
          }
        }
        .facebook {
          background-image: url('../public/img/footer/facebook_logo.svg');
          &:hover {
            background-image: url('../public/img/footer/facebook_logo_active.svg');
          }
        }
        .tiktok {
          background-image: url('../public/img/footer/tiktok_logo.svg');
          &:hover {
            background-image: url('../public/img/footer/tiktok_logo_active.svg');
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
