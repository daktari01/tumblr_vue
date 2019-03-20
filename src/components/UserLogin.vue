<template>
  <section class="userform py-5" id="userform">
    <div class="container">
      <div class="row ">
        <div class="col-md-4">
          <img src="../assets/images/write.jpg" class="img-left img-fluid form-img">
        </div>
        <div class="col-md-8 pic-form">
          <h4 class="pb-4">Please log in</h4>
          <form v-on:submit.prevent="signinUser">
            <div class="form-row">
              <div class="form-group col-md-12 form-input">
                <input type="email" class="form-control" v-model="loginForm.userEmail" id="userEmail" placeholder="Enter your email e.g johndoe@example.com">
              </div>
              <div class="form-group col-md-12 form-input">
                <input type="password" class="form-control" v-model="loginForm.password" id="password" placeholder="Enter your password">
              </div>
            </div>
            <div class="form-row">
              <button type="submit" class="btn btn-primary" style="width: 100%">
                Login
              </button>
            </div>
            <p></p>
            <div class="form-row">
              <p>Don't have an account? <a href="#">Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "UserLogin",
  data() {
    return {
      loginForm: {
        userEmail: '',
        password: '',
      }
    };
  },
  computed: {
    ...mapGetters([
      'getUserLogin',
      'getErrorMessages',
    ]),
    userErrors() {
      return this.$store.getters.getErrorMessages;
    },
  },
  methods: {
    ...mapActions([
      'loginUser',
    ]),
    signinUser(){
      this.$store.dispatch('loginUser', this.loginForm).then(() => {
        if(this.$store.getters.getErrorMessages.length === 0) {
          this.$router.push('/home');
        }
      });
    }
  },
};
</script>

