import Vue from 'vue'
import Router from 'vue-router'
import userRouter from './user.js'
import loginRouter from './login.js'
import resumeRouter from './resume.js'
import previewRouter from './preview.js'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    userRouter,
    loginRouter,
    resumeRouter,
    previewRouter
  ]
})
