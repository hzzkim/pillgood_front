<template>
  <div class="cart-container">
    <div class="cart-title">장바구니</div>
    <div class="cart-items">
      <div class="cart-item" v-for="item in cartItems" :key="item.id">
        <div class="item-details">
          <div class="item-image"></div>
          <div class="item-name">{{ item.brandName }} {{ item.productName }}</div>
        </div>
        <div class="item-quantity">
          <button @click="decreaseQuantity(item)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="increaseQuantity(item)">+</button>
        </div>
        <div class="item-price">{{ item.price }} 원</div>
      </div>
    </div>
    <div class="total-amount">금액: {{ totalAmount }} 원</div>
    <div class="cart-buttons">
      <button @click="subscribe" class="subscribe-button">정기구독 시작</button>
      <button @click="buyNow" class="buy-button">한 번만 구매</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  data() {
    return {
      cartItems: [
        {
          id: 1,
          brandName: '[브랜드명]',
          productName: '상품 이름',
          price: 10000,
          quantity: 1
        },
        {
          id: 2,
          brandName: '[브랜드명]',
          productName: '상품 이름',
          price: 20000,
          quantity: 1
        }
      ]
    };
  },
  computed: {
    totalAmount() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
  methods: {
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    subscribe() {
      console.log('정기구독 시작');
    },
    buyNow() {
      console.log('한 번만 구매');
    }
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}

.cart-container {
  width: 80%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.cart-items {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.item-details {
  display: flex;
  align-items: center;
  gap: 20px;
}

.item-image {
  width: 100px;
  height: 100px;
  background-color: #ddd;
  border-radius: 8px;
}

.item-name {
  font-size: 1rem;
}

.item-price {
  font-size: 1rem;
  font-weight: bold;
  color: #000;
}

.item-quantity {
  display: flex;
  align-items: center;
  gap: 10px;
}

.item-quantity button {
  width: 30px;
  height: 30px;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.total-amount {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #f1f1f1;
  border-radius: 8px;
  margin-top: 20px;
}

.cart-buttons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.cart-buttons button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.subscribe-button {
  background-color: #5cb85c;
  color: white;
}

.buy-button {
  background-color: #5cb85c;
  color: white;
}
</style>
