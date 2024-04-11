<script lang="ts" setup>
// import { api } from '@/utils';

import _ from 'lodash';

import vEmbark from '../components/embark.vue';
import right_arrow from '../public/img/blog/right_arrow.svg';

useSeoMeta({
  title: 'blog',
  description: 'blog',
});

// const { data: blogs } = (await useFetch(`${api}/common/article?type=1`, {
//   server: true,
// })) as any;
const blogs = [
  {
    name: ' Mastering the DET with our Duolingo English Practice Test: Exclusive Insights from DET Practice',
    content: 'Understanding the DET Scoring System Delving deeper into the Duolingo English Test, we unveil i',
    date: 'Dec 31, 2023 | DET Test Essentials',
  },
  {
    name: ' Mastering the DET with our Duolingo English Practice Test: Exclusive Insights from DET Practice',
    content: 'Understanding the DET Scoring System Delving deeper into the Duolingo English Test, we unveil i',
    date: 'Dec 31, 2023 | DET Test Essentials',
  },
  {
    name: ' Mastering the DET with our Duolingo English Practice Test: Exclusive Insights from DET Practice',
    content: 'Understanding the DET Scoring System Delving deeper into the Duolingo English Test, we unveil i',
    date: 'Dec 31, 2023 | DET Test Essentials',
  },
  {
    name: ' Mastering the DET with our Duolingo English Practice Test: Exclusive Insights from DET Practice',
    content: 'Understanding the DET Scoring System Delving deeper into the Duolingo English Test, we unveil i',
    date: 'Dec 31, 2023 | DET Test Essentials',
  },
  {
    name: ' Mastering the DET with our Duolingo English Practice Test: Exclusive Insights from DET Practice',
    content: 'Understanding the DET Scoring System Delving deeper into the Duolingo English Test, we unveil i',
    date: 'Dec 31, 2023 | DET Test Essentials',
  },
];

const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};
</script>
<template>
  <div class="blogs">
    <!-- +
    {{ JSON.stringify(blogs) }}
    <div v-for="blog in blogs" :key="blog">{{ blog.name }}</div> -->

    <div class="bolgs_hader">
      <div class="bolgs_hader_content">
        <h1>DET Pratice Blog</h1>
      </div>
    </div>
    <div class="bolgs_content_wrapper">
      <div class="bolgs_content">
        <div v-for="(item, index) in blogs" :key="index" class="one_blog">
          <div class="title">
            {{ item.name }}
          </div>
          <div class="content">
            {{ item.content }}
          </div>
          <div class="bottom">
            <div class="date">{{ item.date }}</div>
            <div class="right_arrow">
              <el-image :src="right_arrow"></el-image>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination_out">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="50"
          :page-size="10"
          @current-change="handleCurrentChange"
          class="mt-4"
        />
      </div>
    </div>
    <v-embark />
  </div>
</template>
<style scoped lang="scss">
.blogs {
  .bolgs_hader {
    text-align: center;

    background: #fff4f1;
    .bolgs_hader_content {
      // border: 1px red solid;
      max-width: 1200px;
      margin: 0 auto;
      padding: 120px 0;
      h1 {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        margin: 0;
      }
    }
  }
  .bolgs_content_wrapper {
    padding: 0px 30px;
    overflow: hidden;
    // border: 1px red solid;
    .bolgs_content {
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 100px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 32px;
      .one_blog {
        padding: 24px;
        border-radius: 8px;
        border: 1px solid #e9e9e9;
        cursor: pointer;

        &:hover {
          box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.08);
          .title {
            color: #f66442;
          }
          .bottom {
            .right_arrow {
              display: block;
            }
          }
        }
        .title {
          font-weight: 600;
          font-size: 28px;
          color: #201515;
          // &:hover {
          //   color: #f66442;
          // }
        }
        .content {
          font-weight: 400;
          font-size: 20px;
          color: #201515;
          margin-top: 24px;
        }
        .bottom {
          margin-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 24px;
          .date {
            font-weight: 400;
            font-size: 16px;
            color: rgba(64, 63, 62, 0.6);
          }
          .right_arrow {
            width: 24px;
            height: 24px;
            display: none;
          }
        }
      }
    }
    .pagination_out {
      margin: 0 auto;
      // border: 1px red solid;
      display: flex;
      justify-content: center;
      margin-top: 56px;
      margin-bottom: 100px;
      :deep(.el-pagination.is-background .el-pager li.is-active) {
        background-color: #201515 !important;
      }
      :deep(.el-pager li:hover) {
        color: white !important;
        background-color: #f66442 !important;
        border: 1px solid #f66442 !important;
      }
      :deep(.el-pagination button:hover) {
        color: white !important;
        background-color: #f66442 !important;
      }
      :deep(.el-pagination.is-background .el-pager li) {
        background-color: white;
        border: 1px solid rgba(64, 63, 62, 0.6);
      }
    }
  }
}
</style>
<style></style>
