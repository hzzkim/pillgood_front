<template>
  <div class="box-container">
      <h4 class="text-melon">비밀번호 변경</h4>
      <form @submit.prevent="changePassword">
      <table>
        <tr>
          <td>
            <label for="newPassword" class="text-melon">새 비밀번호</label>
          </td>
          <td>
            <input type="password" class="input-box" v-model="newPassword" required />
          </td>
        </tr>
        <tr>
          <td>
            <label for="confirmPassword" class="text-melon">비밀번호 확인</label>
          </td>
          <td>
            <input type="password" class="input-box" v-model="confirmPassword" required />
          </td>
        </tr>
      </table>
      <div class="btn-container">
        <button type="submit" class="btn btn-submit">비밀번호 변경</button>
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
    newPassword: '',
    confirmPassword: '',
    token: ''
  }
},
created() {
  // 토큰을 URL 파라미터에서 가져옵니다
  this.token = this.$route.query.token
},
methods: {
  changePassword() {
    if (this.newPassword !== this.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    axios
      .post('http://localhost:9095/change-password', {
        token: this.token,
        newPassword: this.newPassword
      })
      .then(response => {
        console.log(response.data);
        alert('비밀번호가 성공적으로 변경되었습니다.');
        this.$router.push('/login');
      })
      .catch(error => {
        console.error(error);
        alert('비밀번호 변경에 실패했습니다. 다시 시도해주세요.');
      });
  }
}
}
</script>