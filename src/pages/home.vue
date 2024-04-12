<script setup lang="ts">
import vSlogen from '../components/slogen.vue';
import vSubscribe from '../components/subscribe.vue';
const pinglun = [
  {
    name: 'Della Walsh',
    countrt: 'China',
    font: 'Rew things make me feel more powerful than setting up automatio.',
    avatr: '',
  },
  {
    name: 'Della Walsh',
    countrt: 'China',
    font: 'Rew things make me feel more powerful than setting up automatio.',
    avatr: '',
  },
  {
    name: 'Della Walsh',
    countrt: 'China',
    font: 'Rew things make me feel more powerful than setting up automatio.',
    avatr: '',
  },
  {
    name: 'Della Walsh',
    countrt: 'China',
    font: 'Rew things make me feel more powerful than setting up automatio.',
    avatr: '',
  },
  {
    name: 'Della Walsh',
    countrt: 'China',
    font: 'Rew things make me feel more powerful than setting up automatio.',
    avatr: '',
  },
  {
    name: 'Della Walsh',
    countrt: 'China',
    font: 'Rew things make me feel more powerful than setting up automatio.',
    avatr: '',
  },
  {
    name: 'Della Walsh',
    countrt: 'China',
    font: 'Rew things make me feel more powerful than setting up automatio.',
    avatr: '',
  },
  {
    name: 'Della Walsh',
    countrt: 'China',
    font: 'Rew things make Rew things make me feel more powerful than setting up automatiome feel more powerful than setting up automatio.Rew things make me feel more powerful than setting up automatio',
    avatr: '',
  },
];
let timer = null;
// 将pinglun的数据两个两个的放到一起
const pinglunArr = ref([]);

onMounted(() => {
  moveAnamit();
  // 如果是在浏览器环境下，执行movePingLun
  if (process.client) {
    makePinglunData();
    // movePingLun();
  }
});

const makePinglunData = () => {
  for (let i = 0; i < pinglun.length; i += 2) {
    pinglunArr.value.push([pinglun[i], pinglun[i + 1]]);
  }
};
const delPinglunData = () => {
  // 移出前四个个数据
  pinglunArr.value.shift();
  pinglunArr.value.shift();
  pinglunArr.value.shift();
  // pinglunArr.value.shift();
};
const movePingLun = () => {
  // 清除之前的定时器
  if (timer) {
    clearInterval(timer);
  }
  // 找到评论dom 使其能平滑的向左无限滚动
  const review_scroll_out = document.querySelector('.review_scroll_out');
  // const review_scroll_out_it = document.querySelector('.review_scroll_out_it');
  timer = setInterval(() => {
    review_scroll_out.scrollLeft += 1;
    //  输出滚动的右侧距离 scrollright = scrollWidth - scrollLeft - clientWidth
    const scrollright = review_scroll_out.scrollWidth - review_scroll_out.scrollLeft - review_scroll_out.clientWidth;
    if (scrollright === 0) {
      makePinglunData();
    }
    console.log(pinglunArr.value.length);
    if (pinglunArr.value.length > 16) {
      delPinglunData();
    }
  }, 10000);

  review_scroll_out.onmouseover = () => {
    clearInterval(timer);
  };
  review_scroll_out.onmouseout = () => {
    movePingLun();
  };
  review_scroll_out.ontouchstart = () => {
    clearInterval(timer);
  };
  review_scroll_out.ontouchend = () => {
    movePingLun();
  };
};

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
</script>

<template>
  <div class="home">
    <div class="part1_wrapper">
      <div class="part1">
        <div class="power_by">Powered by AI</div>
        <div class="page_title">
          <div class="h_one">
            <h1>
              Get Higher Score Easily in the<br />
              Duolingo English Test With
            </h1>
          </div>
          <div class="animat_wrap">
            <div class="small_title_wrap">
              <div class="one_small_title current">DET Practice</div>
              <div class="one_small_title">AI Correction</div>
              <div class="one_small_title">Full-length Mock</div>
              <div class="one_small_title">DET Courses</div>
            </div>
          </div>
        </div>
        <div class="two_btn_out">
          <div class="common_btn common_btn_hover_bgColor yellow">
            <img src="../public/img/home/google_icon.svg" />
            Start free with Goog
          </div>
          <div class="common_btn common_btn_hover_borderCu white">Start free with emai</div>
        </div>
        <div class="all_stu_nums">
          Trusted by <span class="yellow">500,000+ students</span> worldwide to improve Duolingo English Test scores
          within one month.
        </div>
        <div class="big_img_out">
          <div class="big_img"></div>
        </div>
      </div>
    </div>
    <div class="part2_wrapper">
      <div class="part2">
        <div class="title1" data-aos="fade-up" data-aos-duration="1000">
          <h2>
            The best platform for enhancing your scores in the<br />
            Duolingo English Test
          </h2>
        </div>
        <div class="title2" data-aos="fade-up" data-aos-duration="1000">
          <h3>Utilize our comprehensive resources to accelerate your score improvement</h3>
        </div>
        <div class="one_img_article" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <img src="../public/img/home/home1.png" />
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h4>Duolingo English Test Practice</h4>
            </div>
            <div class="tips">
              Having nearly 10,000+ practice questions, the question bank is continuously updated and improved.
            </div>
            <div class="tips">Covering all types of exams, detailed explanations are provided for each question.</div>
            <div class="tips">
              Thorough answers, intelligent recognition, and scoring allow you to constantly monitor your performance in
              answering questions.
            </div>
            <div class="get_more">
              <div class="font">Get more information</div>
              <div class="icon">
                <img src="../public/img/home/yellow_arrow_right.svg" />
              </div>
            </div>
          </div>
        </div>
        <div class="one_article_img" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <img src="../public/img/home/home2.png" />
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h4>Duolingo English Test Practice</h4>
            </div>
            <div class="tips">
              Having nearly 10,000+ practice questions, the question bank is continuously updated and improved.
            </div>
            <div class="tips">Covering all types of exams, detailed explanations are provided for each question.</div>
            <div class="tips">
              Thorough answers, intelligent recognition, and scoring allow you to constantly monitor your performance in
              answering questions.
            </div>
            <div class="get_more">
              <div class="font">Get more information</div>
              <div class="icon">
                <img src="../public/img/home/yellow_arrow_right.svg" />
              </div>
            </div>
          </div>
        </div>
        <div class="one_img_article" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <img src="../public/img/home/home3.png" />
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h4>Duolingo English Test Practice</h4>
            </div>
            <div class="tips">
              Having nearly 10,000+ practice questions, the question bank is continuously updated and improved.
            </div>
            <div class="tips">Covering all types of exams, detailed explanations are provided for each question.</div>
            <div class="tips">
              Thorough answers, intelligent recognition, and scoring allow you to constantly monitor your performance in
              answering questions.
            </div>
            <div class="get_more">
              <div class="font">Get more information</div>
              <div class="icon">
                <img src="../public/img/home/yellow_arrow_right.svg" />
              </div>
            </div>
          </div>
        </div>
        <div class="one_article_img" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <img src="../public/img/home/home4.png" />
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h4>Duolingo English Test Practice</h4>
            </div>
            <div class="tips">
              Having nearly 10,000+ practice questions, the question bank is continuously updated and improved.
            </div>
            <div class="tips">Covering all types of exams, detailed explanations are provided for each question.</div>
            <div class="tips">
              Thorough answers, intelligent recognition, and scoring allow you to constantly monitor your performance in
              answering questions.
            </div>
            <div class="get_more">
              <div class="font">Get more information</div>
              <div class="icon">
                <img src="../public/img/home/yellow_arrow_right.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part3_wrapper">
      <div class="part3">
        <div class="title">Number of High Scorers (130+ Points)：10000+</div>
        <div class="user_nums_out">
          <div class="one_num">
            <div class="bigger_num">500k</div>
            <div class="small_font">Users</div>
          </div>
          <div class="one_num">
            <div class="bigger_num">500k</div>
            <div class="small_font">Questions</div>
          </div>
          <div class="one_num">
            <div class="bigger_num">500k</div>
            <div class="small_font">Mock Test</div>
          </div>
        </div>
        <div class="btn_out">
          <NuxtLink class="common_btn common_btn_hover_bgColor yellow">Join Them</NuxtLink>
        </div>
        <div class="score_scroll_out">
          <div class="one_score">1</div>
          <div class="one_score"></div>
          <div class="one_score"></div>
          <div class="one_score"></div>
          <div class="one_score"></div>
          <div class="one_score"></div>
          <div class="one_score"></div>
          <div class="one_score"></div>
          <div class="one_score"></div>
          <div class="one_score"></div>
          <div class="one_score"></div>
          <div class="one_score"></div>
          <div class="one_score">0</div>
        </div>
      </div>
    </div>

    <div class="review_wrapper">
      <div class="review">
        <div class="review_title">Rated 4.8/5 based on 850+ reviews</div>
        <div class="review_scroll_out">
          <div class="review_scroll_out_it">
            <div v-for="(item, index) in pinglunArr" :key="index" class="two_card_out">
              <div class="one_card">
                <div class="one_card_top">
                  <div class="one_card_top_left">
                    <div class="icon_touxiang"></div>
                    <div class="name_out">
                      <div class="name">{{ item[0].name }}</div>
                      <div class="country">{{ item[0].countyr }}</div>
                    </div>
                  </div>
                  <div class="one_card_top_right">
                    <img src="../public/img/home/five_starts.svg" />
                  </div>
                </div>
                <div class="one_card_font">{{ item[0].font }}</div>
              </div>
              <div class="one_card" style="margin-top: 24px">
                <div class="one_card_top">
                  <div class="one_card_top_left">
                    <div class="icon_touxiang"></div>
                    <div class="name_out">
                      <div class="name">{{ item[1].name }}</div>
                      <div class="country">{{ item[1].countyr }}</div>
                    </div>
                  </div>
                  <div class="one_card_top_right">
                    <img src="../public/img/home/five_starts.svg" />
                  </div>
                </div>
                <div class="one_card_font">{{ item[1].font }}</div>
              </div>
            </div>
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
<style>
.v-header {
  background: #fff4f1 !important;
}
</style>
<style lang="scss" scoped>
.home {
  margin: 0 auto;
  overflow: hidden;

  // border: 1px red solid;
  .part1_wrapper {
    padding: 0px 30px;
    // border: 1px red solid;
    // height: 804px;
    background: linear-gradient(to bottom, #fff4f1 0%, #fff4f1 804px, #ffffff 804px);
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
              font-size: 22px;
            }
          }
        }
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
        .yellow {
          color: #f66442;
        }
      }
      .big_img_out {
        padding: 0px 60px;
        margin-top: 40px;
        .big_img {
          border: 1px red solid;
          height: 576px;
        }
      }
    }
  }
  .part2_wrapper {
    padding: 0px 30px;

    box-sizing: border-box;
    .part2 {
      max-width: 1200px;
      // border: 1px blue solid;
      margin: 0 auto;
      .title1 {
        h2 {
          font-weight: 500;
          font-size: 40px;
          color: #201515;
          text-align: center;
        }
      }
      .title2 {
        margin-top: 32px;
        margin-bottom: 80px;
        h3 {
          font-weight: 500;
          font-size: 24px;
          color: #201515;
          text-align: center;
          margin: 0;
        }
      }
      .one_img_article {
        display: grid;
        margin-bottom: 120px;
        grid-template-columns: 1fr 0.75fr;
        grid-column-gap: 80px;
        grid-row-gap: 40px;
        grid-template-areas: 'img_out  article_out';
        @media (max-width: 926px) {
          grid-template-columns: 1fr;
          grid-template-areas:
            'img_out'
            'article_out';
        }
        .img_out {
          // border: 1px red solid;
          grid-area: img_out;
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
            height: auto;
          }
        }
        .article_out {
          grid-area: article_out;
          @media (max-width: 926px) {
            text-align: center;
          }
          .article_out_title {
            h4 {
              font-weight: 500;
              font-size: 32px;
              color: #201515;
              margin-top: 0px;
            }
          }
          .tips {
            font-weight: 400;
            font-size: 18px;
            color: #403f3e;
            margin-top: 24px;
          }
          .get_more {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex: 1;
            // border: 1px red solid;
            margin-top: 34px;
            grid-column-gap: 8px;
            @media (max-width: 926px) {
              justify-content: center;
            }
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
          }
        }
      }
      .one_article_img {
        display: grid;
        margin-bottom: 120px;
        grid-template-columns: 0.75fr 1fr;
        grid-column-gap: 80px;
        grid-row-gap: 40px;
        grid-template-areas: ' article_out img_out';
        @media (max-width: 926px) {
          grid-template-columns: 1fr;
          grid-template-areas:
            'img_out'
            'article_out';
        }
        .img_out {
          // border: 1px red solid;
          grid-area: img_out;
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
            height: auto;
          }
        }
        .article_out {
          grid-area: article_out;
          @media (max-width: 926px) {
            text-align: center;
          }
          .article_out_title {
            h4 {
              font-weight: 500;
              font-size: 32px;
              color: #201515;
              margin-top: 0px;
            }
          }
          .tips {
            font-weight: 400;
            font-size: 18px;
            color: #403f3e;
            margin-top: 24px;
          }
          .get_more {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex: 1;
            // border: 1px red solid;
            margin-top: 34px;
            grid-column-gap: 8px;
            @media (max-width: 926px) {
              justify-content: center;
            }
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
          }
        }
      }
    }
  }
  .part3_wrapper {
    border: 1px red solid;
    background: #f2f4f6;
    .part3 {
      .title {
        font-weight: 500;
        font-size: 40px;
        color: #201515;
        text-align: center;
        margin-top: 100px;
      }
      .user_nums_out {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-column-gap: 24px;
        margin-top: 40px;
        .one_num {
          padding: 4px 32px;
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
          }
          .small_font {
            font-weight: 400;
            font-size: 18px;
            color: #201515;
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
        border: 1px red solid;
        display: flex;
        justify-content: center;
        align-items: center;
        grid-column-gap: 20px;
        overflow-x: auto;
        margin-top: 40px;

        .one_score {
          width: 312px;
          flex-shrink: 0;
          border: 1px blue solid;
          height: 100px;
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
        text-align: center;
        margin-bottom: 64px;
      }
      .review_scroll_out {
        padding: 0 20px;
        overflow-x: scroll;
        scrollbar-width: none;
        .review_scroll_out_it {
          // cursor: move;
          display: flex;
          width: fit-content;
          grid-column-gap: 20px;
          // animation: scroll 30s linear infinite;
          .one_card {
            flex-shrink: 0;
            flex-grow: 0;
            padding: 24px;
            background: #ffffff;
            border-radius: 8px;
            width: 432px;
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
                  border: 1px red solid;
                }
                .name_out {
                  .name {
                    font-weight: 500;
                    font-size: 16px;
                    color: #201515;
                  }
                  .country {
                    font-weight: 400;
                    font-size: 14px;
                    color: #403f3e;
                  }
                }
              }
              .one_card_top_right {
                width: 116px;
                height: 19px;
              }
            }
            .one_card_font {
              font-weight: 400;
              font-size: 18px;
              color: #201515;
              margin-top: 24px;
            }
          }
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
