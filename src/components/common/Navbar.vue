<template>
  <nav class="navbar navbar-expand-md static-top bg-primary">
    <div class="container">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link class="nav-link active" to="/home">Home</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="/home">About</router-link>
        </li>
      </ul>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link
              v-if="userStatus === true"
              class="nav-link"
              to="/auth/signin"
              >Signin</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              v-if="userStatus === true"
              class="nav-link"
              to="/auth/signup"
              >Signup</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              v-if="userStatus === false"
              class="nav-link"
              to="/auth/signout"
              >Sign out</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["getCurrentUser"]),
    userStatus() {
      return this.isEmpty(this.$store.getters.getCurrentUser);
    }
  },
  methods: {
    isEmpty: obj => {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) return false;
      }
      return true;
    }
  }
};
</script>
