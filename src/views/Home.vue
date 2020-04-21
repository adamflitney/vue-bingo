<template>
  <div class="home">
    <h1>ER BINGO</h1>
    <NewUser />
  </div>
</template>

<script>
// @ is an alias to /src
import NewUser from '@/components/NewUser.vue'

export default {
  name: 'Home',
  components: {
    NewUser
  }
}
</script>

<style scoped>
.home {
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
</style>
