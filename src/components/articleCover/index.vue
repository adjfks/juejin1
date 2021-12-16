<template>
  <div id="articleCover" @click="gotoPost">
    <div class="artContainer" :style="{'max-width':fullWidth}">
      <!-- 作者 标签 -->
      <div class="articleInfo">
        <label class="author">{{authorName}}</label>
        <span>|</span>
        <label>{{days}}天前</label>
        <span>|</span>
        <label>{{secCategoty}}</label>
      </div>
      <div class="main-container">
        <!-- 标题简要内容 -->
        <div class="main-left" :style="{'max-width':leftWidth}">
          <h1>{{title}}</h1>
          <p>{{briefContent}}</p>
          <!-- 点赞评论数 -->
          <div class="state">
            <ul>
              <li>
                <i>
                  <img src="@/assets/images/view.png" alt="" >
                </i>
                <span>{{views}}</span>
              </li>
              <li>
                <i>
                  <img src="@/assets/images/praise.png" alt="" >
                </i>
                <span>{{praise}}</span>
              </li>
              <li>
                <i>
                  <img src="@/assets/images/comment.png" alt="" >
                </i>
                <span>{{comment}}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 图片区 -->
        <div class="main-right">
          <img :src="cover ? cover : '@/assets/images/defaultCover.png'" :onerror="errorImage" alt="pic" id="cover">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      fullWidth: document.documentElement.clientWidth,
      errorImage: 'this.src="' + require('@/assets/images/defaultCover.png') + '"'
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    cover: {
      type: String,
      default: ''
    },
    authorName: {
      type: String,
      default: '用户名'
    },
    time: {
      type: String
    },
    secCategoty: {
      type: String
    },
    briefContent: {
      type: String,
      default: ''
    },
    views: {
      type: Number,
      default: 0
    },
    praise: {
      type: Number,
      default: 0
    },
    comment: {
      type: Number,
      default: 0
    },
    articleId: {
      type: String,
      default: ''
    }
  },
  computed: {
    days () {
      return parseInt(parseInt(this.time) / 1000 / 60 / 60 / 24)
    },
    // 计算左侧标题和简要内容宽度，实现自适应屏幕
    leftWidth () {
      const rightWidth = '145'
      return (this.fullWidth - rightWidth - 20) + 'px'
    }
  },
  methods: {
    handleResize (event) {
      this.fullWidth = document.documentElement.clientWidth
    },
    /* 前往文章页 */
    gotoPost () {
      // 将文章id存放进全局数组
      this.$history.push(this.articleId)
      this.$router.push(`/post/${this.articleId}`)
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }

}
</script>

<style scoped lang="less">
.artContainer {
  padding:0 12px;
  cursor: pointer;
  /* 作者 标签区 */
  .articleInfo {
    color: #4e5969;
    font-size: 13px;
    margin-top: 10px;
    label {
      color: #86909c;
    }
    .author{
      color: #4e5969;
    }
    span{
      margin: 0 5px;
      color: #ededf1;
    }
  }

  .main-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f6f6f8;
    padding-bottom: 15px;
    /* 标题和简要内容 */
    .main-left{
      h1 {
        font-size: 16px;
        padding: 5px 0;
        margin-top: 10px;
        color: #1d2129;
      }

      p{
        margin: 8px 0;
        color: #86909c;
      }

      h1,p{
        white-space: nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      }
      /* 点赞评论数 */
      .state{
          margin-top: 10px;
          color: #86909c;
          li {
            display: inline-block;
            height: 15px;
            margin-right: 15px;

            i {
              width: 10px;
              display: inline-block;
              margin-right: 8px;
              img{
                width: 15px;
                vertical-align: middle;
              }
            }

            span{
              font-size: 13px;
            }
          }

        }
      }
    /* 右边图片区 */
    .main-right{

      img{
        width: 120px;
        height: 80px;
      }
    }

  }

}

</style>
