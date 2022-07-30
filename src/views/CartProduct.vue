<script setup>
import { storeProduct } from "../stores/store_product";

const store = storeProduct();
const cartItem = store.cartItems;

function removeCart_item(id) {
  let i = cartItem.findIndex((item) => item.identifier == id);
  cartItem.splice(i, 1);
  if (store.quantityProducts <4) {
    store.cartTotalAmount;
  } else {
     store.totalPriceDiscount;
  }
}

function totalitem(art) {
  let total = (art.price * art.quantity).toFixed(2);
  return total;
}
</script>

<template>
  <div class="container p-0 cartprod">
    <div class="row my-4 ">
      <h1 class="my-md-4">Carrello</h1>
    </div>
    <div class="container p-0">
      <div class="row my-2" v-for="item in cartItem" :key="item.identifier">
        <div class="col col-sm-4 img">
          <img :src="item.img" class="img_product" />
        </div>
        <div class="col-6 col-sm-7 p-0">
          <div class="container p-0 elproduct">
            <div class="row">
              <h4 class="mt-2  fs-3 ">{{ item.name }}</h4>
            </div>
            <div class="row btn_price">
              <div class="col">
                <div class="btn-group ms-1 my-3" role="group" aria-label="Basic example">
                  <button
                    type="button"
                    @click="item.quantity++"
                    class="btn btn-secondary plus_less"
                  >
                    +
                  </button>
                  <span>{{ item.quantity }}</span>
                  <button
                    type="button"
                    @click="item.quantity > 1 ? item.quantity-- : ''"
                    class="btn btn-secondary plus_less less"
                  >
                    -
                  </button>
                </div>
              </div>
              <div class="col p-0">
                <div class="my-1  fs-5 itempc">{{ totalitem(item) }}€</div>
              </div>
            </div>
            <div class=" mb-3 fw-bold">
              <a class="fs-6 ps-2 rimuovi" @click="removeCart_item(item.identifier)">Rimuovi</a>
            </div>
          </div>
        </div>
      </div>

      <div class="row totalprice container" v-if="store.quantityProducts < 4">
        <h2  class="offset">Totale: {{ store.cartTotalAmount }}€</h2>
      </div>
      <div class="row totalprice" v-else>
        <h3 class="offset">{{ store.cartTotalAmount }}€</h3>
        <h4 class="offset">- 10%</h4>
        <h2 class="offset">Totale: {{ store.totalPriceDiscount }}€</h2>
      </div>
      <div class="row py-4" style="text-align: center">
        <div class="col-5 backwards_a">
          <router-link to="/" >
             <button class="btn backwards fw-bold">Indietro</button>
          </router-link>
        </div>

        <div class="col-7"><button class="btn purchase">Concludi Acquisto</button></div>
      </div>
    </div>
  </div>
</template>

<style>
.cartprod .row{
  margin: 0px;

}
.backwards {
  width: 100%;
  background-color: rgba(220, 99, 58, 0.555);
   color: #fff !important;
}
.backwards_a a {
  color: #fff !important;
  font-weight: bold;
}
.purchase {
  width: 100%;
  background-color: #dc633a;
  color: #fff;
  font-weight: bold;
}
.elproduct {
  background-color: rgba(245, 109, 64, 0.432);
  height: 100%;
  
}
.img{
  padding: 0px ;
}
.img_product {
  width: 100%;
  height: 100%;
}

.plus_less {
  background-color: #7a3620;
  color: #fff;
  border-radius: none;
  border: none;
  padding: 8px 8px;
  margin: 0;
  font-weight: bolder;
  font-size: large;
}

.less {
  padding-left: 8px;
}
.totalprice {
  text-align: end;
  margin: 10px 0px;
}
.btn-group span {
  margin: 0.1rem;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
}
.btn-secondary:hover {
    color: #fff !important;
    background-color: #7a3620;
    border-color: #7a3620;
}
 .itempc{
   padding: 11px 0px;
 }
@media (min-width: 425px){
 .itempc{
   padding: 18px 0px;
 }
 .plus_less{
padding: 10px 10px;
 }
 .less{
padding-left: 10px;
 }
 .btn-group span {
  margin: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
 .btn_price{
  margin-top: 10px;
 }
}

@media(min-width: 576px){
.btn_price{
  margin-top: 10px;
 }
 .totalprice {
  text-align: end;
  margin: 10px 0px !important;
}
.offset{
  right: 74px;
}
}
/* Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  .tit{
    margin-top: 10px !important;
  }
  .row {
    margin: 0 !important;
  }
  .img_product {
    width: 80%;
    height: 80%;
  }
  .elproduct {
    height: 80%;
  }
  .elproduct .row {
    width: 465px;

    font-size: large;
    padding-left: 25px;
  }
  .offset {
    right: 90px;
  }
  .rimuovi{
    margin-left: 30px;
    margin-bottom: 1rem;
  }
}
</style>
