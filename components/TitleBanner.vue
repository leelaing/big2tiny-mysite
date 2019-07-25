<template>
  <v-card flat class="orange lighten-2 title-border pa-2 mt-3">
    <v-card flat class="title pa-4">
      <img class="titleImage" :src="require(`@/assets/${url}`)" />
      <v-container class="title-text">{{title}}</v-container>
    </v-card>
  </v-card>
</template>

<script>
export default {
  props: ["title", "url", "assetBy"]
};
</script>

<style scoped>
.title-border {
  z-index: -4;
}

.title {
  height: 100%;
  padding: 0;
  z-index: -3;
}

.titleImage {
  position: absolute;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  opacity: 0.5;
}
.title-text {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  z-index: 3;
  height: 5px;
  padding: 5px;
  /* background-color: rgba(255, 255, 255, 1); */
  color: black;
}
</style>
