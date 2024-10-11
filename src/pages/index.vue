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
useSeoMeta({
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
const isLoad5 = ref(false);
const onLoad5 = () => {
  isLoad5.value = true;
};

// 引入cdn图片
const bannerImg = `${cdn}/store/portal/home/banner.svg`;
const home1 = `${cdn}/store/portal/home/home1.png`;
const home2 = `${cdn}/store/portal/home/home3.png`;
const home3 = `${cdn}/store/portal/home/home2.png`;
const home4 = `${cdn}/store/portal/home/home55.png`;
const home5 = `${cdn}/store/portal/home/home4.png`;
const yellow_check_icon = `${cdn}/store/portal/home/yellow_check_icon.svg`;
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
    <div class="three_nums_wrapper">
      <div class="three_nums_out">
        <div class="title1" data-aos="fade-up" data-aos-duration="1000">
          <div>{{ $t('index.The_Best_Platform') }}</div>
        </div>
        <div class="three_nums" data-aos="fade-up" data-aos-duration="1000">
          <div class="one_nums">
            <div class="one_nums_top">400,000+</div>
            <div class="one_nums_bottom">{{ $t('index.Tu') }}</div>
          </div>
          <div class="one_nums">
            <div class="one_nums_top">18,000+</div>
            <div class="one_nums_bottom">{{ $t('index.questions') }}</div>
          </div>
          <div class="one_nums">
            <div class="one_nums_top">10,000+</div>
            <div class="one_nums_bottom">{{ $t('index.mockTest') }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="part2_wrapper">
      <div class="part2">
        <div class="one_img_article" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <img loading="lazy" :src="home1" :alt="$t('index.article1.title')" @load="onLoad" />
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h2>{{ $t('index.article1.title') }}</h2>
            </div>
            <div class="tips">
              <div class="tips_icon">
                <img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" />
              </div>
              <span
                v-html="
                  $t('index.article1.tips1', {
                    number: `<span class='yellow'>${formatNumber(platformData?.questionTotal)}</span>`,
                  })
                "
              ></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article1.tips2')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article1.tips3')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article1.tips4')"></span>
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
            <img loading="lazy" :src="home2" :alt="$t('index.article2.title')" @load="onLoad2" />
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h2>{{ $t('index.article2.title') }}</h2>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article2.tips1')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article2.tips2')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article2.tips3')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article2.tips4')"></span>
            </div>
            <NuxtLink class="get_more" :to="localePath('/mock-exam')">
              <div class="font">{{ $t('index.article2.btn_font') }}</div>
              <div class="icon">
                <img src="/img/home/yellow_arrow_right.svg" :alt="$t('index.article2.btn_img_alt')" />
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="one_img_article" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <img loading="lazy" :src="home3" :alt="$t('index.article3.title')" @load="onLoad3" />
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h2>{{ $t('index.article3.title') }}</h2>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article3.tips1')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article3.tips2')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article3.tips3')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article3.tips4')"></span>
            </div>
            <NuxtLink class="get_more" :to="localePath('/writing-ai-correction')">
              <div class="font">{{ $t('index.article3.btn_font') }}</div>
              <div class="icon">
                <img src="/img/home/yellow_arrow_right.svg" :alt="$t('index.article3.btn_img_alt')" />
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="one_article_img" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <img loading="lazy" :src="home4" :alt="$t('index.article4.title')" @load="onLoad4" placeholder />
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
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article4.tips1')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article4.tips2')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article4.tips3')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article4.tips4')"></span>
            </div>
            <NuxtLink class="get_more" :to="localePath('/speaking-ai-correction')">
              <div class="font">{{ $t('index.article4.btn_font') }}</div>
              <div class="icon">
                <img src="/img/home/yellow_arrow_right.svg" :alt="$t('index.article4.btn_img_alt')" />
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="one_img_article" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <el-image v-show="isLoad5" :src="home5" :alt="$t('index.article3.title')" @load="onLoad5" />
            <el-skeleton v-show="!isLoad5" style="width: 100%" animated>
              <template #template>
                <el-skeleton-item variant="image" style="width: 100%; height: 300px" />
              </template>
            </el-skeleton>
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h2>{{ $t('index.article5.title') }}</h2>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article5.tips1')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article5.tips2')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article5.tips3')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article5.tips4')"></span>
            </div>
            <NuxtLink class="get_more" :to="localePath('/courses')">
              <div class="font">{{ $t('index.article5.btn_font') }}</div>
              <div class="icon">
                <img src="/img/home/yellow_arrow_right.svg" :alt="$t('index.article3.btn_img_alt')" />
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
                          <img loading="lazy" :src="staticUrlGet(item[0].avatar)" :alt="item[0].nickname" />
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
                          <img loading="lazy" :src="staticUrlGet(item[1].avatar)" :alt="item[1].nickname" />
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
<style lang="scss">
.v-header {
  background: #fff4f1 !important;
}
.home {
  .scrolls {
    // border: 1px red solid;
    display: flex;
    align-items: flex-start;
    animation-name: around;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes around {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
}
</style>
<style lang="scss" scoped>
.home {
  margin: 0 auto;
  overflow: hidden;

  .part1_wrapper {
    padding: 0px 30px;
    @media (max-width: 450px) {
      padding: 0px 15px;
    }
    position: relative;
    .bg_handle {
      position: absolute;
      top: 0px;
      left: 0;
      width: 100%;
      height: 808px;
      z-index: -1;
      background: linear-gradient(to bottom, #fff4f1 0%, #fff4f1 100%);
      @media (max-width: 1290px) {
        height: 100%;
        padding-bottom: 40px;
      }
    }

    .part1 {
      max-width: 1200px;
      overflow: hidden;
      // border: 1px red solid;
      margin: 0 auto;
      height: 100%;
      .power_by {
        padding: 5px 15px;
        background: #fddfd7;
        border-radius: 16px;
        font-weight: 600;
        font-size: 16px;
        color: #f66442;
        width: fit-content;
        margin: 0 auto;
        margin-top: 56px;
      }
      .page_title {
        .h_one {
          font-weight: 600;
          font-size: 56px;
          color: #201515;
          h1 {
            text-align: center;
            font-weight: 600;
            font-size: 56px;
            color: #201515;
            padding: 0px;
            margin: 0px;
            @media (max-width: 906px) {
              font-size: 46px;
            }
            @media (max-width: 744px) {
              font-size: 36px;
            }
            @media (max-width: 570px) {
              font-size: 26px;
            }
            @media (max-width: 450px) {
              font-size: 24px;
            }
          }
          :deep(.seo_hack) {
            display: none;
          }
        }
        // .isMobile {
        //   display: none;
        //   @media (max-width: 450px) {
        //     display: block;
        //   }
        // }
        // .isnoMobile {
        //   display: block;
        //   @media (max-width: 450px) {
        //     display: none;
        //   }
        // }
        .animat_wrap {
          text-align: center;
          font-weight: 600;
          font-size: 56px;
          color: #f66442;
          padding: 0px;
          margin: 0px;
          // height: 1em;
          @media (max-width: 906px) {
            font-size: 46px;
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

          .small_title_wrap {
            height: 1em;
            @media (max-width: 570px) {
              height: 0.5em;
            }
            position: relative;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 26px;
            overflow: hidden;
          }
          .one_small_title {
            color: #ff4f00;
            position: absolute;
            // bottom: -1em;
            z-index: 1;
            opacity: 0;
            transform: rotate(10deg);
            transform-origin: left;
            transition: none;
          }

          .current {
            color: #ff4f00;
            position: absolute;
            bottom: -1em;
            z-index: 1;
            opacity: 0;
            transform: rotate(10deg);
            transform-origin: left;
            transition: none;
            bottom: 0.1em;
            opacity: 1;
            transform: none;
            transition: all 500ms cubic-bezier(0.65, 0, 0.35, 1);
          }
          .per {
            color: #ff4f00;
            position: absolute;
            bottom: -1em;
            z-index: 1;
            opacity: 0;
            transform: rotate(10deg);
            transform-origin: left;
            transition: none;
            bottom: 1em;
            opacity: 0;
            transform: rotate(-10deg);
            transition: all 500ms cubic-bezier(0.65, 0, 0.35, 1);
          }
        }
      }
      .two_btn_out {
        clear: both;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        grid-gap: 16px;
        @media (max-width: 730px) {
          flex-direction: column;
        }

        .yellow {
          background: #f66442;
          display: flex;
          justify-content: center;
          align-items: center;
          grid-column-gap: 8px;
          img {
            width: 26px;
            height: 26px;
          }
        }
        .white {
          border: 1px solid #201515;
          color: #201515;
        }
      }
      .all_stu_nums {
        font-weight: 400;
        font-size: 16px;
        color: #201515;
        text-align: center;
        margin-top: 40px;
        :deep(.yellow) {
          color: #f66442;
        }
      }
      .big_img_out {
        padding: 0px 60px;
        margin-top: 40px;
        @media (max-width: 730px) {
          padding: 0px 0px;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        .big_img {
          max-width: 1080px;
          // width: calc(100% - 80px);
          // border: 1px red solid;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
  .three_nums_wrapper {
    background: #f2f4f6;
    padding: 100px 0px;
    margin-top: 96px;
    margin-bottom: 120px;
    @media (max-width: 450px) {
      margin-bottom: 10px;
    }
    .three_nums_out {
      max-width: 1200px;
      @media (max-width: 1200px) {
        padding: 0px 30px;
      }
      margin: 0 auto;
      .title1 {
        div {
          font-weight: 500;
          font-size: 40px;
          color: #201515;
          text-align: center;
          padding: 0px;
          margin: 0px;
          @media (max-width: 906px) {
            font-size: 36px;
          }
          @media (max-width: 744px) {
            font-size: 36px;
          }
          @media (max-width: 570px) {
            font-size: 30px;
          }
          @media (max-width: 450px) {
            font-size: 23px;
          }
          @media (max-width: 450px) {
            font-size: 22px;
          }
        }
      }
      .three_nums {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-column-gap: 100px;
        grid-row-gap: 40px;
        flex-wrap: wrap;
        margin-top: 64px;
        @media (max-width: 450px) {
          grid-column-gap: 16px;
        }
        .one_nums {
          text-align: center;
          .one_nums_top {
            font-weight: 600;
            font-size: 48px;
            color: #f66442;
            @media (max-width: 450px) {
              font-size: 23px;
            }
          }
          .one_nums_bottom {
            font-weight: 400;
            font-size: 20px;
            color: #201515;
            @media (max-width: 450px) {
              font-size: 18px;
            }
          }
        }
      }
    }
  }

  .part2_wrapper {
    padding: 0px 30px;
    @media (max-width: 450px) {
      padding: 0px 15px;
    }
    box-sizing: border-box;
    .part2 {
      max-width: 1200px;
      // border: 1px blue solid;
      margin: 0 auto;

      .one_img_article {
        // border:1px red solid;
        display: grid;
        margin-bottom: 120px;
        @media (max-width: 450px) {
          margin-bottom: 30px;
          grid-row-gap: 0px;
        }
        grid-template-columns: 1fr 0.75fr;
        grid-column-gap: 40px;
        grid-row-gap: 40px;
        grid-template-areas: 'img_out  article_out';
        @media (max-width: 926px) {
          grid-template-columns: 1fr;
          grid-template-areas:
            'img_out'
            'article_out';
        }
        .img_out {
          grid-area: img_out;
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          :deep(.el-image) {
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
          }
          img {
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
            width: 100%;
            height: auto;
            border-radius: 16px;
          }
        }
        .article_out {
          // border: 1px red solid;
          grid-area: article_out;
          padding-top: 24px;
          @media (max-width: 926px) {
            padding-top: 0px;
          }
          .article_out_title {
            h2 {
              font-weight: 500;
              font-size: 32px;
              color: #201515;
              margin-top: 0px;
              margin-bottom: 0px;
              @media (max-width: 450px) {
                font-size: 22px;
              }
            }
            h4 {
              font-weight: 500;
              font-size: 32px;
              color: #201515;
              margin-top: 0px;
              margin-bottom: 0px;
              @media (max-width: 450px) {
                font-size: 22px;
              }
            }
          }
          .tips {
            font-weight: 400;
            font-size: 18px;
            color: #403f3e;
            margin-top: 24px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            grid-gap: 16px;
            .tips_icon {
              width: 18px;
              height: 18px;
              position: relative;
              top: 2px;
              flex-shrink: 0;
              img {
                width: 100%;
                height: 100%;
              }
            }
            ::v-deep(.yellow) {
              font-weight: 650;
            }
            @media (max-width: 450px) {
              font-size: 16px;
            }
          }
          .get_more {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex: 1;
            // border: 1px red solid;
            margin-top: 34px;
            grid-column-gap: 8px;
            // @media (max-width: 926px) {
            //   justify-content: center;
            // }
            cursor: pointer;
            .font {
              font-weight: 500;
              font-size: 20px;
              color: #f66442;
            }
            .icon {
              width: 24px;
              height: 24px;
            }
            &:hover {
              .font {
                border-bottom: 1px #f66442 solid;
              }

              .icon {
                transform: translateX(8px);
                transition: all 0.2s;
              }
            }
          }
        }
      }
      .one_article_img {
        display: grid;
        margin-bottom: 120px;
        @media (max-width: 450px) {
          margin-bottom: 30px;
          grid-row-gap: 0px;
        }
        grid-template-columns: 0.75fr 1fr;
        grid-column-gap: 40px;
        grid-row-gap: 40px;
        grid-template-areas: ' article_out img_out';
        @media (max-width: 926px) {
          grid-template-columns: 1fr;
          grid-template-areas:
            'img_out'
            'article_out';
        }
        .img_out {
          grid-area: img_out;
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          // border: 1px red solid;
          :deep(.el-image) {
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
          }
          img {
            width: 100%;
            height: auto;
            border-radius: 16px;
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
          }
        }
        .article_out {
          // border: 1px blue solid;
          grid-area: article_out;
          padding-top: 24px;
          @media (max-width: 926px) {
            padding-top: 0px;
          }
          .article_out_title {
            h2 {
              font-weight: 500;
              font-size: 32px;
              color: #201515;
              margin-top: 0px;
              margin-bottom: 0px;
              @media (max-width: 450px) {
                font-size: 22px;
              }
            }
            h4 {
              font-weight: 500;
              font-size: 32px;
              color: #201515;
              margin-top: 0px;
              margin-bottom: 0px;
              @media (max-width: 450px) {
                font-size: 22px;
              }
            }
          }
          .tips {
            font-weight: 400;
            font-size: 18px;
            color: #403f3e;
            margin-top: 24px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            grid-gap: 16px;
            .tips_icon {
              width: 18px;
              height: 18px;
              position: relative;
              top: 2px;
              flex-shrink: 0;
              img {
                width: 100%;
                height: 100%;
              }
            }
            ::v-deep(.yellow) {
              font-weight: 650;
            }
            @media (max-width: 450px) {
              font-size: 16px;
            }
          }
          .get_more {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex: 1;
            // border: 1px red solid;
            margin-top: 34px;
            grid-column-gap: 8px;
            // @media (max-width: 926px) {
            //   justify-content: center;
            // }
            cursor: pointer;
            .font {
              font-weight: 500;
              font-size: 20px;
              color: #f66442;
            }
            .icon {
              width: 24px;
              height: 24px;
            }
            &:hover {
              .font {
                border-bottom: 1px #f66442 solid;
              }
              .icon {
                transform: translateX(8px);
                transition: all 0.2s;
              }
            }
          }
        }
      }
    }
  }
  .part3_wrapper {
    overflow: hidden;
    background: #f2f4f6;
    padding-bottom: 72px;
    @media (max-width: 450px) {
      padding-bottom: 40px;
    }
    .part3 {
      .title {
        font-weight: 500;
        font-size: 40px;
        color: #201515;
        text-align: center;
        margin-top: 100px;
        @media (max-width: 450px) {
          font-size: 23px;
        }
      }
      .user_nums_out {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-column-gap: 24px;
        margin-top: 40px;

        @media (max-width: 450px) {
          flex-wrap: wrap;
          grid-column-gap: 12px;
          grid-row-gap: 12px;
        }

        .one_num {
          padding: 4px 32px;
          @media (max-width: 450px) {
            padding: 4px 16px;
          }
          background: #ffffff;
          border-radius: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          grid-column-gap: 16px;
          .bigger_num {
            font-weight: 500;
            font-size: 32px;
            color: #201515;
            @media (max-width: 450px) {
              font-size: 22px;
            }
          }
          .small_font {
            font-weight: 400;
            font-size: 18px;
            color: #201515;
            @media (max-width: 450px) {
              font-size: 16px;
            }
          }
        }
      }
      .btn_out {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        .yellow {
          background: #f66442;
        }
      }

      .score_scroll_out {
        overflow: hidden;
        margin-top: 40px;
        position: relative;
        .one_score {
          width: 312px !important;
          @media (max-width: 450px) {
            width: 176px !important;
            margin-left: 12px;
          }
          box-sizing: border-box;
          height: fit-content;
          // border: 1px blue solid;
          margin-left: 24px;
          background: #ffffff;
          box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          // height: 100px;
          .one_score_content {
            padding: 24px;
            flex: 1;

            .one_score_head {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              grid-column-gap: 16px;
              .user_icon {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                overflow: hidden;
                flex-shrink: 0;
                @media (max-width: 450px) {
                  width: 28px;
                  height: 28px;
                }
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .user_detail {
                .user_name {
                  font-weight: 500;
                  font-size: 16px;
                  color: #201515;
                  text-align: left;
                  @media (max-width: 450px) {
                    font-size: 12px;
                  }
                }
                .user_country {
                  font-weight: 400;
                  font-size: 14px;
                  color: #403f3e;
                  text-align: left;
                  @media (max-width: 450px) {
                    font-size: 10px;
                  }
                }
              }
            }
            .one_score_content_img {
              width: auto;
              margin-top: 17px;
              border-radius: 8px;
              border: 2px solid #e9e9e9;
              img {
                width: 100%;
                height: auto;
              }
            }
          }
        }
      }
    }
  }
  .review_wrapper {
    background: #f66442;
    overflow-y: hidden;

    .review {
      padding-bottom: 100px;
      .review_title {
        margin-top: 100px;
        font-weight: 500;
        font-size: 40px;
        color: #ffffff;
        padding: 0 10px;
        text-align: center;
        margin-bottom: 64px;
        @media (max-width: 450px) {
          font-size: 23px;
          margin-top: 50px;
          margin-bottom: 34px;
        }
      }
      .review_scroll_out {
        // padding: 0 20px;

        scrollbar-width: none;
        .review_scroll_out_it {
          overflow: hidden;
          .two_card_out {
            // border: 1px red solid;
            margin-left: 12px;
            width: 432px !important;
            @media (max-width: 450px) {
              width: 366px !important;
            }

            display: flex;
            justify-content: center;
            align-items: flex-start;
            .width100 {
              width: 100%;
            }
          }
          .one_card {
            padding: 24px;
            background: #ffffff;
            border-radius: 8px;
            width: 100%;
            .one_card_top {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .one_card_top_left {
                display: flex;
                justify-content: flex-start;
                grid-column-gap: 16px;
                align-items: center;
                .icon_touxiang {
                  width: 48px;
                  height: 48px;
                  flex-shrink: 0;
                  border-radius: 50%;
                  overflow: hidden;
                  @media (max-width: 450px) {
                    width: 28px;
                    height: 28px;
                  }
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                .name_out {
                  .name {
                    font-weight: 500;
                    font-size: 16px;
                    color: #201515;
                    text-align: left;
                    @media (max-width: 450px) {
                      font-size: 14px;
                    }
                  }
                  .country {
                    margin-top: 4px;
                    font-weight: 400;
                    font-size: 14px;
                    color: #403f3e;
                    text-align: left;
                    @media (max-width: 450px) {
                      font-size: 10px;
                    }
                  }
                }
              }
              .one_card_top_right {
                :deep(.el-rate .el-rate__icon) {
                  font-size: 28px;
                }
                :deep(.el-icon) {
                  width: 15px;
                }
                // .custom_rate {
                //   .el-rate__icon {
                //     margin-right: 100px !important;
                //   }
                // }
                // :deep(.el-rate) {
                //   --el-rate-icon-margin: 0px;
                // }
              }
            }
            .one_card_font {
              font-weight: 400;
              font-size: 18px;
              color: #201515;
              margin-top: 24px;
              text-align: left;
              @media (max-width: 450px) {
                font-size: 16px;
              }
            }
          }
        }
        .min_height350 {
          height: 550px;
        }
      }
    }
  }
  @keyframes scroll {
    0% {
      transform: translateX(0); /* 初始位置 */
    }
    100% {
      transform: translateX(-100%); /* 向上滚动 100% 的高度 */
    }
  }
}
</style>
