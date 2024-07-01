<template>
  <div id="app">
    <HeaderView/>
    <router-view />
    <FooterView/>
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
    this.$store.dispatch('checkLoginStatus').then(() => {
      if (this.$store.state.isLoggedIn && this.$store.state.memberId) {
        this.$store.dispatch('fetchMemberInfo', this.$store.state.memberId);
      } else {
        console.log('로그인되지 않았거나 memberId가 없음');
      }
    }).catch((error) => {
      console.error('checkLoginStatus 에러:', error);
    });

    setInterval(() => {
      this.$store.dispatch('checkLoginStatus').then(() => {
        if (this.$store.state.isLoggedIn) {
          this.$store.dispatch('fetchMemberInfo', this.$store.state.memberId);
          const member = this.$store.state.member;
          if (member) {
            // 현재 로그인된 사용자 정보 확인
          } else {
            console.log(`로그인한 사용자가 없습니다.`);
          }
        } else {
          alert('로그인된 사용자가 없음.');
        }
      });
    }, 30000);

    this.$watch(
      () => this.$store.state.isLoggedIn,
      (newVal) => {
        console.log('A 로그인 상태 변경:', newVal);
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
