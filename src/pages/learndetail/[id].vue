<script lang="ts" setup>
import { reactive, computed, onMounted } from 'vue';
import _ from 'lodash';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { articleGet, rateAdd, saveStorage, getStorage } from '@/utils';
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
  state.rateArr = JSON.parse(getStorage('det_rate') || '[]');
  getList();
});
const getList = async () => {
  // 需要传左侧的类型
  const { id = '' } = route.params as any;
  const { categoryId = '' } = route.query as any;
  const { data: { value = {} } = {} } = await useFetch(`${articleGet}?categoryId=${categoryId}`, { server: true }) as any;
  state.list = value?.data;
  getContent(id);
};
const getContent = async (id: string) => {
  state.checkId = id;
  const temp = _.find(state.list, { id: Number(id) }) || {};
  state.details = { ...temp };
  const { rate } = _.find(state.rateArr, { id: Number(id) }) || {};
  state.rate = rate;
};

const rateChange = async () => {
  const rateArr = JSON.parse(getStorage('det_rate') || '[]');
  rateArr.push({ id: state.details.id, rate: state.rate });
  state.details.rateNum += 1;
  saveStorage('det_rate', JSON.stringify(rateArr), true);
  // 
  const { err } = await useFetch(`${rateAdd}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      articleId: state.checkId,
      rate: state.rate,
    }),
  }) as any;
  if (!err) {
    ElMessage({ type: 'success', message: 'Submitted successfully' });
  }
};
</script>
<template>
  <div class="learndetail">
    <div class="top">Home >
      <nuxt-link :to="`/learn`" class="">
        Learn
      </nuxt-link>
      > {{ state.details.name }}
    </div>
    <div class="content">
      <div class="article-con">
        <div class="title">{{ state.details.name }}</div>
        <div id="content" class="article-con1" v-html="state.details.content" style="white-space:pre-wrap"></div>
      </div>
      <div class="article-title-list article-title-list1">
        <div v-for="(val, key) in state.list" :key="key">
          <nuxt-link :to="`/learndetail/${val.id}?categoryId=${val.categoryId}`" class="">
            <div :class="`title ${state.checkId === String(val.id) ? 'title-checked' : ''}`">{{ val.name }}</div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="rate-con">
      <div>
        <el-rate v-model="state.rate" :disabled="Boolean(state.rate)" allow-half show-score text-color="#201515"
          :score-template="`{value}/5（${state.details.rateNum || 0}votes）`" @change="rateChange" />
      </div>
      <div>{{ state.rate ? 'Thanks for voting!' : 'Rate this article' }}</div>
    </div>
    <div class="article-title-list article-title-list2">
      <div v-for="(val, key) in state.list" :key="key">
        <nuxt-link :to="`/learndetail/${val.id}?categoryId=${val.categoryId}`" class="">
          <div :class="`title ${state.checkId === String(val.id) ? 'title-checked' : ''}`">{{ val.name }}</div>
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
    padding: 0px 30px;
  }
  .content{
    max-width: 1200px;
    display: flex;
    margin-top: 64px;
    padding: 0px 30px;
    box-sizing: border-box;
    .article-con{
      width: 100%;
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
    padding: 0px 30px;
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
          font-weight: 600;
          font-size: 20px;
          line-height: 27px;
        }
        .article-con1{
          font-size: 15px;
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
      margin-top: 28px;
      box-sizing: border-box;
      padding: 0px 14px;
    }
    .subs{
      margin-top: 28px;
    }
  }
}
</style>
