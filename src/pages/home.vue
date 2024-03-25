<script setup lang="ts">
onMounted(() => {
  moveAnamit();
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
            <img src="./public/img/home/google_icon.svg" />

            Start free with Goog
          </div>
          <div class="common_btn common_btn_hover_borderCu white">Start free with emai</div>
        </div>
      </div>
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
  // max-width: 1200px;
  margin: 0 auto;
  // border: 1px red solid;
  .part1_wrapper {
    height: 804px;
    background: #fff4f1;
    .part1 {
      max-width: 1200px;
      border: 1px red solid;
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
        grid-column-gap: 16px;

        .yellow {
          background: #f66442;
        }
        .white {
          border: 1px solid #201515;
          color: #201515;
        }
      }
    }
  }
  //
}
</style>
