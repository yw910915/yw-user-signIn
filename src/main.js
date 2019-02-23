import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import './styles/common.css'
import axios from "axios"

//将Axios挂载到vue的原型中
Vue.prototype.$http=axios;
//全局配置baseURL
axios.defaults.baseURL = 'http://litc.pro:9999/v1';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')