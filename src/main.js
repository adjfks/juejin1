import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入API接口方法
import { getCategories, getArticleById, getArticles, getCommentsByArticleId } from './fake-api'
// 引入字体图标
import '@/assets/fonts/iconfont.css'
// 导入文章列表组件
import ArticleList from '@/components/ArticleList'
import Show from '@/components/Show'
// 挂载方法
Vue.config.productionTip = false
Vue.prototype.$getCategories = getCategories
Vue.prototype.$getArticleById = getArticleById
Vue.prototype.$getArticles = getArticles
Vue.prototype.$getCommentsByArticleId = getCommentsByArticleId
// 挂在一个数组，用于存放浏览过的文章id
Vue.prototype.$history = []
Vue.component('ArticleList', ArticleList)
Vue.component('Show', Show)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
