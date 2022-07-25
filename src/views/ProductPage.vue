<script setup>
import { useRoute } from "vue-router";
import { storeProduct } from "../stores/store_product.js";
import FullScreen_Search from "../components/FullScreen_Search.vue";

const route = useRoute();
let id = route.params.id;

//detail product
const productStore = storeProduct();
productStore.productDetails(id);

const detail = productStore.detailproduct;

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}
</script>
<template>
  <div class="detailProduct">
    <full-screen_-search />
    <div class="nav_bar ">
      <div class="row p-md-3">
        <div class="col arrow">
          <div style="margin-top: 0.5rem">
            <router-link to="/" style="width: 100%; height: 100%"
              ><img class="nav_icon" src="../assets/icon/arrow-left-square.svg"
            /></router-link>
          </div>
        </div>

        <div class="col search_basket">
          <div style="margin-top: 0.5rem; text-align: end">
            <span span="icon_basket">
              <router-link to="/cartProduct" class="p-0 p-sm-3 me-3">
                <i style="font-size: 24px">
                  <img class="nav_icon " src="../assets/icon/basket.svg" />
                </i>
                <span
                  v-if="productStore.quantityProducts > 0"
                  class="badge badge-warning"
                  id="lblCartCount"
                >
                  {{ productStore.quantityProducts }}
                </span>
              </router-link>
            </span>
            <span class="icon_search">
              <img
                class="nav_icon"
                @click="openSearch()"
                src="../assets/icon/search.svg"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="description">
    <div class="row m-0 productPage">
      <div class="col col-sm-5  p-0">
        <img
          :src="detail.image"
          class="card-img-top "
          alt="..."
         
          
        />
      </div>
      <div class="col p-0">
        <div class="container mt-md-4">
          <h3 class="card-title m-2">{{ detail.name }}</h3>
          <p class="card-text m-2">
            {{ detail.description }}
          </p>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button
              type="button"
              class="btn addcart my-3"
              @click="productStore.addToCart(id)"
            >
              <h5>Aggiungi al Carrello</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  </div>
</template>
<style>
.detailProduct {
  padding: 0px;
}
.detailProduct .nav_bar {
  width: 100%;
  position: absolute;
  z-index: 500;
  margin: 0px !important;
  --bs-gutter-x: 0;
}

.detailProduct .card {
  margin: auto;
}

.detailProduct .card-text {
  color: #7a3620;
}

.items {
  margin-top: 1em;
}
.detailProduct .nav_bar .row .col {
  padding-left: 0px;
}
.card-img-top{
  width:-webkit-fill-available;
}
.arrow {
  padding-left: 12px !important;
  padding-right: 0px !important;
}
.icon_basket {
  padding-left: 0px;
  padding-right: 0px;
}

.icon_search {
  padding-left: 0;
  padding-right: 6px;
}

.nav_icon {
  margin: 5px;
}
.addcart {
  color: #fff;
  background-color: #dc633a;
  border-color: #dc633a;
  padding: 0.5em 0.5em;
}
.addcart h5 {
  margin: 0;
  font-size: 16px;
}
.btn:hover {
  color: #7a3620 !important ;
}
.btn-check:focus + .btn,
.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0);
}

@media (min-width: 500px) {
  .nav_icon {
    margin-right: 15px;
  }
  
}
@media (min-width: 576px) {
  .detailProduct .nav_bar {
  display: contents;
  z-index: 0; 
}
.detailProduct .card-img-top{
  padding-left: 0rem;
 margin: 1rem;
}

.description{
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgb(102, 48, 30) 9% ,rgb(220, 99, 58)66%,rgb(102, 48, 30)85%);
    color: #fff;
  }
  .productPage {
    top: 60px;
    color: #fff;
 
  }
  .btn:hover {
  color: #fff !important ;
}
  .detailProduct .card-text {
  color: #fff;
}

  .addcart{
    width: max-content;
    background-color: #7a3620;
  }
}

/* Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  .productPage {
    padding: 10px;
    top:50px;
  }
  .detailProduct {
    display: block;
  }
  .detailProduct .card {
    display: block;
    width: 70%;
    height: 70%;
    top: 50px;
    border: none;
  }
  .detailProduct .card .card-body {
    color: #7a3620;
    font-size: x-large;
  }
  .detailProduct .nav_bar {
    display: block;
    position: inherit;
  }
  .card-img-top{
    width: 70%;
  }
  
}
</style>
