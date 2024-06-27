<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { staticUrlGet, urlGet, domain } from '@/utils';
import { useStore } from '@/store';
useServerSeoMeta({
  title: t('pricing.seometa.title'),
  description: t('pricing.seometa.description'),
  keywords: t('pricing.seometa.keywords'),
});
useHead({
  link: [{ rel: 'canonical', href: `https://www.${domain}/pricing` }],
  link: [{ rel: 'alternate', href: `https://www.detpractice.com/pricing`, hreflang: 'en-GB' }],
});
const store = useStore();
const user = computed(() => store.user);
const isVip = computed(() => store.isVip);
const localePath = useLocalePath();
const { data: buyData = [] } = (await useFetch(`${api}/common/portalData?type=2`, {
  server: false,
  lazy: true,
  transform: (data: any) => {
    return data.map((d: any) => ({
      ...d,
      data: {
        ...JSON.parse(d.data),
        nickname: JSON.parse(d.data).nickname.replace(/(.{1}).*(.{1})/, '$1***$2'),
      },
    }));
  },
})) as any;

const aqList = ref([
  {
    name: t('pricing.aqList[0].name'),
    content: t('pricing.aqList[0].content'),
    open: false,
  },
  {
    name: t('pricing.aqList[1].name'),
    content: t('pricing.aqList[1].content'),
    open: false,
  },
  {
    name: t('pricing.aqList[2].name'),
    content: t('pricing.aqList[2].content'),
    open: false,
  },
  {
    name: t('pricing.aqList[3].name'),
    content: t('pricing.aqList[3].content'),
    open: false,
  },
  {
    name: t('pricing.aqList[4].name'),
    content: t('pricing.aqList[4].content'),
    open: false,
  },
  {
    name: t('pricing.aqList[5].name'),
    content: t('pricing.aqList[5].content'),
    open: false,
  },
  {
    name: t('pricing.aqList[6].name'),
    content: `${t('pricing.aqList[6].content1')}${t('pricing.aqList[6].content2')}${t('pricing.aqList[6].content3')}${t(
      'pricing.aqList[6].content4',
    )}`,
    open: false,
  },
]) as any;
// const { data: aqlistjk } = (await useFetch(`${api}/common/article`, {
//   server: true,
//   query: {
//     type: "3",
//   },
// })) as any;
// aqList.value = aqlistjk.value.data;
const memberShipVipPriceShow = ref(false);
const { data: vipsData } = (await useFetch(`${api}/common/vips`, {
  server: false,
  lazy: true,
  transform: ({ freeNum, correct, exam, speak, write, data: vips }: any) => {
    const membershipArr = [] as any;
    const moreServiceArr = [] as any;
    vips.forEach((item: any) => {
      if (item.type === '1') {
        if (item.vipPrice !== item.price) {
          if (Number(item.vipPrice) !== 0) {
            memberShipVipPriceShow.value = true;
          }
        }
        if (item.day === 0) {
          item.qlList = [
            {
              name: 1,
              desc: t('pricing.qlList.day0.name1Desc'),
              tips: '',
            },
            // {
            //   name: 2,
            //   desc: `<span class='bigger'>$${correct.price / 100} / 5</span> Correction Services`,
            //   tips: '',
            // },
            // {
            //   name: 3,
            //   desc: `<span class='bigger'>$${exam.price / 100} / 1 </span> Mock Exam`,
            //   tips: '',
            // },
            // {
            //   name: 4,
            //   desc: `<span class='bigger'>$${speak.price / 100}</span> / Speaking Guide`,
            //   tips: '',
            //   style: 'font-weight: 500;',
            // },
            // {
            //   name: 5,
            //   desc: `<span class='bigger'>$${write.price / 100}</span> / Writing Guide`,
            //   tips: '',
            //   style: 'font-weight: 500;',
            // },
          ];
        }
        if (item.day === 7) {
          item.qlList = [
            {
              name: 1,
              desc: t('pricing.qlList.day7.name1Desc'),
              tips: '',
              style: 'font-weight: 500;',
            },
            {
              name: 2,
              desc: t('pricing.qlList.day7.name2Desc', {
                correctNum: item.correctNum,
              }),
              style: 'font-weight: 500;',
              tips: t('pricing.qlList.day7.name2Tips'),
            },
            // {
            //   name: 3,
            //   desc: `<span class='bigger'>$${correct.vipPrice / 100} / 5</span> Correction Services`,
            //   style: 'font-weight: 500;',
            //   tips: 'Exclusive Discount',
            // },
            {
              name: 4,
              desc: t('pricing.qlList.day7.name4Desc', {
                examNum: item.examNum,
              }),
              tips: '',
            },
            // {
            //   name: 5,
            //   desc: `<span class='bigger'>$${exam.vipPrice / 100} / 1</span> Mock Exam`,
            //   tips: '',
            // },
            // {
            //   name: 6,
            //   desc: `<span class='bigger'>$${speak.vipPrice / 100}</span> / Speaking Guide`,
            //   tips: '',
            //   style: 'font-weight: 500;',
            // },
            // {
            //   name: 7,
            //   desc: `<span class='bigger'>$${write.vipPrice / 100}</span> / Writing Guide`,
            //   tips: '',
            //   style: 'font-weight: 500;',
            // },
          ];
        }
        if (item.day === 15) {
          item.qlList = [
            {
              name: 1,
              desc: t('pricing.qlList.day15.name1Desc'),
              tips: '',
            },
            {
              name: 2,
              desc: t('pricing.qlList.day15.name2Desc', {
                correctNum: item.correctNum,
              }),
              style: 'font-weight: 500;',
              tips: t('pricing.qlList.day15.name2Tips'),
            },
            // {
            //   name: 3,
            //   desc: `<span class='bigger'>$${correct.vipPrice / 100} / 5</span> Correction Services`,
            //   style: 'font-weight: 500;',
            //   tips: 'Exclusive Discount',
            // },
            {
              name: 4,
              desc: t('pricing.qlList.day15.name4Desc', {
                examNum: item.examNum,
              }),
              tips: '',
            },
            // {
            //   name: 5,
            //   desc: `<span class='bigger'>$${exam.vipPrice / 100} / 1</span> Mock Exam`,
            //   tips: '',
            // },
            // {
            //   name: 6,
            //   desc: `<span class='bigger'>$${speak.vipPrice / 100}</span> / Speaking Guide`,
            //   tips: '',
            //   style: 'font-weight: 500;',
            // },
            // {
            //   name: 7,
            //   desc: `<span class='bigger'>$${write.vipPrice / 100}</span> / Writing Guide`,
            //   tips: '',
            //   style: 'font-weight: 500;',
            // },
          ];
        }
        if (item.day === 30) {
          item.qlList = [
            {
              name: 1,
              desc: t('pricing.qlList.day30.name1Desc'),
              tips: '',
              style: 'font-weight: 500;',
            },
            {
              name: 2,
              desc: t('pricing.qlList.day30.name2Desc', {
                correctNum: item.correctNum,
              }),
              style: 'font-weight: 500;',
              tips: t('pricing.qlList.day30.name2Tips'),
            },
            // {
            //   name: 3,
            //   desc: `<span class='bigger'>$${correct.vipPrice / 100} / 5</span> Correction Services`,
            //   style: 'font-weight: 500;',
            //   tips: 'Exclusive Discount',
            // },
            {
              name: 4,
              desc: t('pricing.qlList.day30.name4Desc', {
                examNum: item.examNum,
              }),
              tips: '',
            },
            // {
            //   name: 5,
            //   desc: `<span class='bigger'>$${exam.vipPrice / 100} / 1</span> Mock Exam`,
            //   tips: '',
            // },
            // {
            //   name: 6,
            //   desc: `<span class='bigger'>$${speak.vipPrice / 100}</span> / Speaking Guide`,
            //   tips: '',
            //   style: 'font-weight: 500;',
            // },
            // {
            //   name: 7,
            //   desc: `<span class='bigger'>$${write.vipPrice / 100}</span> / Writing Guide`,
            //   tips: '',
            //   style: 'font-weight: 500;',
            // },
          ];
        }
        membershipArr.push(item);
      } else {
        moreServiceArr.push(item);
      }
    });
    return { membershipArr, moreServiceArr };
  },
})) as any;
const switchType = ref('1');
const changeSwitchType = (type: string) => {
  switchType.value = type;
};

const CurrentMembershipId = ref(0);
const changeCurrentMembershipId = (id: number) => {
  CurrentMembershipId.value = id;
};
const buyMembership = (id: number) => {
  store.stripePay({ vipId: id });
};

const openOrCloseOneQuestion = (item: any) => {
  item.open = !item.open;
};

const contaceUsList = ref([
  {
    type: '1',
    icon: '/img/pricing/online.svg',
    font: t('pricing.contaceUsList.type1.font'),
    tip: t('pricing.contaceUsList.type1.tip'),
    btn: t('pricing.contaceUsList.type1.btn'),
  },
  {
    type: '2',
    icon: '/img/pricing/email.svg',
    font: t('pricing.contaceUsList.type2.font'),
    tip: t('pricing.contaceUsList.type2.tip'),
    btn: t('pricing.contaceUsList.type2.btn'),
  },
  {
    type: '3',
    icon: '/img/pricing/message.svg',
    font: t('pricing.contaceUsList.type3.font'),
    tip: t('pricing.contaceUsList.type3.tip'),
    btn: t('pricing.contaceUsList.type3.btn'),
  },
]);
const membershipUnchanging = ref([
  {
    name: '1',
    desc: t('pricing.membershipUnchanging[0]'),
    tips: '',
  },
  {
    name: '2',
    desc: t('pricing.membershipUnchanging[1]'),
    tips: '',
  },
  {
    name: '3',
    desc: t('pricing.membershipUnchanging[2]'),
    tips: '',
  },
  {
    name: '4',
    desc: t('pricing.membershipUnchanging[3]'),
    tips: '',
  },
  {
    name: '5',
    desc: t('pricing.membershipUnchanging[4]'),
    tips: '',
  },
  {
    name: '6',
    desc: t('pricing.membershipUnchanging[5]'),
    tips: '',
  },
]) as any;

// const copy = async (email: any) => {
//   if (navigator.clipboard) {
//     // 尝试使用 Clipboard API
//     try {
//       // 请求剪贴板权限
//       const permission = await navigator.permissions.query({ name: 'clipboard-write' });
//       if (permission.state === 'granted' || permission.state === 'prompt') {
//         await navigator.clipboard.writeText(email);
//         ElMessage.success('Copy successfully');
//       } else {
//         throw new Error('Clipboard permission denied');
//       }
//     } catch (err) {
//       ElMessage.error('Failed to copy text: ' + err);
//     }
//   } else if (document.execCommand) {
//     // 尝试使用 document.execCommand
//     const textarea = document.createElement('textarea');
//     textarea.value = email;
//     document.body.appendChild(textarea);
//     textarea.select();
//     try {
//       document.execCommand('copy');
//       ElMessage.success('Copy successfully');
//     } catch (err) {
//       ElMessage.error('Failed to copy text: ' + err);
//     } finally {
//       document.body.removeChild(textarea);
//     }
//   } else {
//     ElMessage.error('Your browser does not support copying text to clipboard.');
//   }
// };
const copy = async (text: any) => {
  if (navigator.clipboard) {
    // 尝试使用 Clipboard API
    try {
      await navigator.clipboard.writeText(text);
      ElMessage.success('Copy successfully');
    } catch (err) {
      ElMessage.error('Failed to copy text: ' + err);
    }
  } else if (document.execCommand) {
    // 尝试使用 document.execCommand
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      // console.log('Text copied to clipboard');
      ElMessage.success('Copy successfully');
    } catch (err) {
      // console.error('Failed to copy text: ' + err);
      ElMessage.error('Failed to copy text: ' + err);
    } finally {
      document.body.removeChild(textarea);
    }
  } else {
    ElMessage.error('Your browser does not support copying text to clipboard.');
  }
};
const openchat = () => {
  (window as any).$crisp.push(['do', 'chat:open']);
};
const formateMinToHour = (min: number) => {
  const hour = Math.floor(min / 60);
  const minute = min % 60;
  if (hour === 0) {
    return `${minute}mins ago`;
  }
  return `${hour}h ${minute}mins ago`;
};
</script>
<template>
  <div class="pricing">
    <div class="part1_wrapper">
      <div class="part1">
        <div class="title1">
          <h1>{{ $t('pricing.pagefont.h1') }}</h1>
        </div>
        <div class="title2">
          <h4>{{ $t('pricing.pagefont.h4') }}</h4>
        </div>
        <div class="switch_out">
          <div @click="changeSwitchType('1')" :class="[switchType === '1' ? 'switch_btn yellow ' : 'switch_btn']">
            {{ $t('pricing.pagefont.switch1') }}
          </div>
          <div @click="changeSwitchType('2')" :class="[switchType === '2' ? 'switch_btn yellow ' : 'switch_btn']">
            {{ $t('pricing.pagefont.switch2') }}
          </div>
        </div>
        <div v-if="switchType === '1'" class="Membership_dom">
          <div
            v-for="(item, index) in vipsData?.membershipArr || []"
            :key="index"
            :class="[item.flag === '1' ? 'one_price box_shadow' : 'one_price currentMembership_no']"
          >
            <div class="title">{{ $t('pricing.pagefont.Most_Popular_Choice') }}</div>
            <div class="card_price">
              <div class="card_price_part1">
                <div class="day">{{ item.tag }}</div>
                <div v-if="Number(item.originalPrice)" :class="`off ${item.flag === '1' ? 'off1' : ''}`">
                  <span
                    >{{
                      $t('pricing.pagefont.off', {
                        off: 100 - ((Number(item.price) / Number(item.originalPrice)) * 100).toFixed(0),
                      })
                    }}
                  </span>
                </div>
              </div>
              <div class="card_price_part2">{{ item.description }}</div>
              <div v-if="memberShipVipPriceShow" class="vip_price_out">
                <div
                  v-if="Number(item.vipPrice) && item.vipPrice !== item.price && Number(item.price) !== 0"
                  class="vip_price_top"
                >
                  <span class="symbol">{{ $t('pricing.pagefont.do') }}</span
                  >{{ item.vipPrice / 100 }}
                </div>
                <div
                  v-if="Number(item.vipPrice) && item.vipPrice !== item.price && Number(item.price) !== 0"
                  class="vip_price_bottom"
                >
                  {{ $t('pricing.pagefont.mp') }}
                </div>
              </div>
              <div class="card_price_part3">
                <!-- <div v-if="isVip" class="big_price"><span class="symbol">$</span>{{ item.vipPrice / 100 }}</div> -->
                <div class="big_price"><span class="symbol">$</span>{{ item.price / 100 }}</div>
                <div v-if="Number(item.originalPrice)" class="small_price">
                  ${{ (item.originalPrice / 100).toFixed(2) }}
                </div>
              </div>
              <div v-if="user.id">
                <div
                  v-if="item.day !== 0"
                  :class="['card_price_buy_btn common_btn_hover_bgColor', item.flag === '1' && 'card_price_buy_btn1']"
                  @click="buyMembership(item.id)"
                >
                  {{ $t('pricing.pagefont.Buy_Now') }}
                  <div class="scroll-line"></div>
                </div>
                <NuxtLink v-else :href="urlGet('/home')" class="card_price_buy_btn try_free">
                  {{ $t('pricing.pagefont.tf') }}
                </NuxtLink>
              </div>
              <div v-else>
                <NuxtLink
                  v-if="item.day !== 0"
                  :class="['card_price_buy_btn common_btn_hover_bgColor', item.flag === '1' && 'card_price_buy_btn1']"
                  :to="localePath(`/login?url=/pricing`)"
                >
                  {{ $t('pricing.pagefont.Buy_Now') }}
                  <div class="scroll-line"></div>
                </NuxtLink>
                <NuxtLink v-else class="card_price_buy_btn try_free" :to="localePath(`/login?url=/pricing`)">
                  {{ $t('pricing.pagefont.tf') }}
                </NuxtLink>
              </div>

              <div class="card_price_qllist">
                <div v-for="(itemin, indexin) in item.qlList" :key="index * 10 + indexin" class="one_ql">
                  <div class="icon">
                    <img src="/img/pricing/check.svg" :alt="$t('pricing.pagefont.check_icon')" />
                  </div>
                  <div class="font">
                    <div v-html="itemin.desc"></div>
                  </div>
                  <div v-if="itemin.tips" class="tips">
                    <el-tooltip :content="itemin.tips" placement="right-start" effect="light">
                      <img src="/img/pricing/tip.svg" :alt="$t('pricing.pagefont.tip_icon')" />
                    </el-tooltip>
                  </div>
                </div>
              </div>
              <div class="card_price_qllist" style="margin-top: 16px">
                <div v-for="(itemuc, indexin) in membershipUnchanging" :key="itemuc.name" class="one_ql">
                  <div class="icon">
                    <img src="/img/pricing/check.svg" :alt="$t('pricing.pagefont.check_icon')" />
                  </div>
                  <div class="font" :style="itemuc?.style">
                    <!-- <span class="bigger">30 days</span> -->
                    {{ itemuc.desc }}
                  </div>
                  <div v-if="itemuc.tips" class="tips">
                    <el-tooltip :content="itemuc.tips" placement="right-start" effect="light">
                      <img src="/img/pricing/tip.svg" :alt="$t('pricing.pagefont.tip_icon')" />
                    </el-tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!vipsData?.membershipArr" class="no-load">
            <el-skeleton :rows="15" animated />
          </div>
          <div v-if="!vipsData?.membershipArr" class="no-load">
            <el-skeleton :rows="15" animated />
          </div>
          <div v-if="!vipsData?.membershipArr" class="no-load">
            <el-skeleton :rows="15" animated />
          </div>
          <div v-if="!vipsData?.membershipArr" class="no-load">
            <el-skeleton :rows="15" animated />
          </div>
        </div>
        <div v-if="switchType === '2'" class="Service_dom">
          <div
            v-for="(item, index) in vipsData?.moreServiceArr || []"
            :key="index"
            :class="[item.id === CurrentMembershipId ? 'one_price' : 'one_price currentMembership_no']"
            @click="changeCurrentMembershipId(item.id)"
          >
            <div class="title">{{ $t('pricing.pagefont.mpc') }}</div>
            <div class="card_price">
              <div class="card_price_part1">{{ item.tag }}</div>
              <div class="card_price_part2">
                {{ item.description }}
              </div>

              <div :class="[!isVip ? 'card_price_part4 min_heighthack' : 'card_price_part4 min_heighthack2']">
                <div v-if="!isVip && item.day !== 7" class="your_price">{{ $t('pricing.pagefont.your_price') }}</div>
                <div class="off_price">
                  <span class="small">{{ $t('pricing.pagefont.do') }}</span
                  >{{ (item.price / 100).toFixed(2) }}
                </div>
                <!-- <div class="old_price">${{ (item.originalPrice / 100).toFixed(2) }}</div> -->
                <div class="no_member_font" v-if="item.day !== 7">{{ $t('pricing.pagefont.Non_member') }}</div>
              </div>
              <div class="card_price_part3">
                <div class="your_price" v-if="isVip && item.day !== 7">
                  <span>{{ $t('pricing.pagefont.your_price') }}</span>
                </div>
                <div class="member_price">
                  <span v-if="item.vipPrice !== item.price"
                    ><span class="small">{{ $t('pricing.pagefont.do') }}</span
                    >{{ (item.vipPrice / 100).toFixed(2) }}
                  </span>
                </div>
                <div class="member_font">
                  <span v-if="item.vipPrice !== item.price">
                    {{ $t('pricing.pagefont.mp') }}
                  </span>
                </div>
              </div>

              <div v-if="user.id">
                <div class="card_price_buy_btn common_btn_hover_bgColor" @click="buyMembership(item.id)">
                  {{ $t('pricing.pagefont.Buy_Now') }}
                  <div class="scroll-line"></div>
                </div>
              </div>
              <div v-else>
                <NuxtLink class="card_price_buy_btn common_btn_hover_bgColor" :to="localePath(`/login?url=/pricing`)">
                  {{ $t('pricing.pagefont.Buy_Now') }}
                  <div class="scroll-line"></div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div v-if="!vipsData?.moreServiceArr" class="no-load">
            <el-skeleton :rows="9" animated />
          </div>
          <div v-if="!vipsData?.moreServiceArr" class="no-load">
            <el-skeleton :rows="9" animated />
          </div>
          <div v-if="!vipsData?.moreServiceArr" class="no-load">
            <el-skeleton :rows="9" animated />
          </div>
          <div v-if="!vipsData?.moreServiceArr" class="no-load">
            <el-skeleton :rows="9" animated />
          </div>
          <div v-if="!vipsData?.moreServiceArr" class="no-load">
            <el-skeleton :rows="9" animated />
          </div>
        </div>
        <!-- {{buyData}} -->
        <div v-if="buyData && buyData.length" class="scroll_buyed_wrapper">
          <el-carousel height="46px" direction="vertical" :autoplay="true" indicator-position="none">
            <el-carousel-item v-for="item in buyData" :key="item.id" class="scroll_buyed">
              <div class="scroll_buyed_left">
                <div class="icon">
                  <img src="/img/pricing/green_check.svg" :alt="$t('pricing.pagefont.green_check')" />
                </div>
                <div class="name">{{ item.data.nickname }}</div>
                <div class="type">{{ $t('pricing.pagefont.purchased') }}</div>
                <div class="days">{{ item.data.tag }}</div>
              </div>
              <div class="scroll_buyed_mid">
                <div class="flag">
                  <img v-if="item.data.avatar" :src="staticUrlGet(item.data.avatar)" :alt="item.data.country" />
                </div>
                <div class="country_name">{{ item.data.country }}</div>
                <div class="time">{{ formateMinToHour(item.diffMinute) }}</div>
              </div>
            </el-carousel-item>
          </el-carousel>
          <!-- <Carousel
            :itemsToShow="1"
            :autoplay="2000"
            :wrap-around="true"
            :pauseAutoplayOnHover="true"
          >
            <Slide v-for="item in buyData" :key="item.id" class="scroll_buyed">
              <div class="scroll_buyed_left">
                <div class="icon">
                  <img
                    src="/img/pricing/green_check.svg"
                    alt="DET Practice:The best Duolingo English Test Practice platform"
                  />
                </div>
                <div class="name">{{ item.data.nickname }}</div>
                <div class="type">purchased</div>
                <div class="days">{{ item.data.tag }}</div>
              </div>
              <div class="scroll_buyed_mid">
                <div class="flag">
                  <img
                    v-if="item.data.avatar"
                    :src="staticUrlGet(item.data.avatar)"
                    :alt="item.data.country"
                  />
                </div>
                <div class="country_name">{{ item.data.country }}</div>
                <div class="time">{{ formateMinToHour(item.diffMinute) }}</div>
              </div>
            </Slide>
          </Carousel> -->
        </div>

        <div class="bank_card">
          <div class="title">Secure Payment:{{ $t('pricing.pagefont.Secure_Payment') }}</div>
          <div class="img_self">
            <img src="/img/pricing/payment.png" :alt="$t('pricing.pagefont.Secure_Payment')" />
          </div>
        </div>
      </div>
    </div>
    <div class="part2_wrapper">
      <div class="part2">
        <div class="title">{{ $t('pricing.pagefont.faq') }}</div>
        <div class="list_out">
          <div
            v-for="(item, index) in aqList"
            :key="index"
            :class="[item.open ? 'one_question one_question_open' : 'one_question']"
          >
            <div class="header" @click="openOrCloseOneQuestion(item)">
              <div class="icon">
                <img src="/img/pricing/arrow_down.svg" :alt="$t('pricing.pagefont.arrow_down')" />
              </div>
              <div class="qusetion">{{ item.name }}</div>
            </div>
            <div v-if="item.open" class="answer">
              <div class="answer_content" v-html="item.content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part3_wrapper">
      <div class="part3">
        <div class="title">{{ $t('pricing.pagefont.Contact_Us') }}</div>
        <div class="three_out">
          <div v-for="(item, index) in contaceUsList" :key="index" class="one_card">
            <div class="icon">
              <img :src="`${item.icon}`" :alt="$t('pricing.pagefont.alt')" />
            </div>
            <div class="method_font">{{ item.font }}</div>
            <div class="method_tip">{{ item.tip }}</div>
            <div v-if="item.type === '1'" class="btn" @click="openchat">
              {{ item.btn }}
            </div>
            <div v-if="item.type === '2'" class="btn" @click="copy(item.btn)">
              {{ item.btn }}
            </div>
            <NuxtLink v-if="item.type === '3'" class="btn" :to="localePath(`/contact-us`)">
              <div>{{ item.btn }}</div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pricing {
  /* 左右滚动效果 */
  .scroll-line {
    width: 12px;
    height: 132%;
    transform: rotate(30deg);
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    z-index: 3;
    left: 0px;
    top: -16%;
    white-space: nowrap;
    animation-name: around;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes around {
    from {
      margin-left: 0;
    }

    to {
      margin-left: 100%;
    }
  }
}
</style>
<style lang="scss" scoped>
.pricing {
  min-height: 100vh;
  background: linear-gradient(to bottom, #fff4f1 0%, #fff4f1 604px, #ffffff 604px);

  .part1_wrapper {
    padding: 0px 30px;
    @media screen and (max-width: 450px) {
      padding: 0px 15px;
    }
    .part1 {
      max-width: 1200px;
      margin: 0 auto;
      // overflow-x: hidden;
      // overflow-y: auto;

      .title1 {
        overflow: hidden;
        h1 {
          font-weight: 600;
          font-size: 56px;
          color: #201515;
          text-align: center;
          padding: 0px 0px;
          margin: 0px 0px 0px 0px;
          margin-top: 56px;

          @media (max-width: 450px) {
            font-size: 24px;
          }
        }
      }

      .title2 {
        h4 {
          font-weight: 500;
          font-size: 24px;
          color: #201515;
          text-align: center;
          margin: 0px 0px 0px 0px;
          margin-top: 32px;

          @media (max-width: 450px) {
            font-size: 16px;
          }
        }
      }

      .switch_out {
        background: #ffffff;
        border-radius: 22px;
        margin: 0 auto;
        // border: 1px red solid;
        width: fit-content;
        margin-top: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        grid-gap: 16px;
        padding: 4px;

        .switch_btn {
          padding: 8px 32px;
          font-weight: 500;
          font-size: 16px;
          color: #ffffff;
          border-radius: 22px;
          color: #484848;
          cursor: pointer;
          @media (max-width: 450px) {
            font-size: 14px;
          }
        }

        .yellow {
          background: #f66442;
          color: #ffffff;
        }
      }

      .Membership_dom {
        margin-top: 40px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
        grid-gap: 16px;
        @media (max-width: 450px) {
          margin-top: 20px;
        }

        .one_price {
          border-radius: 8px;
          display: grid;
          background: #4c2929;
          padding: 0px 4px;
          padding-bottom: 4px;
          grid-template-rows: 50px 1fr !important;
          @media (max-width: 450px) {
            grid-template-rows: 50px 1fr !important;
          }
          cursor: pointer;

          .title {
            font-weight: 600;
            font-size: 16px;
            color: #ffffff;
            text-align: center;
            flex: 1;
            padding: 9px 0px;
            line-height: 32px;
          }

          .card_price {
            padding: 20px;
            background: #ffffff;
            border-radius: 8px;
            border: 1px solid #e9e9e9;

            .card_price_part1 {
              display: flex;
              justify-content: space-between;
              align-items: center;

              .day {
                font-weight: 600;
                font-size: 24px;
                color: #4c2929;
                @media (max-width: 450px) {
                  font-size: 18px;
                }
              }

              .off {
                padding: 4px 10px;
                background: #edc295;
                border-radius: 16px;
                font-weight: 500;
                font-size: 14px;
                color: #fff;
              }
              .off1 {
                color: #4c2929;
              }
            }

            .card_price_part2 {
              font-weight: 400;
              font-size: 14px;
              color: #403f3e;
              margin-top: 11px;
              min-height: 61px;
              // border: 1px red solid;
            }
            .vip_price_out {
              margin-top: 16px;
              // border: 1px red solid;
              min-height: 72px;
              .vip_price_top {
                font-size: 40px;
                color: #f66442;
                font-weight: 600;
                .symbol {
                  font-size: 20px;
                  @media (max-width: 450px) {
                    font-size: 16px;
                  }
                }
              }
              .vip_price_bottom {
                font-weight: 400;
                font-size: 14px;
                color: #f66442;
              }
            }

            .card_price_part3 {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              margin-top: 24px;
              grid-gap: 8px;

              .big_price {
                font-weight: 600;
                font-size: 40px;
                color: #4c2929;
                @media (max-width: 450px) {
                  font-size: 40px;
                }
                .symbol {
                  font-size: 20px;
                  @media (max-width: 450px) {
                    font-size: 16px;
                  }
                }
              }

              .small_price {
                font-weight: 400;
                font-size: 14px;
                color: #403f3e;
                position: relative;
                top: 10px;
                text-decoration: line-through;
              }
            }

            .card_price_buy_btn {
              padding: 11px 0px;
              background: #f66442;
              border-radius: 4px;
              font-weight: 500;
              font-size: 16px;
              color: white;
              text-align: center;
              margin-top: 32px;
              position: relative;
              display: block;
              a {
                color: white;
              }
            }
            .card_price_buy_btn1 {
              color: #4c2929 !important;
              background: #edc295;

              &:hover {
                background: #d0aa83 !important;
              }
            }
            .try_free {
              background: white;
              border: 1px solid #201515;
              font-size: 16px;
              color: #201515;
              display: block;
              a {
                color: #4c2929;
              }
              &:hover {
                padding: 10px 0px;
                background: white;
                border: 2px solid #201515;
              }
            }

            .card_price_qllist {
              margin-top: 40px;
              display: flex;
              flex-direction: column;
              grid-gap: 16px;

              .one_ql {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                grid-gap: 8px;

                .icon {
                  width: 12px;
                  height: 10px;
                  display: flex;
                }

                .font {
                  // font-weight: 500;
                  font-size: 14px;
                  color: #403f3e;
                  :deep(.bigger) {
                    color: #201515;
                    font-weight: 600;
                  }
                }

                .tips {
                  width: 12px;
                  height: 12px;
                  display: flex;
                }
              }
            }
          }
        }
        .box_shadow {
          &:hover {
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.08);
          }
        }

        .currentMembership_no {
          background: rgba(76, 41, 41, 0);
          grid-template-rows: 50px 1fr;
          @media (max-width: 450px) {
            grid-template-rows: 0px 1fr !important;
          }

          .title {
            color: rgba(76, 41, 41, 0);
          }

          .off {
            background: linear-gradient(90deg, #f7ba96 0%, #f66442 100%) !important;
          }

          .card_price {
            border: 1px solid #e9e9e9;
            &:hover {
              box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.08);
            }
          }
        }
        .no-load {
          background: #fff;
          display: block;
          border: 1px solid #e9e9e9;
          border-radius: 8px;
          padding: 20px;
          @media (max-width: 750px) {
            padding: 10px;
          }
        }
      }

      .Service_dom {
        margin-top: 80px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
        grid-gap: 16px;
        // border: 1px red solid;
        // padding: 0px 30px;

        .one_price {
          border-radius: 8px;
          display: grid;
          cursor: pointer;

          .title {
            display: none;
            font-weight: 600;
            font-size: 16px;
            color: #ffffff;
            text-align: center;
            flex: 1;
            padding: 9px 0px;
          }

          .card_price {
            padding: 20px;
            background: #ffffff;
            border-radius: 8px;
            border: 1px solid #e9e9e9;

            &:hover {
              box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.08);
            }

            .card_price_part1 {
              font-weight: 600;
              font-size: 24px;
              color: #201515;
              // border: 1px red solid;
              min-height: 56px;
            }

            .card_price_part2 {
              font-weight: 400;
              font-size: 14px;
              color: #403f3e;
              margin-top: 11px;
              min-height: 68px;
            }

            .card_price_part3 {
              height: 84px;
              margin-top: 24px;
              // border: 1px red solid;
              .member_price {
                font-weight: 600;
                font-size: 32px;
                color: #f66442;
                // margin-top: 24px;
                .small {
                  font-size: 20px;
                }
              }

              .member_font {
                font-weight: 400;
                font-size: 14px;
                color: #f66442;
              }
            }

            .card_price_part4 {
              min-height: 92px;
              // border: 1px blue solid;
              .off_price {
                font-weight: 600;
                font-size: 32px;
                color: #201515;
                .small {
                  font-size: 20px;
                }
              }

              .old_price {
                font-weight: 400;
                font-size: 14px;
                color: #403f3e;
                text-decoration: line-through;
              }
              .no_member_font {
                font-weight: 400;
                font-size: 14px;
                color: #403f3e;
              }
            }
            .min_heighthack {
              min-height: 92px;
            }
            .min_heighthack2 {
              min-height: 62px;
            }
            .your_price {
              width: 80px;
              font-weight: 400;
              font-size: 12px;
              color: #f66442;
              padding: 4px 8px;
              background: rgba(246, 100, 66, 0.1);
              border-radius: 12px;
              text-align: center;
              margin-bottom: 6px;
            }

            .card_price_buy_btn {
              padding: 11px 0px;
              background: #f66442;
              border-radius: 4px;
              font-weight: 500;
              font-size: 16px;
              text-align: center;
              margin-top: 32px;
              position: relative;
              color: white;
              display: block;
              &:hover {
                opacity: 0.9;
              }
              a {
                color: white;
              }
            }
          }
        }
        .no-load {
          background: #fff;
          display: block;
          border: 1px solid #e9e9e9;
          border-radius: 8px;
          padding: 20px;
          @media (max-width: 750px) {
            padding: 10px;
          }
        }
      }

      .scroll_buyed_wrapper {
        height: 46px;
        margin-top: 32px;
        height: fit-content;
        padding: 10px 20px;
        background: #fff4f1;
        border-radius: 8px;

        .scroll_buyed {
          padding: 0px 0px;
          background: #fff4f1;

          // width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;

          // overflow: hidden;
          @media (max-width: 846px) {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 8px;
          }

          .scroll_buyed_left {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .icon {
              width: 20px;
              height: 20px;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .name {
              font-weight: 400;
              font-size: 16px;
              color: #201515;
              margin-left: 12px;
              @media (max-width: 528px) {
                font-size: 12px;
              }
            }

            .type {
              font-weight: 400;
              font-size: 16px;
              color: #201515;
              margin-left: 12px;
              @media (max-width: 528px) {
                font-size: 12px;
              }
            }

            .days {
              font-weight: 400;
              font-size: 16px;
              color: #f66442;
              margin-left: 12px;
              @media (max-width: 528px) {
                font-size: 12px;
              }
            }
          }
          .scroll_buyed_mid {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            grid-gap: 16px;
            flex: 1;
            .flag {
              width: 36px;
              height: 24px;
              margin-left: 40px;
              position: relative;

              @media (max-width: 846px) {
                margin-left: 0px;
              }

              // top: 2px;
              @media (max-width: 528px) {
                width: 24px;
                height: 16px;
              }

              img {
                width: 100%;
                height: 100%;
              }
            }

            .country_name {
              font-weight: 400;
              font-size: 16px;
              color: #201515;
              flex: 1;
              text-align: left;
              @media (max-width: 528px) {
                font-size: 12px;
              }
            }
            .time {
              font-weight: 400;
              font-size: 16px;
              color: #201515;
              @media (max-width: 528px) {
                font-size: 12px;
              }
            }
          }
        }
      }

      .bank_card {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 32px;
        grid-gap: 6px;
        flex-wrap: wrap;

        .title {
          font-weight: 400;
          font-size: 14px;
          color: #403f3e;
        }

        .img_self {
          max-width: 422px;

          // border: 1px red solid;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }

  .part2_wrapper {
    padding: 0px 30px;
    @media screen and (max-width: 450px) {
      padding: 0px 15px;
    }
    margin-top: 120px;
    @media (max-width: 450px) {
      margin-top: 60px;
    }

    .part2 {
      max-width: 1200px;
      margin: 0 auto;
      // overflow: hidden;

      .title {
        font-weight: 500;
        font-size: 40px;
        color: #201515;
        text-align: center;

        @media (max-width: 450px) {
          font-size: 20px;
        }
      }

      .list_out {
        // border: 1px red solid;
        margin-top: 56px;

        .one_question {
          padding: 18px 24px;
          background: #f2f4f6;
          border-radius: 8px;

          margin-bottom: 8px;

          .header {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            grid-gap: 24px;
            cursor: pointer;

            .icon {
              width: 16px;
              height: 16px;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .qusetion {
              font-weight: 500;
              font-size: 20px;
              color: #201515;

              @media (max-width: 662px) {
                font-size: 16px;
              }
            }
          }

          .answer {
            font-weight: 400;
            font-size: 18px;
            color: #201515;
            margin-top: 24px;
            padding-left: 44px;
            :deep(.email_address) {
              color: #f66442;
              text-decoration: underline;
            }

            @media (max-width: 662px) {
              font-size: 16px;
            }
            .answer_content {
              line-height: 26px;
            }
          }
        }

        .one_question_open {
          background: #ffffff;
          border: 1px solid #e9e9e9;
          box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);

          .header {
            .icon {
              transform: rotate(180deg);
            }
          }
        }
      }
    }
  }

  .part3_wrapper {
    // border: 1px red solid;
    padding: 0px 30px;
    @media screen and (max-width: 450px) {
      padding: 0px 15px;
    }
    background: #fff4f1;
    margin-top: 100px;
    @media (max-width: 450px) {
      margin-top: 50px;
    }

    .part3 {
      padding: 100px 0;
      @media (max-width: 450px) {
        padding: 50px 0;
      }
      max-width: 1200px;
      margin: 0 auto;

      .title {
        font-weight: 500;
        font-size: 40px;
        color: #201515;
        text-align: center;
        margin-bottom: 64px;
        @media (max-width: 450px) {
          margin-bottom: 32px;
        }
      }

      .three_out {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 24px;

        .one_card {
          padding: 32px 20px;
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid #f0e8e8;

          .icon {
            width: 56px;
            height: 56px;
            margin: 0 auto;
          }

          .method_font {
            font-weight: 600;
            font-size: 24px;
            color: #201515;
            margin-top: 16px;
            text-align: center;
          }

          .method_tip {
            font-weight: 400;
            font-size: 14px;
            color: #403f3e;
            margin-top: 8px;
            text-align: center;
          }

          .btn {
            padding: 11px;
            text-align: center;
            border-radius: 4px;
            border: 1px solid #201515;
            font-weight: 500;
            font-size: 16px;
            color: #201515;
            margin-top: 24px;
            display: block;
            cursor: pointer;
            &:hover {
              border: 2px solid #201515;
              padding: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
