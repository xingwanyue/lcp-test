<script setup lang="ts">
import { api, staticPcUrlGet, urlGet, staticUrlGet, saveStorage, getStorage } from "@/utils";
import _ from "lodash";
import { useStore } from "@/store";
const localePath = useLocalePath();
const { t } = useI18n();

const store = useStore();
const user = computed(() => store.user);

const groupList1Img = staticPcUrlGet('group/list-1.png');
const groupList2Img = staticPcUrlGet('group/list-2.png');
const groupList3Img = staticPcUrlGet('group/list-3.png');
const groupList4Img = staticPcUrlGet('group/list-4.png');
const groupList5Img = staticPcUrlGet('group/list-5.png');

const route = useRoute();
const pathname = computed(() => route.path);
const headerColor = ref("#FFF4F1");
const oldPath = ref('');
watch(pathname, (val) => {
  oldPath.value = getStorage('pathname');
  setTimeout(() => {
    oldPath.value = '';
  }, 200);
  changeHeaderColor(val);
  saveStorage('pathname', val);
});
onMounted(() => {
  changeHeaderColor(pathname.value);
  const dom = document.getElementsByClassName('v-header')[0] as any;
  window.addEventListener('scroll', (e) => {
    if (document.documentElement.scrollTop === 0) {
      headerColor.value = "#FFF4F1";
      dom.style.borderBottom = '0px solid';
    } else {
      headerColor.value = '#fff';
      dom.style.borderBottom = '1px solid #f0e8e8';
    }
  });
});
const changeHeaderColor = (pathname: string) => {
  switch (pathname) {
    case '/products/bank':
      headerColor.value = '#ECF7FF';
      break;
    case '/products/mock':
      headerColor.value = '#FFEFE1';
      break;
    case '/products/guide':
      headerColor.value = ' #E7FDEC';
      break;

    default:
      headerColor.value = '#FFF4F1';
      break;
  }
};

// const { data: cfg } = await useFetch(`${api}/common/cfg`, {
//   server: false,
// });
const listImages = {
  groupList1Img,
  groupList2Img,
  groupList3Img,
  groupList4Img,
  groupList5Img,
} as any;

const visible = ref(false);
const popoverQuestions = ref(false);
const handleOpen = () => {
  visible.value = true;
};

const handleClose = () => {
  visible.value = false;
};

const menus = [
  {
    name: t('Home'),
    path: '/',
  },
  {
    name: t('Products'),
    path: '/products',
  },
  {
    name: t('Learn'),
    path: '/learn',
  },
  {
    name: t('Pricing'),
    path: '/pricing',
  },
  {
    name: t('Blog'),
    path: '/blog',
  },
];

import product_icon1 from '../public/img/home/product_icon1.svg';
import product_icon2 from '../public/img/home/product_icon2.svg';
import product_icon3 from '../public/img/home/product_icon3.svg';
import product_icon4 from '../public/img/home/product_icon4.svg';
const products = ref([
  {
    activeFontColor: 'color: #3E8BF8;',
    activeBgColor: 'background: linear-gradient( , #F5FCFF 0%, #ECF7FF 100%);',
    icon: product_icon1,
    title: 'Duolingo English Test Practice',
    font: 'Dive into Success with Vast Question Bank : 10,000+ Questions, Continuous Updates, and Intelligent Monitoring for Exam Excellence!',
  },
  {
    activeFontColor: 'color: #F66442;',
    activeBgColor: 'background: linear-gradient( , #FFF8F5 0%, #FFF0EC 100%);',
    icon: product_icon2,
    title: 'Duolingo English Test Correction Service',
    font: 'Elevate Your Essays with AI + Teacher : Precision Corrections, Instant Reports, and Score Boosts in Just Two Weeks!',
  },
  {
    activeFontColor: 'color: #FF7C0E;',
    activeBgColor: 'background: linear-gradient( , #FFFAF4 0%, #FFEFE1 100%);',
    icon: product_icon3,
    title: 'Duolingo English Test  Mock',
    font: 'Master Your Exam with Full-Length Mocks: Realistic Simulation, Detailed Analysis, and Rapid Results Anytime, Anywhere!',
  },
  {
    activeFontColor: 'color: #06CC76;',
    activeBgColor: 'background: linear-gradient( , #F2FFF6 0%, #E7FDEC 100%);',
    icon: product_icon4,
    title: 'Duolingo English Test  Course',
    font: 'Unlock DET Success: Comprehensive Mastery, Proven Techniques, and Up-to-Date Insights for Confident Speaking and Writing Excellence!',
  },
]);

const logout = () => {
  store.logout();
};
</script>

<template>
  <div class="v-header" :style="{ backgroundColor: `${headerColor} !important` }">
    <div class="header-content">
      <nuxt-link :to="localePath('home')" class="home-logo">
        <span class="icon iconfont icon-logo logo"></span>
      </nuxt-link>
      <div class="menus">
        <nav v-for="menu in menus" :key="menu.path" :class="`meun ${pathname === menu.path ? 'active' : ''}`">
          <el-popover
            v-if="menu.path === '/products'"
            v-model="popoverQuestions"
            placement="bottom"
            width="80%"
            trigger="hover"
            popper-class="head-question-popover"
          >
            <div class="head-question-con">
              <NuxtLink :to="localePath('/products/bank')" class="one_card card1">
                <div class="icon">
                  <img src="../public/img/home/product_icon1.svg" />
                </div>
                <div class="right">
                  <div class="title">Duolingo English Test Practice</div>
                  <div class="font">
                    Dive into Success with Vast Question Bank : 10,000+ Questions, Continuous Updates, and Intelligent
                    Monitoring for Exam Excellence!
                  </div>
                </div>
              </NuxtLink>
              <NuxtLink :to="localePath('/products/service')" class="one_card card2">
                <div class="icon">
                  <img src="../public/img/home/product_icon2.svg" />
                </div>
                <div class="right">
                  <div class="title">Duolingo English Test Correction Service</div>
                  <div class="font">
                    Elevate Your Essays with AI + Teacher : Precision Corrections, Instant Reports, and Score Boosts in
                    Just Two Weeks!
                  </div>
                </div>
              </NuxtLink>
              <NuxtLink :to="localePath('/products/mock')" class="one_card card3">
                <div class="icon">
                  <img src="../public/img/home/product_icon3.svg" />
                </div>
                <div class="right">
                  <div class="title">Duolingo English Test Mock</div>
                  <div class="font">
                    Master Your Exam with Full-Length Mocks: Realistic Simulation, Detailed Analysis, and Rapid Results
                    Anytime, Anywhere!
                  </div>
                </div>
              </NuxtLink>
              <NuxtLink :to="localePath('/products/guide')" class="one_card card4">
                <div class="icon">
                  <img src="../public/img/home/product_icon4.svg" />
                </div>
                <div class="right">
                  <div class="title">Duolingo English Test Course</div>
                  <div class="font">
                    Unlock DET Success: Comprehensive Mastery, Proven Techniques, and Up-to-Date Insights for Confident
                    Speaking and Writing Excellence!
                  </div>
                </div>
              </NuxtLink>
            </div>
            <template #reference>
              <nuxt-link class="head-name"
                >{{ menu.name }} <el-image src="/img/learn/down-icon.svg" class="down-icon"
              /></nuxt-link>
            </template>
          </el-popover>
          <nuxt-link v-else :to="localePath(menu.path)">{{ menu.name }}
            <div v-if="pathname === menu.path" class="header-scrolls"></div>
            <div v-if="oldPath === menu.path" class="header-scrolls-move"></div>
          </nuxt-link>

        </nav>
      </div>
      <div class="mobile">
        <el-image src="/img/logo.svg" class="mobileLogo" />
      </div>
      <div v-if="user.id" href="/app">
        <el-popover placement="top-start" trigger="hover" class="111">
          <div class="logout_btn" @click="logout">Log out</div>
          <template #reference>
            <div class="userInfo">
              <div class="nickname">{{ user.nickname }}</div>
              <el-image v-if="user.avatar" :src="staticUrlGet(user.avatar)" class="avatar"></el-image>
            </div>
          </template>
        </el-popover>
      </div>
      <div v-else class="loginbtn">
        <nuxt-link :to="localePath('/login')" class="login_font">Log in</nuxt-link>
        <nuxt-link :href="urlGet('/login')" class="try_free common_btn_hover_bgColor">Try for free</nuxt-link>
      </div>
      <div class="mobile">
        <el-image src="/img/menu.svg" class="mobileMenus" @click="handleOpen" />
      </div>
    </div>
    <el-drawer v-model="visible" direction="ltr" size="200px" :with-header="false" :before-close="handleClose">
      <div class="asideMenu">
        <nuxt-link href="/">
          <!-- <el-image src="/img/logo.svg" class="asideLogo" /> -->
        </nuxt-link>
        <div class="asideMenus" @click="handleClose">
          <nuxt-link
            v-for="menu in menus"
            :key="menu.path"
            :class="`asideMeun ${pathname === menu.path ? 'active' : ''}`"
            :href="menu.path"
          >
            {{ menu.name }}
          </nuxt-link>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<style lang="scss">
.header-scrolls {
  width: 100%;
  border-bottom: 4px solid #f66442;
  animation-name: moveto;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
}
@keyframes moveto {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
.header-scrolls-move{
  width: 100%;
  border-bottom: 4px solid #f66442;
  animation-name: disappear;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-timing-function: forwards;
}
@keyframes disappear {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
.head-question-popover {
  .head-question-con {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 16px;
    .one_card {
      padding: 16px;
      border-radius: 8px;
      display: flex;
      grid-column-gap: 16px;
      cursor: pointer;
      .icon {
        width: 32px;
        height: 32px;
      }
      .right {
        .title {
          font-weight: 500;
          font-size: 18px;
          color: #201515;
        }
        .font {
          font-weight: 400;
          font-size: 14px;
          color: #403f3e;
          margin-top: 8px;
        }
      }
    }
    .card1 {
      &:hover {
        .right {
          .title {
            color: #3e8bf8;
          }
        }
        background: linear-gradient(0, #f5fcff 0%, #ecf7ff 100%);
      }
    }
    .card2 {
      &:hover {
        .right {
          .title {
            color: #f66442;
          }
        }
        background: linear-gradient(0, #fff8f5 0%, #fff0ec 100%);
      }
    }
    .card3 {
      &:hover {
        .right {
          .title {
            color: #ff7c0e;
          }
        }
        background: linear-gradient(0, #fffaf4 0%, #ffefe1 100%);
        color: #fff;
      }
    }
    .card4 {
      &:hover {
        .right {
          .title {
            color: #06cc76;
          }
        }
        background: linear-gradient(0, #f2fff6 0%, #e7fdec 100%);
        color: #fff;
      }
    }
  }
}
.logout_btn {
  cursor: pointer;
  // line-height: 40px;
  text-align: center;
  color: rgb(96, 98, 102);
  &:hover {
    color: #f66442;
  }
}
.userInfo {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  cursor: pointer;
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 8px;
  }
  .nickname {
    font-size: 14px;
    font-weight: 500;
    color: #4c4c4c;
    line-height: 20px;
  }
}
</style>
<style lang="scss" scoped>
.v-header {
  height: 60px;
  // width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  flex-grow: 1;
  padding: 0;
  // border: 1px red solid;
  .header-content {
    width: 100%;
    max-width: 1200px;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    // box-sizing: border-box;
    @media screen and (max-width: 600px) {
      padding: 0 15px;
    }
    .logo {
      font-size: 40px;
    }
    .menus {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex: auto;
      margin: 0 80px;
      max-width: 453px;
      height: 100%;
      .meun {
        font-size: 18px;
        font-weight: 400;
        // color: #484848;
        font-family: PingFangSC, PingFang SC;
        color: #403f3e;
        box-sizing: border-box;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          display: block;
          // height: 72px;
          // line-height: 72px;
          height: 60px;
          line-height: 56px;
          box-sizing: border-box;
          overflow: hidden;
          .down-icon {
            display: inline-block;
            width: 16px;
            height: 16px;
          }
        }
        &.active {
          // border-bottom: 4px solid #f66442;
          a {
            color: #201515;
            font-weight: 500;
          }
        }
        &:hover {
          a {
            color: #201515;
            font-weight: 500;
          }
        }
      }
    }
    .mobile {
      display: none;

      .mobileLogo {
        width: 142px;
        height: 40px;
        cursor: pointer;
      }

      .mobileMenus {
        width: 20px;
        height: 20px;
      }
    }
    .btn {
      width: 104px;
      height: 40px;
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
      line-height: 22px;
      line-height: 40px;
    }
  }
  .asideMenu {
    display: flex;
    flex-direction: column;
    .asideLogo {
      width: 140px;
      height: 40px;
      padding-left: 15px;
    }
    .asideMenus {
      width: 200px;
      padding-top: 28px;
      .asideMeun {
        margin-bottom: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        box-sizing: border-box;
        border: 2px solid #ffffff;
        text-wrap: nowrap;
        width: 168px;
        height: 48px;
        box-sizing: border-box;
        padding-left: 14px;

        &.active {
          background: #f6644210;
          border-radius: 8px;
          border-color: #f6644240;
          color: #f66442;
        }
      }
    }
  }
  .loginbtn {
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 1px red solid;
    @media screen and (max-width: 460px) {
      display: none;
    }
    .login_font {
      width: 80px;
      font-weight: 400;
      font-size: 18px;
      color: #403f3e;
      text-align: right;
      &:hover{
        color: #201515;
        font-weight: 600;
      }
      @media screen and (max-width: 460px) {
        font-size: 12px;
      }
    }
    .try_free {
      padding: 9px 24px;
      background-color: #f66442;
      border-radius: 22px;
      font-weight: 500;
      font-size: 18px;
      color: #ffffff;
      margin-left: 24px;
      @media screen and (max-width: 460px) {
        font-size: 12px;
        margin-left: 16px;
        padding: 4px 4px;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .v-header {
    .header-content {
      // padding: 0 15px;
      .home-logo {
        display: none;
      }
      .logo {
        display: none;
      }
      .menus {
        display: none;
      }
      .mobile {
        display: flex;
        align-items: center;
        .mobileMenus {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
