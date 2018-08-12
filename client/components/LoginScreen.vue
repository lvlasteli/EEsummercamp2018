<template>
  <div class="login-container">
    <h1>{{ appTitle }}</h1>
    <h2 class="info">To continue using this app please log in</h2>
    <div class="button-container">
      <button>Login<img src="../assets/google_plus.png" align="right"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-screen',
  data() {
    return {
      appTitle: 'Test Your Knowledge'
    };
  }
};
</script>

<style scoped>
.login-container {
  margin-top: 200px;
}
.info {
  margin: 50px 0 30px 0
}
.button-container {
  margin: 0 auto;
  width: 240px;
}
button{
  background: #F2F2F2;
  padding: 20px;
  width: 70%;
  font-size: 25px;
}
img{
  display: block;
  max-width: 35px;
  max-height: 35px;
  width: auto;
  height: auto;
}
</style>
