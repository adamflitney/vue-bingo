<template>
  <div class="user-list">
    <div
      v-for="game in activeUserGames"
      :key="game.name"
      
      class="user-row"
    >
    <button @click="removeUser">X</button>
      <h2 
      @click="setCurrentUser"
      :class="{selected: game.name === currentUser}"
      
      >{{ game.name }}</h2>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["currentUser", "activeUserGames"]),
  },
  methods: {
    setCurrentUser(event) {
      if (this.currentUser !== event.target.innerText) {
        console.log("setting user to: " + event.target.innerText);
        this.$store.dispatch("setCurrentUserAndGame", event.target.innerText);
      }
    },
    removeUser(event) {
      console.log('remove user')
      console.log(event)
      this.$store.dispatch("removeUser", event.target.nextElementSibling.innerText);
    }
  },
  mounted() {
    this.$store.dispatch("getActiveUserGames");
  },
};
</script>

<style scoped>
.user-list {
  margin-right: 5rem;
}

.user-row {
  display: flex;
  align-items: center;
}

.user-row h2,
.user-row button {
  cursor: pointer;
}

button {
  margin-right: 2rem;
  height: 1.5rem;
  width: 1.5rem;
  background-color: rgb(199, 18, 18);
  border-style: none;
  font-weight: 800;
  border-radius: 4px;
}

.selected {
  text-decoration: underline;
}
</style>
