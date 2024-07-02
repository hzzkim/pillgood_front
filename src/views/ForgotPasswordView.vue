<template>
  <div class="box-container">
    <form @submit.prevent="submitRequest">
    <div>
    <h4 class="text-melon">비밀번호 재설정</h4>
      <table>
        <tr>
          <td>
            <label class="text-melon" for="email">이메일</label>
          </td>
          <td>
            <input type="email" class="input-box" v-model="email" required />
          </td>
        </tr>
        <tr>
          <td>
            <label class="text-melon" for="phoneNumber">휴대전화번호</label>
          </td>
          <td>
            <input type="text" class="input-box" v-model="phoneNumber" required />
          </td>
        </tr>
      </table>
      <div class="btn-container">
        <button type="submit" class="btn btn-green">비밀번호 재설정 링크 보내기</button>
      </div> 
    </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import '../assets/styles.css'

export default {
  data() {
    return {
      email: '',
      phoneNumber: ''
    }
  },
  methods: {
    submitRequest() {
      axios
        .post('http://localhost:9095/forgot-password', {
          email: this.email,
          phoneNumber: this.phoneNumber
        })
        .then(response => {
          console.log(response.data);
          alert('비밀번호 재설정 링크가 이메일로 전송되었습니다.');
          this.$router.push('/login');
        })
        .catch(error => {
          console.error(error);
          alert('이메일 또는 휴대전화번호가 일치하지 않습니다.');
        });
    }
  }
}
</script>

<style scoped>
.cancel-button {
  background-color: #f2f2f2;
}
</style>