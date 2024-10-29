<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AsideMenu from '@/components/Menu/IndexMenu.vue'
import FormLuis from '@/components/FormLuis.vue'
</script>
n

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <Navbar />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <header class="header">
    header
    <input type="checkbox" id="check-menu" class="styled-checkbox" />
    <label for="check-menu">Marcar / Desmarcar</label>
  </header>
  <aside-menu></aside-menu>

  <RouterView class="main-view" />
  <FormLuis></FormLuis> 
</template>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background-color: #f0f2f5;
}
.main-view {
  margin-left: 270px;
  border: 2px solid yellow;
}
.header {
  display: flex;
  justify-content: space-around;
  border: 2px solid blue;
}
</style>
