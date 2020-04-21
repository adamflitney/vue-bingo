<template>
  <div class="game-page">
    <h1>ER BINGO</h1>
    <h2>Player: {{currentUser}}</h2>
      <GameCard />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GameCard from '../components/GameCard'
export default {
  components: {
    GameCard
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>

<style scoped>
.game-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  position: absolute;
  top: 0;
  font-size: 4rem;
}

h2 {
  justify-self: flex-start;
  transform: translateY(-2rem);
  font-size: 2rem;
}
</style>