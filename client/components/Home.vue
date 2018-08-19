<template>
  <div class="home">
    <v-app>
      <navbar></navbar>
      <main-menu></main-menu>
    </v-app>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import navbar from './Navbar';
import footerComp from './Footer';
import mainMenu from './MainMenu';

export default {
  name: 'home',
  data() {
    return {
    };
  },
  components: {
    navbar,
    mainMenu,
    footerComp
  }
};
</script>
