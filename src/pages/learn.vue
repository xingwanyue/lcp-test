<script lang="ts" setup>
// import { api } from '@/utils';
import { reactive, computed, onMounted } from 'vue';
import _ from 'lodash';
import { ref } from 'vue';
import bannerLearn from '@/public/img/learn/banner-learn.svg';
import subscribe from '../components/subscribe.vue';

const localePath = useLocalePath();
const activeName = ref('1');
const state = reactive({
  selectList: [] as any,
  selFatherData: {} as any,
  selConData: {} as any,
  infoList: [] as any,
  drawerVisible: false,
  isMore: false,
  // 是否展示showMore
  isShow: false,
});
onMounted(() => {
  getSelect();
  getInfo();
});
const getSelect = async () => {
  state.selectList = [
    {
      name: 'Test Info',
      code: '1',
      content: [
        { name: 'Overview', code: '1' },
        { name: 'Read and Complete', code: '2' },
        { name: 'Read and Select', code: '3' },
        { name: 'Listen and Type', code: '4' },
      ],
    },
    {
      name: 'Test Scores',
      code: '2',
      content: [
        { name: 'Overview', code: '1' },
        { name: 'Read and Complete', code: '2' },
        { name: 'Read and Select', code: '3' },
        { name: 'Listen and Type', code: '4' },
      ],
    },
    {
      name: 'Some Advice',
      code: '3',
      content: [
        { name: 'Overview', code: '1' },
        { name: 'Read and Complete', code: '2' },
        { name: 'Read and Select', code: '3' },
        { name: 'Listen and Type', code: '4' },
      ],
    },
  ];
  // 默认第一个
  state.selFatherData = _.head(state.selectList) || {};
  state.selConData = _.head(state.selFatherData.content) || {};
};
const getInfo = async () => {
  state.infoList = [
    { name: 'OverView of Duolingo English Test', desc: 'Discover over 100 heartfelt Islamic messages for the sick person in this article. Inspire wellness and comfort with these powerful words of encouragement.' },
    { name: 'OverView of Duolingo English Test', desc: 'Discover over 100 heartfelt Islamic messages for the sick person in this article. Inspire wellness and comfort with these powerful words of encouragement.' },
    { name: 'OverView of Duolingo English Test', desc: 'Discover over 100 heartfelt Islamic messages for the sick person in this article. Inspire wellness and comfort with these powerful words of encouragement.' },
  ];
};
const getMore = () => {
  state.isMore = true;
  getInfo();
};
const selCheck = (v1: any, v2: any) => {
  state.selFatherData = v1;
  state.selConData = v2;
  state.drawerVisible = false;
  state.isMore = false;
};
const handleClose = () => {
  state.drawerVisible = false;
};
// learn
// const goInfo = (val: any) => {
//   router.push({ path: '/learndetail', query: { id: val.code || '1' } });
// };
</script>
<template>
  <div class="learn">
    <div class="learn_hader" :style="`background-image: url(${bannerLearn});`">
      <div class="learn_hader_content">
        <div class="title">We will update the exam preparation tips of Duolingo English Test timely</div>
        <div class="title2">The lastest update is until March 1, 2024</div>
      </div>
    </div>
    <div class="learn_content_wrapper">
      <div class="learn_content">
        <div class="select">
          <div class="select-title" @click="state.drawerVisible = true;">
            <span>{{ state.selConData.name }}</span>
            <img src="../public/img/learn/down-icon.svg" class="img img-down" alt="">
          </div>
        </div>
        <div class="left">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item v-for="(val, key) in state.selectList" :key="key" :title="val.name" :name="val.code"
              :class="`${key === 0 ? 'firstCollapse' : ''}`">
              <div v-for="(v, k) in val.content" :key="k"
                :class="`title sel-list ${state.selFatherData.code === val.code && state.selConData.code === v.code ? 'sel-list-checked' : ''}`"
                @click="selCheck(val, v)">
                {{ v.name }}
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="right">
          <div v-for="(val, key) in state.infoList" :key="key">
            <nuxt-link :to="localePath(`/learndetail/${val.id || '1'}`)" class="r-list">
              <div class="title">{{ val.name }}</div>
              <div class="description">{{ val.desc }}</div>
            </nuxt-link>
          </div>
          <div class="more" @click="getMore">Show more</div>
        </div>
      </div>
      <el-drawer v-model="state.drawerVisible" direction="btt" :before-close="handleClose">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item v-for="(val, key) in state.selectList" :key="key" :title="val.name" :name="val.code"
            :class="`${key === 0 ? 'firstCollapse' : ''}`">
            <div v-for="(v, k) in val.content" :key="k"
              :class="`title sel-list ${state.selFatherData.code === val.code && state.selConData.code === v.code ? 'sel-list-checked' : ''}`"
              @click="selCheck(val, v)">
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
.learn{
  .el-collapse-item__header{
    border: none;
    width: 276px;
    height: auto;
    line-height: 28px;
    background: #F2F4F6;
    border-radius: 8px;
    font-weight: 600;
    font-size: 20px;
    color: #201515;
    padding:18px 24px;
    box-sizing: border-box;
    margin-top: 8px;
  }
  .firstCollapse>.el-collapse-item__header{
    margin-top: 0px;
  }
  .el-collapse-item__content{
    width: 276px;
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #E9E9E9;
    margin-top: 8px;
    box-sizing: border-box;
    padding-bottom: 12px;
  }
  @media (max-width: 800px){
    .el-collapse-item__header{
      width: 100%;
      line-height: 21px;
      border-radius: 6px;
      padding:13px 18px;
      margin-top: 4px;
    }
    .el-collapse-item__content{
      width: 100%;
      border-radius: 6px;
      margin-top: 6px;
      padding-bottom: 6px;
    }
  }
  .el-collapse, .el-collapse-item__wrap{
    border: none;
  }
  .el-drawer{
    border-radius: 12px 12px 0px 0px;
    height: 80% !important;
  }
  .el-drawer__header{
    margin-bottom: 0px;
    font-size: 18px;
    .el-icon{
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
      padding: 66px 0 40px;
      .title {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        line-height: 72px;
      }
      .title2{
        font-weight: 400;
        font-size: 24px;
        color: #201515;
        line-height: 32px;
        margin-top: 32px;
      }
    }
  }
  @media (max-width: 800px){
    .learn_hader {
      .learn_hader_content {
        max-width: 100%;
        margin: 0 auto;
        padding: 20px 14px 12px;
        .title {
          font-size: 24px;
          line-height: 30px;
        }
        .title2{
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
      display: flex;
      justify-content: space-between;
    }
  }
  .select{
    display: none;
  }
  .select-title{
    width: 100%;
    height: 96px;
    font-weight: 600;
    font-size: 30px;
    color: #201515;
    border-radius: 12px;
    border: 2px solid #E9E9E9;
    box-sizing: border-box;
    padding: 0px 24px;
    margin-bottom: 24px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img-down{
      display: block;
      width: 24px;
      height: 24px;
    }
  }
  .left {
    width: 276px;
  }
  .sel-list{
    width: 100%;
    line-height: 25px;
    color: #403F3E;
    font-size: 18px;
    padding:12px 24px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .sel-list-checked{
    background: #FFF4F1;
    color:#F66442;
  }
  .right{
    max-width: 900px;
    margin-left: 24px;
    .r-list{
      display: block;
      width: 100%;
      box-sizing: border-box;
      border-radius: 8px;
      border: 1px solid #E9E9E9;
      margin-bottom: 24px;
      padding: 24px;
      cursor: pointer;
      .title{
        font-weight: 600;
        font-size: 28px;
        color: #201515;
        line-height: 36px;
      }
      .description{
        font-weight: 400;
        font-size: 20px;
        color: #201515;
        line-height: 28px;
        margin-top: 24px;
      }
    }
    .more{
      font-weight: 400;
      font-size: 20px;
      color: #201515;
      line-height: 28px;
      text-decoration-line: underline;
      text-align: center;
      margin: 0px 0px 120px 0px;
      cursor: pointer;
    }
  }
  @media (max-width: 800px){
    .learn_content_wrapper {
      padding: 0px 14px;
      overflow: hidden;
      .learn_content {
        max-width: 100%;
        margin: 0 auto;
        margin-top: 50px;
        display: block;
      }
    }
    .sel-list{
      line-height: 19px;
      font-size: 14px;
      padding:9px 18px;
    }
    .right{
      max-width: 100%;
      margin-left: 0px;
      .r-list{
        border-radius: 6px;
        margin-bottom: 12px;
        padding: 12px;
        .title{
          font-size: 20px;
          line-height: 27px;
        }
        .description{
          font-size: 15px;
          line-height: 21px;
          margin-top: 12px;
        }
      }
      .more{
        margin: 0px 0px 40px 0px;
      }
    }
    .select{
      display: block;
    }
    .select-title{
      height: 48px;
      font-size: 16px;
      border-radius: 6px;
      border: 1px solid #E9E9E9;
      padding: 0px 12px;
      margin-bottom: 12px;
      .img-down{
        display: block;
        width: 12px;
        height: 12px;
      }
    }
    .left{
      display: none;
    }
  }
}
</style>
<style></style>
