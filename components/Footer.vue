<template>
  <v-footer class="orange lighten-2 pa-3" app>
    <LogoutButton />
    <v-spacer></v-spacer>
    <SocialMediaLinks />
    <v-spacer></v-spacer>
    <div>
      <font-awesome-icon class="icon-sm" :icon="['fas', 'copyright']" />
      {{ new Date().getFullYear() }} BIG2TINY.com
    </div>
  </v-footer>
</template>
