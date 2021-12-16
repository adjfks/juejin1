<template>
<div id="comment-bg">
  <div class="comment-container">
    <h1>评论</h1>
    <textarea name="comment" id="1" cols="30" rows="2" class="comment-text" placeholder="请输入评论"></textarea>
    <!-- 评论列表 -->
    <div class="comment-list">
        <h1 class="top">全部评论&nbsp;&nbsp;{{commentCount}}</h1>
        <!-- 评论项 v-for -->
        <div class="comment-item" v-for="item in comments" :key="item.comment_id">

          <!-- 评论左侧头像 -->
          <div class="avatar">
            <img :src="item.user_info.avatar_large ? item.user_info.avatar_large : '@/assets/images/defaultavatar.png'" :onerror="errorImage" alt="">
          </div>

          <!-- 评论右侧区域 -->
          <div class="content-box">
            <div class="comment-main">
            <!-- 用户信息 -->
              <div class="user-info">
                <span class="name">{{item.user_info.user_name}}</span><span class="author-level">LV{{ item.user_info.level}}</span>
              </div>
              <!-- 评论内容 -->
              <div class="content">{{item.comment_info.comment_content}}</div>
              <!-- 点赞图标 -->
              <div class="action-box">
                <div class="dig-item">
                  <span class="iconfont size">&#xec7f;</span>
                </div><span>{{item.comment_info.digg_count}}</span>
                <div class="response-item">
                  <span class="iconfont size">&#xe6ad;</span><span>{{item.comment_info.reply_count}}</span>
                </div>
              </div>
              <!-- 回复组件 -->
              <div class="reply-box">
                <Reply :reply="item"></Reply>
              </div>
            </div>
          </div>

        </div>
    </div>
  </div>
  <div class="more-comment-button iconfont" @click="showMore" v-if="hasMore">更多评论&nbsp;&#xe6b9;</div>
  <div class="all-loaded" v-if="!hasMore">没有更多啦~</div>
</div>
</template>

<script>
// 导入回复组件
import Reply from '@/components/reply.vue'
export default {
  data () {
    return {
      comments: [],
      offset: 0,
      /* 头像请求失败时替换为默认头像 */
      errorImage: 'this.src="' + require('@/assets/images/defaultavatar.png') + '"',
      limit: 10,
      hasMore: true,
      commentCount: 0
    }
  },
  props: {
    articleId: {
      type: String
    }
  },
  components: {
    Reply
  },
  methods: {
    /* 获取文章评论 */
    async getComments () {
      if (this.hasMore) {
        const res = await this.$getCommentsByArticleId(this.articleId, this.offset, this.limit)
        if (res.code === 0) {
          // 更新offset
          this.offset += this.limit
          // 更新hasMore
          this.hasMore = res.has_more
          // 评论总数
          this.commentCount = res.total
          this.comments.push(...res.data.comments)
        }
      }
    },
    /* 获取更多评论 */
    showMore () {
      this.getComments()
    }
  },
  created () {
    this.getComments()
  }
}
</script>

<style lang="less">
#comment-bg{
  height: 1000px;
  /* 评论区背景样式 */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 30px;
  background-color: #fff;

  .comment-container{
    padding: 30px 30px;
    h1{
      font-size: 24px;
    }
    /* 评论输入框 */
    .comment-text{
      margin: 20px 0;
      background-color: #f4f5f5;
      // box-sizing: border-box;
      width: 100%;
      height: 60px;
      padding: 8 12px;
      color: #8a919f;
    }
    /* 评论列表 */
    .comment-list{

      .top{
        font-size: 18px;
        margin-bottom: 30px;
      }

      .comment-item{
        display: flex;

        /* 左侧区域 */
        .avatar{
          img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }

        /* 右侧区域 */
        .content-box{

          width: 100%;
          padding: 0 10px;

          /* 上方评论主要内容区 */
          .comment-main{

            /* 顶部用户信息 */
            .user-info{
              color: #252933;
              font-size: 15px;
              .author-level{
                display: inline-block;
                width: 23px;
                height: 14px;
                background-color: #6eceff;
                color: #fff;
                font-size: 12px;
                text-align: center;
                line-height: normal;
                margin-left: 10px;
              }

            }

            /* 评论内容 */
            .content{
              padding: 15px 0;
              color: #515767;
              font-size: 14px;
            }

            /* 点赞回复图标盒子 */
            .action-box{

              display: flex;
              font-size: 16px;
              color:#8a919f;
              /* 点赞图标 */
              .dig-item{

              }

              /* 回复图标 */
              .response-item{
                margin-left: 10px;
              }
            }

          }

          /* 下方评论回复区 */
          .reply-box{

          }
        }

      }
    }
  }

  .more-comment-button{
    margin: 20px 30px;
    background-color: #f4f5f5;
    padding: 10px 20px;
    border-radius: 10px;
    text-align: center;
    color:#252933;
    font-size: 15px;
  }

  .all-loaded{
    text-align: center;
    color: #85a3d1;
    padding: 0 0 20px 0;
  }

}
</style>
