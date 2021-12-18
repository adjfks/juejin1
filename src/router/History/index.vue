<template>
  <div id="history-container">

    <div class="top">
      <Toptabbar>浏览历史&nbsp;{{this.$history.length}}</Toptabbar>
    </div>
    <div class="empty iconfont" v-if="articleList.length === 0">&#xe6ae;<div class="text">空空如也~</div></div>
    <div class="article-list">
      <ArticleCover
      v-for="item in articleList"
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
    </div>
  </div>
</template>

<script>
import Toptabbar from '@/components/TopTabbar'
// 导入封面列表组件
import ArticleCover from '@/components/articleCover'
export default {
  data () {
    return {
      articleList: [],
      offset: 0
    }
  },
  components: {
    ArticleCover,
    Toptabbar
  },
  methods: {
    async getArticle () {
      for (let i = 0; i < this.$history.length; i++) {
        const res = await this.$getArticleById(this.$history[i])
        this.articleList.unshift(res.data.article)
      }
    }
  },
  created () {
    this.getArticle()
  }
}
</script>

<style scoped lang="less">
#history-container{
  .empty{
    height: 200px;
    width: 200px;
    font-size: 100px;
    color: rgba(30, 128, 255 , .5);
    margin: 200px auto;
    text-align: center;

    .text{
      font-size: 18px;
    }
  }

  .article-list{

  }
}
</style>
