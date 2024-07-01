<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="flex-container">
        <div class="left-content">
          <div class="footer-logo">
            <router-link to="/">
            <img src="../assets/pillgood_logo2.png">
            </router-link>
          </div>
        </div>
        <div class="center-content">
          <p>
            <span>내일의 나를 만드는 [건강메이트]필굿</span><br>
            <span>(주)필굿 사업자 정보</span><br>
            서울특별시 강남구 역삼동, 테헤란로124삼원타워<br>
            대표: 홍길동<br>
            사업자번호: 759-87-00821
          </p>
        </div>
        <!-- 이용약관, 개인정보 처리방침, 고객센터는 삭제하였습니다 -->
      </div>
    </div>
  </footer>
</template>

<script>
import '../assets/layout.css'

export default {
  name: 'FooterView'
};
</script>
