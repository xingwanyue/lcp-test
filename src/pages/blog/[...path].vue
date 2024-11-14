<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
import { domain } from '@/utils';
import dayjs from 'dayjs';

import vEmbark from '../../components/embark.vue';
const localePath = useLocalePath();

useSeoMeta({
  title: t('blog.seometa.title'),
  description: t('blog.seometa.description'),
});
useHead({
  link: [
    { rel: 'canonical', href: `https://www.${domain}${localePath('/blog')}` },
    { rel: 'alternate', href: `https://www.${domain}${localePath('/blog')}`, hreflang: 'en-GB' },
  ],
});
const route = useRoute();
const total = ref(0);
const allPageNum = ref(0);
const pageSize = ref(10);
const currentPage = ref(1);
let blogs = ref([]) as any;
let leftList = ref([]) as any;
let categoryPath = ref();
console.log(route.params.path);

const { data: category } = (await useFetch(`${api}/common/article/category`, {
  server: true,
  query: {},
  headers: { locale: locale.value },
})) as any;
leftList.value = category.value;
if (route.params.path[0]) {
  categoryPath.value = route.params.path[0];
} else {
  categoryPath.value = category.value[0]?.path;
}
if (route.params.path[1]) {
  currentPage.value = Number(route.params.path[1]);
}

const { data: blogsjk } = (await useFetch(`${api}/common/article`, {
  server: true,
  query: {
    page: route.params.path[1] || 1,
    pageSize: 10,
    categoryPath: route.query.categoryPath || categoryPath.value,
  },
  headers: { locale: locale.value },
  transform: (data: any) => {
    data.data = data.data.map((item: any) => {
      item.category = (category.value.find((cate: any) => cate.id === item.categoryId) || {}).name;
      return item;
    });
    return { data: data.data, total: data.total };
  },
})) as any;

blogs.value = blogsjk.value?.data;
total.value = blogsjk.value?.total;
allPageNum.value = Math.ceil(total.value / 10);

const handleCurrentChange = async (val: number) => {
  currentPage.value = val;
  const { data: blogsjkk } = (await useFetch(`${api}/common/article`, {
    server: true,
    query: {
      page: val,
      pageSize: 10,
      categoryPath: route.query.categoryPath || categoryPath.value,
    },
    headers: { locale: locale.value },
    transform: (data: any) => {
      data.data = data.data.map((item: any) => {
        item.category = (category.value.find((cate: any) => cate.id === item.categoryId) || {}).name;
        return item;
      });
      return { data: data.data, total: data.total };
    },
  })) as any;
  blogs.value = blogsjkk?.value.data;
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
        <h1>{{ $t('blog.h1') }}</h1>
      </div>
    </div>
    <div class="bolgs_content_wrapper" style="">
      <div class="blog_left_list">
        <div class="title">All Articles</div>
        <NuxtLink
          v-for="item in leftList"
          :key="item.id"
          :class="categoryPath === item.path ? 'one_pdom one_pdom_active' : 'one_pdom'"
          :to="localePath(`/blog/${item.path}`)"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <div class="blog_right_list">
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
                <el-image src="/img/blog/right_arrow.svg" alt="Right Arrow"></el-image>
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
            :current-page="currentPage"
            @current-change="handleCurrentChange"
            class="mt-4"
          />
        </div>
      </div>

      <div v-if="allPageNum">
        <NuxtLink v-for="item in allPageNum" :to="localePath(`/blog/${categoryPath}/${item}`)"> </NuxtLink>
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
    margin: 0 auto;
    padding: 0px 30px;
    margin-top: 100px;
    max-width: 1200px;

    @media (max-width: 450px) {
      padding: 0px 15px;
    }
    @media screen and (max-width: 1270px) {
      margin-top: 50px;
    }
    overflow: hidden;
    display: grid;
    grid-template-columns: 0.32fr 1fr;
    grid-template-areas: 'left_list right_list';

    grid-gap: 48px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-gap: 0px;
      grid-template-areas:
        'right_list'
        'left_list';
    }
    .blog_left_list {
      grid-area: left_list;
      background: #ffffff;
      border-radius: 8px;
      border: 1px solid #e9e9e9;
      padding: 18px 0px;
      box-sizing: border-box;
      .title {
        font-weight: 500;
        font-size: 20px;
        color: #201515;
        padding: 0px 24px;
        margin-bottom: 8px;
      }
      .one_pdom {
        padding: 12px 24px;
        font-weight: 400;
        font-size: 18px;
        color: #403f3e;
        line-height: 25px;
        display: block;
      }
      .one_pdom_active {
        background: #fff4f1;
        font-weight: 500;
        font-size: 18px;
        color: #f66442;
      }
    }
    .blog_right_list {
      grid-area: right_list;
      .bolgs_content {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 40px;
        .one_blog {
          padding: 40px;
          padding-top: 39px;
          padding-bottom: 48px;
          border-top: 1px solid #e9e9e9;
          // border: 1px red solid;
          cursor: pointer;
          display: block;
          position: relative;

          &:hover {
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

    .seohack {
      position: fixed;
      left: -99999px;
    }
  }
}
</style>
<style></style>
