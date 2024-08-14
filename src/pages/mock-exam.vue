<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { urlGet, host, domain, cdn } from '@/utils';
import { useStore } from '@/store';
import { platformData } from '@/api';
import vEasyexam from '../components/easyexam.vue';

const vsImgBig = `${cdn}/store/portal/products/vs_img_big.png`;
const vsImgSmall = `${cdn}/store/portal/products/vs_img_small.png`;

const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);
useServerSeoMeta({
  title: t('mockexam.seometa.title'),
  description: t('mockexam.seometa.description'),
  keywords: t('mockexam.seometa.keywords'),
});
useHead({
  link: [
    { rel: 'canonical', href: `https://www.${domain}/mock-exam` },
    { rel: 'alternate', href: `https://www.${domain}/mock-exam`, hreflang: 'en-GB' },
  ],
});

const isLoad = ref(false);
const onLoad = () => {
  isLoad.value = true;
};
const isLoad1 = ref(false);
const onLoad1 = () => {
  isLoad1.value = true;
};
const isLoad2 = ref(false);
const onLoad2 = () => {
  isLoad2.value = true;
};
const isLoad3 = ref(false);
const onLoad3 = () => {
  isLoad3.value = true;
};
const isLoad4 = ref(false);
const onLoad4 = () => {
  isLoad4.value = true;
};
// 引入cdn图片
const mock_banner = `${cdn}/store/portal/products/mock_banner.png`;
const mock_picture1 = `${cdn}/store/portal/products/mock_picture1.png`;
const mock_picture2 = `${cdn}/store/portal/products/mock_picture2.png`;
const mock_picture3 = `${cdn}/store/portal/products/mock_picture3.png`;
const mock_picture4 = `${cdn}/store/portal/products/mock_picture4.png`;
</script>
<template>
  <div class="bankW100 mock_out">
    <div class="bank_wrapper">
      <div class="bank">
        <div class="banner_wrapper">
          <div class="banner">
            <div class="banner_left">
              <div class="big_title">
                <h1>{{ $t('mockexam.h1') }}</h1>
              </div>
              <div class="desc">
                {{ $t('mockexam.desc') }}
              </div>
              <div class="people_num">
                <div class="icon_continer">
                  <div class="one_icon left0">
                    <img src="/img/products/mock_user_icon1.png" :alt="$t('mockexam.mock_user_icon')" />
                  </div>
                  <div class="one_icon left24">
                    <img src="/img/products/mock_user_icon2.png" :alt="$t('mockexam.mock_user_icon')" />
                  </div>
                  <div class="one_icon left48">
                    <img src="/img/products/mock_user_icon3.png" :alt="$t('mockexam.mock_user_icon')" />
                  </div>
                  <div class="one_icon left72">
                    <img src="/img/products/mock_user_icon4.png" :alt="$t('mockexam.mock_user_icon')" />
                  </div>
                  <div class="one_icon left96">
                    <img src="/img/products/mock_user_icon5.png" :alt="$t('mockexam.mock_user_icon')" />
                  </div>
                </div>
                <div v-if="platformData" class="font">
                  {{
                    $t('mockexam.learners_have', {
                      number: platformData.examTotal,
                    })
                  }}
                </div>
              </div>
              <NuxtLink v-if="user.id" class="btn common_btn_hover_bgColor" :href="urlGet('/exam')">
                <div class="font">{{ $t('mockexam.Mock_Now') }}</div>

                <div class="icon">
                  <img src="/img/products/white_arrow_right.svg" :alt="$t('mockexam.white_arrow_right')" />
                </div>
              </NuxtLink>
              <NuxtLink
                v-else
                :to="localePath(`/login?url=${encodeURIComponent(`${host}/exam`)}`)"
                class="btn common_btn_hover_bgColor"
              >
                <div class="font">{{ $t('mockexam.Mock_Now') }}</div>

                <div class="icon">
                  <img src="/img/products/white_arrow_right.svg" :alt="$t('mockexam.white_arrow_right')" />
                </div>
              </NuxtLink>
            </div>
            <div class="banner_right">
              <el-image v-show="isLoad" :src="mock_banner" :alt="$t('mockexam.Full_scale')" @load="onLoad" />
              <el-skeleton v-show="!isLoad" style="width: 100%; height: 466px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="one_card img_left">
            <div class="one_card_left">
              <el-image v-show="isLoad1" :src="mock_picture1" :alt="$t('mockexam.article1.h2')" @load="onLoad1" />
              <el-skeleton v-show="!isLoad1" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">{{ $t('mockexam.article1.h2') }}</h2>
                <div class="right_desc">
                  <span v-html="$t('mockexam.article1.right_desc')"></span>
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/exam')">
                  <div class="font">{{ $t('mockexam.Mock_Now') }}</div>
                  <div class="arrow">
                    <img src="/img/products/orange_arrow_right.svg" :alt="$t('mockexam.orange_arrow_right')" />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(`${host}/exam`)}`)"
                >
                  <div class="font">{{ $t('mockexam.Mock_Now') }}</div>
                  <div class="arrow">
                    <img src="/img/products/orange_arrow_right.svg" :alt="$t('mockexam.orange_arrow_right')" />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <el-image v-show="isLoad2" :src="mock_picture2" :alt="$t('mockexam.article2.h2')" @load="onLoad2" />
              <el-skeleton v-show="!isLoad2" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">{{ $t('mockexam.article2.h2') }}</h2>
                <div class="right_desc">
                  <span v-html="$t('mockexam.article2.right_desc')"></span>
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/exam')">
                  <div class="font">{{ $t('mockexam.Mock_Now') }}</div>
                  <div class="arrow">
                    <img src="/img/products/orange_arrow_right.svg" :alt="$t('mockexam.orange_arrow_right')" />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(`${host}/exam`)}`)"
                >
                  <div class="font">{{ $t('mockexam.Mock_Now') }}</div>
                  <div class="arrow">
                    <img src="/img/products/orange_arrow_right.svg" :alt="$t('mockexam.orange_arrow_right')" />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_left" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <el-image v-show="isLoad3" :src="mock_picture3" :alt="$t('mockexam.article3.h2')" @load="onLoad3" />
              <el-skeleton v-show="!isLoad3" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">{{ $t('mockexam.article3.h2') }}</h2>
                <div class="right_desc">
                  {{ $t('mockexam.article3.right_desc') }}
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/exam')">
                  <div class="font">{{ $t('mockexam.Mock_Now') }}</div>
                  <div class="arrow">
                    <img src="/img/products/orange_arrow_right.svg" :alt="$t('mockexam.orange_arrow_right')" />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(`${host}/exam`)}`)"
                >
                  <div class="font">{{ $t('mockexam.Mock_Now') }}</div>
                  <div class="arrow">
                    <img src="/img/products/orange_arrow_right.svg" :alt="$t('mockexam.orange_arrow_right')" />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <el-image v-show="isLoad4" :src="mock_picture4" :alt="$t('mockexam.article4.h2')" @load="onLoad4" />
              <el-skeleton v-show="!isLoad4" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">{{ $t('mockexam.article4.h2') }}</h2>
                <div class="right_desc">
                  <span v-html="$t('mockexam.article4.right_desc')"></span>
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/exam')">
                  <div class="font">{{ $t('mockexam.Mock_Now') }}</div>
                  <div class="arrow">
                    <img src="/img/products/orange_arrow_right.svg" :alt="$t('mockexam.orange_arrow_right')" />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(`${host}/exam`)}`)"
                >
                  <div class="font">{{ $t('mockexam.Mock_Now') }}</div>
                  <div class="arrow">
                    <img src="/img/products/orange_arrow_right.svg" :alt="$t('mockexam.orange_arrow_right')" />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="vs_out">
            <h2>DET Practice Mock VS DET Test Scores</h2>
            <div class="vs_tips">
              Score comparison of students who took the Duolingo English test and used our mock test
            </div>
            <div class="vs_img">
              <img class="vs_img_self big_img" :src="vsImgBig" alt="vs_img" />
              <img class="vs_img_self big_small" :src="vsImgSmall" alt="vs_img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-easyexam />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/prod.scss';
.mock_out {
  .content {
    .vs_out {
      padding-bottom: 120px;
      @media (max-width: 768px) {
        padding-bottom: 60px;
      }
      h2 {
        text-align: center;
        font-weight: 500;
        font-size: 40px;
        color: #201515;
        @media (max-width: 768px) {
          font-size: 24px;
        }
      }
      .vs_tips {
        font-weight: 500;
        font-size: 24px;
        color: #201515;
        text-align: center;
        @media (max-width: 768px) {
          font-size: 16px;
        }
      }
      .vs_img {
        text-align: center;
        .vs_img_self {
          width: 100%;
          margin-top: 47px;
        }
        .big_img {
          display: block;
          @media (max-width: 768px) {
            display: none;
          }
        }
        .big_small {
          display: none;
          @media (max-width: 768px) {
            display: block;
          }
        }
      }
    }
  }
}
</style>
