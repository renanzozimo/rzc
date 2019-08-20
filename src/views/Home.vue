<template>
  <div class="home">
    {{ words }}
    <button @click="generate(min, max, qty)">click here</button>
  </div>
</template>

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

export default {
  name: "home",
  components: {},
  data: () => ({
    words: [],
    min: 0,
    max: 10,
    qty: 5
  }),
  methods: {
    getWord(n) {
      return n < Words.length ? Words[n] : "--";
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
    generate(min, max, qty) {
      this.words = this.getAllWords(min, max, qty);
    }
  }
};
</script>
