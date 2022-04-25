<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
  <home />
</template>

<script>
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Home,
    About,
    Navbar
  }
}
</script>

<style>

</style>
