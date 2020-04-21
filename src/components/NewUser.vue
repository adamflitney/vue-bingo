<template>
  <div class="new-user">
      <label for="user">Pick a name</label>
      <input type="text" name="user" v-model="userText">
      <button @click="createUser">Start</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userText: ''
    }
  },
methods: {
  createUser() {
    if(this.userText.length > 0) {
    this.$store.dispatch('createUser', this.userText)
    }
  }
},
mounted() {
  this.$store.dispatch('getActiveUserGames')
}
}
</script>

<style scoped>
.new-user {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5rem;
}

label {
  font-size: 5rem;
  margin-right: 2rem;
}

input {
  height: 3rem;
  width: 20rem;
  border-style: none;
  border-radius: 3px;
  font-size: 2rem;
  padding: 0 1rem;
  background-color:rgb(50, 35, 50);
  color: rgb(255,10,10);
}

button {
  height: 5rem;
  width: 10rem;
  margin-left: 6rem;
  font-size: 2rem;
  font-weight: 800;
  color: rgb(50, 35, 50);
  background-color: rgb(255,10,10);
  border-style: none;
  border-radius: 3px;
  box-shadow: -3px 3px 3px rgb(50, 35, 50);
  cursor: pointer;
}
</style>