import Vue from "vue";
import router from "./router";
import store from "./store";
import moment from "moment";
import indexDB from "./indexDB";
import Antd from "ant-design-vue/es";
import "ant-design-vue/dist/antd.less";
moment.locale("zh-cn");

indexDB.init();
Vue.use(Antd);
Vue.config.productionTip = false;
Vue.prototype.$moment = moment;

new Vue({
  router,
  store,
  render: h => h("router-view")
}).$mount("#app");
