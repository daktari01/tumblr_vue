<template>
  <section class="userform py-5" id="userform">
    <div class="container">
      <div class="row ">
        <img src="../assets/images/reg_img.png" class="img-left img-fluid form-img">
        <div class="col-md-8 pic-form">
          <h4 class="pb-4">Please fill with your details</h4>
          <form v-on:submit.prevent="registerNewUser">
            <div class="form-row">
              <div class="form-group col-md-12 form-input">
                <input id="username" name="username" v-model="form.username" placeholder="Enter your username" class="form-control" type="text">
              </div>
              <div class="form-group col-md-12 form-input">
                <input type="email" class="form-control" v-model="form.userEmail" id="userEmail" placeholder="Enter your email e.g johndoe@example.com">
              </div>
              <div class="form-group col-md-12 form-input">
                <input type="password" class="form-control" v-model="form.password" id="password" placeholder="Enter your password">
              </div>
              <div class="form-group col-md-12 form-input">
                <input type="password" class="form-control" v-model="form.confirmPassword" id="confirmPassword" placeholder="Confirm your password">
              </div>
            </div>
            <div class="form-row">
              <button type="submit" class="btn btn-primary" style="width: 100%">
                Register
              </button>
            </div>
            <p></p>
            <div class="form-row">
              <p>Have an account? <a href="#">Sign In</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UserRegistration",
  data(){
    return {
      form: {
        username: '',
        userEmail: '',
        password: '',
        confirmPassword: '',
      }
    };
  },
  methods: {
    ...mapActions([

    ]),
    registerNewUser(){
      this.$store.dispatch('createNewUser', this.form)
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/main.css";
</style>
