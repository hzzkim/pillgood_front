import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Register from '../views/RegisterMember.vue';
import Login from '../views/LoginView.vue';
import ForgotPassword from '../views/ForgotPasswordView.vue';
import ChangePassword from '../views/ChangePasswordView.vue';
import MyPage from '../views/MyPage.vue';
import Template from '../views/Template.vue';

// 기존 코드에서 추가된 컴포넌트들
import ProductDetail from '../views/ProductDetail.vue';
import CartPage from '../views/CartPage.vue'; // CartPage.vue로 이름 수정

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/forgotpassword', component: ForgotPassword },
  { path: '/changepassword', component: ChangePassword },
  { path: '/mypage', component: MyPage },
  { path: '/template', component: Template },
  // 추가된 부분
  { 
    path: '/productDetail/:id', // 동적 라우팅을 위해 :id 추가 
    name: 'ProductDetail', // 이름 수정 (소문자에서 대문자로)
    component: ProductDetail, 
    props: true 
  },
  { 
    path: '/cart', // 동적 라우팅 부분 제거
    name: 'CartPage', // 이름 수정 (소문자에서 대문자로)
    component: CartPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
