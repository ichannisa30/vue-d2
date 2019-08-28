import Vue from 'vue'
import Router from 'vue-router'
import ProductList from './views/ProductList.vue'
import ProductAdd from './views/ProductAdd.vue'
import Posts from './views/AllPosts.vue'
import DetailPost from './views/DetailPost.vue'
import Kurs from './views/Kurs.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'productlist',
      component: ProductList
    },
    {
      path: '/productadd',
      name: 'productadd',
      component: ProductAdd
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/detailpost/:idPost',
      name: 'detailpost',
      component: DetailPost
    },
    {
      path: '/kurs',
      name: 'kurs',
      component: Kurs
    }
  ]
})
