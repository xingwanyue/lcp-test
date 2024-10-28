<script setup lang="ts">
import { useStore } from '@/store';

const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);
const isVip = computed(() => store.isVip);
const props = defineProps({
  zongheData: {
    type: Object,
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
  <div class="zonghe_out">
    <div class="zonghe_out_left">
      <img class="zhimg" :src="props.zongheData.img" :alt="props.zongheData.title" />
    </div>
    <div class="zonghe_out_right">
      <div class="title">{{ props.zongheData.title }}</div>
      <div class="desc" v-html="props.zongheData.desc"></div>

      <div v-if="props.buystatus !== 3" class="buy_btn_common">
        <template v-if="!props.zongheData.isbuyed">
          <div class="price">
            <span class="tag">{{ $t('courses.pagefont.do') }}</span>
            <span v-if="isVip" class="price_num">{{ props.zongheData.vipPrice / 100 || 0 }}</span>
            <span v-else class="price_num">{{ props.zongheData.price / 100 || 0 }}</span>
          </div>
        </template>

        <!-- <div class="buy_time" v-if="props.zongheData.isbuyed">21 21213 1</div> -->
        <div class="btn_group_out" v-if="props.zongheData.isbuyed">
          <a
            :href="staticUrlGet(`/${props.zongheData?.downloadhref}`)"
            target="_blank"
            class="btn common_btn_hover_bgColor"
          >
            <div class="font">{{ $t('courses.downloadguide') }}</div>
          </a>
          <div v-if="props.zongheData.type === 'speaking'" class="jiantou">
            <img src="/img/courses/courses_jiantou.svg" />
          </div>
          <NuxtLink
            v-if="props.zongheData.type === 'speaking'"
            class="btn common_btn_hover_bgColor"
            :to="localePath(`/listen`)"
          >
            <div class="font">{{ $t('courses.sas') }}123</div>
          </NuxtLink>
        </div>
        <template v-else>
          <div v-if="user.id" class="btn common_btn_hover_bgColor" @click="buyMembership(props.zongheData.priceid)">
            <div class="font">{{ $t('courses.pagefont.Buy_Now') }}</div>
          </div>
          <NuxtLink :to="localePath(`/login?url=/courses`)" v-else class="btn common_btn_hover_bgColor">
            <div class="font">{{ $t('courses.pagefont.Buy_Now') }}1</div>
          </NuxtLink></template
        >
      </div>

      <div v-if="props.buystatus === 3" class="slotout"><slot name="footer"></slot></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.zonghe_out {
  padding: 100px 0;
  display: grid;
  grid-template-columns: 0.42fr 1fr;
  grid-gap: 56px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-top: 26px;
  }
  .zonghe_out_left {
    // @media screen and (max-width: 768px) {
    //   display: none;
    // }
    .zhimg {
      width: 100%;
      height: auto;
      aspect-ratio: auto 169 / 220;
    }
  }
  .zonghe_out_right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      font-weight: 600;
      font-size: 56px;
      color: #201515;
      @media screen and (max-width: 768px) {
        font-size: 36px;
      }
    }
    .desc {
      font-weight: 400;
      font-size: 20px;
      color: #201515;
      line-height: 30px;
      margin-top: 32px;
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
      :deep(.yellow) {
        color: #f66442;
      }
    }
  }
  .btn_group_out {
    display: flex;
    grid-gap: 8px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .jiantou {
      width: 24px;
      height: 24px;
      @media screen and (max-width: 768px) {
        display: none;
      }
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
  }
  .slotout {
    margin-top: 16px;
  }
}
</style>
