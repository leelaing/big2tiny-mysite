<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn flat color="black" dark v-on="on">
          <font-awesome-icon class="icon-lg" :icon="['fas', 'link']" />
        </v-btn>
      </template>

      <v-card>
        <v-card-title primary-title class="title">
          <h3>Social Media Links</h3>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <center>
              <v-btn fixed fab dark right bottom small color="orange" @click="dialog = false">
                <v-icon dark>close</v-icon>
              </v-btn>
              <v-card class="pa-2 ma-2" xs-6 sm-6 md-6 lg-6 xl-6>
                <font-awesome-icon class="icon-xl" :icon="['fas', 'envelope-square']" />
                <h3 class="icon-text">Email</h3>
              </v-card>
              <v-card class="pa-2 ma-2" xs-6 sm-6 md-6 lg-6 xl-6>
                <font-awesome-icon class="icon-xl" :icon="['fab', 'facebook-square']" />
                <h3 class="icon-text">Facebook</h3>
              </v-card>
              <v-card class="pa-2 ma-2" xs-6 sm-6 md-6 lg-6 xl-6>
                <font-awesome-icon class="icon-xl" :icon="['fab', 'youtube']" />
                <h3>YouTube</h3>
              </v-card>
              <v-card class="pa-2 ma-2" xs-6 sm-6 md-6 lg-6 xl-6>
                <font-awesome-icon class="icon-xl" :icon="['fab', 'instagram']" />
                <h3>Instagram</h3>
              </v-card>
              <v-card class="pa-2 ma-2" xs-6 sm-6 md-6 lg-6 xl-6>
                <font-awesome-icon class="icon-xl" :icon="['fab', 'tumblr-square']" />
                <h3>Tumblr</h3>
              </v-card>
              <v-card class="pa-2 ma-2" xs-6 sm-6 md-6 lg-6 xl-6>
                <font-awesome-icon class="icon-xl" :icon="['fab', 'twitter']" />
                <h3>Twitter</h3>
              </v-card>
              <v-card class="pa-2 ma-2" xs-6 sm-6 md-6 lg-6 xl-6>
                <font-awesome-icon class="icon-xl" :icon="['fab', 'google-plus-g']" />
                <h3>Google+</h3>
              </v-card>
              <v-card class="pa-2 ma-2" xs-6 sm-6 md-6 lg-6 xl-6>
                <font-awesome-icon class="icon-xl" :icon="['fab', 'snapchat-square']" />
                <h3>SnapChat</h3>
              </v-card>
              <v-card class="pa-2 ma-2" xs-6 sm-6 md-6 lg-6 xl-6>
                <font-awesome-icon class="icon-xl" :icon="['fab', 'pinterest-square']" />
                <h3>Pinterest</h3>
              </v-card>
              <v-card class="pa-2 ma-2" xs-6 sm-6 md-6 lg-6 xl-6>
                <font-awesome-icon class="icon-xl" :icon="['fab', 'linkedin']" />
                <h3>LinkedIn</h3>
              </v-card>
              <v-card class="pa-2 ma-2" xs-6 sm-6 md-6 lg-6 xl-6>
                <font-awesome-icon class="icon-xl" :icon="['fab', 'vine']" />
                <h3>Vine</h3>
              </v-card>
              <v-card class="pa-2 ma-2" xs-6 sm-6 md-6 lg-6 xl-6>
                <font-awesome-icon class="icon-xl" :icon="['fab', 'vimeo']" />
                <h3>Vimeo</h3>
              </v-card>
              <v-card class="pa-2 ma-2" xs-6 sm-6 md-6 lg-6 xl-6>
                <font-awesome-icon class="icon-xl" :icon="['fab', 'flickr']" />
                <h3>Flickr</h3>
              </v-card>
              <v-card class="pa-2 ma-2" xs-6 sm-6 md-6 lg-6 xl-6>
                <font-awesome-icon class="icon-xl" :icon="['fab', 'meetup']" />
                <h3>Meetup</h3>
              </v-card>
              <v-card class="pa-2 ma-2" xs-6 sm-6 md-6 lg-6 xl-6>
                <font-awesome-icon class="icon-xl" :icon="['fab', 'discord']" />
                <h3>Discord</h3>
              </v-card>
              <v-card>
                <font-awesome-icon class="icon-xl" :icon="['fab', 'reddit-square']" />
                <h3>Reddit</h3>
              </v-card>
            </center>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>