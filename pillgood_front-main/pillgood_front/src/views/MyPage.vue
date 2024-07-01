<template>
  <div class="main-container box-shadow">
    <div class="box-container">
      <h4 class="text-melon">마이페이지</h4>
      <div>
        <div v-if="user">
          <table>
            <tr>
              <td><label for="email">이메일:</label></td>
              <td><input type="email" :value="user.email" :readonly="!isEditing"/></td>
            </tr>
            <tr>
              <td><label for="name">이름:</label></td>
              <td><input type="email" :value="user.name" :readonly="!isEditing"/></td>
            </tr>
            <tr>
              <td><label for="age">나이:</label></td>
              <td><input type="email" :value="user.age" readonly/></td>
            </tr>
            <tr>
              <td><label for="gender">성별:</label></td>
              <td>
                <select v-model="user.gender" v-if="isEditing" required>
                  <option value="N">성별을 선택하세요</option>
                  <option value="M">남자</option>
                  <option value="F">여자</option>
                </select>
                <input type="text" :value="user.gender" v-else readonly/>
              </td>
            </tr>
            <tr>
              <td><label for="phoneNumber">전화번호:</label></td>
              <td><input type="email" :value="user.phoneNumber" :readonly="!isEditing"/></td>
            </tr>
            <tr>
              <td><label for="subscriptionStatus">구독 상태:</label></td>
              <td><input type="email" :value="user.subscriptionStatus" readonly/></td>
            </tr>
            <tr>
              <td><label for="registrationDate">가입 일자:</label></td>
              <td><input type="email" :value="user.registrationDate" readonly/></td>
            </tr>
          </table>
          <div class="btn-container">
            <button v-if="!isEditing" class="btn btn-green" @click="showPasswordPrompt">수정하기</button>
            <button v-else class="btn btn-green" @click="updateMember">저장하기</button>
            <button v-if="isEditing" class="btn btn-gray" @click="cancelEdit">취소</button>
          </div>
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </div>
    </div>

    <!-- 비밀번호 확인 모달찰 -->
    <div v-if="showPasswordModal" class="modal">
      <div class="box-container box-shadow">
        <h4>비밀번호 확인</h4>
        <input type="password" v-model="password" placeholder="비밀번호를 입력하세요" />
        <div class="btn-container">
          <button class="btn btn-green" @click="verifyPassword">비밀번호 확인</button>
          <button class="btn btn-gray" @click="closePasswordModal">취소</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MyPage',
  data() {
    return {
      user: null,
      isEditing: false,
      password: '', // Add password field
      showPasswordModal: false,
    };
  },
  created() {
    this.fetchUserProfile();
  },
  methods: {
    async fetchUserProfile() {
      try {
        const response = await axios.get('http://localhost:9095/members/mypage', { withCredentials: true });
        if (response.status === 200) {
          this.user = response.data;
        } else {
          console.error('Failed to fetch user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    },
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
    showPasswordPrompt() {
      this.showPasswordModal = true;
    },
    closePasswordModal() {
      this.showPasswordModal = false;
    },
    async verifyPassword() {
      try {
        const verifyResponse = await axios.post('http://localhost:9095/members/verifyPassword', {
          memberId: this.user.memberUniqueId,
          password: this.password,
        });
        if (verifyResponse.status === 200) {
          this.isEditing = true;
          this.showPasswordModal = false;
        } else {
          alert('비밀번호가 일치하지 않습니다.');
        }
      } catch (error) {
        console.error('Error verifying password:', error);
        alert('비밀번호 확인에 실패했습니다.');
      }
    },
    async updateMember() {
      try {
        const response = await axios.put(`http://localhost:9095/members/update/${this.user.memberUniqueId}`, this.user);
        if (response.status === 200) {
          this.user = response.data;
          this.isEditing = false;
          alert('회원 정보가 성공적으로 수정되었습니다.');
        } else {
          console.error('Failed to update member information');
        }
      } catch (error) {
        console.error('Error updating member information:', error);
        alert('회원 정보 수정에 실패했습니다.');
      }
    },
    cancelEdit() {
      this.isEditing = false;
      this.fetchUserProfile();
    },
  },
};
</script>