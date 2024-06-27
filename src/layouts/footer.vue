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
const cookieShow = ref(false);
onMounted(() => {
  setTimeout(() => {
    const cookieShowlocalStorage = localStorage.getItem('cookieShow');
    if (cookieShowlocalStorage !== 'true') {
      cookieShow.value = true;
      localStorage.setItem('cookieShow', 'true');
    }
  }, 5000);
});
const prod = {
  name: 'Products',
  list: [
    {
      name: t('footer.Products[0]'),
      url: '/practice',
    },
    {
      name: t('footer.Products[1]'),
      url: '/correction',
    },
    {
      name: t('footer.Products[2]'),
      url: '/mock-exam',
    },
    {
      name: t('footer.Products[3]'),
      url: '/courses',
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
  Learn.value.list = [...Learnjk.value?.data, { name: 'show more', path: 'learn' }].map((item: any) => {
    return {
      name: item.name,
      url: `${item.path}`,
    };
  });
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
  Blog.value.list = [...blogsjk.value?.data, { name: 'show more', path: 'blog' }].map((item: any) => {
    return {
      name: item.name,
      url: `${item.path}`,
    };
  });
};

const Company = {
  name: 'Company',
  list: [
    {
      name: t('footer.Company[0]'),
      url: '/about-us',
    },
    {
      name: t('footer.Company[1]'),
      url: '/contact-us',
    },
    {
      name: t('footer.Company[2]'),
      url: '/tos',
    },
    {
      name: t('footer.Company[3]'),
      url: '/privacy-policy',
    },
  ],
};
const language = ref('en');

// 是否需要记住上次选择的语言
// const userSelectLanguage = getStorage('detlanguage');

// if (userSelectLanguage) {
//   language.value = userSelectLanguage;
//   locale.value = userSelectLanguage;
//   store.userChangeLanguage(userSelectLanguage);
// }
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
  {
    value: 'id',
    label: 'Indonesian',
  },
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
const closeCookie = () => {
  cookieShow.value = false;
};
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
        <div
          v-for="(itemin, indexin) in Learn.list"
          :key="indexin"
          :class="`one_link_list_detail ${itemin.name === 'show more' ? $t('footer.show_more') : ''}`"
        >
          <NuxtLink :to="localePath(`/${itemin.url}`)"> {{ itemin.name }}</NuxtLink>
        </div>
      </div>
      <div class="one_link_list">
        <div class="one_link_list_title">{{ Blog.name }}</div>
        <div
          v-for="(itemin, indexin) in Blog.list"
          :key="indexin"
          :class="`one_link_list_detail ${itemin.name === 'show more' ? $t('footer.show_more') : ''}`"
        >
          <NuxtLink :to="localePath(`/${itemin.url}`)"> {{ itemin.name }}</NuxtLink>
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
          <img src="/img/footer/small_logo.svg" :alt="$t('footer.alt')" />
        </div>
        <div class="logo_icon_out">
          <span class="Copyright">© 2024 DET Practice</span>
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
        <div v-if="options.length" class="select_out">
          <el-select v-model="language" placeholder="Select" style="width: 240px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
      </div>
    </div>

    <div v-if="cookieShow" class="cookie_out">
      <div class="cookie_header">
        <img
          :src="`/img/footer/close_icon.svg`"
          alt="DET Practice:The best Duolingo English Test Practice platform"
          @click="closeCookie"
        />
      </div>
      <div class="cookie_contenr">
        {{ $t('footer.cookie_contenr') }}
        <NuxtLink :to="localePath(`/cookie`)" class="see_cookei">Cookie Policy</NuxtLink>
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
    display: flex;
    justify-content: space-between;
    @media (max-width: 496px) {
      // text-align: center;
    }
    @media (max-width: 670px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 24px;
      grid-row-gap: 24px;
    }

    .one_link_list {
      // width: auto;
      // max-width: 22%;
      .one_link_list_title {
        margin-bottom: 24px;
        font-weight: 600;
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
        max-width: 350px;
        &:hover {
          a {
            color: #f66442;
          }
        }
        &.show_more {
          text-decoration: underline !important;
          &:hover {
            color: #f66442 !important;
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
    }
  }
  .footer_logo_dom {
    margin-top: 68px;
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    align-items: center;
    justify-content: center;
    // border: 1px red solid;
    @media (max-width: 929px) {
      grid-template-columns: 1fr;
      grid-row-gap: 24px;
    }
    .footer_logo_left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      grid-column-gap: 20px;
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
        justify-content: flex-start;
        align-items: center;
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
          background-size: cover;
          &:hover {
            background-image: url('/img/footer/youtube_logo_active.svg');
          }
        }
        .x {
          background-image: url('/img/footer/x_logo.svg');
          background-size: cover;
          &:hover {
            background-image: url('/img/footer/x_logo_active.svg');
          }
        }
        .facebook {
          background-image: url('/img/footer/facebook_logo.svg');
          background-size: cover;
          &:hover {
            background-image: url('/img/footer/facebook_logo_active.svg');
          }
        }
        .tiktok {
          background-image: url('/img/footer/tiktok_logo.svg');
          background-size: cover;
          &:hover {
            background-image: url('/img/footer/tiktok_logo_active.svg');
          }
        }
      }
    }
    .Copyright {
      font-weight: 400;
      font-size: 14px;
      color: #403f3e;
      text-align: center;
      margin-right: 22px;
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

  .cookie_out {
    // border: 1px red solid;
    position: fixed;
    bottom: 17px;
    left: 16px;
    padding: 12px;
    width: 320px;
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    .cookie_header {
      display: flex;
      justify-content: flex-end;

      img {
        cursor: pointer;
        width: 14px;
        height: 14px;
        // border: 1px red solid;
      }
    }
    .cookie_contenr {
      font-size: 14px;
      color: #201515;
      .see_cookei {
        font-weight: 600;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>
