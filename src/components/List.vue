<template>
  <div
    class="main-container d-flex justify-center align-center flex-column blue-grey"
  >
    <div class="main-container__detail blue-grey darken-4"></div>

    <div
      class="main-grid full-width full-height d-flex justify-space-between"
      v-show="words.length > 0"
    >
      <div
        class="d-flex card-wrapper"
        v-for="wordItem in words"
        :key="wordItem.word"
      >
        <v-card
          class="full-width px-1 relative"
          hover
          @click="switchColor(wordItem.word)"
        >
          <div class="d-flex justify-center align-center full-height">
            <h4
              class="word-title text-center text-uppercase disable-select blue-grey--text text--darken-3"
            >
              {{ wordItem.word }}
            </h4>
          </div>

          <card-above :color="wordItem.color" :word="wordItem.word" />
        </v-card>
      </div>
    </div>

    <main-footer />

    <v-btn
      v-show="words.length > 0"
      color="pink lighten-1"
      dark
      fixed
      bottom
      right
      fab
      @click="generate()"
    >
      <v-icon>mdi-sync</v-icon>
    </v-btn>

    <loading :active="this.loading" />
  </div>
</template>

<style lang="scss">
$gridSpacingSmallDevices: 4px;
$gridSpacingLargeDevices: 12px;

.card-wrapper {
  width: 20%;
  flex-shrink: 0;
  padding-left: $gridSpacingLargeDevices;
  padding-top: $gridSpacingLargeDevices;
  @media (max-width: 720px) {
    & {
      padding-left: $gridSpacingSmallDevices;
      padding-top: $gridSpacingSmallDevices;
    }
  }
}
.main-container {
  height: 100vh;
  z-index: 0;

  &__detail {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 30%;
    z-index: 0;
  }
}
.main-grid {
  flex-wrap: wrap;
  padding-right: $gridSpacingLargeDevices;
  @media (max-width: 720px) {
    & {
      padding-right: $gridSpacingSmallDevices;
    }
  }
}
.word-title {
  @media (max-width: 720px) {
    transform: scale(0.8);
    white-space: nowrap;
  }
  @media (max-width: 540px) {
    transform: scale(0.7) rotate(45deg);
    white-space: nowrap;
  }
  @media (max-width: 361px) {
    transform: scale(0.6) rotate(45deg);
  }
}
</style>

<script>
//Scripts
import getObjByProp from "../assets/scripts/getObjByProp";
import getRandomUniqueNumbers from "../assets/scripts/getRandomUniqueNumbers";

//Data
import Words from "../data/words";

//Components
import CardAbove from "../components/CardAbove";
import Loading from "../components/Loading";
import MainFooter from "../components/MainFooter";

export default {
  name: "home",
  components: {
    CardAbove,
    Loading,
    MainFooter
  },
  data: () => ({
    loading: false,
    words: [],
    min: 0,
    max: 480,
    qty: 25
  }),
  methods: {
    //WORDS
    hasWordsInLocalStorage() {
      return localStorage.getItem("words");
    },
    getWordsInLocalStorage() {
      return localStorage.getItem("words");
    },
    setWordsInLocalStorage(list) {
      localStorage.setItem("words", JSON.stringify(list));
    },
    startWords() {
      if (this.hasWordsInLocalStorage()) {
        this.words = JSON.parse(this.getWordsInLocalStorage());
      } else {
        this.generate();
      }
    },
    getWord(n) {
      return n < Words.length ? Words[n] : "--";
    },
    getAllWords(min, max, qty) {
      return getRandomUniqueNumbers(min, max, qty).map(n => {
        return {
          word: this.getWord(n),
          color: ""
        };
      });
    },

    //COLORS
    getColor(word) {
      const obj = getObjByProp(this.words, word, "word");
      return obj.color || "";
    },
    setColor(word, color = "") {
      this.words = this.words.map(w => {
        return w.word === word
          ? {
              word: word,
              color: color
            }
          : w;
      });
    },
    isColor(color, word) {
      return this.getColor(word) === color;
    },
    switchColor(word) {
      let string = word + " was clicked";
      ga("send", "event", "cardClick", string); // eslint-disable-line
      let color = this.getColor(word);

      if (color === "") this.setColor(word, "red");
      if (color === "red") this.setColor(word, "blue");
      if (color === "blue") this.setColor(word, "yellow");
      if (color === "yellow") this.setColor(word, "deep-purple");
      if (color === "deep-purple") this.setColor(word, "");

      this.setWordsInLocalStorage(this.words);
    },

    //GENERATE
    generate(min = this.min, max = this.max, qty = this.qty) {
      this.loading = true;
      setTimeout(() => {
        this.words = this.getAllWords(min, max, qty);
        this.setWordsInLocalStorage(this.words);
        this.loading = false;
      }, 1000);
      ga("send", "event", "buttonClick", "refresh cards");// eslint-disable-line
    }
  },
  mounted() {
    this.startWords();
  }
};
</script>
