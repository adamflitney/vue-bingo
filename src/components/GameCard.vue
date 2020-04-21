<template>
  <div class="game-card">
    <!-- <div class="grid-col" v-for="(col, colIndex) in currentUserGame" :key="col[0].value">
      <div
        class="grid-cell"
        :class="{ marked: cell.marked }"
        v-for="(cell, cellIndex) in col"
        :key="cellIndex"
        @click="currentUserGame[colIndex][cellIndex].marked = !cell.marked"
      >
        {{ cell.value }}
      </div>
    </div> -->
    <div class="grid-col col0" >
      <div
        class="grid-cell"
        :class="{ marked: cell.marked }"
        v-for="(cell, cellIndex) in currentUserGame['col0']"
        :key="cellIndex"
        @click="currentUserGame['col0'][cellIndex].marked = !cell.marked"
      >
        {{ cell.value }}
      </div>
    </div>
    <div class="grid-col col1" >
      <div
        class="grid-cell"
        :class="{ marked: cell.marked }"
        v-for="(cell, cellIndex) in currentUserGame['col1']"
        :key="cellIndex"
        @click="currentUserGame['col1'][cellIndex].marked = !cell.marked"
      >
        {{ cell.value }}
      </div>
    </div>
    <div class="grid-col col2" >
      <div
        class="grid-cell"
        :class="{ marked: cell.marked }"
        v-for="(cell, cellIndex) in currentUserGame['col2']"
        :key="cellIndex"
        @click="currentUserGame['col2'][cellIndex].marked = !cell.marked"
      >
        {{ cell.value }}
      </div>
    </div>
    <div class="grid-col col3" >
      <div
        class="grid-cell"
        :class="{ marked: cell.marked }"
        v-for="(cell, cellIndex) in currentUserGame['col3']"
        :key="cellIndex"
        @click="currentUserGame['col3'][cellIndex].marked = !cell.marked"
      >
        {{ cell.value }}
      </div>
    </div>
    <div class="grid-col col4" >
      <div
        class="grid-cell"
        :class="{ marked: cell.marked }"
        v-for="(cell, cellIndex) in currentUserGame['col4']"
        :key="cellIndex"
        @click="currentUserGame['col4'][cellIndex].marked = !cell.marked"
      >
        {{ cell.value }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      grid: {
        col0: [],
        col1: [],
        col2: [],
        col3: [],
        col4: [],
      },
    };
  },
  computed: {
    ...mapState([
      "currentUser",
      "currentUserGame",
      "minGridNumber",
      "maxGridNumber",
    ]),
  },
  methods: {
    generateGrid() {
      console.log("generating grid");
      let numbers = [];
      while (numbers.length < 25) {
        let random = Math.random();
        let newNum =
          Math.floor(random * this.maxGridNumber) + this.minGridNumber;
        if (numbers.indexOf(newNum) === -1) {
          numbers.push(newNum);
        }
      }
      for (let i = 0; i < 5; i++) {
        let newColumn = [];
        for (let j = i * 5; j < i * 5 + 5; j++) {
          newColumn.push({
            value: numbers[j],
            marked: false,
          });
        }
        this.grid["col" + i] = newColumn;
      }
      console.log(this.grid);
      this.$store.dispatch('setUserGameCard', this.grid)
    },
  },
  mounted() {
    if (this.currentUser !== "") {
      console.log('user exists')
      this.grid = this.currentUserGame
      console.log(this.grid)
      if (Object.keys(this.grid).length === 0 || this.grid["col0"].length < 5) {
        console.log('grid not populated')
        this.grid = {
          col0: [],
          col1: [],
          col2: [],
          col3: [],
          col4: [],
        };
        this.generateGrid();
        this.$store.dispatch("setUserGameCard", this.grid);
      }
    }
  },
};
</script>

<style scoped>
.game-card {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-col {
  display: flex;
  flex-direction: column;
}

.grid-cell {
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  background-color: rgb(50, 35, 50);
  font-size: 2rem;
  cursor: pointer;
}

.marked {
  background-color: rgb(179, 45, 45);
  color: rgb(50, 35, 50);
}
</style>
