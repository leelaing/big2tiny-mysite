<template>
  <v-container fluid>
    <v-layout row wrap justify-space-around>
      <v-flex class="ma-1" xs12 sm12 md5 lg4 xl3 v-for="image in images" :key="image.url">
        <v-img
          class="grey lighten-2"
          :src="image.url"
          aspect-ratio="1"
          max-width="700"
          max-height="200"
        >{{image.imageBy}}</v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          url:
            "https://images.pexels.com/photos/2131772/pexels-photo-2131772.jpeg?cs=srgb&dl=clouds-cloudscape-dawn-2131772.jpg&fm=jpg",
          imageBy: "Changing from a Big Lifestyle to a Tiny, Simple Life"
        },
        {
          url:
            "https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?cs=srgb&dl=homeoffice-commerce-desk-1038916.jpg&fm=jpg",
          imageBy: "Programming Portfolio"
        },
        {
          url:
            "https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?cs=srgb&dl=board-game-businessman-challenge-1040157.jpg&fm=jpg",
          imageBy: "Games"
        },
        {
          url:
            "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?cs=srgb&dl=backlit-clouds-friends-853168.jpg&fm=jpg",
          imageBy: "Lifestyle"
        },
        {
          url:
            "https://images.pexels.com/photos/1477310/pexels-photo-1477310.jpeg?cs=srgb&dl=bali-celebration-costumes-1477310.jpg&fm=jpg",
          imageBy: "Culture"
        },
        {
          url:
            "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?cs=srgb&dl=adventure-blur-close-up-346885.jpg&fm=jpg",
          imageBy: "Travel"
        },
        {
          url:
            "https://images.pexels.com/photos/2224742/pexels-photo-2224742.jpeg?cs=srgb&dl=boyfriend-couple-girlfriend-2224742.jpg&fm=jpg",
          imageBy: "Van Life"
        }
      ]
    };
  }
};
</script>

<style>
</style>
