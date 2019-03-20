<template>
  <div>
    <div class="alert alert-danger" role="alert" v-if="userErrors.length > 0">
      <ul v-for="error in userErrors" :key="error">
        <li>{{ error }}</li>
      </ul>
    </div>
    <div class="d-none" v-if="userNotifications">{{
        this.$toasted.show(userNotifications.message,
        {type: userNotifications.type }).goAway(4000)
      }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Notification",
  computed: {
    ...mapGetters([
      'getErrorMessages',
    ]),
    userErrors() {
      let newErrors = [];
      for(var i = 0; i < this.$store.getters.getErrorMessages.length; i++) {
        if(newErrors.indexOf(this.$store.getters.getErrorMessages[i]) === -1) {
          newErrors.push(this.$store.getters.getErrorMessages[i]);
        }
      }
      return newErrors;
    },
    userNotifications() {
      return this.$store.getters.getNotifications;
    }
  },
};
</script>

