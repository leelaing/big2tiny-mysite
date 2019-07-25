<template>
  <div>
    <p class="time">{{currentTime}}</p>
  </div>
</template>

<script>
import moment from "moment";
export default {
  methods: {
    updateCurrentTime() {
      this.currentTime = moment().format("LLL");
    }
  },
  created() {
    this.currentTime = moment().format("LLL");
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  }
};
</script>


<style scoped>
body,
html {
  width: 100%;
  height: 100%;
}

body {
  background: -webkit-linear-gradient(LightSteelBlue, LightSalmon);
  background: -o-linear-gradient(LightSteelBlue, LightSalmon);
  background: -moz-linear-gradient(LightSteelBlue, LightSalmon);
  background: linear-gradient(LightSteelBlue, LightSalmon);
}

section.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 140px;
  background: transparent;
}

h3.is-3,
p.time {
  color: black;
  margin-top: 15px;
}

h3.is-3:not(:last-child) {
  margin: 0;
  padding: 0;
}

.time {
  font-size: 0.5em;
}

.shadow {
  text-shadow: 0 0 15px rgba(100, 100, 100, 0.35);
}
</style>
