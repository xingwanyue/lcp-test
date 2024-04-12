<script lang="ts" setup>
import { reactive, computed, onMounted } from 'vue';
import _ from 'lodash';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue'
import subscribe from '../../components/subscribe.vue';

// const localePath = useLocalePath();
const router = useRouter();
const route = useRoute();
const rate = ref(0);
const state = reactive({
  list: [] as any,
  details: {} as any,
  checkId: '',
  rate,
  rateArr: [] as any,
});
onMounted(() => {
  state.rateArr = JSON.parse(localStorage.getItem('det_rate') || '[]');
  getList();
});
const getList = async () => {
  state.list = [
    { id: '1', name: 'OverView of Duolingo English Test1', desc: 'Discover over 100 heartfelt Islamic messages for the sick person in this article. Inspire wellness and comfort with these powerful words of encouragement.' },
    { id: '2', name: 'OverView of Duolingo English Test2', desc: 'Discover over 100 heartfelt Islamic messages for the sick person in this article. Inspire wellness and comfort with these powerful words of encouragement.' },
    { id: '3', name: 'OverView of Duolingo English Test3', desc: 'Discover over 100 heartfelt Islamic messages for the sick person in this article. Inspire wellness and comfort with these powerful words of encouragement.' },
  ];
  const { id = '1' } = route.params as any;
  getContent(id);
};
const getContent = async (id: string) => {
  state.checkId = id;
  const temp = _.find(state.list, { id }) || {};
  state.details = { ...temp };
  const { rate } = _.find(state.rateArr, { id: id }) || {};
  state.rate = rate;
};

const rateChange = () => {
  const rateArr = JSON.parse(localStorage.getItem('det_rate') || '[]');
  rateArr.push({ id: state.details.id, rate: state.rate });
  localStorage.setItem('det_rate', JSON.stringify(rateArr));
};
</script>
<template>
  <div class="learndetail">
    <div class="top">Home > Learn > {{ state.details.name }}</div>
    <div class="content">
      <div class="article-con">
        <div class="title">{{ state.details.name }}</div>
        <div class="article-con1">{{ state.details.desc }}</div>
        <!-- <div id="content" class="content" v-html="state.details.desc" style="white-space:pre-wrap"></div> -->
      </div>
      <div class="article-title-list article-title-list1">
        <div v-for="(val, key) in state.list" :key="key">
          <nuxt-link :to="`/learndetail/${val.id || '1'}`" class="">
            <div :class="`title ${state.checkId === val.id ? 'title-checked' : ''}`">{{ val.name }}</div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="rate-con">
      <div>
        <el-rate v-model="state.rate" :disabled="Boolean(state.rate)" allow-half show-score text-color="#201515"
          score-template="{value}/5（112votes）" @change="rateChange" />
      </div>
      <div>{{ state.rate ? 'Thanks for voting!' : 'Rate this article' }}</div>
    </div>
    <div class="article-title-list article-title-list2">
      <div v-for="(val, key) in state.list" :key="key">
        <nuxt-link :to="`/learndetail/${val.id || '1'}`" class="">
          <div :class="`title ${state.checkId === val.id ? 'title-checked' : ''}`">{{ val.name }}</div>
        </nuxt-link>
      </div>
    </div>
    <subscribe class="subs" />
  </div>
</template>
<style lang="scss">
.learndetail{
  .el-rate__text{
    font-size: 16px;
  }
}
  
</style>
<style lang="scss" scoped>
.learndetail{
  max-width: 1200px;
  margin: auto;
  .top{
    font-weight: 400;
    font-size: 16px;
    color: #201515;
    line-height: 22px;
    margin-top: 32px;
  }
  .content{
    max-width: 1200px;
    display: flex;
    margin-top: 64px;
    .article-con{
      width: auto;
      margin-right: 24px;
      .title{
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        line-height: 72px;
      }
      .article-con1{
        font-weight: 400;
        font-size: 20px;
        color: #201515;
        line-height: 28px;
        margin-top: 32px;
      }
    }

  }
  .article-title-list{
    width: 276px;
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #E9E9E9;
    padding: 12px 24px;
    box-sizing: border-box;
    .title{
      width: 100%;
      padding: 12px 0px;
      font-weight: 400;
      font-size: 18px;
      color: #403F3E;
      line-height: 25px;
      cursor: pointer;
    }
    .title-checked{
      font-weight: 500;
      font-size: 20px;
      color: rgba(144,144,144,0.65);
      line-height: 28px;
    }
  }
  .article-title-list1{
    display: block;
    max-height: calc(100vh - 180px);
    overflow-y: auto;
  }
  .article-title-list2{
    display: none;
  }
  .rate-con{
    margin-top: 56px;
  }
  .subs{
    margin-top: 120px;
  }
}
@media (max-width: 800px){
  .learndetail{
    max-width: 100%;
    margin: auto;
    .top{
      display: none;
    }
    .content{
      max-width: 100%;
      display: block;
      box-sizing: border-box;
      padding: 0px 14px;
      margin-top: 28px;
      .article-con{
        margin-right: 0px;
        .title{
          font-weight: 500;
          font-size: 20px;
          line-height: 27px;
        }
        .article-con1{
          font-size: 14px;
          line-height: 21px;
          margin-top: 12px;
        }
      }
      .article-title-list1{
        display: none;
      }
    }
    .article-title-list2{
      display: block;
    }
    .article-title-list{
      border-radius: 6px;
      padding: 12px;
      width: calc(100% - 28px);
      margin: auto;
      margin-top: 28px;
      .title{
        width: 100%;
        padding: 8px 0px;
        font-size: 14px;
        line-height: 19px;
      }
      .title-checked{
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
      }
    }
    .rate-con{
      margin-top: 32px;
      box-sizing: border-box;
      padding: 0px 14px;
    }
    .subs{
      margin-top: 60px;
    }
  }
}
</style>
