<template>
  <v-flex>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card ripple class="loginForm" elevation="15">
          <v-img class="bgImg white--text" height="200px" :src="require(`@/assets/${url}`)">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="titleLogin headline">Login here!</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <form>
              <v-text-field
                v-model="account.email"
                type="email"
                placeholder="Email..."
                box
                clearable
                flat
                required
              ></v-text-field>
              <v-text-field
                v-model="account.password"
                type="password"
                placeholder="Password..."
                box
                clearable
                flat
                required
              ></v-text-field>
            </form>
          </v-card-title>
          <v-card-actions>
            <v-btn class="orange lighten-3 black--text" @click="login()">
              <span>Login</span>
              <span>👆👆</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-flex>
</template>


<script>
import { firebase, auth } from "@/services/firebase";
import { setTimeout } from "timers";
export default {
  props: ["url"],
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

<style scoped>
.loginForm {
  margin-top: 40px;
}

.titleLogin {
  background-color: rgba(255, 191, 71, 0.746);
  padding: 5px;
  color: black;
}

.bgImg {
  opacity: 1;
}
</style>
