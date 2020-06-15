import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VCharts from 'v-charts'
import store from './store'
import JsonExcel from 'vue-json-excel'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.component('downloadExcel', JsonExcel)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VCharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
