<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/common/Navbar';
export default {
  name: 'app',
  components: {
    'Navbar': Navbar
  }
};

</script>

<style lang="css">
@import "assets/styles/bootstrap-4.0.0-dist/css/bootstrap.min.css";
@import "assets/styles/main.css";
</style>
