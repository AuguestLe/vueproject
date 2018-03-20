import Vue from 'vue'
import App from './App.vue'

// 引入静态资源
require('./assets/css/bootstrap.min.css')
require('./assets/css/style.css')
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


