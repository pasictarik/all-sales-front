<template>
  <div id="app">
    <img id="logo" src="./assets/logo.png">
    <hr>
    <div id="navbar">
      <button class="nav-icon"><i class="fas fa-home"></i></button>
      <button class="nav-button">Latest offers</button>
      <button class="nav-button">Travel</button>
      <button class="nav-button">Beauty&Health</button>
      <button class="nav-button">Food</button>
      <button class="nav-button">Education</button>
      <button class="nav-button">Gifts</button>
      <button class="nav-icon"><i class="far fa-user"></i></button>
    </div>
    <hr>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .container {
    width: 1200px;
  }
  #navbar {
    display: inline-block;
    text-align: left;
  }
  #logo {
    height: 100px;
  }
  .nav-button{
    border: none;
    background: transparent;
    height: 1rem;
    margin-left: 18px;
  }
  .nav-icon{
    border: none;
    background: transparent;
    height: 1rem;
    margin-left: 18px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
