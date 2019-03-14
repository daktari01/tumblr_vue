<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/auth/signup">Signup</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="css">
@import "assets/styles/bootstrap-4.0.0-dist/css/bootstrap.min.css";
@import "assets/styles/main.css";
</style>
