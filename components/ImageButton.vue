<template>
  <v-card class="pa-3">
    <v-flex>
      <v-img
        :src="imgUrl"
        :alt="imgBy"
        aspect-ratio="1"
        :max-height="imgHeight"
        :max-width="imgWidth"
      />
      <v-flex :class="`pt-2 center title ${imgTextColor}--text `">{{imgTitle}}</v-flex>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  props: [
    "imgWidth",
    "imgHeight",
    "imgTitle",
    "imgUrl",
    "imgBy",
    "imgTextColor"
  ]
};
</script>

<style>
</style>
