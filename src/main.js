
import Vue from "vue";
import VueI18n from "vue-i18n";
import Cookies from 'js-cookie';
import ElementUI from 'element-ui';

import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify';

Vue.use(VueI18n);
Vue.use(ElementUI);

Vue.config.productionTip = false;

// languages
const i18n = new VueI18n({
  locale: Cookies.get('language') || 'en',
  messages: {
    zh: require("./assets/lang/zh"),
    en: require("./assets/lang/en")
  }
})


new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
