<template>
  <div id="app">
    <HeaderView />
    <main class="main-content">
    <router-view />
    </main>
    <FooterView />
  </div>
</template>


<script>
import HeaderView from './components/HeaderView.vue'
import FooterView from './components/FooterView.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    HeaderView,
    FooterView
  },
  computed: {
    ...mapState({
      isLoggedIn: state => state.isLoggedIn,
      memberId: state => state.memberId,
      member: state => state.member
    })
  },
  methods: {
    ...mapActions(['checkLoginStatus', 'fetchMemberInfo']),
  },
  created() {
  // console.log('App created lifecycle hook');
  this.$store.dispatch('checkLoginStatus').then(() => {
    // console.log('checkLoginStatus 처리 완료');
    // console.log("state의 memberId: " + this.$store.state.memberId); // 상태 업데이트 확인
    if (this.$store.state.isLoggedIn && this.$store.state.memberId) {
      // console.log('로그인됨, 사용자 정보 가져오는 중');
      this.$store.dispatch('fetchMemberInfo', this.$store.state.memberId);
    } else {
      console.log('로그인되지 않았거나 memberId가 없음');
    }
  }).catch((error) => {
    console.error('checkLoginStatus 에러:', error);
  });

  // 주기적으로 세션 상태 확인
  // setInterval(() => {
  //   this.$store.dispatch('checkLoginStatus').then(() => {
  //     if (this.$store.state.isLoggedIn) {
  //       // console.log('30초마다 세션 테스트 중');
  //       this.$store.dispatch('fetchMemberInfo', this.$store.state.memberId); // memberId 전달
  //       const member = this.$store.state.member;
  //       if (member) {
  //         // console.log(`현재 로그인된 사용자 ID: ${this.$store.state.memberId}`)
  //       } else {
  //         console.log(`로그인한 사용자가 없습니다.`)
  //       }
  //     } else {
  //       alert('로그인된 사용자가 없음.')
  //     }
  //   });
  // }, 30000); // 30초마다 실행

    this.$watch(
      () => this.$store.state.isLoggedIn,
      (newVal) => {
        console.log('A 로그인 상태 변경:', newVal); // 상태 변경 확인
      },
      { immediate: true }
    );
  }
}
</script>

<style>
@import './assets/layout.css';

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>