<script lang="ts" setup>
import { reactive } from 'vue';
import { ref } from 'vue';
import find from 'lodash/find';
import head from 'lodash/head';
import { ElMessage } from 'element-plus';
import { articleGet, rateAdd, saveStorage, getStorage, articleCategoryGet } from '@/utils';
import subscribe from '../../components/subscribe.vue';

const props = defineProps({
  id: Number,
  categoryId: Number,
  article: Object,
  type: String,
}) as any;
const localePath = useLocalePath();
const rate = ref(0);
const state = reactive({
  list: [] as any,
  details: {} as any,
  checkId: 0,
  rate,
  rateArr: [] as any,
  selectName: '',
});
state.rateArr = JSON.parse(getStorage('det_rate') || '[]');

const getList = async () => {
  // compatible blog
  if (props.type === '1') {
    const { data: { value = {} } = {} } = (await useFetch(`${api}/common/article`, {
      server: true,
      query: {
        type: '1',
        pageSize: 6,
        page: 1,
      },
    })) as any;
    state.list = value?.data;
  } else if (props.type === '2') {
    // compatible learn
    const { data: { value = {} } = {} } = (await useFetch(`${articleGet}?categoryId=${props.categoryId}`, {
      server: true,
    })) as any;
    state.list = value?.data;
  }
  state.checkId = props.id;
  const { rate } = find(state.rateArr, { id: props.id }) || {};
  state.rate = rate;
};
getList();
const getSelect = async () => {
  const { data = {} } = (await useFetch(`${articleCategoryGet}?id=${props.categoryId}`, { server: true })) as any;
  const { name } = head(data.value) as any;
  state.selectName = name;
};
getSelect();
const rateChange = async () => {
  const rateArr = JSON.parse(getStorage('det_rate') || '[]');
  rateArr.push({ id: state.checkId, rate: state.rate });
  saveStorage('det_rate', JSON.stringify(rateArr), true);
  const { err } = (await useFetch(`${rateAdd}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      articleId: state.checkId,
      rate: state.rate,
    }),
  })) as any;
  if (!err) {
    props.article.rateNum += 1;
    ElMessage({ type: 'success', message: 'Submitted successfully' });
  }
};
</script>
<template>
  <div class="learndetail">
    <div class="learndetail-content">
      <div class="top">
        <nuxt-link :to="localePath('/')" class=""> Home </nuxt-link>
        >
        <nuxt-link v-if="props.type === '2'" :to="localePath('/learn')" class=""> Learn </nuxt-link>
        <nuxt-link v-if="props.type === '1'" :to="localePath('/blog')" class=""> Blog </nuxt-link>
        > {{ state.selectName }}
      </div>
      <div class="content">
        <div class="article-con">
          <div class="title">{{ props.article.name }}</div>
          <div id="content" class="article-con1" v-html="props.article.content"></div>
        </div>
        <div class="article-title-list article-title-list1">
          <div class="title title1">Related Articles</div>
          <div v-for="(val, key) in state.list" :key="key">
            <nuxt-link :to="localePath(`/${val.path}`)" class="">
              <div :class="`title ${state.checkId === val.id ? 'title-checked' : ''}`">
                {{ val.name }}
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="rate-con">
        <div>
          <el-rate
            v-model="state.rate"
            :disabled="Boolean(state.rate)"
            allow-half
            show-score
            text-color="#201515"
            :score-template="`{value}/5（${props.article.rateNum || 0} votes）`"
            @change="rateChange"
          />
        </div>
        <div>{{ state.rate ? 'Thanks for voting!' : 'Rate this article' }}</div>
      </div>
      <div class="article-title-list article-title-list2">
        <div class="title title1">Related Articles</div>
        <div v-for="(val, key) in state.list" :key="key">
          <nuxt-link :to="localePath(`/${val.path}`)" class="">
            <div :class="`title ${state.checkId === val.id ? 'title-checked' : ''}`">
              {{ val.name }}
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <subscribe class="subs" />
  </div>
</template>
<style lang="scss">
.learndetail {
  .el-rate__text {
    font-size: 16px;
  }
}
</style>
<style lang="scss" scoped>
.learndetail {
  width: 100%;
  .learndetail-content {
    max-width: 1200px;
    padding: 0px 30px;
    margin: auto;
  }
  .top {
    font-weight: 400;
    font-size: 16px;
    color: #201515;
    line-height: 22px;
    margin-top: 32px;
  }
  .content {
    max-width: 1200px;
    display: flex;
    margin-top: 64px;
    box-sizing: border-box;
    .article-con {
      width: 100%;
      margin-right: 24px;
      .title {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        line-height: 72px;
      }
      .article-con1 {
        font-weight: 400;
        font-size: 20px;
        color: #201515;
        line-height: 28px;
        margin-top: 32px;
      }
    }
  }
  .article-title-list {
    width: 276px;
    flex-shrink: 0;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #e9e9e9;
    padding: 18px 24px 12px;
    box-sizing: border-box;
    .title {
      width: 100%;
      padding: 12px 0px;
      font-weight: 400;
      font-size: 18px;
      color: #403f3e;
      line-height: 25px;
      cursor: pointer;
    }
    .title1 {
      padding-top: 0px;
      cursor: default;
      font-weight: 500;
      font-size: 20px;
      color: rgba(144, 144, 144, 0.65);
      line-height: 28px;
    }
    .title-checked {
      font-weight: 500;
      font-size: 20px;
      color: #f66442;
      line-height: 28px;
    }
  }
  .article-title-list1 {
    display: block;
    max-height: calc(100vh - 180px);
    overflow-y: auto;
  }
  .article-title-list2 {
    display: none;
  }
  .rate-con {
    margin-top: 56px;
    // padding: 0px 30px;
  }
  .subs {
    margin-top: 78px;
  }
}
@media (max-width: 800px) {
  .learndetail {
    .learndetail-content {
      max-width: 100%;
      margin: auto;
      padding: 0px 14px;
    }
    // .top {
    //   display: none;
    // }
    .content {
      max-width: 100%;
      display: block;
      box-sizing: border-box;
      margin-top: 28px;
      .article-con {
        margin-right: 0px;
        .title {
          font-weight: 600;
          font-size: 20px;
          line-height: 27px;
        }
        .article-con1 {
          font-size: 15px;
          line-height: 21px;
          margin-top: 12px;
        }
      }
      .article-title-list1 {
        display: none;
      }
    }
    .article-title-list2 {
      display: block;
    }
    .article-title-list {
      border-radius: 6px;
      padding: 12px;
      width: 100%;
      margin: auto;
      margin-top: 28px;
      .title {
        width: 100%;
        padding: 8px 0px;
        font-size: 14px;
        line-height: 19px;
      }
      .title1 {
        font-size: 16px;
        line-height: 20px;
      }
      .title-checked {
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
      }
    }
    .rate-con {
      margin-top: 28px;
      box-sizing: border-box;
      // padding: 0px 14px;
    }
    .subs {
      margin-top: 28px;
    }
  }
}
</style>
