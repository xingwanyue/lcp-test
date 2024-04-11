<script setup lang="ts">
const link_arr = [
  {
    name: 'Products',
    list: [
      {
        name: 'DET Practice',
        url: '/product1',
      },
      {
        name: 'AI Correction Service',
        url: '/product1',
      },
      {
        name: 'DET Mock',
        url: '/product1',
      },
      {
        name: 'Duolingo English Test Course',
        url: '/product1',
      },
    ],
  },
  {
    name: 'Learn',
    list: [
      {
        name: 'Duolingo English Test',
        url: '/product1',
      },
      {
        name: 'Read and Complete',
        url: '/product1',
      },
      {
        name: 'Read and Select',
        url: '/product1',
      },
      {
        name: 'Interactive Reading',
        url: '/product1',
      },
    ],
  },
  {
    name: 'Blog',
    list: [
      {
        name: 'Duolingo English Test Duolingo English Test',
        url: '/product1',
      },
      {
        name: 'Read and Complete Read and Complete',
        url: '/product1',
      },
      {
        name: 'Mastering the New Duolingo English Test Updates in 2024: Tips and Strategies',
        url: '/product1',
      },
      {
        name: 'Interactive Reading',
        url: '/product1',
      },
    ],
  },
  {
    name: 'Company',
    list: [
      {
        name: 'About us',
        url: '/product1',
      },
      {
        name: 'Contact us',
        url: '/product1',
      },
      {
        name: 'Terms and Conditions',
        url: '/product1',
      },
      {
        name: 'Privacy Policy',
        url: '/product1',
      },
    ],
  },
];
const value = ref('');

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];
</script>

<template>
  <div class="common_footer">
    <div class="footer_link_dom">
      <div v-for="(item, index) in link_arr" :key="index" class="one_link_list">
        <div class="one_link_list_title">{{ item.name }}</div>
        <div v-for="(itemin, indexin) in item.list" :key="index * 10 + indexin" class="one_link_list_detail">
          {{ itemin.name }}
        </div>
      </div>
    </div>
    <div class="footer_logo_dom">
      <div class="footer_logo_left">
        <div class="logo_img_out">
          <el-img src="../public/img/footer/small_logo.svg" />
        </div>
        <div class="logo_icon_out">
          <div class="one_icon"></div>
          <div class="one_icon"></div>
          <div class="one_icon"></div>
          <div class="one_icon"></div>
        </div>
      </div>
      <div class="footer_logo_right">
        <div class="tips_out">Our product has no connection with Duolingo,Inc</div>
        <div class="select_out">
          <el-select v-model="value" placeholder="Select" style="width: 240px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.common_footer {
  max-width: 1200px;

  // border: 1px red solid;
  margin: 0 auto;
  padding-top: 56px;
  padding-bottom: 37px;
  .footer_link_dom {
    text-align: left;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-column-gap: 40px;
    @media (max-width: 496px) {
      text-align: center;
    }
    grid-row-gap: 24px;
    .one_link_list {
      // border: 1px red solid;
      .one_link_list_title {
        margin-bottom: 24px;
        font-weight: 500;
        font-size: 20px;
        color: #201515;
      }
      .one_link_list_detail {
        font-weight: 400;
        font-size: 14px;
        color: #201515;
        margin-bottom: 16px;
        line-height: 20px;
        cursor: pointer;
        &:hover {
          color: #f66442;
        }
      }
    }
  }
  .footer_logo_dom {
    margin-top: 68px;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    @media (max-width: 1009px) {
      grid-template-columns: 1fr;
      grid-row-gap: 24px;
    }
    .footer_logo_left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      grid-column-gap: 40px;
      @media (max-width: 420px) {
        grid-column-gap: 20px;
      }
      @media (max-width: 1009px) {
        justify-content: center;
      }
      .logo_img_out {
        width: 132px;
        height: 24px;
        border: 1px red solid;
        @media (max-width: 420px) {
          width: 100px;
          height: 18px;
        }
      }
      .logo_icon_out {
        display: flex;
        grid-column-gap: 8px;
        .one_icon {
          width: 30px;
          height: 30px;
          border: 1px red solid;
          @media (max-width: 420px) {
            width: 24px;
            height: 24px;
          }
        }
      }
    }
    .footer_logo_right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      grid-column-gap: 24px;
      @media (max-width: 1009px) {
        justify-content: center;
      }
      @media (max-width: 668px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 24px;
      }
      .tips_out {
        font-weight: 400;
        font-size: 14px;
        color: #403f3e;
        @media (max-width: 668px) {
          text-align: center;
        }
      }
      .select_out {
        // border: 1px red solid;
        @media (max-width: 668px) {
          text-align: center;
        }
      }
    }
  }
}
</style>
