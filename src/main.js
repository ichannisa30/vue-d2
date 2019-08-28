import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3IiOiJXZWJzZXJ2aWNlIFRlc3RlciA2IiwidWlkIjoiU0RNIiwicm9sIjoid2Vic2VydmljZSIsImtkcyI6IldTVEVTNiIsImtkYiI6IiIsImtkdCI6IjIwMTkiLCJpYXQiOjE1NjM4NTI3NzYsIm5iZiI6MTU2Mzg1MjE3Niwia2lkIjoiMTIwMSJ9.Vw5tTdTUc1HNn6KKtQO4CgrixjPBplZ1GCT_KU78PS4";


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
