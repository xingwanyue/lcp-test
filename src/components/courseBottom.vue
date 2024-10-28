<script setup lang="ts">
import { useStore } from '@/store';

const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);
const isVip = computed(() => store.isVip);
const props = defineProps({
  bottomData: {
    type: Array,
    required: true,
  },
  buystatus: {
    type: Number,
  },
}) as any;
const buyMembership = (id: number) => {
  store.stripePay({ vipId: id });
};
</script>

<template>
  <div class="two_cursor_wrapper">
    <div v-for="item in props.bottomData" :key="item.priceid" class="one_article">
      <div class="article_out">
        <div class="left_img">
          <img :src="item.img" :alt="item.title" />
        </div>
        <div class="right_article">
          <div class="title_in">{{ item.title }}</div>
          <template v-if="item.article">
            <div v-for="(itemin, index) in item.article.list" :key="index" class="one_article_detail">
              <span class="content">{{ itemin.content }}</span>
            </div>
          </template>

          <div class="buy_btn_common">
            <div v-if="!item.isbuyed" class="price">
              <span class="tag">{{ $t('courses.pagefont.do') }}</span>
              <span v-if="isVip" class="price_num">{{ item.vipPrice / 100 || 0 }}</span>
              <span v-else class="price_num">{{ item.price / 100 || 0 }}</span>
            </div>

            <div class="buttom_group_out">
              <template v-if="!item.isbuyed">
                <div v-if="user.id" class="btn common_btn_hover_bgColor" @click="buyMembership(item.priceid)">
                  <div class="font">{{ $t('courses.pagefont.Buy_Now') }}</div>
                </div>
                <NuxtLink :to="localePath(`/login?url=/courses`)" v-else class="btn common_btn_hover_bgColor">
                  <div class="font">{{ $t('courses.pagefont.Buy_Now') }}</div>
                </NuxtLink>
                <div class="jiantou"><img src="/img/courses/courses_jiantou.svg" /></div>
              </template>

              <a
                v-if="item.isbuyed"
                :href="staticUrlGet(`/${item?.downloadhref}`)"
                class="btn common_btn_hover_bgColor"
                target="_blank"
              >
                <div class="font">Download Guide</div>
              </a>
              <div v-else class="btn common_btn_hover_bgColor disbtn">
                <div class="font">Download Guide</div>
              </div>
              <template v-if="item.type === 'speaking'">
                <div class="jiantou"><img src="/img/courses/courses_jiantou.svg" /></div>
                <NuxtLink v-if="item.isbuyed" class="btn common_btn_hover_bgColor" :to="localePath(`/listen`)">
                  <div class="font">Speaking Audio Samples</div>
                </NuxtLink>
                <div v-else class="btn common_btn_hover_bgColor disbtn" @click="buyMembership(item.priceid)">
                  <div class="font">Speaking Audio Samples</div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.two_cursor_wrapper {
  display: flex;
  flex-direction: column;
  grid-gap: 40px;
  .one_article {
    padding: 24px;
    background: #fafafa;
    border-radius: 8px;
    .title {
      font-weight: 600;
      font-size: 56px;
      color: #201515;
      text-align: center;
      margin: 0;
      margin-top: 56px;
      margin-bottom: 32px;
      @media (max-width: 906px) {
        font-size: 46px;
        margin-top: 36px;
      }
      @media (max-width: 744px) {
        font-size: 36px;
      }
      @media (max-width: 570px) {
        font-size: 26px;
      }
      @media (max-width: 450px) {
        font-size: 22px;
      }
    }
    .article_out {
      display: grid;
      grid-template-columns: 0.2fr 1fr;
      @media screen and (max-width: 974px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
        grid-template-rows: 300px auto;
      }

      grid-gap: 40px;
      .left_img {
        display: flex;
        justify-content: center;
        align-items: flex-start;

        @media screen and (max-width: 974px) {
          align-items: center;
        }
        img {
          width: 100%;
          height: auto;
          border-radius: 4px;

          @media screen and (max-width: 974px) {
            height: 100%;
            width: auto;
          }
        }
      }
      .right_article {
        .title_in {
          font-weight: 600;
          font-size: 24px;
          color: #201515;
          line-height: 34px;
        }
        .one_article_title {
          font-size: var(--article-font-size);
          color: #201515;
        }
        .one_article_detail {
          margin-top: 6px;
          .small_title {
            font-size: var(--article-font-size);
            color: #201515;
            font-weight: 600;
          }
          .content {
            font-size: var(--article-font-size);
            color: #201515;
          }
        }

        @media screen and (max-width: 1000000px) {
          --article-font-size: 18px;
        }
        @media screen and (max-width: 1440px) {
          --article-font-size: 18px;
        }
        @media screen and (max-width: 1280px) {
          --article-font-size: 16px;
        }
        @media screen and (max-width: 768px) {
          --article-font-size: 16px;
        }
        @media screen and (max-width: 414px) {
          --article-font-size: 14px;
        }
      }
    }
  }
  .buttom_group_out {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 8px;
    .jiantou {
      width: 24px;
      height: 24px;
    }
  }
  .buy_btn_common {
    display: flex;

    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 32px;
    grid-gap: 32px;
    .price {
      .tag {
        font-size: var(--article-font-size);
        color: #201515;
      }
      .price_num {
        font-size: 40px;
        color: #201515;
      }
    }
    .btn {
      width: fit-content;
      padding: 12px 32px;
      background: #f66442;
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      grid-gap: 8px;
      display: block;

      cursor: pointer;
      .font {
        font-weight: 500;
        font-size: var(--article-font-size);
        color: #ffffff;
      }
      .icon {
        width: 24px;
        height: 24px;
      }
      &:hover {
        .icon {
          transform: translateX(8px);
          transition: all 0.2s;
        }
      }
    }
    .disbtn {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }
}
</style>
