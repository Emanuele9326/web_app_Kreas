<script setup>
import { useRouter } from "vue-router";
import { storeProduct } from "../stores/store_product";
import { ref } from "vue";

const router=useRouter();
console.log(router)

const productStore = storeProduct();
const products = productStore.products;
const resultsearch = ref([]);
const input=ref('');

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

function filteredList(input) {
  let results = products.filter((product) =>
    product.name.toLowerCase().includes(input.toLowerCase())
  );

  resultsearch.value = results;
}

function closeClick(id){
  let currentRoute= router.currentRoute.value.name;
  if(currentRoute == 'ProductPage'){
    router.push('/productPage/'+id);
    //window.location.href='/productPage/'+id
  }else{
    router.push('/productPage/'+id);
  }
  
}




</script>
<template>
  <div id="myOverlay" class="overlay overflow-auto">
    <span class="closebtn" @click="closeSearch()" title="Close Overlay">×</span>
    <div class="overlay-content">
      <form>
        <input
          type="text"
          v-model="input"
          @input="filteredList(input)"
          placeholder="Search.."
          name="search"
        />
      </form>
      <div class="result">
        <div
          class="row p-0 my-3 mx-0 group"
          style="display: inline color: #fff; width: 100%; height: 100%"
          v-for="item in resultsearch"
          :key="item.identifier"
        >
          <div class="col col-sm-3 p-0 my-3">
            <img class="imgscr" :src="item.image" />
          </div>
          <div class="col col-sm-9 p-0">
            <div class="row row_name">
              <div class="col p-0">
                <h5  @click="closeClick(item.identifier)" >{{
                  item.name
                }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.overlay {
  height: 100%;
  width: 100%;
  display: none;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
}

.overlay-content {
  position: relative;
  top: 14%;
  width: 95%;
  text-align: center;
  margin-top: 30px;
  margin: 10px;
}
.overlay input {
  float: none !important;
  width: 85% !important;
}

.overlay .closebtn {
  position: absolute;
  top: -10px;
  right: 20px;
  font-size: 60px;
  cursor: pointer;
  color: white;
}

.overlay .closebtn:hover {
  color: #ccc;
}

.overlay input[type="text"] {
  padding: 15px;
  font-size: 17px;
  border: none;
  float: left;
  width: 80%;
  background: white;
}

.overlay input[type="text"]:hover {
  background: #f1f1f1;
}

.overlay button {
  float: left;
  width: 20%;
  padding: 15px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.overlay button:hover {
  background: #bbb;
}
.imgscr {
  width: 70%;
}
.result {
  width: 85%;
  text-align: start;
  margin-top: 2.5rem;
  font-size: large;
  margin: 10px;
}

#myOverlay .row_name {
  margin-top: 2rem !important;
}

.result h5 {
  color: #fff;
  cursor: pointer;
}
/* Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  .result {
    margin-top: 2.5rem;
    margin-left: 5rem;
    font-size: x-large;
  }
}
</style>
