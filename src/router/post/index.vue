<template>
<div class="post-container">
  <Toptabbar>文章详情</Toptabbar>
  <div id="post">
    <!-- 文章信息 -->
    <div class="article-info clearfix">
      <!-- 文章标题 -->
      <h1 class="article-title">{{ article.article_info.title}}</h1>
      <!-- 文章作者部分 -->
      <div class="author-info">
        <!-- 头像 -->
        <a class="avatar">
          <img :src="article.author_user_info.avatar_large ? article.author_user_info.avatar_large : '@/assets/images/defaultavatar.png'" :onerror="errorImage" alt="">
        </a>
        <div class="author-info-box">
          <div class="author-name">
            <!-- 作者昵称 -->
            <span>{{ article.author_user_info.user_name}}</span>
            <span class="author-level">LV{{ article.author_user_info.level}}</span>
          </div>
          <div class="meta-info">
            <time class="time">
              <span>2021年12月09日</span><span>14:20</span>
              </time>
              <span>&nbsp;·&nbsp;阅读 {{ article.article_info.view_count}}</span>
          </div>
        </div>
        <div class="follow-button"><span>+关注</span></div>
      </div>
      <img :src="article.article_info.cover_image" alt="" class="article-cover">
    </div>
    <div class="article-content">

    </div>
  </div>
  <Comment
  :articleId="articleId"></Comment>
</div>

</template>

<script>
import Toptabbar from '@/components/TopTabbar'
// 导入评论组件
import Comment from '@/components/comment'
export default {
  data () {
    return {
      articleId: 0,
      article: {},
      errorImage: 'this.src="' + require('@/assets/images/defaultavatar.png') + '"'
    }
  },
  components: {
    Comment,
    Toptabbar
  },
  methods: {

    /* 获取文章内容 */
    async getArticle () {
      this.articleId = this.$route.params.articleId
      /* 根据Id获取文章 */
      const res = await this.$getArticleById(this.articleId)
      if (res.code !== 0) return alert('文章不见啦！')
      this.article = res.data.article
      /* 插入文章内容 */
      const _this = this
      // 不加$nextTick报错，原因在找
      this.$nextTick(() => {
        const container = document.querySelector('.article-content')
        const content = document.createElement('div')
        content.innerHTML = _this.article.article_content
        container.appendChild(content)
      })
    }

  },
  created () {
    this.getArticle()
  },
  computed: {
  }
}
</script>

<style scoped lang="less">
.post-container{
  background-color: #f4f5f5;
  #post{
  padding: 30px 30px;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  /* 文章信息 */
  .article-info{
    // height: 350px;
    /* 文章标题 */
    .article-title{
      font-size: 24px;
      color: #252933;
    }
    /* 文章作者信息 */
    .author-info{
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin: 30px 0;

      .avatar{
        display: inline-block;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        overflow: hidden;
        img{
          height: 40px;
        }
      }

      .author-info-box{

        .author-name{
          color: #515767;
          .author-level{
            display: inline-block;
            width: 23px;
            height: 14px;
            background-color: #6eceff;
            color: #fff;
            font-size: 12px;
            text-align: center;
            line-height: normal;
          }
        }

        .meta-info{

            font-size: 12px;
            color:#4e5969;

        }

      }

      .follow-button{

          span{
            color: #1e80ff;
            border: 1px solid rgba(30,128,255,.3);
            background-color: rgba(30,128,255,.05);
          }
        }

    }
    /* 文章封面 */
    .article-cover{
      width: 100%;
    }

  }
  /* 文章内容 */
  .article-content{
    font-size: 15px;
  }
  }
}

</style>
