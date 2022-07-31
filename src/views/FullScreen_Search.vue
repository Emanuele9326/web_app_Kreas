<script setup>
import { useRouter } from "vue-router";
import { storeProduct } from "../stores/store_product";
import { ref } from "vue";

const router = useRouter();

const productStore = storeProduct();
const products = productStore.products;
const resultsearch = ref([]);
const input = ref("");

function closeSearch() {
  router.back();
}

function filteredList(input) {
  let results = products.filter((product) =>
    product.name.toLowerCase().includes(input.toLowerCase())
  );

  resultsearch.value = results;
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
          placeholder="Burger.."
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
                <router-link
                  :to="{ name: 'ProductPage', params: { id: item.identifier } }"
                >
                  {{ item.name }}
                </router-link>
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
  display: block;
  position: fixed;
  background: linear-gradient(
    rgb(102, 48, 30) 10%,
    rgb(220, 99, 58) 60%,
    rgb(102, 48, 30) 80%
  );
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

.result a {
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
