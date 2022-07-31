<script setup>
import { storeProduct } from "../stores/store_product.js";
const productStore = storeProduct();
productStore.getProducts();

</script>

<template>
  <main>
    <div class="prductlist">
   
      <div class="nav_bar container">
        <div class="row">
          <div class="col"><img class="logo p-0" src="../assets/logo.svg" /></div>

          <div class="col">
            <div class="div_navicon ">
              <span >
                <router-link aria-current="page" to="/cartProduct" class="me-4">
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
              <span>
              <router-link aria-current="page" to="/fullSearch" class="me-4">
              <img
                  class="nav_icon"
                 
                  src="../assets/icon/search.svg"
                /></router-link>
                
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="items ">
        <div class="container row row-cols-2" >
          <div
            class="col  col-md-3 m-md-4  colcard"
            v-for="(item, id) in productStore.products"
            :key="id"
            data-test="card_product"
          >
            <router-link
              :to="{
                name: 'ProductPage',
                params: { id: item.identifier },
              }"
            >
              <div class="card">
                <img
                  :src="item.image"
                  class="card-img-top"
                  alt="..."
                  style="width: 100%"
                />
                <div class="card-body">
                  <div class="row ">
                    <h2 class="px-0 ">{{ item.name }}</h2>
                  </div>
                  <div class="row price">
                    <h4>{{ item.price }} €</h4>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.nav_bar {
  margin: auto;
}
.nav_bar .row {
  margin: 0px !important;
}
.nav-link {
  display: inline !important;
}
.div_navicon{
  text-align: center;
  margin-top: 2rem
}
.div_navicon span{
  padding: 0px;
}

.nav_icon {
 
  margin: 0px;
}
.items {
    width: 100%;
    height: 100%;
    padding: 0%;
    background: linear-gradient(rgb(102, 48, 30) 10% ,rgb(220, 99, 58)60%,rgb(102, 48, 30)80%);
    text-align: -webkit-center;
    
      
  }
.items .row {
  margin: auto;
}

.items .card {
  background-color: #fff;
  background-clip: border-box;
  margin-bottom: 1rem;
  border: none;
  margin-top: 1rem;
}
.items .card-body {
  padding: 10px;
}
.items .card-body h2{
 font-size: 16px;
 text-align: -webkit-left;
}
.items .card-body h4{
 font-size: 16px;
 padding-left: 0;
 padding-right: 0;
 text-align: -webkit-left;
}
.price {
  text-align: start;
}

span {
  width: auto;
  height: auto;
  padding-left: 0.9rem;
  padding-right: 0.5rem;
}
.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}

.label-warning[href],
.badge-warning[href] {
  background-color: #c67605;
}
#lblCartCount {
  font-size: 13px;
  background: #dc633a;
  color: #fff;
  padding: 6px 7px;
  vertical-align: top;
  margin-left: -11px;
}
a:hover {
    color: #dc633a;
}
@media (min-width: 400px) {
  .items .card-body h2{
 font-size: 18px;
}
.items .card-body h4{
 font-size: 18px;

}
.div_navicon{
  text-align: end;
}
}
/*Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) { 

.nav_icon {
  margin: 0px;
 
}


.items {
  margin-top: 1em;
}
.items .row {
  margin: auto;
}

.items .card {
  background-color: #fff;
  background-clip: border-box;
  margin-bottom: 1rem;
  border: none;
}
.items .card-body {
  padding: 10px;
}
.price {
  text-align: start;
}

span {
  width: auto;
  height: auto;
  padding-left: 0.9rem;
  padding-right: 0.5rem;
}
.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}

.label-warning[href],
.badge-warning[href] {
  background-color: #c67605;
}
#lblCartCount {
  font-size: 13px;
  background: #dc633a;
  color: #fff;
  padding: 6px 7px;
  vertical-align: top;
  margin-left: -11px;
}
.items .card-body h2{
 font-size: 20px;
}
.items .card-body h4{
 font-size: 20px;

}
 }

/* Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  .nav_bar {
    margin-top: 1em;
  }

  .nav_icon {
    margin: 10px ;

  }

  .items {
    width: 100%;
    height: 100%;
    padding: 0%;
    margin: 0px !important;
    background: linear-gradient(rgb(102, 48, 30) 20% ,rgb(220, 99, 58)60%,rgb(102, 48, 30)85%);
       
  }
  
  
  .items .row {
   
    margin: auto;
    padding-top: 0.2rem;
  }
  .card {
    background-color: transparent !important;
    color: #fff;
    border-radius: 0px;
  }
  .card-img-top {
     margin: 0px;
     border-top-left-radius:0px;
    border-top-right-radius:0px;
  }
  .items .card-body h2{
 font-size: 25px;
}
.items .card-body h4{
 font-size: 25px;

}

  .colcard {
    left: 2em;
  }
}
</style>
