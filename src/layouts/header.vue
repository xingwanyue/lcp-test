<script setup lang="ts">
import { urlGet, staticUrlGet, saveStorage, getStorage } from "@/utils";
import { useStore } from "@/store";
const localePath = useLocalePath();
const { t } = useI18n();

const store = useStore();
const user = computed(() => store.user);

const route = useRoute();
const pathname = computed(() => route.path);
const headerColor = ref("#FFF4F1");
const oldPath = ref("");
const isProductsClick = ref(false);
const isProductsMobile = ref(false);
watch(pathname, (val: string) => {
  isProductsClick.value = false;
  oldPath.value = getStorage("pathname");
  setTimeout(() => {
    oldPath.value = "";
  }, 200);
  changeHeaderColor(val);
  saveStorage("pathname", val);
});

onMounted(() => {
  changeHeaderColor(pathname.value);
  const dom = document.getElementsByClassName("v-header")[0] as any;
  window.addEventListener("scroll", (e) => {
    if (document.documentElement.scrollTop === 0) {
      changeHeaderColor(pathname.value);
      dom.style.borderBottom = "0px solid";
    } else {
      headerColor.value = "#fff";
      dom.style.borderBottom = "1px solid #f0e8e8";
    }
  });
  window.addEventListener("click", () => {
    popoverQuestions.value = false;
  });
});
const changeHeaderColor = (pathname: string) => {
  switch (pathname) {
    case "/products/bank":
      headerColor.value = "#ECF7FF";
      break;
    case "/products/mock":
      headerColor.value = "#FFEFE1";
      break;
    case "/products/guide":
      headerColor.value = "#E7FDEC";
      break;
    // case "/company/contactus":
    //   headerColor.value = "#ffffff";
    //   break;

    default:
      headerColor.value = "#FFF4F1";
      break;
  }
};

const visible = ref(false);
const popoverQuestions = ref(false);
const handleOpen = () => {
  visible.value = true;
};

const handleClose = () => {
  visible.value = false;
  isProductsMobile.value = false;
};
const productClick = () => {
  isProductsMobile.value = !isProductsMobile.value;
  isProductsClick.value = true;
};
const menus = [
  {
    name: t("Home"),
    path: "/",
  },
  {
    name: t("Products"),
    path: "/products",
  },
  {
    name: t("Learn"),
    path: "/learn",
  },
  {
    name: t("Pricing"),
    path: "/pricing",
  },
  {
    name: t("Blog"),
    path: "/blog",
  },
];

const logout = () => {
  store.logout();
};
</script>

<template>
  <div class="v-header" :style="{ backgroundColor: `${headerColor} !important` }">
    <div class="header-content">
      <nuxt-link :to="localePath('/')" class="home-logo">
        <span class="icon iconfont icon-logo logo"></span>
      </nuxt-link>
      <div class="menus">
        <nav
          v-for="menu in menus"
          :key="menu.path"
          :class="`meun ${pathname === menu.path ? 'active' : ''}`"
        >
          <el-popover
            v-if="menu.path === '/products'"
            :visible="true"
            placement="bottom"
            trigger="click"
            popper-class="head-question-popover"
          >
            <div
              class="head-question-con"
              @mouseleave="popoverQuestions = false"
              @mouseover="popoverQuestions = true"
            >
              <NuxtLink :to="localePath('/products/bank')" class="one_card card1">
                <div class="icon">
                  <img src="/img/home/product_icon1.svg" />
                </div>
                <div class="right">
                  <div class="title">Duolingo English Test Practice</div>
                  <div class="font">
                    Dive into Success with Vast Question Bank : 10,000+ Questions,
                    Continuous Updates, and Intelligent Monitoring for Exam Excellence!
                  </div>
                </div>
              </NuxtLink>
              <NuxtLink :to="localePath('/products/service')" class="one_card card2">
                <div class="icon">
                  <img src="/img/home/product_icon2.svg" />
                </div>
                <div class="right">
                  <div class="title">Duolingo English Test Correction Service</div>
                  <div class="font">
                    Elevate Your Essays with AI + Teacher : Precision Corrections, Instant
                    Reports, and Score Boosts in Just Two Weeks!
                  </div>
                </div>
              </NuxtLink>
              <NuxtLink :to="localePath('/products/mock')" class="one_card card3">
                <div class="icon">
                  <img src="/img/home/product_icon3.svg" />
                </div>
                <div class="right">
                  <div class="title">Duolingo English Test Mock</div>
                  <div class="font">
                    Master Your Exam with Full-Length Mocks: Realistic Simulation,
                    Detailed Analysis, and Rapid Results Anytime, Anywhere!
                  </div>
                </div>
              </NuxtLink>
              <NuxtLink :to="localePath('/products/guide')" class="one_card card4">
                <div class="icon">
                  <img src="/img/home/product_icon4.svg" />
                </div>
                <div class="right">
                  <div class="title">Duolingo English Test Course</div>
                  <div class="font">
                    Unlock DET Success: Comprehensive Mastery, Proven Techniques, and
                    Up-to-Date Insights for Confident Speaking and Writing Excellence!
                  </div>
                </div>
              </NuxtLink>
            </div>
            <template #reference>
              <nuxt-link
                class="head-name head-name-products"
                @mouseover="popoverQuestions = true"
                @mouseleave="popoverQuestions = false"
              >
                {{ menu.name }}
                <el-image
                  v-if="!popoverQuestions"
                  src="/img/learn/down-icon.svg"
                  class="down-icon"
                />
                <el-image v-else src="/img/learn/up-icon.svg" class="down-icon" />
              </nuxt-link>
            </template>
          </el-popover>
          <nuxt-link v-else :to="localePath(menu.path)"
            >{{ menu.name }}
            <div v-if="pathname === menu.path" class="header-scrolls"></div>
            <div v-if="oldPath === menu.path" class="header-scrolls-move"></div>
          </nuxt-link>
        </nav>
      </div>
      <div class="mobile">
        <span class="icon iconfont icon-logo mobileLogo"></span>
      </div>
      <div v-if="user.id" href="/app">
        <!-- <el-popover placement="top-start" trigger="hover" class="111">
          <div class="logout_btn" @click="logout">Log out</div>
          <template #reference>
            <div class="userInfo">
              <div class="nickname">{{ user.nickname }}</div>
              <el-image v-if="user.avatar" :src="staticUrlGet(user.avatar)" class="avatar"></el-image>
            </div>
          </template>
        </el-popover> -->
        <div class="loginbtn">
          <nuxt-link :href="urlGet('/home')" class="try_free common_btn_hover_bgColor">
            Get started
          </nuxt-link>
        </div>
      </div>
      <div v-else class="loginbtn">
        <nuxt-link :to="localePath('/login')" class="login_font">Log in</nuxt-link>
        <nuxt-link :to="localePath('/login')" class="try_free common_btn_hover_bgColor">
          Try for free
        </nuxt-link>
      </div>
      <div class="mobile">
        <el-image src="/img/menu.svg" class="mobileMenus" @click="handleOpen" />
      </div>
    </div>
    <el-drawer
      v-model="visible"
      direction="ltr"
      size="200px"
      :with-header="false"
      :before-close="handleClose"
    >
      <div class="asideMenu">
        <div class="asideMenus">
          <div v-for="menu in menus" :key="menu.path">
            <div v-if="menu.path === '/products'">
              <!-- <nuxt-link :to="menu.path" :class="`asideMeun ${isProductsMobile ? 'active' : ''}`" @click="productClick">
                {{ menu.name }}
                <el-image v-if="!isProductsMobile" src="/img/learn/down-icon.svg" class="down-icon-mobile" />
                <el-image v-else src="/img/learn/up-icon.svg" class="down-icon-mobile" />
              </nuxt-link> -->
              <div
                :class="`asideMeun ${isProductsMobile ? 'active' : ''}`"
                @click="productClick"
              >
                {{ menu.name }}
                <el-image
                  v-if="!isProductsMobile"
                  src="/img/learn/down-icon.svg"
                  class="down-icon-mobile"
                />
                <el-image v-else src="/img/learn/up-icon.svg" class="down-icon-mobile" />
              </div>
              <!-- Duolingo English -->
              <nuxt-link
                v-if="isProductsMobile"
                class="product-child"
                :to="localePath('/products/bank')"
                @click="handleClose"
              >
                Test Practice
              </nuxt-link>
              <nuxt-link
                v-if="isProductsMobile"
                class="product-child"
                :to="localePath('/products/service')"
                @click="handleClose"
              >
                Test Correction Service
              </nuxt-link>
              <nuxt-link
                v-if="isProductsMobile"
                class="product-child"
                :to="localePath('/products/mock')"
                @click="handleClose"
              >
                Test Mock
              </nuxt-link>
              <nuxt-link
                v-if="isProductsMobile"
                class="product-child"
                :to="localePath('/products/guide')"
                @click="handleClose"
              >
                Test Course
              </nuxt-link>
            </div>
            <nuxt-link
              v-else
              :class="`asideMeun ${
                pathname === menu.path && !isProductsClick ? 'active' : ''
              }`"
              :href="menu.path"
              @click="handleClose"
            >
              {{ menu.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<style lang="scss">
.el-popover.el-popper {
  border: 0px red solid !important;
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
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
.header-scrolls-move {
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
  max-width: 1000px !important;
  width: auto !important;

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
  height: 72px;
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
          height: 72px;
          line-height: 68px;
          box-sizing: border-box;
          overflow: hidden;
          color: #403f3e;
          .down-icon {
            display: inline-block;
            width: 16px;
            height: 16px;
            margin-left: 8px;
          }
        }
        .head-name-products {
          height: 68px;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
        }
        &.active {
          // border-bottom: 4px solid #f66442;
          a {
            color: #f66442;
          }
        }
        &:hover {
          a {
            color: #f66442;
          }
        }
      }
    }
    .mobile {
      display: none;

      .mobileLogo {
        font-size: 26px;
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
        padding-right: 14px;
        justify-content: space-between;
        &.active {
          background: #f6644210;
          border-radius: 8px;
          border-color: #f6644240;
          color: #f66442;
        }
        .down-icon-mobile {
          width: 16px;
          height: 16px;
        }
      }
      .product-child {
        display: block;
        box-sizing: border-box;
        width: 168px;
        padding: 4px 14px 4px 28px;
        font-size: 14px;
      }
    }
  }
  .loginbtn {
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 1px red solid;
    @media screen and (max-width: 800px) {
      display: none;
    }
    .login_font {
      width: 80px;
      font-weight: 400;
      font-size: 18px;
      color: #403f3e;
      text-align: right;
      &:hover {
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
