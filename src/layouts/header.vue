<script setup lang="ts">
import { api, staticPcUrlGet, urlGet, staticUrlGet } from '@/utils';
import _ from 'lodash';
import { useStore } from '@/store';
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
const { data: cfg } = await useFetch(`${api}/common/cfg`, {
  server: false,
});
const listImages = {
  groupList1Img,
  groupList2Img,
  groupList3Img,
  groupList4Img,
  groupList5Img,
} as any;
const titltArr = {
  '1': '词汇',
  '2': '听力',
  '3': '口语',
  '4': '阅读',
  '5': '写作',
} as any;
const nameArr = {
  '7': '单词辨认',
  '2': '听写句子',
  '3': '完型填空',
  '4': '朗读句子',
  '9': '听题演讲',
  a: '看图演讲',
  e: '看题演讲',
  '6': '看图写句',
  '8': '50字作文',
  c: '口语面试',
  d: '写作面试',
  i: '互动阅读',
  l: '互动听力',
  j: 'DET高频必刷词',
  g: '单词辨认词汇',
  h: '完型填空高频词',
  m: '互动听力场景词汇',
  '-': '我的单词本',
} as any;

const config = computed(() => cfg.value || {}) as any;

const topics = computed(() =>
  config.value.topics?.map((topic: any) => ({
    ...topic,
    name: nameArr[topic.key],
  })),
);
const groups = computed(() =>
  config.value.groups?.map((group: any) => {
    group.listImage = listImages[`groupList${group.key}Img`];
    group.name = titltArr[group.key];
    const options1 = _.filter(topics.value, (t) => t.group === group.key);
    const options = _.map(options1, (d) => {
      if (group.key === '3' || group.key === '5') {
        return { ...d, desc: d.key === '4' ? `AI测评` : `名师精批` };
      }
      return d;
    });

    return {
      ...group,
      listImage: listImages[`groupList${group.key}Img`],
      name: titltArr[group.key],
      options,
    };
  }),
);

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
    name: t('home'),
    path: '/home',
  },
  {
    name: t('Products'),
    path: '/exam',
  },
  {
    name: t('Learn'),
    path: '/course',
  },
  {
    name: t('Pricing'),
    path: urlGet('/questions'),
  },
  {
    name: t('Blog'),
    path: '/ai',
  },
];
</script>

<template>
  <div class="v-header">
    <div class="header-content">
      <nuxt-link :to="localePath('home')" class="home-logo">
        <span class="icon iconfont icon-detlogon logo"></span>
      </nuxt-link>
      <div class="menus">
        <nav v-for="menu in menus" :key="menu.path" :class="`meun ${pathname === menu.path ? 'active' : ''}`">
          <el-popover
            v-if="menu.path === urlGet('/questions')"
            v-model="popoverQuestions"
            placement="bottom"
            width="824"
            trigger="hover"
            popper-class="head-question-popover"
          >
            <div class="head-question-con">
              <div v-for="(val, key) in groups" :key="key" class="head-question-list">
                <div class="group">
                  <el-image
                    ondragstart="return false;"
                    oncontextmenu="return false;"
                    class="group-image"
                    :src="val.listImage"
                  />
                  <div class="group-name">{{ val.name }}</div>
                </div>
                <nuxt-link
                  v-for="(v, k) in val.options"
                  :key="k"
                  class="group-list"
                  :href="urlGet(`/questions?group=${val.key}&key=${v.key}`)"
                >
                  {{ v.name }}
                  <span v-if="v.desc" :class="`${v.key === '4' ? 'descAI' : 'desc'}`">{{ v.desc }}</span>
                </nuxt-link>
              </div>
            </div>
            <template #reference>
              <nuxt-link :href="urlGet('/questions')" class="head-name">{{ menu.name }}</nuxt-link>
            </template>
          </el-popover>
          <nuxt-link v-else :to="localePath(menu.path)">{{ menu.name }}</nuxt-link>
        </nav>
      </div>
      <div class="mobile">
        <el-image src="/img/logo.svg" class="mobileLogo" />
        <el-image src="/img/menu.svg" class="mobileMenus" @click="handleOpen" />
      </div>
      <a v-if="user.id" href="/app" class="userInfo">
        <div class="nickname">{{ user.nickname }}</div>
        <el-image :src="staticUrlGet(user.avatar)" class="avatar"></el-image>
      </a>
      <div v-else class="loginbtn">
        <nuxt-link :href="urlGet('/login')" class="login_font">Log in</nuxt-link>
        <nuxt-link :href="urlGet('/login')" class="try_free common_btn_hover_bgColor">Try for free</nuxt-link>
      </div>
    </div>
    <el-drawer v-model="visible" direction="ltr" size="200px" :with-header="false" :before-close="handleClose">
      <div class="asideMenu">
        <nuxt-link href="/">
          <el-image src="/img/logo.svg" class="asideLogo" />
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
.head-question-popover {
  .head-question-con {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    .head-question-list {
      // width: 130px;
      .group {
        display: flex;
        align-items: center;
        margin-bottom: 4px;
        .group-image {
          width: 40px;
          height: 40px;
        }
        .group-name {
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #484848;
          margin-left: 16px;
        }
      }
      .group-list {
        display: block;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #484848;
        line-height: 20px;
        margin-top: 12px;
        display: block;
        cursor: pointer;
        &.active {
          color: #f66442;
        }
        &:hover {
          color: #f66442;
        }
        .desc {
          padding: 2px 4px;
          background: #edfff1;
          border-radius: 2px;
          text-align: center;
          line-height: 20px;
          color: #47bf88;
          font-size: 12px;
          margin-left: 4px;
        }
        .descAI {
          padding: 2px 4px;
          background: #e8f4ff;
          border-radius: 2px;
          text-align: center;
          line-height: 20px;
          color: #2087fc;
          font-size: 12px;
          margin-left: 4px;
        }
      }
    }
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
  border-bottom: 1px solid #00000010;
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
        color: #484848;
        box-sizing: border-box;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          display: block;
          height: 72px;
          line-height: 72px;
        }
        &.active {
          border-bottom: 4px solid #f66442;
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
        width: 142px;
        height: 40px;
        cursor: pointer;
      }

      .mobileMenus {
        width: 32px;
        height: 32px;
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
    .login_font {
      font-weight: 400;
      font-size: 18px;
      color: #403f3e;
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
