<script setup lang="ts">
import { useStore } from '@/store';

const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);
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
        <div class="price">
          <span class="tag">{{ $t('courses.pagefont.do') }}</span>
          <span class="price_num">{{ props.zongheData.price / 100 || 0 }}</span>
        </div>
        <div v-if="user.id" class="btn common_btn_hover_bgColor" @click="buyMembership(props.zongheData.id)">
          <div class="font">{{ $t('courses.pagefont.Buy_Now') }}</div>
          <div class="icon">
            <img src="/img/products/white_arrow_right.svg" :alt="$t('courses.pagefont.white_arrow_right')" />
          </div>
        </div>
        <NuxtLink :to="localePath(`/login?url=/courses`)" v-else class="btn common_btn_hover_bgColor">
          <div class="font">{{ $t('courses.pagefont.Buy_Now') }}</div>
          <div class="icon">
            <img src="/img/products/white_arrow_right.svg" :alt="$t('courses.pagefont.white_arrow_right')" />
          </div>
        </NuxtLink>
      </div>

      <div v-if="props.buystatus === 3" class=""><slot name="footer"></slot></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.zonghe_out {
  border: 1px red solid;
  padding: 100px 0;
  display: grid;
  grid-template-columns: 0.42fr 1fr;
  grid-gap: 56px;
  .zonghe_out_left {
    .zhimg {
      width: 100%;
      height: auto;
      aspect-ratio: auto 169 / 220;
    }
  }
  .zonghe_out_right {
    .title {
      font-weight: 600;
      font-size: 56px;
      color: #201515;
    }
    .desc {
      font-weight: 400;
      font-size: 20px;
      color: #201515;
      line-height: 30px;
      margin-top: 32px;
      :deep(.yellow) {
        color: #f66442;
      }
    }
  }
  .buy_btn_common {
    display: flex;
    border: 1px red solid;
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
}
</style>
