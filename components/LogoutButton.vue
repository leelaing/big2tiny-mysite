<template>
  <v-btn flat class="orange lighten-3" @click.prevent="logout">
    <font-awesome-icon :icon="['fas', 'sign-in-alt']" />
  </v-btn>
</template>

<script>
import { auth } from "@/services/firebase";
import Cookie from "js-cookie";

export default {
  methods: {
    async logout() {
      await auth.signOut();
      await Cookie.remove("access_token");

      location.href = "/login";
    }
  }
};
</script>

<style>
</style>
