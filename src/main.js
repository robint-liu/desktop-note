import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import Antd from 'ant-design-vue/es'
import 'ant-design-vue/dist/antd.less'

Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
