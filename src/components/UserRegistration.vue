<template>
  <section class="userform py-5" id="userform">
    <div class="container">
      <div class="row ">
        <div class="col-md-4">
          <img src="../assets/images/write.jpg" class="img-left img-fluid form-img">
        </div>
        <div class="col-md-8 pic-form">
          <h4 class="pb-4">Please fill with your details</h4>
          <div v-if="userErrors.message" class="error-messages">{{ userErrors.message }}</div>
          <div class="d-none" v-else-if="userDetails.email">{{this.$toasted.show('User registered successfully', {type: 'success'}).goAway(4000)}}</div>
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
import { mapActions, mapGetters } from "vuex";
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
  computed: {
    ...mapGetters([
      'getUserErrors',
      'getUserData',
    ]),
    userErrors() {
      return this.$store.getters.getUserErrors;
    },
    userDetails() {
      return this.$store.getters.getUserData;
    },
  },
  methods: {
    ...mapActions([
      'createNewUser',
    ]),
    registerNewUser(){
      this.$store.dispatch('createNewUser', this.form)
    }
  }
};
</script>

