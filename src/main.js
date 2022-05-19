import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './mock/index.js'
import "./router/promission"
Vue.config.productionTip = false
import api from '../src/api/index.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.$api = api
import "../src/assets/css/globel.css"
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')