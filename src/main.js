// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/index.scss'
import App from './App'
import router from './router'

Vue.use(ElementUI);

Vue.config.productionTip = false

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next();
  } else {
    let token = localStorage.getItem('mytoken');
    if (token) {
      next();
    } else {
      next('/login');
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
