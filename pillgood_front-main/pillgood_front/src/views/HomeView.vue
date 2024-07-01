<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" :data-bs-slide-to="index" :class="{ active: index === 0 }" aria-current="true" :aria-label="'Slide ' + (index + 1)" v-for="(slide, index) in slides" :key="index"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item" :class="{ active: index === 0 }" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" class="d-block w-100 custom-banner" alt="Slide image">
        <div class="container">
          <div class="carousel-caption" :class="slide.captionClass">
            <h1>{{ slide.headline }}</h1>
            <p>{{ slide.content }}</p>
            <p v-if="index === 0" class="button-container">
              <a class="btn btn-lg btn-primary" :href="slide.link">{{ slide.buttonText }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <main>
    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <h4 style="margin-bottom: 30px;">🔥Best!</h4>
        <div class="row">
          <div class="col-lg-2 col-md-4 col-sm-6 text-center mb-3" v-for="product in products" :key="product.id" @click="viewProduct(product.id)">
            <svg class="bd-placeholder-img" width="140" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
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
              <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
            </svg>
            <h6 class="fw-normal mt-3 name-bold">{{ product.name }}</h6>
            <p class="price-red price-font">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import '../assets/main.css'

export default {
  data () {
    return {
      slides: [
        {
          image: require('@/assets/banner1.png'),
          headline: 'Example headline.',
          content: 'Some representative placeholder content for the first slide of the carousel.',
          buttonText: 'Sign up today',
          link: '#',
          captionClass: 'text-start'
        },
        {
          image: require('@/assets/banner2.jpg'),
          headline: 'Another example headline.',
          content: 'Some representative placeholder content for the second slide of the carousel.',
          buttonText: 'Learn more',
          link: '#',
          captionClass: ''
        },
        {
          image: require('@/assets/banner3.jpg'),
          headline: 'One more for good measure.',
          content: 'Some representative placeholder content for the third slide of this carousel.',
          buttonText: 'Browse gallery',
          link: '#',
          captionClass: 'text-end'
        }
      ],
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
      // 제품 상세 페이지로 이동하는 메서드
      this.$router.push({ name: 'ProductDetail', params: { id } });
    }
  }
}
</script>

<style>
/* Add your custom styles here */
</style>
