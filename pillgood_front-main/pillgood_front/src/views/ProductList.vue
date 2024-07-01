<template>
  <div id="product-list">
    <v-container>
      <h4>전체 상품 목록</h4>
      <div class="row">
        <div
          class="col-lg-2 col-md-4 col-sm-6 text-center mb-3"
          v-for="product in sortedProducts"
          :key="product.id"
        >
          <svg
            class="bd-placeholder-img"
            width="140"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            @click="viewProduct(product.id)"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
          </svg>
          <h6 class="fw-normal mt-3 name-bold">{{ product.name }}</h6>
          <p class="price-red price-font">{{ product.price }}원</p>
          <v-rating :value="product.rating" dense readonly></v-rating>
          <p>{{ product.reviews }} 리뷰 ({{ product.reviews }})</p>
          <img 
            src="@/assets/cart.jpg" 
            alt="장바구니" 
            class="cart-icon mt-2"
            @click="goToCartPage"
          />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "필리 메가 프로폴리스 면역밸런스",
          price: 13500,
          image: "path/to/image1.png",
          rating: 4.9,
          reviews: 626,
        },
        {
          id: 2,
          name: "PHEW 피치어: 거침없이 이별 통보",
          price: 29500,
          image: "path/to/image2.png",
          rating: 4.8,
          reviews: 139,
        },
        {
          id: 3,
          name: "PHEW 피스요프리: 그날의 극적 화해",
          price: 32500,
          image: "path/to/image3.png",
          rating: 4.8,
          reviews: 139,
        },
        {
          id: 4,
          name: "PHEW 이퀄밸런스: 폴리코스놀 하차 선언",
          price: 19500,
          image: "path/to/image4.png",
          rating: 4.9,
          reviews: 141,
        },
        {
          id: 5,
          name: "필리 쉴드치크링 고래빗",
          price: 2500,
          image: "path/to/image5.png",
          rating: 4.6,
          reviews: 17,
        },
        {
          id: 6,
          name: "필리 자연한포 초록홍초 200000",
          price: 21600,
          image: "path/to/image6.png",
          rating: 4.9,
          reviews: 669,
        },
        {
          id: 7,
          name: "필리 뉴리스트어 프레스샷",
          price: 25700,
          image: "path/to/image7.png",
          rating: 5.0,
          reviews: 12,
        },
        {
          id: 8,
          name: "필리 테아닌",
          price: 6900,
          image: "path/to/image8.png",
          rating: 4.6,
          reviews: 71,
        },
        {
          id: 9,
          name: "필리 비타민C",
          price: 5000,
          image: "path/to/image9.png",
          rating: 4.7,
          reviews: 152,
        },
        {
          id: 10,
          name: "필리 오메가3",
          price: 25000,
          image: "path/to/image10.png",
          rating: 4.8,
          reviews: 98,
        },
        {
          id: 11,
          name: "필리 프로바이오틱스",
          price: 18000,
          image: "path/to/image11.png",
          rating: 4.9,
          reviews: 203,
        },
        {
          id: 12,
          name: "필리 콜라겐",
          price: 22000,
          image: "path/to/image12.png",
          rating: 4.5,
          reviews: 67,
        },
      ],
    };
  },
  computed: {
    sortedProducts() {
      return [...this.products].sort((a, b) => b.reviews - a.reviews);
    },
  },
  methods: {
    goToCartPage() {
      this.$router.push({ name: 'CartPage' });
    },
    viewProduct(productId) {
      this.$router.push({ name: 'ProductDetail', params: { id: productId } });
    },
  },
};
</script>

<style scoped>
.v-container {
  margin-top: 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col-lg-2,
.col-md-4,
.col-sm-6 {
  padding: 10px;
}

.bd-placeholder-img {
  display: block;
  margin: 0 auto;
  background-color: #eee;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.bd-placeholder-img:hover {
  transform: scale(1.05);
}

.name-bold {
  font-weight: bold;
}

.price-red {
  color: green;
}

.price-font {
  font-size: 1.2em;
}

.cart-icon {
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.cart-icon:hover {
  transform: scale(1.1);
}
</style>
