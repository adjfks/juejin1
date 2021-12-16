<template>
<div id="reply-bg">
  <div class="comment-container">
    <div class="comment-list">
        <!-- 评论项 -->
        <div class="comment-item" v-for="item in replyInfo" :key="item.reply_id">

          <!-- 评论左侧头像 -->
          <div class="avatar">
            <img :src="item.user_info.avatar_large ? item.user_info.avatar_large : '@/assets/images/defaultavatar.png'" :onerror="errorImage" alt="">
          </div>

          <!-- 评论右侧区域 -->
          <div class="content-box">
            <div class="comment-main">
            <!-- 用户信息 -->
              <div class="user-info">
                <span class="name">{{item.user_info.user_name}}</span><span class="author-level">LV{{item.user_info.level}}</span>
              </div>
              <!-- 评论内容 -->
              <div class="content">{{item.reply_info.reply_content}}</div>
              <!-- 点赞图标 -->
              <div class="action-box">
                <div class="dig-item">
                  <span class="iconfont size">&#xec7f;</span>
                </div><span>{{item.reply_info.digg_count}}</span>
                <div class="response-item">
                  <span class="iconfont size">&#xe6ad;</span><span>{{item.reply_info.burry_count}}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      replyInfo: [],
      /* 头像请求失败时替换为默认头像 */
      errorImage: 'this.src="' + require('@/assets/images/defaultavatar.png') + '"'
    }
  },
  props: {
    reply: {
      type: Object
    }
  },
  created () {
    // console.log(this.reply, 'replay')
    this.replyInfo = this.reply.reply_infos
    // console.log(this.replyInfo, 'replys')
  }
}
</script>

<style lang="less" scoped>
#reply-bg{
  /* 评论区背景样式 */

  border-radius: 5px;
  background-color: #f4f5f5;
  margin-bottom: 10px;
  margin-top: 10px;

  .comment-container{
    padding: 0;
    /* 评论列表 */
    .comment-list{

      .top{
        font-size: 18px;
        margin-bottom: 30px;
      }

      .comment-item{
        display: flex;
        padding: 15px 10px;

        /* 左侧区域 */
        .avatar{
          width: 40px;
          img{
            width: 40px;
            border-radius: 20px;
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
              margin-top: 10px;
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

        }

      }
    }
  }

}
</style>
