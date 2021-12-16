<template>
<div id="articleList">
  <ArticleCover
  v-for="item in artList"
  :key="item.article_id"
  :title="item.article_info.title"
  :cover="item.article_info.cover_image"
  :authorName="item.author_user_info.user_name"
  :time="item.article_info.ctime"
  :secCategoty="item.category_info.second_category_name"
  :briefContent="item.article_info.brief_content"
  :views="item.article_info.view_count"
  :praise="item.article_info.digg_count"
  :comment="item.article_info.comment_count"
  :articleId="item.article_id"></ArticleCover>
  <div class="all-loaded" v-if="!hasMore">没有更多啦~</div>
  <PullLoading v-if="isloading"></PullLoading>
</div>
</template>

<script>
import ArticleCover from '@/components/articleCover'
import PullLoading from '@/components/pullLoading'
import { scrollTop, documentHeight, windowHeight } from '@/utils/scroll'
export default {
  data () {
    return {
      artList: [],
      isloading: false,
      hasMore: true,
      offset: 0,
      limit: 10
    }
  },
  props: {
    currentCategoryId: {
      type: Number,
      default: 0
    }
  },
  components: {
    ArticleCover,
    PullLoading
  },

  computed: {
    query () {
      return this.$route.query.sort
    }
  },
  methods: {
    // 0 :推荐 1：后端 2：前端 3：Android 4:iOS
    async getCurrentArticles (sort = 'hot') {
      const res = await this.$getArticles(this.currentCategoryId, sort, 0, this.limit)
      this.artList = res.data.articles
      // 更新offset
      this.offset += 10
    },
    // 滚动加载
    async onload () {
      // 加载时不能再触发
      if (this.isloading === false && this.hasMore === true) {
        if (scrollTop() + windowHeight() >= documentHeight() - 50) {
          // 正在加载
          this.isloading = true
          const newArticles = await this.$getArticles(this.currentCategoryId, this.query, this.offset, this.limit)
          // 更新offset
          this.offset += 10
          // 没有更多
          this.hasMore = newArticles.has_more
          this.artList.push(...newArticles.data.articles)
          // 加载结束
          this.isloading = false
        }
      }
    }
  },
  created () {
    this.getCurrentArticles()
    window.addEventListener('scroll', this.onload)
  },
  watch: {
    query (newQuery, oldQuery) {
      if (newQuery !== oldQuery) {
        // 重置offset
        this.offset = 0
        // 重置hasMore
        this.hasMore = true
        this.getCurrentArticles(newQuery)
      }
    },
    // 监听文章分类id
    currentCategoryId () {
      this.getCurrentArticles()
    }
  },
  mounted () {

  }
}
</script>

<style scoped lang="less">
  .all-loaded{
    text-align: center;
    color: #85a3d1;
    padding: 10px;
  }
</style>
