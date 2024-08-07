<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { domain } from '@/utils';
import { useStore } from '@/store';
import { reactive } from 'vue';

const localePath = useLocalePath();
const store = useStore();
const { locale, t, setLocale } = useI18n();
const state = reactive({
  isMore1: false,
  isMore2: false,
  iconHoverIndex: -1,
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
const showmorefont = computed(() => {
  return t('footer.show_more');
});
const prod = computed(() => {
  return {
    name: t('footer.ProductsTitle'),
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
});

const Learn = ref([] as any);

const getLearn = async () => {
  let args = { type: '2', flag: '1' } as any;
  if (!state.isMore2) {
    args = { ...args, page: 1, pageSize: 4 };
  }
  const { data: Learnjk } = (await useFetch(`${api}/common/article`, {
    server: true,
    query: { ...args },
    headers: { locale: locale.value },
  })) as any;
  Learn.value = [...Learnjk.value?.data, { name: showmorefont, path: 'learn' }].map((item: any) => {
    return {
      name: item.name,
      url: `${item.path}`,
    };
  });
};
const Blog = ref([]);
const getBlob = async () => {
  let args = { type: '1', flag: '1' } as any;
  if (!state.isMore1) {
    args = { ...args, page: 1, pageSize: 4 };
  }
  const { data: blogsjk } = (await useFetch(`${api}/common/article`, {
    server: true,
    query: { ...args },
    headers: { locale: locale.value },
  })) as any;
  Blog.value = [...blogsjk.value?.data, { name: showmorefont, path: 'blog' }].map((item: any) => {
    return {
      name: item.name,
      url: `${item.path}`,
    };
  });
};
const Company = computed(() => {
  return {
    name: t('footer.CompanyTitle'),
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
      {
        name: t('footer.Company[6]'),
        url: '/refund-policy',
      },
      {
        name: t('footer.Company[5]'),
        url: '/affiliate-program',
      },
      {
        name: t('footer.Company[4]'),
        url: '/sitemap',
      },
    ],
  };
});

const language = ref('');

language.value = locale.value;
getLearn();
getBlob();

const clickChangeLanguage = (item) => {
  setLocale(item.value).then(() => {
    getLearn();
    getBlob();
  });
  language.value = item.value;
  // if (item.value === 'ar') {
  //   document.documentElement.setAttribute('dir', 'rtl');
  // } else {
  //   document.documentElement.setAttribute('dir', 'ltr');
  // }
};
const wehaveLanguage = {
  ar: 'العربية',
  da: 'Dansk',
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  id: 'Bahasa Indonesia',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  nb: 'Norsk',
  nl: 'Nederlands',
  pl: 'Polski',
  pt: 'Português',
  ru: 'Русский',
  th: 'ไทย',
  tr: 'Türkçe',
  zh: '中文',
};
const options = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'id',
    label: 'Bahasa Indonesia',
  },
  {
    value: 'ja',
    label: '日本語',
  },
  {
    value: 'ko',
    label: '한국어',
  },
  {
    value: 'ar',
    label: 'العربية',
  },
  {
    value: 'ru',
    label: 'Русский',
  },
  {
    value: 'tr',
    label: 'Türkçe',
  },
  {
    value: 'da',
    label: 'Dansk',
  },
  {
    value: 'de',
    label: 'Deutsch',
  },
  {
    value: 'es',
    label: 'Español',
  },
  {
    value: 'fr',
    label: 'Français',
  },
  {
    value: 'it',
    label: 'Italiano',
  },
  {
    value: 'nb',
    label: 'Norsk',
  },
  {
    value: 'nl',
    label: 'Nederlands',
  },
  {
    value: 'pl',
    label: 'Polski',
  },
  {
    value: 'pt',
    label: 'Português',
  },
  {
    value: 'th',
    label: 'ไทย',
  },
  {
    value: 'zh',
    label: '中文',
  },
];

const closeCookie = () => {
  cookieShow.value = false;
};
const iconHover = (index: number) => {
  state.iconHoverIndex = index;
};
const earth = `${cdn}/store/portal/home/earth_icon.svg`;
const arrow_up_down = `${cdn}/store/portal/home/arrow_icon.svg`;
</script>

<template>
  <div class="common_footer">
    <div class="footer_link_dom">
      <div class="one_link_list">
        <div class="one_link_list_title">{{ prod.name }}</div>
        <div v-for="(itemin, indexin) in prod.list" :key="indexin" class="one_link_list_detail">
          <NuxtLink :to="localePath(`${itemin.url}`)" :title="itemin.name"> {{ itemin.name }}</NuxtLink>
        </div>
      </div>
      <div class="one_link_list">
        <div class="one_link_list_title">{{ $t('footer.LearnTitle') }}</div>
        <div
          v-for="(itemin, indexin) in Learn"
          :key="indexin"
          :class="`one_link_list_detail ${itemin.name === 'show more' ? 'show_more' : ''}`"
        >
          <NuxtLink :to="localePath(`/${itemin.url}`)" :title="itemin.name"> {{ itemin.name }}</NuxtLink>
        </div>
      </div>
      <div class="one_link_list">
        <div class="one_link_list_title">{{ $t('footer.BlogTitle') }}</div>
        <div
          v-for="(itemin, indexin) in Blog"
          :key="indexin"
          :class="`one_link_list_detail ${itemin.name === 'show more' ? 'show_more' : ''}`"
        >
          <NuxtLink :to="localePath(`/${itemin.url}`)" :title="itemin.name"> {{ itemin.name }}</NuxtLink>
        </div>
      </div>
      <div class="one_link_list">
        <div class="one_link_list_title">{{ Company.name }}</div>
        <div v-for="(itemin, indexin) in Company.list" :key="indexin" class="one_link_list_detail">
          <template v-if="itemin.url === '/sitemap'">
            <NuxtLink style="display: none" :to="`https://www.${domain}/sitemap.xml`" :title="itemin.name">
              {{ itemin.name }}</NuxtLink
            >
          </template>
          <template v-if="itemin.url === '/contact-us'">
            <el-tooltip class="box-item" effect="customized12" content="support@detpractice.com" placement="top">
              <a rel="nofollow" :href="`mailto:support@detpractice.com`">
                {{ itemin.name }}
              </a>
            </el-tooltip>
          </template>
          <template v-else>
            <NuxtLink :to="localePath(`${itemin.url}`)" :title="itemin.name"> {{ itemin.name }}</NuxtLink>
          </template>
        </div>
      </div>
    </div>
    <div class="footer_logo_dom">
      <div class="footer_logo_left">
        <div class="footer_logo_left_left">
          <div class="logo_img_out">
            <img src="/img/footer/small_logo.svg" :alt="$t('footer.newAlt')" />
          </div>
          <div class="Copyright">© 2024 DET Practice</div>
        </div>

        <div class="logo_icon_out">
          <NuxtLink to="https://youtube.com/@duolingoenglishtestpractices" target="_blank">
            <div class="one_icon youtube" @mouseover="iconHover(0)" @mouseleave="iconHover(-1)">
              <img v-show="state.iconHoverIndex !== 0" src="/img/footer/youtube_logo.svg" />
              <img v-show="state.iconHoverIndex === 0" src="/img/footer/youtube_logo_active.svg" />
            </div>
          </NuxtLink>
          <NuxtLink to="https://x.com/det_practice" target="_blank">
            <div class="one_icon x" @mouseover="iconHover(1)" @mouseleave="iconHover(-1)">
              <img v-show="state.iconHoverIndex !== 1" src="/img/footer/x_logo.svg" />
              <img v-show="state.iconHoverIndex === 1" src="/img/footer/x_logo_active.svg" />
            </div>
          </NuxtLink>
          <NuxtLink to="https://www.facebook.com/detpractice" target="_blank">
            <div class="one_icon facebook" @mouseover="iconHover(2)" @mouseleave="iconHover(-1)">
              <img v-show="state.iconHoverIndex !== 2" src="/img/footer/facebook_logo.svg" />
              <img v-show="state.iconHoverIndex === 2" src="/img/footer/facebook_logo_active.svg" />
            </div>
          </NuxtLink>
          <NuxtLink to=" https://www.instagram.com/detpractice" target="_blank">
            <div class="one_icon ins" @mouseover="iconHover(3)" @mouseleave="iconHover(-1)">
              <img v-show="state.iconHoverIndex !== 3" src="/img/footer/ins_logo.svg" />
              <img v-show="state.iconHoverIndex === 3" src="/img/footer/ins_logo_active.svg" />
            </div>
          </NuxtLink>
          <!-- <NuxtLink to=""> 
            <div class="one_icon tiktok"></div>
          </NuxtLink> -->
        </div>
      </div>

      <div class="footer_logo_right">
        <div class="tips_out">{{ t('footer.inc') }}</div>
        <div v-if="options.length" class="select_out">
          <!-- <el-select v-model="language" placeholder="Select" style="width: 240px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select> -->
          <el-popover popper-class="options_out_out" placement="top" trigger="hover" width="350px">
            <div class="options_out">
              <div
                class="options_out_name"
                v-for="item in options"
                :key="item.value"
                @click="clickChangeLanguage(item)"
              >
                {{ item.label }}
              </div>
            </div>
            <template #reference>
              <div class="popover_btn">
                <div class="earth_icon">
                  <el-image :src="earth" alt="earth_icon" />
                </div>
                <div class="language_font">
                  {{ wehaveLanguage[language] }}
                </div>
                <div class="arrow_icon">
                  <el-image :src="arrow_up_down" alt="arrow_up_down_arrow_icon" />
                </div>
              </div>
            </template>
          </el-popover>
        </div>
      </div>
    </div>

    <div v-if="cookieShow" class="cookie_out">
      <div class="cookie_header">
        <img :src="`/img/footer/close_icon.svg`" :alt="$t('footer.close_icon_alt')" @click="closeCookie" />
      </div>
      <div class="cookie_contenr">
        {{ $t('footer.cookie_contenr') }}
        <NuxtLink :to="localePath(`/cookie`)" title="Cookie Policy" class="see_cookei">Cookie Policy</NuxtLink>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.common_footer {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 56px;
  padding-bottom: 36px;
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
      @media (max-width: 550px) {
        grid-gap: 20px;
      }
      @media (max-width: 1009px) {
        justify-content: center;
      }
      flex-wrap: wrap;
      .footer_logo_left_left {
        // border: 1px red solid;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        grid-column-gap: 20px;
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
        .Copyright {
          font-weight: 400;
          font-size: 14px;
          color: #403f3e;
          text-align: center;
          margin-right: 22px;
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

        .tiktok {
          background-image: url('/img/footer/tiktok_logo.svg');
          background-size: cover;
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
<style lang="scss">
.is-customized12 {
  color: white;
  background: #f66442 !important;
  .el-popper__arrow:before {
    background: #f66442 !important;
  }
}

.popover_btn {
  padding: 12px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;

  .earth_icon {
    width: 16px;
    height: 16px;
    // border: 1px red solid;
  }
  .language_font {
    font-weight: 400;
    font-size: 14px;
    color: #201515;
    margin-left: 4px;
    position: relative;
    top: -1px;
    min-width: 130px;
  }
  .arrow_icon {
    width: 16px;
    height: 16px;
    // border: 1px red solid;
    margin-left: 33px;
    transform: rotate(180deg);
  }
  &:hover {
    .arrow_icon {
      transform: rotate(0deg);
    }
  }
}
.options_out_out {
  background: #ffffff;
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
  .options_out {
    background: #ffffff;
    border-radius: 4px;
    display: grid;
    grid-gap: 12px;
    grid-template-columns: 1fr 1fr;
    padding-left: 12px;
    .options_out_name {
      font-weight: 400;
      font-size: 14px;
      color: #201515;
      cursor: pointer;
      &:hover {
        color: #f66442;
      }
    }
  }
}
</style>
