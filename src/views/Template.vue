<template>
  <div class="main-container box-shadow">
    <div>
      <h1 class="text-melon">Template</h1>
      <!-- CSS preview content goes here -->
      <p>content가 들어가는 부분은 <span class="text-bold">main-container + box-shadow</span>로 묶어줍니다.</p>
      <p>로그인/회원가입 페이지에 적용된 container는 <span class="text-bold">box-container</span>입니다.</p>
      <p class="text-melon">text-melon</p>
      <div class="box-container box-shadow">
        <p class="text-melon">로그인</p>
        <input type="text" placeholder="기본 input tag 입니다">
        <select>
          <option>이건</option>
          <option>기본 select tag</option>
          <option>입니다</option>
        </select>
        <div class="checkbox">
          <input type="checkbox">
          <span>&nbsp;checkbox와 함께 쓸 때에는 span을 사용하는 게 좋습니다</span>
        </div>
      </div>
    </div>
</div>
</template>

<script>
// import { mapActions } from 'vuex'
import '../assets/styles.css'

export default {
  name: 'CssPreview'
}
</script>
