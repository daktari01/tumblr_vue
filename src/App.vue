<template>
  <div id="app">
    <Navbar></Navbar>
    <Notification></Notification>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/common/Navbar';
import Notification from './components/common/Notification';
export default {
  name: 'app',
  components: {
    'Navbar': Navbar,
    'Notification': Notification,
  }
};

</script>

<style lang="css">
@import "assets/styles/bootstrap-4.0.0-dist/css/bootstrap.min.css";
@import "assets/styles/main.css";
</style>
