<script lang="ts" setup>
import { articleGet, articleCategoryGet, getTree } from '@/utils';
import { reactive } from 'vue';
import head from 'lodash/head';
import find from 'lodash/find';
import subscribe from '../components/subscribe.vue';

const localePath = useLocalePath();
const state = reactive({
  selectList: [] as any,
  selFatherData: {} as any,
  selConData: {} as any,
  infoList: [] as any,
  drawerVisible: false,
  isMore: false,
  // Is showMore displayed
  isShow: false,
  activeName: '',
  page: 1,
  pageSize: 5,
  total: 0,
});

const getSelect = async () => {
  const { data = {} } = (await useFetch(`${articleCategoryGet}?type=2`, { server: true })) as any;
  state.selectList = getTree(data.value, null, null);
  // Default First
  state.selFatherData = head(state.selectList) || {};
  state.selConData = head(state.selFatherData.children) || {};
  state.activeName = state.selFatherData.id;
};
await getSelect();
const getInfo = async () => {
  // Need to pass the type on the left side
  const args = {
    categoryId: state.selConData.id,
    page: state.page,
    pageSize: state.pageSize,
  };
  const { data: { value = {} } = {} } = (await useFetch(`${articleGet}`, {
    server: true,
    query: { ...args },
  })) as any;
  state.total = value?.total;
  if (state.isMore) {
    state.infoList = [...state.infoList, ...value?.data];
  } else {
    state.infoList = value?.data;
  }
};
await getInfo();
const getMore = () => {
  state.isMore = true;
  state.page += 1;
  getInfo();
};
const selCheck = (v: any) => {
  state.selConData = v;
  state.drawerVisible = false;
  state.isMore = false;
  getInfo();
};
const handleClose = () => {
  state.drawerVisible = false;
};
const handleChange = () => {
  state.selFatherData = find(state.selectList, { id: state.activeName }) || {};
};
useSeoMeta({
  title: 'DET Practice: Learn the expert Tips for the Duolingo English Test',
  description:
    'Explore expert strategies and study methods to excel on the Duolingo English Test. Our blog offers actionable tips and insights to enhance your preparation and boost your score.',
});
</script>
<template>
  <div class="learn">
    <div class="learn_hader" :style="`background-image: url(/img/learn/banner-learn.svg);`">
      <div class="learn_hader_content">
        <div>
          <h1 class="title">We will update the exam preparation tips of Duolingo English Test timely</h1>
        </div>
        <div>
          <div class="title2">The lastest update is until March 1, 2024</div>
        </div>
      </div>
    </div>
    <div class="learn_content_wrapper">
      <div class="learn_content">
        <div class="select">
          <div class="select-title" @click="state.drawerVisible = true">
            <span>{{ state.selConData.name }}</span>
            <img
              src="/img/learn/down-icon.svg"
              class="img img-down"
              alt="DET Practice:The best Duolingo English Test Practice platform"
            />
          </div>
        </div>
        <div class="left">
          <el-collapse v-model="state.activeName" accordion @change="handleChange">
            <el-collapse-item
              v-for="(val, key) in state.selectList"
              :key="key"
              :title="val.name"
              :name="val.id"
              :class="`${key === 0 ? 'firstCollapse' : ''} ${state.selFatherData.id === val.id ? 'expand' : ''}`"
            >
              <div
                v-for="(v, k) in val.children"
                :key="k"
                :class="`title sel-list ${state.selConData.id === v.id ? 'sel-list-checked' : ''}`"
                @click="selCheck(v)"
              >
                {{ v.name }}
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="right">
          <div v-for="(val, key) in state.infoList" :key="key">
            <nuxt-link
              :to="localePath(`/${val.path}`)"
              :class="`r-list ${key + 1 === state.infoList.length ? 'margin-bottom0' : ''}`"
            >
              <div class="title">{{ val.name }}</div>
              <div class="description">{{ val.content }}</div>
            </nuxt-link>
          </div>
          <div v-if="state.total > state.infoList.length" class="more" @click="getMore">Show more</div>
        </div>
      </div>
      <el-drawer v-model="state.drawerVisible" direction="btt" :before-close="handleClose">
        <el-collapse v-model="state.activeName" accordion @change="handleChange">
          <el-collapse-item
            v-for="(val, key) in state.selectList"
            :key="key"
            :title="val.name"
            :name="val.id"
            :class="`${key === 0 ? 'firstCollapse' : ''} ${state.selFatherData.id === val.id ? 'expand' : ''}`"
          >
            <div
              v-for="(v, k) in val.children"
              :key="k"
              :class="`title sel-list ${
                state.selFatherData.id === val.id && state.selConData.id === v.id ? 'sel-list-checked' : ''
              }`"
              @click="selCheck(v)"
            >
              {{ v.name }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-drawer>
    </div>
    <subscribe />
  </div>
</template>
<style lang="scss">
.learn {
  .expand {
    border: 1px solid #e9e9e9;
    border-radius: 8px;
    box-sizing: border-box;
    overflow: hidden;
    .el-collapse-item__header {
      background: #ffffff;
    }
  }
  .el-collapse-item__header {
    border: none;
    width: 276px;
    height: auto;
    line-height: 28px;
    background: #f2f4f6;
    border-radius: 8px;
    font-weight: 600;
    font-size: 20px;
    color: #201515;
    padding: 18px 24px;
    box-sizing: border-box;
  }
  .el-collapse-item {
    margin-top: 8px;
  }
  .firstCollapse {
    margin-top: 0px;
  }

  .el-collapse-item__content {
    width: 276px;
    background: #ffffff;
    border-radius: 8px;
    margin-top: 8px;
    box-sizing: border-box;
    padding-bottom: 12px;
  }
  @media (max-width: 800px) {
    .el-collapse-item__header {
      width: 100%;
      line-height: 21px;
      border-radius: 6px;
      padding: 13px 18px;
      margin-top: 4px;
    }
    .el-collapse-item__content {
      width: 100%;
      border-radius: 6px;
      margin-top: 6px;
      padding-bottom: 6px;
    }
  }
  .el-collapse,
  .el-collapse-item__wrap {
    border: none;
  }
  .el-drawer {
    border-radius: 12px 12px 0px 0px;
    height: 80% !important;
  }
  .el-drawer__header {
    margin-bottom: 0px;
    font-size: 18px;
    .el-icon {
      font-size: 28px;
    }
  }
}
</style>
<style scoped lang="scss">
.learn {
  .learn_hader {
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .learn_hader_content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 56px 0 40px;
      .title {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        line-height: 72px;
        margin: 0px;
      }
      .title2 {
        font-weight: 400;
        font-size: 24px;
        color: #201515;
        line-height: 32px;
        margin-top: 32px;
        margin-bottom: 0px;
      }
    }
  }
  @media (max-width: 800px) {
    .learn_hader {
      .learn_hader_content {
        max-width: 100%;
        margin: 0 auto;
        padding: 28px 14px 20px;
        .title {
          font-size: 24px;
          line-height: 30px;
        }
        .title2 {
          font-weight: 400;
          font-size: 14px;
          color: #201515;
          line-height: 16px;
          margin-top: 14px;
        }
      }
    }
  }
  .learn_content_wrapper {
    padding: 0px 30px;
    overflow: hidden;
    .learn_content {
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 100px;
      margin-bottom: 120px;
      display: flex;
      justify-content: space-between;
    }
  }
  .select {
    display: none;
  }
  .select-title {
    width: 100%;
    height: 96px;
    font-weight: 600;
    font-size: 30px;
    color: #201515;
    border-radius: 12px;
    border: 2px solid #e9e9e9;
    box-sizing: border-box;
    padding: 0px 24px;
    margin-bottom: 24px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img-down {
      display: block;
      width: 24px;
      height: 24px;
    }
  }
  .left {
    width: 276px;
  }
  .sel-list {
    width: 100%;
    line-height: 25px;
    color: #403f3e;
    font-size: 18px;
    padding: 12px 24px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .sel-list-checked {
    background: #fff4f1;
    color: #f66442;
  }
  .right {
    width: 100%;
    max-width: 900px;
    margin-left: 24px;
    .r-list {
      display: block;
      width: 100%;
      box-sizing: border-box;
      border-radius: 8px;
      border: 1px solid #e9e9e9;
      margin-bottom: 24px;
      padding: 24px;
      cursor: pointer;
      .title {
        font-weight: 600;
        font-size: 28px;
        color: #201515;
        line-height: 36px;
      }
      .description {
        font-weight: 400;
        font-size: 20px;
        color: #201515;
        line-height: 28px;
        margin-top: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    .margin-bottom0 {
      margin-bottom: 0px;
    }
    .more {
      font-weight: 400;
      font-size: 20px;
      color: #201515;
      line-height: 28px;
      text-decoration-line: underline;
      text-align: center;
      cursor: pointer;
      margin-top: 24px;
      &:hover {
        color: #f66442;
      }
    }
  }
  @media (max-width: 800px) {
    .learn_content_wrapper {
      padding: 0px 14px;
      overflow: hidden;
      .learn_content {
        max-width: 100%;
        margin: 0 auto;
        margin-top: 12px;
        margin-bottom: 40px;
        display: block;
      }
    }
    .sel-list {
      line-height: 19px;
      font-size: 14px;
      padding: 9px 18px;
    }
    .right {
      max-width: 100%;
      margin-left: 0px;
      .r-list {
        border-radius: 6px;
        margin-bottom: 12px;
        padding: 12px;
        .title {
          font-size: 20px;
          line-height: 27px;
        }
        .description {
          font-size: 15px;
          line-height: 21px;
          margin-top: 12px;
          // max-height: 42px;
        }
      }
    }
    .select {
      display: block;
    }
    .select-title {
      height: 48px;
      font-size: 16px;
      border-radius: 6px;
      border: 1px solid #e9e9e9;
      padding: 0px 12px;
      margin-bottom: 12px;
      .img-down {
        display: block;
        width: 12px;
        height: 12px;
      }
    }
    .left {
      display: none;
    }
  }
}
</style>
<style></style>
