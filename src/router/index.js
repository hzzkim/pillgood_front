import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Register from '../views/RegisterMember.vue'
import Login from '../views/LoginView.vue'
import ForgotPassword from '../views/ForgotPasswordView.vue'
import ChangePassword from '../views/ChangePasswordView.vue'
import MyPage from '../views/MyPage.vue'

import Template from '../views/Template.vue'

const routes = [
  {path: '/', component: Home},
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path: '/forgotpassword', component: ForgotPassword},
  {path: '/changepassword', component: ChangePassword},
  {path: '/mypage', component: MyPage},
  {path: '/template', component: Template}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
