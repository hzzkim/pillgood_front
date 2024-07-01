<template>
  <div class="product-detail">
    <div class="breadcrumb">
      <p>카테고리 > [브랜드명] 상품 이름</p>
    </div>
    <div class="product-main">
      <div class="product-image">
        <img :src="product.imageUrl" alt="Product Image" />
      </div>
      <div class="product-info">
        <h1 class="product-title">{{ product.brandName }} {{ product.productName }}</h1>
        <p class="product-price">{{ product.price }}원</p>
        <p>{{ product.description }}</p>
        <div class="button-group">
          <button @click="addToCart" class="btn btn-cart">장바구니 담기</button>
          <button @click="buyNow" class="btn btn-buy">바로 구매</button>
        </div>
      </div>
    </div>
    <div class="tabs">
      <button @click="activeTab = 'description'" :class="{ active: activeTab === 'description' }">상품설명</button>
      <button @click="activeTab = 'details'" :class="{ active: activeTab === 'details' }">상세정보</button>
      <button @click="activeTab = 'reviews'" :class="{ active: activeTab === 'reviews' }">후기 ({{ product.reviews.length }})</button>
      <button @click="activeTab = 'inquiries'" :class="{ active: activeTab === 'inquiries' }">문의</button>
    </div>
    <div class="tab-content">
      <div v-if="activeTab === 'description'">
        <p>{{ product.fullDescription }}</p>
      </div>
      <div v-if="activeTab === 'details'">
        <p>{{ product.details }}</p>
      </div>
      <div v-if="activeTab === 'reviews'">
        <ul>
          <li v-for="review in product.reviews" :key="review.id" class="review">
            <p>{{ review.content }}</p>
            <p class="rating">Rating: {{ review.rating }}</p>
          </li>
        </ul>
      </div>
      <div v-if="activeTab === 'inquiries'">
        <ul>
          <li v-for="inquiry in product.inquiries" :key="inquiry.id" class="inquiry">
            <p>{{ inquiry.content }}</p>
            <p class="answered">Answered: {{ inquiry.answered ? 'Yes' : 'No' }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      activeTab: 'description',
      product: {
        brandName: '[브랜드명]',
        productName: '상품 이름',
        price: 13500,
        imageUrl: 'path/to/image.jpg', // 이미지 URL을 적절히 변경하세요.
        description: '상품 설명',
        fullDescription: '전체 상품 설명',
        details: '상세 정보',
        reviews: [
          { id: 1, content: '좋아요!', rating: 5 },
          { id: 2, content: '그냥 그래요.', rating: 3 }
        ],
        inquiries: [
          { id: 1, content: '이 제품은 언제 배송되나요?', answered: true },
          { id: 2, content: '재고 있나요?', answered: false }
        ]
      }
    };
  },
  methods: {
    addToCart() {
      // 장바구니에 제품을 추가하는 로직
      console.log(`${this.product.productName} added to cart`);
      this.$router.push({ name: 'CartPage' }); // 장바구니 페이지로 이동
    },
    buyNow() {
      // 바로 구매 로직
      console.log(`Buying ${this.product.productName} now`);
    },
    fetchProductDetails() {
      // productId를 사용하여 제품 세부 정보를 가져오는 로직
      const productId = this.id;
      console.log(`Fetching details for product id: ${productId}`);
      // 실제 API 호출 등을 여기에 추가
    }
  },
  created() {
    this.fetchProductDetails();
  }
}
</script>

<style scoped>
.product-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.breadcrumb {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 20px;
}

.product-main {
  display: flex;
  gap: 40px;
}

.product-image {
  flex: 1;
  background-color: #f8f9fa;
  text-align: center;
  padding: 40px;
  border-radius: 8px;
}

.product-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-price {
  font-size: 1.2rem;
  color: #d9534f;
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-cart {
  background-color: #5cb85c;
  color: white;
}

.btn-buy {
  background-color: #5cb85c;
  color: white;
}

.tabs {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}

.tabs button {
  flex: 1;
  padding: 10px 0;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: border-color 0.3s;
  color: #aaa; /* 기본 색상을 회색으로 설정 */
}

.tabs button.active {
  border-color: #5cb85c;
  color: #5cb85c; /* 활성화된 탭의 텍스트 색상 */
}

.tab-content {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
}

.review, .inquiry {
  background-color: #ffffff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #eee;
}

.rating, .answered {
  font-weight: bold;
  color: #343a40;
}
</style>

