<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
import vSlogen from '../components/slogen.vue';
import vSubscribe from '../components/subscribe.vue';
import { oauth2SignIn } from '@/utils/googleAuth';
import { useStore } from '@/store';
import { staticUrlGet, formatNumber, cdn, domain, getToken, saveStorage } from '@/utils';
import { platformData, portalData } from '@/api';
import { useRoute } from 'vue-router';
const route = useRoute();
const videoUrl = `${cdn}/store/portal/banner_video.mp4`;
// const videoPosterUrl = `${cdn}/store/portal/banner-poster.bg`
useServerSeoMeta({
  title: t('index.seometa.title'),
  description: t('index.seometa.description'),
  keywords: t('index.seometa.keywords'),
});
useHead({
  link: [
    { rel: 'canonical', href: `https://www.${domain}/` },
    { rel: 'alternate', href: `https://www.${domain}/`, hreflang: 'en-GB' },
  ],
});

const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);
const userPingLunResponse = computed(() => {
  const pinglunArr = [] as any;
  let pinglunMid = [] as any;
  for (let i = 0; i < portalData[0].length; i += 2) {
    pinglunMid[i] = JSON.parse(portalData[0][i].data);
    pinglunMid[i + 1] = JSON.parse(portalData[0][i + 1].data);
    pinglunMid[i].rate = Number(pinglunMid[i].rate);
    pinglunMid[i + 1].rate = Number(pinglunMid[i + 1].rate);
    pinglunArr.push([pinglunMid[i], pinglunMid[i + 1]]);
  }
  return pinglunArr;
});
const haveCookie = ref(false);
const isMobile = ref(false);
onMounted(async () => {
  // 如果是在浏览器环境下，执行movePingLun
  if (process.client) {
    moveAnamit();
    // 监听窗口大小 改变isMobile
    window.addEventListener('resize', () => {
      isMobile.value = window.innerWidth < 450;
    });
    // 获取路由参数code
    const code = route.query.code as string;
    if (code) {
      saveStorage('InviteCode', code, true);
    }
  }

  const token = await getToken();
  if (token) {
    haveCookie.value = true;
  }
});

const moveAnamit = () => {
  const small_title_wrap = document.querySelector('.small_title_wrap');
  const small_title = document.querySelectorAll('.one_small_title');
  let index = 0;
  let timer = null;
  timer = setInterval(() => {
    small_title.forEach((item) => {
      item.classList.remove('current');
      item.classList.remove('per');
      item.classList.remove('start');
    });
    small_title[index].classList.add('current');
    if (index === 0) {
      small_title[small_title.length - 1].classList.add('per');
    } else {
      small_title[index - 1].classList.add('per');
    }
    index++;
    if (index === small_title.length) {
      index = 0;
    }
  }, 2000);
};

// 将数字格式化 306281变为306k 3062811变为3061k
const toThousands = (num: any) => {
  if (!num) {
    return 0;
  }
  let result = '';
  const numStr = num.toString();
  for (let i = 0; i < numStr.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      result = ``;
    }
    result = numStr[numStr.length - i - 1] + result;
  }
  return result;
};
const googleLogin = () => {
  oauth2SignIn(urlGet('/home'));
};
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

// 引入cdn图片
const bannerImg = `${cdn}/store/portal/home/banner.svg`;
const home1 = `${cdn}/store/portal/home/home1.png`;
const home2 = `${cdn}/store/portal/home/home2.png`;
const home3 = `${cdn}/store/portal/home/home3.png`;
const home4 = `${cdn}/store/portal/home/home4.png`;
</script>

<template>
  <div class="home">
    <div class="part1_wrapper">
      <div class="bg_handle"></div>
      <div class="part1">
        <div class="power_by">{{ $t('index.power_by') }}</div>
        <div class="page_title">
          <div v-if="isMobile" class="h_one isMobile">
            <h1 v-html="$t('index.h1Mobile')"></h1>
          </div>
          <div v-if="!isMobile" class="h_one isnoMobile">
            <h1 v-html="$t('index.h1PC')"></h1>
          </div>
          <div class="animat_wrap">
            <div class="small_title_wrap">
              <div class="one_small_title current">{{ $t('index.one_small_title[0]') }}</div>
              <div class="one_small_title">{{ locale === 'zh' ? 'AI批改' : $t('index.one_small_title[1]') }}</div>
              <div class="one_small_title">{{ locale === 'zh' ? '全真模拟' : $t('index.one_small_title[2]') }}{{}}</div>
              <div class="one_small_title">{{ $t('index.one_small_title[3]') }}</div>
            </div>
          </div>
        </div>
        <div v-if="!user.id && !haveCookie" class="two_btn_out">
          <div class="common_btn common_btn_hover_bgColor yellow" @click="googleLogin">
            <img src="/img/home/google_icon.svg" :alt="$t('index.Start_free_with_Google')" />
            {{ $t('index.Start_free_with_Google') }}
          </div>
          <NuxtLink
            :to="localePath(`/login?url=${encodeURIComponent(host)}`)"
            class="common_btn common_btn_hover_borderCu white"
          >
            {{ $t('index.Start_free_with_email') }}
          </NuxtLink>
        </div>
        <div v-else class="two_btn_out">
          <NuxtLink :href="urlGet('/home')" class="common_btn common_btn_hover_borderCu white">
            {{ $t('index.Start_for_free') }}
          </NuxtLink>
        </div>
        <div
          class="all_stu_nums"
          v-html="
            $t('index.trustedByWorldwide', {
              path: `<span class='yellow'>
              ${platformData?.userTotal ? formatNumber(platformData?.userTotal) : '300,000'} 
              </span>`,
            })
          "
        ></div>
        <div class="big_img_out">
          <div class="big_img">
            <video
              width="100%"
              height="100%"
              muted
              autoplay
              loop
              controlslist="nodownload"
              webkit-playsinline="true"
              playsinline="true"
              x5-video-player-fullscreen="true"
              x5-video-orientation="portraint"
              x5-video-player-type="h5"
              :src="videoUrl"
            ></video>
            <!-- <img :src="bannerImg" /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="part2_wrapper">
      <div class="part2">
        <div class="title1" data-aos="fade-up" data-aos-duration="1000">
          <div>{{ $t('index.The_Best_Platform') }}</div>
        </div>
        <div class="title2" data-aos="fade-up" data-aos-duration="1000">
          <div>{{ $t('index.Leverage_Our') }}</div>
        </div>
        <div class="one_img_article" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <el-image v-show="isLoad" :src="home1" :alt="$t('index.article1.title')" @load="onLoad" />
            <el-skeleton v-show="!isLoad" style="width: 100%" animated>
              <template #template>
                <el-skeleton-item variant="image" style="width: 100%; height: 300px" />
              </template>
            </el-skeleton>
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h2>{{ $t('index.article1.title') }}</h2>
            </div>
            <div class="tips">
              {{
                $t('index.article1.tips1', {
                  number: `${formatNumber(platformData?.questionTotal)}`,
                })
              }}
            </div>
            <div class="tips">
              {{ $t('index.article1.tips2') }}
            </div>
            <div class="tips">
              {{ $t('index.article1.tips3') }}
            </div>
            <NuxtLink class="get_more" :to="localePath('/practice')">
              <div class="font">{{ $t('index.article1.btn_font') }}</div>
              <div class="icon">
                <img src="/img/home/yellow_arrow_right.svg" :alt="$t('index.article1.btn_img_alt')" />
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="one_article_img" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <el-image v-show="isLoad2" :src="home2" :alt="$t('index.article2.title')" @load="onLoad2" />
            <el-skeleton v-show="!isLoad2" style="width: 100%" animated>
              <template #template>
                <el-skeleton-item variant="image" style="width: 100%; height: 300px" />
              </template>
            </el-skeleton>
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h2>{{ $t('index.article2.title') }}</h2>
            </div>
            <div class="tips">
              {{ $t('index.article2.tips1') }}
            </div>
            <div class="tips">
              {{ $t('index.article2.tips2') }}
            </div>
            <div class="tips">
              {{ $t('index.article2.tips3') }}
            </div>
            <NuxtLink class="get_more" :to="localePath('/correction')">
              <div class="font">{{ $t('index.article2.btn_font') }}</div>
              <div class="icon">
                <img src="/img/home/yellow_arrow_right.svg" :alt="$t('index.article2.btn_img_alt')" />
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="one_img_article" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <el-image v-show="isLoad3" :src="home3" :alt="$t('index.article3.title')" @load="onLoad3" />
            <el-skeleton v-show="!isLoad3" style="width: 100%" animated>
              <template #template>
                <el-skeleton-item variant="image" style="width: 100%; height: 300px" />
              </template>
            </el-skeleton>
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h2>{{ $t('index.article3.title') }}</h2>
            </div>
            <div class="tips">
              {{ $t('index.article3.tips1') }}
            </div>
            <div class="tips">
              {{ $t('index.article3.tips2') }}
            </div>
            <div class="tips">
              {{ $t('index.article3.tips3') }}
            </div>
            <NuxtLink class="get_more" :to="localePath('/mock-exam')">
              <div class="font">{{ $t('index.article3.btn_font') }}</div>
              <div class="icon">
                <img src="/img/home/yellow_arrow_right.svg" :alt="$t('index.article3.btn_img_alt')" />
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="one_article_img" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <el-image v-show="isLoad4" :src="home4" :alt="$t('index.article4.title')" @load="onLoad4" />
            <el-skeleton v-show="!isLoad4" style="width: 100%" animated>
              <template #template>
                <el-skeleton-item variant="image" style="width: 100%; height: 300px" />
              </template>
            </el-skeleton>
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h2>{{ $t('index.article4.title') }}</h2>
            </div>
            <div class="tips">
              {{ $t('index.article4.tips1') }}
            </div>
            <div class="tips">
              {{ $t('index.article4.tips2') }}
            </div>
            <div class="tips">
              {{ $t('index.article4.tips3') }}
            </div>
            <NuxtLink class="get_more" :to="localePath('/courses')">
              <div class="font">{{ $t('index.article4.btn_font') }}</div>
              <div class="icon">
                <img src="/img/home/yellow_arrow_right.svg" :alt="$t('index.article4.btn_img_alt')" />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="review_wrapper">
      <div class="review">
        <div class="review_title">
          {{ $t('index.bigtitle2') }}
        </div>
        <div class="review_scroll_out">
          <div v-if="userPingLunResponse && userPingLunResponse.length" class="review_scroll_out_it">
            <Carousel :itemsToShow="4" :autoplay="2000" :wrap-around="true" :pauseAutoplayOnHover="true">
              <Slide v-for="(item, index) in userPingLunResponse" :key="index" class="two_card_out">
                <div class="width100">
                  <div class="one_card">
                    <div class="one_card_top">
                      <div class="one_card_top_left">
                        <div class="icon_touxiang">
                          <img :src="staticUrlGet(item[0].avatar)" :alt="item[0].nickname" />
                        </div>
                        <div class="name_out">
                          <div class="name">{{ item[0].nickname }}</div>
                          <div class="country">{{ item[0].country }}</div>
                        </div>
                      </div>
                      <div class="one_card_top_right">
                        <el-rate class="custom_rate" v-model="item[0].rate" allow-half disabled size="large" />
                      </div>
                    </div>
                    <div class="one_card_font">{{ item[0].content }}</div>
                  </div>
                  <div class="one_card" style="margin-top: 24px">
                    <div class="one_card_top">
                      <div class="one_card_top_left">
                        <div class="icon_touxiang">
                          <img :src="staticUrlGet(item[1].avatar)" :alt="item[1].nickname" />
                        </div>
                        <div class="name_out">
                          <div class="name">{{ item[1].nickname }}</div>
                          <div class="country">{{ item[1].country }}</div>
                        </div>
                      </div>
                      <div class="one_card_top_right">
                        <el-rate v-model="item[1].rate" allow-half disabled size="large" />
                      </div>
                    </div>
                    <div class="one_card_font">{{ item[1].content }}</div>
                  </div>
                </div>
              </Slide>
            </Carousel>
          </div>
          <div v-else class="review_scroll_out_it min_height350">
            <Carousel :itemsToShow="4" :autoplay="0" :wrap-around="true" :pauseAutoplayOnHover="true">
              <Slide v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]" :key="index" class="two_card_out">
                <div class="width100">
                  <div class="one_card" style="height: 250px">
                    <el-skeleton :rows="4" animated />
                  </div>
                  <div class="one_card" style="margin-top: 24px; height: 250px">
                    <el-skeleton :rows="4" animated />
                  </div>
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
    <div>
      <v-slogen />
    </div>
    <div>
      <v-subscribe />
    </div>
  </div>
</template>