<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { urlGet, domain, cdn, host } from '@/utils';
import { platformData } from '@/api';
import vHighscorewriting from '../components/highscorewritingnew.vue';
import { useStore } from '@/store';
const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);
useSeoMeta({
  title: t('correction.seometa.title'),
  description: t('correction.seometa.description'),
  keywords: t('correction.seometa.keywords'),
});
useHead({
  link: [
    { rel: 'canonical', href: `https://www.${domain}${localePath('/writing-ai-correction')}` },
    { rel: 'alternate', href: `https://www.${domain}${localePath('/writing-ai-correction')}`, hreflang: 'en-GB' },
  ],
});
const isLoad = ref(false);
const onLoad = () => {
  isLoad.value = true;
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
const isLoad5 = ref(false);
const onLoad5 = () => {
  isLoad5.value = true;
};
const isLoad1 = ref(false);
const onLoad1 = () => {
  isLoad1.value = true;
};
// 引入cdn图片
const service_banner = `${cdn}/store/portal/products/service_banner.png`;
const service_picture1 = `${cdn}/store/portal/products/writing_picture1.png`;
const service_picture2 = `${cdn}/store/portal/products/writing_picture2.png`;
const service_picture3 = `${cdn}/store/portal/products/writing_picture3.png`;
const service_picture4 = `${cdn}/store/portal/products/writing_picture4.png`;
</script>
<template>
  <div class="bankW100 service_out">
    <div class="bank_wrapper">
      <div class="bank">
        <div class="banner_wrapper">
          <div class="banner">
            <div class="banner_left">
              <div class="big_title">
                <h1>{{ $t('correction.h1') }}</h1>
              </div>
              <div class="desc">
                {{ $t('correction.desc') }}
              </div>
              <div class="people_num">
                <div class="icon_continer">
                  <div class="one_icon left0">
                    <img src="/img/products/service_user_icon1.png" :alt="$t('correction.useralt')" />
                  </div>
                  <div class="one_icon left24">
                    <img src="/img/products/service_user_icon2.png" :alt="$t('correction.useralt')" />
                  </div>
                  <div class="one_icon left48">
                    <img src="/img/products/service_user_icon3.png" :alt="$t('correction.useralt')" />
                  </div>
                  <div class="one_icon left72">
                    <img src="/img/products/service_user_icon4.png" :alt="$t('correction.useralt')" />
                  </div>
                  <div class="one_icon left96">
                    <img src="/img/products/service_user_icon5.png" :alt="$t('correction.useralt')" />
                  </div>
                </div>
                <div v-if="platformData" class="font">
                  {{
                    $t('correction.learners_have', {
                      number: platformData.correctTotal,
                    })
                  }}
                </div>
              </div>
              <NuxtLink v-if="user.id" class="btn common_btn_hover_bgColor" :href="urlGet('/correct')">
                <div class="font">{{ $t('correction.Review_Now') }}</div>
                <div class="icon">
                  <img src="/img/products/white_arrow_right.svg" :alt="$t('correction.white_arrow_right')" />
                </div>
              </NuxtLink>
              <NuxtLink
                v-else
                class="btn common_btn_hover_bgColor"
                :to="localePath(`/login?url=${encodeURIComponent(`${host}/correct`)}`)"
              >
                <div class="font">{{ $t('correction.Review_Now') }}</div>
                <div class="icon">
                  <img src="/img/products/white_arrow_right.svg" :alt="$t('correction.white_arrow_right')" />
                </div>
              </NuxtLink>
            </div>
            <div class="banner_right">
              <el-image
                v-show="isLoad"
                :src="service_banner"
                alt="The best new way to check your writing answers."
                @load="onLoad"
              />
              <el-skeleton v-show="!isLoad" style="width: 100%; height: 100%" animated>
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
              <el-image v-show="isLoad1" :src="service_picture1" :alt="$t('correction.h2_1.h2')" @load="onLoad1" />
              <el-skeleton v-show="!isLoad1" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">{{ $t('correction.h2_1.h2') }}</h2>
                <div class="right_desc">
                  <span v-html="$t('correction.h2_1.right_desc')"></span>
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/correct')">
                  <div class="font">{{ $t('correction.Correct_Now') }}</div>
                  <div class="arrow">
                    <img src="/img/products/yellow_arrow_right.svg" :alt="$t('correction.yellow_arrow_right')" />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(`${host}/correct`)}`)"
                >
                  <div class="font">{{ $t('correction.Correct_Now') }}</div>
                  <div class="arrow">
                    <img src="/img/products/yellow_arrow_right.svg" :alt="$t('correction.yellow_arrow_right')" />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <el-image v-show="isLoad2" :src="service_picture2" :alt="$t('correction.h2_2.h2')" @load="onLoad2" />
              <el-skeleton v-show="!isLoad2" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">{{ $t('correction.h2_2.h2') }}</h2>
                <div class="right_desc">
                  <span v-html="$t('correction.h2_2.right_desc')"></span>
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/correct')">
                  <div class="font">{{ $t('correction.Get_Scored_Now') }}</div>
                  <div class="arrow">
                    <img src="/img/products/yellow_arrow_right.svg" :alt="$t('correction.yellow_arrow_right')" />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(`${host}/correct`)}`)"
                >
                  <div class="font">{{ $t('correction.Get_Scored_Now') }}</div>
                  <div class="arrow">
                    <img src="/img/products/yellow_arrow_right.svg" :alt="$t('correction.yellow_arrow_right')" />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_left" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <el-image v-show="isLoad3" :src="service_picture3" :alt="$t('correction.h2_3.h2')" @load="onLoad3" />
              <el-skeleton v-show="!isLoad3" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">{{ $t('correction.h2_3.h2') }}</h2>
                <div class="right_desc">
                  <span v-html="$t('correction.h2_3.right_desc')"></span>
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/correct')">
                  <div class="font">{{ $t('correction.Correct_Now') }}</div>
                  <div class="arrow">
                    <img src="/img/products/yellow_arrow_right.svg" :alt="$t('correction.yellow_arrow_right')" />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(`${host}/correct`)}`)"
                >
                  <div class="font">{{ $t('correction.Correct_Now') }}</div>
                  <div class="arrow">
                    <img src="/img/products/yellow_arrow_right.svg" :alt="$t('correction.yellow_arrow_right')" />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <el-image v-show="isLoad4" :src="service_picture4" :alt="$t('correction.h2_4.h2')" @load="onLoad4" />
              <el-skeleton v-show="!isLoad4" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">{{ $t('correction.h2_4.h2') }}</h2>
                <div class="right_desc">
                  <span v-html="$t('correction.h2_4.right_desc')"></span>
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/correct')">
                  <div class="font">{{ $t('correction.Correct_Now') }}</div>
                  <div class="arrow">
                    <img src="/img/products/yellow_arrow_right.svg" :alt="$t('correction.yellow_arrow_right')" />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(`${host}/correct`)}`)"
                >
                  <div class="font">{{ $t('correction.Correct_Now') }}</div>
                  <div class="arrow">
                    <img src="/img/products/yellow_arrow_right.svg" :alt="$t('correction.yellow_arrow_right')" />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-highscorewriting />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/prod.scss';
</style>
