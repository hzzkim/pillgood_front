<template>
  <!-- 약관동의 -->
  <div v-if="!formVisible" id="register_agree" class="box-container box-shadow">
    <h4 class="text-melon">회원 가입</h4>
    <h6>[약관 동의]</h6>
    <form id="agreementfrm" @submit.prevent="validateAgreement" >
      <div id="fregister_chkall" class="check-container">
        <input type="checkbox" v-model="allChecked" @change="checkAllAgreements" id="chk_all">
        <label for="chk_all">회원가입 약관에 모두 동의합니다</label>
      </div>
      <hr style="color: gray; width: 400px; margin: 0 auto;">
      <section id="fregister_term">
        <div id="fregister_agree2" class="check-container">
          <input type="checkbox" v-model="agree11" id="agree11">
          <label for="chk_all">이용약관 동의(필수)</label>
        </div>
        <TermsContent1/>
      </section>
      <section id="fregister_private">
        <div id="fregister_agree2" class="check-container">
          <input type="checkbox" v-model="agree22" id="agree22">
          <label for="chk_all">개인정보 수집 이용 동의(필수)</label>
        </div>
        <TermsContent2/>
      </section>
      <div class="btn-container">
        <button type="button" class="btn btn-gray" @click="toLogin">돌아가기</button>
        <button type="submit" class="btn btn-green">다음으로</button>
      </div>
    </form>
  </div>
  <!-- 회원가입 -->
  <div class="box-container box-shadow" v-if="formVisible">
  <form @submit.prevent="createMember" id="createMemberfrm">
    <table>
      <tr>
        <td><label for="email">이메일:</label></td>
        <td>
          <input type="email" v-model="member.email" @blur="validateEmail" required />
          <p v-if="errors.email" class="text-danger">{{ errors.email }}</p>
        </td>
      </tr>
      <tr>
        <td><label for="password">비밀번호:</label></td>
        <td>
          <input type="password" v-model="member.password" @blur="validatePassword" required />
          <p v-if="errors.password" class="text-danger">{{ errors.password }}</p>
        </td>
      </tr>
      <tr>
        <td><label for="name">이름:</label></td>
        <td>
          <input type="text" v-model="member.name" @blur="validateName" required />
          <p v-if="errors.name" class="text-danger">{{ errors.name }}</p>
        </td>
      </tr>
      <tr>
        <td><label for="age">나이:</label></td>
        <td>
          <input type="number" v-model="member.age" @blur="validateAge" required />
          <p v-if="errors.age" class="text-danger">{{ errors.age }}</p>
        </td>
      </tr>
      <tr>
        <td><label for="gender">성별:</label></td>
        <td>
          <select v-model="member.gender" @blur="validateGender" required>
            <option value="N">성별을 선택하세요</option>
            <option value="M">남자</option>
            <option value="F">여자</option>
          </select>
          <span v-if="errors.gender" class="text-danger">{{ errors.gender }}</span>
        </td>
      </tr>
      <tr>
        <td><label for="phoneNumber">전화번호:</label></td>
        <td>
          <input type="text" v-model="member.phoneNumber" @blur="validatePhoneNumber" required />
          <span v-if="errors.phoneNumber" class="text-danger">{{ errors.phoneNumber }}</span>
        </td>
      </tr>
    </table>
    <div class="btn-container">
      <button type="submit" class="btn btn-green">회원 가입</button>
      <button type="button" class="btn btn-gray" @click="cancelRegistration">취소</button>
    </div>
  </form>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  import '../assets/styles.css';
  import TermsContent1 from '@/components/TermsContent1.vue';
  import TermsContent2 from '@/components/TermsContent2.vue';
  
  export default {
    components: {
      TermsContent1,
      TermsContent2
    },
    data() {
      return {
        member: {
          email: '',
          password: '',
          name: '',
          age: '',
          gender: 'N',
          phoneNumber: '',
        },
        allChecked: false,
        agree11: false,
        agree22: false,
        formVisible: false,
        errors: {},
      }
    },
    watch: {
      agree11() {
        this.updateAllChecked();
      },
      agree22() {
        this.updateAllChecked();
      }
    },
    methods: {
      checkAllAgreements() {
        if(this.allChecked) {
          this.agree11 = true;
          this.agree22 = true;
        } else {
          this.agree11 = false;
          this.agree22 = false;
        }
      },
      updateAllChecked() {
        this.allChecked = this.agree11 && this.agree22;
      },
      validateAgreement() {
        if (this.agree11 && this.agree22) {
          this.formVisible = true;
        } else {
          alert("모든 필수 약관에 동의해야 합니다.");
        }
      },
      toLogin() {
        this.$router.push('/login');
      },
      validateEmail() {
        if (!this.member.email.includes('@')) {
          this.errors.email = '유효한 이메일 주소를 입력하세요.';
        } else {
          delete this.errors.email;
        }
      },
      validatePassword() {
        if (this.member.password.length < 6) {
          this.errors.password = '비밀번호는 최소 6 자 이상이어야 합니다.';
        } else {
          delete this.errors.password;
        }
      },
      validateName() {
        if (this.member.name.trim() === '') {
          this.errors.name = '이름을 입력하세요.';
        } else {
          delete this.errors.name;
        }
      },
      validateAge() {
        if (this.member.age <= 0) {
          this.errors.age = '유효한 나이를 입력하세요.';
        } else {
          delete this.errors.age;
        }
      },
      validateGender() {
        if (this.member.gender === 'N') {
          this.errors.gender = '성별을 선택하세요.';
        } else {
          delete this.errors.gender;
        }
      },
      validatePhoneNumber() {
        if (this.member.phoneNumber.length <= 10) {
          this.errors.phoneNumber = '유효한 전화번호를 입력하세요.';
        } else {
          delete this.errors.phoneNumber;
        }
      },
      createMember() {
        this.validateEmail();
        this.validatePassword();
        this.validateName();
        this.validateAge();
        this.validateGender();
        this.validatePhoneNumber();
        console.log('Errors:', this.errors);
        if (Object.keys(this.errors).length === 0) {
          console.log('Sending request to server...');
          axios
            .post('http://localhost:9095/members/register', this.member)
            .then(response => {
              console.log('Server response:', response.data);
              alert('회원 가입이 완료되었습니다.');
              this.$router.push('/');
            })
            .catch(error => {
              console.error('Error during registration:', error);
              alert('회원 가입에 실패했습니다.');
            });
        } else {
          alert('폼을 올바르게 작성하세요.');
        }
      },
      cancelRegistration() {
        this.member = {
          email: '',
          password: '',
          name: '',
          age: '',
          gender: 'N',
          phoneNumber: '',
        };
        this.errors = {};
      }
    }
  }
  </script>