<template>
  <div id="home">
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <!-- Carousel content here -->
    </div>
    <main>
      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <h4 style="margin-bottom: 30px;">🔥Best!</h4>
          <div class="row">
            <div class="col-lg-2 col-md-4 col-sm-6 text-center mb-3" v-for="product in products" :key="product.id" @click="viewProduct(product.id)">
              <svg class="bd-placeholder-img" width="140" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
              </svg>
              <h6 class="fw-normal mt-3 name-bold">{{ product.name }}</h6>
              <p class="price-red price-font">{{ product.price }}</p>
            </div>
          </div>
          <hr style="color: #94B58B; margin-bottom: 50px;">
          <h4 style="margin-bottom: 30px;">🔥New!</h4>
          <div class="row">
            <div class="col-lg-2 col-md-4 col-sm-6 text-center mb-3" v-for="product in products" :key="product.id" @click="viewProduct(product.id)">
              <svg class="bd-placeholder-img" width="140" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
              </svg>
              <h6 class="fw-normal mt-3 name-bold">{{ product.name }}</h6>
              <p class="price-red price-font">{{ product.price }}</p>
            </div>
          </div>
          <button @click="goToProductList" class="btn btn-primary custom-button">상품 전체 목록 보기</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', price: '10000원' },
        { id: 2, name: 'Product 2', price: '20000원' },
        { id: 3, name: 'Product 3', price: '30000원' },
        { id: 4, name: 'Product 4', price: '40000원' },
        { id: 5, name: 'Product 5', price: '50000원' },
        { id: 6, name: 'Product 6', price: '60000원' }
      ]
    };
  },
  methods: {
    viewProduct(id) {
      this.$router.push({ name: 'ProductDetail', params: { id } });
    },
    goToProductList() {
      this.$router.push({ name: 'ProductList' });
    }
  }
}
</script>

<style scoped>
.custom-button {
  background-color: #5cb85c;
  border-color: #5cb85c;
}
.custom-button:hover {
  background-color: #4cae4c;
  border-color: #4cae4c;
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
  color: #4cae4c;
}

.price-font {
  font-size: 1.2em;
}
</style>
