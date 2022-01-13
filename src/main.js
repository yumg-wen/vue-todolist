import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this //安裝全局事件總線(任意組件通信用)
  }
 
}).$mount('#app')
