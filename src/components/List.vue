<template>
  <div class="main-container orange lighten-4 pa-5">
    <div
      class="main-grid pr-3 pb-3 d-flex justify-space-between"
      v-show="words.length > 0"
    >
      <div class="d-flex col-fuso pl-3 pt-3" v-for="word in words" :key="word">
        <v-card class="full-width px-1" hover @click="switchColor(word)">
          <div class="d-flex justify-center align-center full-heigth">
            <v-icon
              class="mr-1 ty-adj deep-purple--text"
              v-show="isColor('deep-purple', word)"
              >mdi-skull</v-icon
            >
            <v-icon
              class="mr-1 ty-adj blue--text"
              v-show="isColor('blue', word)"
              >mdi-checkbox-blank-circle</v-icon
            >
            <v-icon class="mr-1 ty-adj red--text" v-show="isColor('red', word)"
              >mdi-cards-diamond</v-icon
            >
            <h4
              class="text-center text-uppercase disable-select"
              :class="`${getColor(word)}--text`"
            >
              {{ word }}
            </h4>
          </div>
        </v-card>
      </div>
    </div>

    <v-fab-transition>
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn
            v-show="words.length > 0"
            v-on="on"
            color="blue"
            dark
            fixed
            bottom
            right
            fab
            @click="generate()"
          >
            <v-icon>mdi-sync</v-icon>
          </v-btn>
        </template>
        <span>Gerar novamente</span>
      </v-tooltip>
    </v-fab-transition>

    <div
      class="loading-container d-flex justify-center align-center flex-column"
      :class="{ active: this.loading }"
    >
      <div class="pb-6" style="width: 120px">
        <img src="../assets/finn_and_Jake.png" class="full-width" />
      </div>
      <v-progress-circular
        :size="96"
        :width="3"
        indeterminate
        color="red"
      ></v-progress-circular>
    </div>
  </div>
</template>

<style lang="scss">
.col-fuso {
  width: 20%;
  flex-shrink: 0;
}
.main-container {
  height: 100vh;
}
.main-grid {
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
}
.full-width {
  width: 100%;
}
.full-heigth {
  height: 100%;
}
.loading-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(#fff, 0.8);
  transition: opacity 200ms ease-in-out 0ms, transform 0ms linear 200ms;
  opacity: 0;
  transform: scale(0);

  &.active {
    transition: opacity 200ms ease-in-out 10ms, transform 0ms linear 0ms;
    opacity: 1;
    transform: scale(1);
  }
}
.disable-select {
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
}
.ty-adj {
  transform: translateY(-2px);
}
</style>

<script>
const getRandomInt = (min, max) => {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) +
    Math.ceil(min)
  );
};

const getRandomUniqueNumbers = (min, max, qty, arr = []) => {
  let i = 0;
  while (i < qty) {
    let n = getRandomInt(min, max);
    !arr.includes(n) && arr.push(n) && i++;
  }
  return arr;
};

import Words from "../data/words";
import { setTimeout } from "timers";

export default {
  name: "home",
  data: () => ({
    loading: false,
    words: [],
    min: 0,
    max: 480,
    qty: 25,
    colors: {}
  }),
  methods: {
    //WORDS
    hasWordsInLocalStorage() {
      return localStorage.getItem("words");
    },
    getWordsInLocalStorage() {
      return localStorage.getItem("words");
    },
    setWordsLocalStorage(list) {
      localStorage.setItem("words", list);
    },
    startWords() {
      if (this.hasWordsInLocalStorage()) {
        this.words = this.getWordsInLocalStorage().split(",");
      } else {
        this.generate();
      }
    },
    getWord(n) {
      return n < Words.length ? Words[n] : "--";
    },

    //COLORS
    startColors(list) {
      let obj = {};
      list.map(w => {
        obj[w] = "";
      });
      this.colors = { ...obj };
    },
    getColor(word) {
      return this.colors[word] || "";
    },
    setColor(word, color = "") {
      this.colors[word] = color;
    },
    isColor(color, word) {
      return this.getColor(word) === color;
    },
    switchColor(word) {
      let color = this.getColor(word);

      if (color === "") this.setColor(word, "red");
      if (color === "red") this.setColor(word, "blue");
      if (color === "blue") this.setColor(word, "deep-purple");
      if (color === "deep-purple") this.setColor(word, "");

      this.$forceUpdate();
    },

    getAllWords(min, max, qty) {
      if (min > max) {
        console.log(`Erro: mínimo(${min}) maior que máximo(${max}).`); // eslint-disable-line
        return ["error"];
      }
      if (qty > max - min) {
        console.log(`Erro: quantidade(${qty}) maior diferença entre máximo(${max}) e mínimo(${min}) que é ${max - min}.`); // eslint-disable-line
        return ["error"];
      }
      return getRandomUniqueNumbers(min, max, qty).map(n => {
        return this.getWord(n);
      });
    },
    generate(min = this.min, max = this.max, qty = this.qty) {
      this.loading = true;
      setTimeout(() => {
        this.words = this.getAllWords(min, max, qty);
        this.startColors(this.words);
        this.setWordsLocalStorage(this.words);
        this.loading = false;
      }, 1000);
      _gaq.push(["_trackEvent", "button3", "clicked"]);
    }
  },
  mounted() {
    this.startWords();
  }
};
</script>
