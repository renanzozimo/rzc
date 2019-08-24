<template>
  <div v-resize="setShowTooltip">
    <div
      class="main-container d-flex justify-center flex-column lighten-3"
      :class="startColor"
    >
      <div
        class="main-grid pd full-width full-height d-flex justify-space-between"
        v-show="blocks.length > 0"
      >
        <div
          class="d-flex card-wrapper pd"
          v-for="block in blocks"
          :key="'card-' + block"
        >
          <v-card class="full-width px-1 relative">
            <card-above :color="getColor(block)" word="" />
            {{ block }}
          </v-card>
        </div>
      </div>

      <div
        class="d-flex align-center px-3 py-5 text--darken-1"
        :class="startColor + '--text'"
      >
        <span>{{ startColor }}s start</span>
      </div>
    </div>

    <v-btn
      class="pd"
      color="pink lighten-1"
      dark
      fixed
      bottom
      right
      fab
      :disabled="loading"
      @click="generate()"
    >
      <v-icon>mdi-sync</v-icon>
    </v-btn>

    <div class="change-view-button">
      <v-tooltip :disabled="showTooltip" color="pink lighten-1" top>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon :color="`${startColor} darken-4`" to="/">
            <v-icon>mdi-cards</v-icon>
          </v-btn>
        </template>
        <span>cartões de espiões</span>
      </v-tooltip>
    </div>

    <loading :active="this.loading" />
  </div>
</template>

<script>
import shuffle from "../assets/scripts/arrayShuffle";
import CardAbove from "../components/CardAbove";
import Loading from "../components/Loading";

export default {
  name: "Key",
  components: {
    CardAbove,
    Loading
  },
  data: () => ({
    blocks: [],
    startColor: "red",
    min: 0,
    max: 24,
    qty: 25,
    loading: false,
    showTooltip: false
  }),
  methods: {
    //WORDS
    hasBlocksInLocalStorage() {
      return localStorage.getItem("blocks");
    },
    getBlocksInLocalStorage() {
      return localStorage.getItem("blocks");
    },
    getStartColorInLocalStorage() {
      return localStorage.getItem("color");
    },
    setBlocksInLocalStorage(list) {
      localStorage.setItem("blocks", JSON.stringify(list));
    },
    setStartColorInLocalStorage(startColor) {
      localStorage.setItem("color", JSON.stringify(startColor));
    },
    startKey() {
      if (this.hasBlocksInLocalStorage()) {
        this.blocks = JSON.parse(this.getBlocksInLocalStorage());
        this.startColor = JSON.parse(this.getStartColorInLocalStorage());
      } else {
        this.generate();
      }
    },
    generate() {
      this.loading = true;
      setTimeout(() => {
        const array = Array.from(Array(25), (x, index) => index);
        const color = Math.floor(Math.random() * 2) + 1 === 1 ? "red" : "blue";
        this.blocks = [...shuffle(array)];
        this.startColor = color;
        this.setBlocksInLocalStorage(this.blocks);
        this.setStartColorInLocalStorage(this.startColor);
        this.loading = false;
      }, 1000);
      ga("send", "event", "buttonClick", "refresh keys");// eslint-disable-line
    },
    getColor(number) {
      if (number === 0) return "deep-purple";
      if (number % 2 !== 0 && number < 18) return this.startColor;
      if (number > 0 && number % 2 === 0 && number < 18)
        return this.startColor === "red" ? "blue" : "red";
      return "yellow";
    },
    setShowTooltip() {
      this.showTooltip = window.innerWidth < 420;
    }
  },
  mounted() {
    this.startKey();
    this.setShowTooltip();
  }
};
</script>

<style lang="scss"></style>
