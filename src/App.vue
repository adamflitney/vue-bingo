<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/game">Game</router-link> |
      <router-link to="/manage">Manage</router-link>
    </div> -->
    <router-view/>
    <router-link class="linky" to="/manage">Manage</router-link>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(255,10,10);
  box-sizing: border-box;
  background: url("assets/picture1.jpg") no-repeat;
  background-size: cover;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgb(255,10,10);
}

.linky {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.5rem;
  color: black;
}
</style>
