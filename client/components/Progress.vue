<template>
  <div id="progress">
    <b-progress :value="counter" :max="max" show-progress animated></b-progress>
    <b-progress class="mt-1" :max="max" show-value>
      <b-progress-bar id="1" :value="max*(1/10)" variant="success"></b-progress-bar>
      <b-progress-bar id="2" :value="max*(1/10)" variant="warning"></b-progress-bar>
      <b-progress-bar id="3" :value="max*(1/10)" variant="danger"></b-progress-bar>
      <b-progress-bar id="4" :value="max*(1/10)" variant="danger"></b-progress-bar>
      <b-progress-bar id="5" :value="max*(1/10)" variant="danger"></b-progress-bar>
      <b-progress-bar id="6" :value="max*(1/10)" variant="danger"></b-progress-bar>
      <b-progress-bar id="7" :value="max*(1/10)" variant="danger"></b-progress-bar>
      <b-progress-bar id="8" :value="max*(1/10)" variant="danger"></b-progress-bar>
      <b-progress-bar id="9" :value="max*(1/10)" variant="danger"></b-progress-bar>
      <b-progress-bar id="10" :value="max*(1/10)" variant="danger"></b-progress-bar>
    </b-progress>
    <b-btn @click="clicked" class="mt-4">Click me</b-btn>
  </div>
</template>

<script>
// let correct;
// let questionNr;
export default {
  data() {
    return {
      counter: 45,
      max: 100
    };
  },
  methods: {
    clicked() {
      this.counter = Math.random() * this.max;
      console.log('Change progress to ' +
        Math.round(this.counter * 100) / 100);
    }
  //    if(id == questionNr) {
  //      id = i;
  //      if (correct = true) {
  //        #id.variant = success;
  //        } if (correct = false) {
  //          #id.variant = danger;
  //        } else {
  //          #id.variant = warning;
  //      }
  }
};
</script>

<!-- progress-1.vue -->
