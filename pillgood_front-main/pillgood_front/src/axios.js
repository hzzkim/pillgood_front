import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9095', // 백엔드 서버 주소
  withCredentials: true // 세션 쿠키를 포함하여 요청
});

export default instance;
