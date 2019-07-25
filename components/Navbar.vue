<template>
  <v-container fluid app class="navbar-container">
    <div sticky class="pa-1">
      <h4 class="center">BIG2TINY - Live a Simple & Happy Life</h4>
    </div>
    <v-toolbar flat sticky dense class="orange lighten-2" app>
      <v-toolbar-side-icon @click="left_drawer = !left_drawer"></v-toolbar-side-icon>
      <v-toolbar-title></v-toolbar-title>
      <v-toolbar-items>
        <v-btn to="/" flat>
          <font-awesome-icon class="icon-lg" :icon="['fas', 'home']" />
        </v-btn>
        <v-btn to="/admin" flat>
          <font-awesome-icon class="icon-lg" :icon="['fas', 'users-cog']" />
        </v-btn>
        <v-btn to="/admin/profile" flat>
          <font-awesome-icon class="icon-lg" :icon="['fas', 'user']" />
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer app v-model="left_drawer" class="orange lighten-3">
      <v-list>
        <v-list-tile class="orange lighten-3">
          <v-list-tile-title class="title">Main Menu</v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-list v-for="item in items" :key="item.name">
        <v-list-tile router :to="item.route">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.name}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      left_drawer: false,
      items: [
        { icon: "home", name: "Home", route: "/" },
        { icon: "home", name: "Admin", route: "/admin" },
        { icon: "home", name: "Profile", route: "/admin/profile" }
      ]
    };
  }
};
</script>

<style>
</style>
