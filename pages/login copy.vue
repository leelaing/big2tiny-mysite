<template>
  <v-container fluid>
    <v-flex xs12 sm6 md6 offset-sm3 offset-md3 offset-xs0>
      <v-card>
        <v-card-title>
          <h1 class="center blue--text">Login here to Access your Account</h1>
        </v-card-title>
        <v-card-text>
          <form>
            <v-flex xs10 sm6 md6 offset-sm3 offset-md3 offset-xs1>
              <v-text-field v-model="account.email" type="email" placeholder="Email..." solo></v-text-field>
            </v-flex>
            <v-flex xs10 sm6 md6 offset-sm3 offset-md3 offset-xs1>
              <v-text-field
                v-model="account.password"
                type="password"
                placeholder="Password..."
                solo
              ></v-text-field>
            </v-flex>
          </form>
          <v-card-actions>
            <center>
              <v-btn class="blue white--text" @click="login()">
                <span>Login</span>
                <span>👆👆</span>
              </v-btn>
            </center>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>


<script>
import { firebase, auth } from "@/services/firebase";
import { setTimeout } from "timers";
export default {
  data: () => ({
    account: {
      email: "",
      password: ""
    },
    isError: false,
    errMsg: ""
  }),
  methods: {
    login() {
      this.$store.dispatch("users/login", this.account).catch(error => {
        this.errMsg = error.code;
        this.isError = true;
        console.error(error);

        setTimeout(() => {
          this.isError = false;
        }, 5000);
      });
      // location.href = "/admin";
      this.$router.push("/admin");
    }
  }
};
</script>

<style>
</style>
