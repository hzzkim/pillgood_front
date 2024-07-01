<template>
  <header>
    <div class="header-container header-shadow">
      <header class="header-shadow">
        <div class="container">
          <div class="form-container">
            <!-- 로고 이미지 -->
            <div class="logo-container">
              <router-link to="/">
              <img src="../assets/pillgood_logo.png">&nbsp;
              <span>: 필굿</span>
              </router-link>
            </div>
            <!-- 검색창 -->
            <div class="search-container">
              <input type="search" placeholder="검색어를 입력하세요" aria-label="Search"
                class="form-control form-control-white text-bg-white search-input">
            </div>
            <!-- 아이콘 -->
            <div class="icon-container">
              <router-link v-if="isLoggedIn" to="/mypage" class="icon-link">
                <i class="fa-solid fa-user"></i>
              </router-link>
              <button v-if="isLoggedIn" @click="logout" class="icon-link">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </button>
              <router-link v-else to="/login" class="icon-link">
                <i class="fa-solid fa-user"></i>
              </router-link>
              <i class="fa-solid fa-location-dot"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
          <!-- 카테고리 -->
          <nav class="nav-container">
            <ul>
              <li><a href="#"><i class="fa-solid fa-bars"></i>&nbsp;카테고리</a></li>
              <li><a href="#">신제품</a></li>
              <li><a href="#">베스트</a></li>
              <li><a href="#">필굿리포트</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import '../assets/layout.css';

export default {
  name: 'HeaderView',
  computed: {
    ...mapState({
      isLoggedIn: state => state.isLoggedIn
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  },
  watch: {
    isLoggedIn(newVal) {
      console.log('로그인 상태 변경:', newVal);
    }
  },
  created() {
    // 주기적으로 isLoggedIn 상태 확인
    setInterval(() => {
      // isLoggedIn 상태를 확인하는 디버깅 로그를 추가
      // console.log('mapState 안 된다고!!!! :', this.isLoggedIn);
      console.log('10초마다 isLoggedIn 상태 확인:', this.$store.state.isLoggedIn);
    }, 10000); // 10초마다 실행
  }
};
</script>
