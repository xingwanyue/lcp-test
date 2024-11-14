<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
import dayjs from 'dayjs';
import { reactive } from 'vue';
import find from 'lodash/find';
import head from 'lodash/head';
import { ElMessage } from 'element-plus';
import { rateAdd, saveStorage, getStorage, articleCategoryGet } from '@/utils';
import subscribe from '@/components/subscribe.vue';

const props = defineProps({
  id: Number,
  categoryId: Number,
  article: Object,
  type: String,
  allData: Object,
}) as any;
const localePath = useLocalePath();
const state = reactive({
  details: {} as any,
  checkId: 0,
  rate: 0,
  rateArr: [] as any,
  selectName: '',
  averageScore: 0,
  iconHoverIndex: -1,
});
state.rateArr = JSON.parse(getStorage('det_rate') || '[]');

state.checkId = props.id;
const { rate, averageScore } = (find(state.rateArr, { id: props.id }) || {}) as any;
state.rate = rate;
state.averageScore = averageScore;

const getSelect = async () => {
  const { data = {} } = (await useFetch(`${articleCategoryGet}?id=${props.categoryId}`, {
    server: true,
    headers: { locale: locale.value },
  })) as any;
  const { name } = head(data.value) as any;
  state.selectName = name;
};
getSelect();
const rateChange = async () => {
  const rateArr = JSON.parse(getStorage('det_rate') || '[]');
  const { initRate, initRateNum, rate, rateNum } = props.article;
  const averageScore =
    (Number(initRate) * Number(initRateNum) + rate * rateNum + state.rate) / (Number(initRateNum) + rateNum + 1);
  rateArr.push({ id: state.checkId, rate: state.rate, averageScore: averageScore.toFixed(1) });
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
    props.article.rate = averageScore;
    ElMessage({ type: 'success', message: t('articleDetail.Submitted_successfully') });
  }
};
const scrollToArticle = (index: any) => {
  const element = document.getElementById('article' + index);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    window.scrollBy(0, -100);
  }
};
// 分享到 Facebook
const shareToFacebook = () => {
  const url = window.location.href; // 获取当前页面的 URL
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(facebookShareUrl, '_blank');
};
// 分享到x
const shareToX = () => {
  const url = window.location.href; // 获取当前页面的 URL
  const xShareUrl = `https://www.x.com/intent/post/?text=${props.article.name}&url=${encodeURIComponent(url)}`;
  window.open(xShareUrl, '_blank');
};
const iconHover = (index: number) => {
  state.iconHoverIndex = index;
};
</script>
<template>
  <div class="learndetail">
    <div class="learndetail-content">
      <div class="top">
        <nuxt-link :to="localePath('/')" class="hoverGiveBorder">{{ $t('articleDetail.Home') }}</nuxt-link>
        >
        <nuxt-link v-if="props.type === '2'" :to="localePath('/learn')" class="hoverGiveBorder">{{
          $t('articleDetail.Learn')
        }}</nuxt-link>
        <nuxt-link v-if="props.type === '1'" :to="localePath('/blog')" class="">{{
          $t('articleDetail.Blog')
        }}</nuxt-link>
        > {{ state.selectName }}
      </div>

      <div class="content">
        <div class="article-con">
          <div class="title">
            <h1>{{ props.article.name }}</h1>
          </div>
          <div class="user_out" @click="shareToX">
            <div class="user_name_icon" v-if="props.allData.author">{{ props.allData.author.slice(0, 1) }}</div>
            <div class="user_right">
              <div class="user_name">{{ props.allData.author }}</div>
              <div class="user_up_time">
                {{ dayjs(props.allData.updateTime).format('MM-DD-YYYY') }}
              </div>
            </div>
          </div>
          <div class="zhengwen" v-html="JSON.parse(props.article.content)[0][1]"></div>
          <div class="mulu_dom">
            <div class="inthis">In this article</div>
            <div class="article_group_out">
              <div v-for="(item, index) in JSON.parse(props.article.content)" :key="`title${index}`">
                <div @click="scrollToArticle(index)" v-if="index > 0 && item[0]" class="one_article_title">
                  {{ index }} {{ item[0] }}
                </div>
              </div>
            </div>
          </div>

          <div id="content" class="article-con1">
            <div v-for="(item, index) in JSON.parse(props.article.content)" :key="`content${index}`">
              <div v-if="index > 0" class="one_duan">
                <div :id="`article${index}`" v-if="item[0]" class="one_duan_title">{{ item[0] }}</div>
                <div class="one_duan_content" v-html="item[1]"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="right_list">
          <div class="article_img">
            <div class="article_img_top">Get a Higher Score Easily on the DET</div>
            <div class="article_img_bottom">
              <img src="/img/blog/article_small_img.png" :alt="props.article.name" />
            </div>
          </div>
          <div class="article-title-list article-title-list1">
            <div class="title title1">{{ $t('articleDetail.Related_Articles') }}</div>
            <div v-for="(val, key) in props.article.relatedArticles" :key="key">
              <nuxt-link :to="localePath(`/${val.path}`)" class="">
                <div :class="`title ${state.checkId === val.id ? 'title-checked' : ''}`">
                  {{ val.name }}
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="rate-con">
        <div class="rate-con-left">
          <div v-if="state.averageScore">
            <el-rate
              v-model="state.rate"
              :disabled="Boolean(state.rate)"
              allow-half
              show-score
              text-color="#201515"
              :score-template="`{value}/5（${
                props.article.rateNum ? `Rating:${Number(state.averageScore).toFixed(1)} ·` : ''
              }   ${props.article.rateNum || 0} votes）`"
              @change="rateChange"
            />
          </div>
          <div v-else>
            <el-rate
              v-model="state.rate"
              :disabled="Boolean(state.rate)"
              allow-half
              show-score
              text-color="#201515"
              :score-template="`{value}/5（${
                props.article.rateNum ? `Rating:${props.article.rate.toFixed(1)} ·` : ''
              }   ${props.article.rateNum || 0} votes）`"
              @change="rateChange"
            />
          </div>
          <div>
            {{ state.rate ? `${$t('articleDetail.Thanks_for_voting')}` : `${$t('articleDetail.Rate_this_article')}` }}
          </div>
        </div>
        <div class="rate-con-right">
          <div class="top_icon_group">
            <div class="one_share_icon" @mouseover="iconHover(1)" @mouseleave="iconHover(-1)" @click="shareToX">
              <img v-show="state.iconHoverIndex !== 1" src="/img/footer/x_logo.svg" />
              <img v-show="state.iconHoverIndex === 1" src="/img/footer/x_logo_active.svg" />
            </div>
            <div class="one_share_icon" @mouseover="iconHover(2)" @mouseleave="iconHover(-1)" @click="shareToFacebook">
              <img v-show="state.iconHoverIndex !== 2" src="/img/footer/facebook_logo.svg" />
              <img v-show="state.iconHoverIndex === 2" src="/img/footer/facebook_logo_active.svg" />
            </div>
          </div>
          <div class="bottom_font">Share this article</div>
        </div>
      </div>
      <div class="article-title-list article-title-list2">
        <div class="title title1">{{ $t('articleDetail.Related_Articles') }}</div>
        <div v-for="(val, key) in props.article.relatedArticles" :key="key">
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
    .hoverGiveBorder {
      &:hover {
        color: #f66442;
        text-decoration: underline;
      }
    }
  }

  .content {
    max-width: 1200px;
    display: flex;
    margin-top: 64px;
    box-sizing: border-box;
    grid-gap: 48px;

    .article-con {
      width: 100%;

      overflow: hidden;
      :deep(iframe) {
        width: 100%;
        // border: 1px red solid;
      }
      .title {
        h1 {
          margin: 0;
          padding: 0;
          font-weight: 600;
          font-size: 48px;
          color: #201515;
          line-height: 64px;
        }
      }
      .user_out {
        margin-top: 40px;
        margin-bottom: 48px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        grid-gap: 16px;
        .user_name_icon {
          width: 48px;
          height: 48px;
          background: #f66442;
          font-weight: 400;
          font-size: 18px;
          color: #ffffff;
          text-align: center;
          line-height: 48px;
          border-radius: 50%;
        }
        .user_right {
          .user_name {
            font-weight: 500;
            font-size: 16px;
            color: #403f3e;
          }
          .user_up_time {
            font-weight: 400;
            font-size: 16px;
            color: #666666;
          }
        }
      }
      .zhengwen {
        font-weight: 400;
        font-size: 20px;
        color: #201515;
        line-height: 28px;
      }
      .mulu_dom {
        background: #fff4f1;
        border-radius: 8px;
        padding: 24px;
        .inthis {
          font-weight: 500;
          font-size: 22px;
          color: #201515;
          // margin-bottom: 16px;
        }
        .article_group_out {
          display: flex;
          flex-direction: column;
          grid-gap: 16px;
          .one_article_title {
            font-weight: 400;
            font-size: 22px;
            color: #201515;
            line-height: 32px;
            cursor: pointer;
            &:hover {
              font-weight: 500;
              font-size: 22px;
              color: #f66442;
              line-height: 32px;
              text-decoration: underline;
            }
          }
        }
      }
      .article-con1 {
        .one_duan {
          margin-top: 48px;
          .one_duan_title {
            font-weight: 600;
            font-size: 40px;
            color: #201515;
            line-height: 48px;
          }
          .one_duan_content {
            font-weight: 400;
            font-size: 20px;
            color: #201515;
            line-height: 28px;
            margin-top: 32px;
            ::v-deep(p) {
              margin: 0;
              padding: 0;
            }
          }
        }
      }
    }
  }
  .right_list {
    max-width: 352px;
    @media (max-width: 800px) {
      display: none;
    }
    .article_img {
      margin-bottom: 24px;
      background: linear-gradient(0, #ffc2b3 0%, #fa7758 100%);
      border-radius: 8px;
      .article_img_top {
        box-sizing: border-box;
        padding: 32px 29px;
        font-weight: 600;
        font-size: 32px;
        color: #ffffff;
        line-height: 46px;
        text-align: center;
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
    width: 100%;
  }
  .article-title-list2 {
    display: none;
  }
  .rate-con {
    margin-top: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    grid-gap: 24px;

    .rate-con-left {
    }
    .rate-con-right {
      margin-left: auto;
      .top_icon_group {
        display: flex;
        grid-gap: 8px;
        justify-content: flex-end;
        align-items: center;
        .one_share_icon {
          width: 30px;
          height: 30px;
        }
      }
      .bottom_font {
        font-weight: 500;
        font-size: 20px;
        color: #201515;
        margin-top: 8px;
      }
    }
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
          h1 {
            font-weight: 600;
            font-size: 20px;
            line-height: 27px;
          }
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
