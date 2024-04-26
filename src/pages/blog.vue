<script lang="ts" setup>
// import { api } from '@/utils';
import dayjs from 'dayjs';

import vEmbark from '../components/embark.vue';
const localePath = useLocalePath();

useSeoMeta({
  title: 'DET Practice Blog - Duolingo English Test Tips, News, and Service Updates',
  description:
    'Stay informed and prepared with our DET blog. Get the latest Duolingo English Test tips, news, service updates, and announcements designed to enhance your test readiness.',
});
const total = ref(0);
const pageSize = ref(10);
let blogs = ref([]) as any;
const { data: category } = (await useFetch(`${api}/common/article/category`, {
  server: true,
  query: {
    type: '1',
  },
})) as any;

const { data: blogsjk } = (await useFetch(`${api}/common/article`, {
  server: true,
  query: {
    type: '1',
    page: 1,
    pageSize: 10,
  },
  transform: (data: any) => {
    data.data = data.data.map((item: any) => {
      item.category = category.value.find((cate: any) => cate.id === item.categoryId).name;
      return item;
    });
    return { data: data.data, total: data.total };
  },
})) as any;

blogs.value = blogsjk.value.data;
total.value = blogsjk.value.total;

const handleCurrentChange = async (val: number) => {
  const { data: blogsjkk } = (await useFetch(`${api}/common/article`, {
    server: true,
    query: {
      type: '1',
      page: val,
      pageSize: 10,
    },
    transform: (data: any) => {
      data.data = data.data.map((item: any) => {
        item.category = category.value.find((cate: any) => cate.id === item.categoryId).name;
        return item;
      });
      return { data: data.data, total: data.total };
    },
  })) as any;
  blogs.value = blogsjkk.value.data;
};
// const findCategory = (id: Number) => {
//   console.log(id);
//   console.log();
//   const finditem = category.value.find((item: any) => item.id === id);
//   console.log(finditem);
// };
</script>
<template>
  <div class="blogs">
    <div class="bolgs_hader">
      <div class="bolgs_hader_content">
        <h1>DET Pratice Blog</h1>
      </div>
    </div>
    <div class="bolgs_content_wrapper" style="">
      <div v-if="blogs && blogs.length" class="bolgs_content">
        <NuxtLink
          v-for="(item, index) in blogs"
          :key="index"
          class="one_blog"
          data-aos="fade-up"
          data-aos-duration="1000"
          :to="localePath(`/${item.path}`)"
        >
          <div class="title">{{ item.name }}</div>
          <div class="content">
            {{ item.content }}
          </div>
          <div class="bottom">
            <div class="date">{{ dayjs(item.createTime).format('YYYY-MM-DD') }}&nbsp;|&nbsp;{{ item.category }}</div>
            <div class="right_arrow">
              <el-image
                src="/img/blog/right_arrow.svg"
                alt="DET Practice:The best Duolingo English Test Practice platform"
              ></el-image>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="pagination_out">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          :page-size="pageSize"
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
      max-width: 1200px;
      margin: 0 auto;
      padding: 120px 0;
      background: url('/img/blog/blog.svg') center no-repeat;
      background-size: cover;
      @media (max-width: 650px) {
        padding: 60px 0;
      }
      h1 {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        margin: 0;
        @media (max-width: 450px) {
          font-size: 24px;
        }
      }
    }
  }
  .bolgs_content_wrapper {
    padding: 0px 30px;
    @media (max-width: 450px) {
      padding: 0px 15px;
    }
    overflow: hidden;
    // border: 1px red solid;
    .bolgs_content {
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 100px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 32px;
      @media (max-width: 1270px) {
        grid-template-columns: repeat(1, 1fr);
        margin-top: 50px;
      }
      .one_blog {
        padding: 24px;
        border-radius: 8px;
        padding-bottom: 48px;
        border: 1px solid #e9e9e9;
        cursor: pointer;
        display: block;
        position: relative;

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
          @media (max-width: 450px) {
            font-size: 20px;
          }
        }
        .content {
          font-weight: 400;
          font-size: 20px;
          color: #201515;
          margin-top: 24px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 28px;
          @media (max-width: 450px) {
            font-size: 16px;
          }
        }
        .bottom {
          margin-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 24px;
          position: absolute;
          bottom: 12px;
          // border:1px red solid;
          width: calc(100% - 48px);

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
