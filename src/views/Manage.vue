<template>
  <div class="manage-page">
      <button @click="startNewGame">New Game</button>
      <div class="row">
        <UserList />
        <GameCard />
      </div>
      
  </div>
</template>

<script>
import UserList from '../components/UserList'
import GameCard from '../components/GameCard'
export default {
  components: {
    UserList,
    GameCard
  },
  methods: {
    startNewGame() {
      this.$store.dispatch('removeAllActiveUserGames')
    }
  }
}
</script>

<style scoped>
.manage-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.row {
  display: flex;
  margin: 5rem;
  margin-right: 15rem;
}

button {
  border-style: none;
  background-color: rgb(2, 175, 46);
  font-weight: 800;
  height: 2rem;
  align-self: flex-start;
  margin-left: 10rem;
  cursor: pointer;
}
</style>