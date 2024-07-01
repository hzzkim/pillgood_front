import { createStore } from 'vuex';
import axios from './axios'; // 설정된 axios 인스턴스 불러오기

export default createStore({
  state: {
    isLoggedIn: false,
    memberId: null, // 사용자 ID를 저장할 상태
    member: null // 사용자 정보를 저장할 상태
  },
  mutations: {
    setLoginState(state, payload) {
      if (payload.memberId !== undefined) { // memberId가 undefined가 아닌 경우에만 업데이트
        state.isLoggedIn = payload.isLoggedIn;
        state.memberId = payload.memberId;
        state.member = payload.member;
        console.log('상태 업데이트 - isLoggedIn:', state.isLoggedIn, 'memberId:', state.memberId); 
      }
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        const response = await axios.post('/members/login', { email, password });
        if (response.status === 200) {
          const memberId = response.data.memberId; // 서버 응답에서 memberId 추출
          console.log("서버 응답에서 memberId 추출: ", memberId)
          commit('setLoginState', { isLoggedIn: true, memberId: memberId, member: null });
          localStorage.setItem('loggedIn', true); //문자열로 저장
          await this.dispatch('fetchMemberInfo', memberId); // memberId 전달
        } else {
          console.error('axios 로그인 실패: ', response.data);
        }
      } catch (error) {
        console.error('axios 로그인 에러: ', error);
      }
    },
    async fetchMemberInfo({ state, commit }, memberId) {
      try {
        // memberId가 전달되지 않으면 state에서 가져옴
        memberId = memberId || state.memberId;
        // console.log('Fetching member info for ID:', memberId); // 디버깅 로그
        const response = await axios.get(`/members/findById`, { params: { memberId } });
        // console.log('사용자 정보 응답:', response.data); // 디버깅 로그 추가
        if (response.status === 200) {
          // console.log('fetchMemberInfo If Test: ', response.status)
          // console.log('fetchMemberId memberId: ' + memberId)
          commit('setLoginState', { isLoggedIn: true, memberId: memberId, member: response.data });
        } else {
          commit('setLoginState', { isLoggedIn: false, memberId: null, member: null });
        }
      } catch (error) {
        commit('setLoginState', { isLoggedIn: false, memberId: null, member: null });
        // console.log('사용자 정보 가져오기 에러: ', error);
      }
    },
    async checkLoginStatus({ commit }) {
      try {
        const response = await axios.get('/members/check-session', { withCredentials: true });
        // console.log('세션 체크 응답:', response.data); // 디버깅 로그 추가
        if (response.status === 200) {
          // console.log("checkLoginStatus response: " + response.status)
          const memberId = response.data.user.memberUniqueId; // 세션 체크 응답에서 memberId 추출
          // console.log("checkLoginStatus memberId: " + memberId)
          await this.dispatch('fetchMemberInfo', memberId); // memberId 전달
        } else {
          commit('setLoginState', { isLoggedIn: false, memberId: null, member: null });
        }
      } catch (error) {
        commit('setLoginState', { isLoggedIn: false, memberId: null, member: null });
        // console.log('세션 확인 에러: ', error);
      }
    },    
    async logout({ commit }) {
      try {
        await axios.post('http://localhost:9095/members/logout', {}, { withCredentials: true });
        commit('setLoginState', { isLoggedIn: false, memberId: null, member: null });
        localStorage.removeItem('loggedIn');
      } catch (error) {
        console.error('로그아웃 에러: ', error);
      }
    }
  }
});
