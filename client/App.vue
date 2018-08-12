<template>
  <div id="app">
    <LoginScreen />
  </div>
</template>

<script>
import LoginScreen from './components/LoginScreen.vue';

export default {
  name: 'app',
  components: {
    LoginScreen
  }
};
</script>

<style>
#app {
  text-align: center;
  font-family: Segoe UI;
}
</style>
