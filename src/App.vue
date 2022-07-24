<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  background-color: #fff;
  color: #7a3620;
}

a {
  color: #7a3620;
  text-decoration: none;
}
.nav_icon {
  width: 23px;
  height: 23px;
}
.logo {
    width: 80px;
    height: 90px;
  }

@media (hover: hover) {
  a:hover {
    background-color: transparent;
  }
  .btn:hover {
    color: #7a3620 !important ;
  }
}
@media (min-width: 300px) {
  .logo {
  width: 100px;
 
}
  .nav_icon {
    width: 25px;
    height: 25px;
  }
}

@media (min-width: 400px) {
  .logo {
  width: 120px;
 
}
  .nav_icon {
    width: 30px;
    height: 30px;
  }
}
@media (min-width: 768px) {
  
  .logo {
    width: 140px;
    height: 150px;
  }
  .nav_icon {
    width: 40px;
    height: 40px;
  }
}

@media (min-width: 1024px) {
}
</style>
