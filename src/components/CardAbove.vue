<template>
  <div>
    <v-card
      elevation="0"
      class="card-above red"
      :class="{ active: color === 'red' }"
    >
      <h4
        class="selected-word-title text-uppercase disable-select white--text pa-2"
      >
        {{ word }}
      </h4>
      <img class="card-above__img" src="../assets/spy.svg" alt="spy" />
    </v-card>
    <v-card
      elevation="0"
      class="card-above blue"
      :class="{ active: color === 'blue' }"
    >
      <h4
        class="selected-word-title text-uppercase disable-select white--text pa-2"
      >
        {{ word }}
      </h4>
      <img class="card-above__img" src="../assets/spy.svg" alt="spy" />
    </v-card>
    <v-card
      elevation="0"
      class="card-above yellow lighten-4"
      :class="{ active: color === 'yellow' }"
    >
      <h4 class="selected-word-title text-uppercase disable-select pa-2">
        {{ word }}
      </h4>
      <img class="card-above__img" src="../assets/people.svg" alt="spy" />
    </v-card>
    <v-card
      elevation="0"
      class="card-above deep-purple"
      :class="{ active: color === 'deep-purple' }"
    >
      <h4
        class="selected-word-title text-uppercase disable-select white--text pa-2"
      >
        {{ word }}
      </h4>
      <img
        class="card-above__img"
        src="../assets/death.svg"
        alt="spy"
        style="filter: saturate(0.2) opacity(0.1);"
      />
    </v-card>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {
    color: String,
    word: String
  }
};
</script>

<style lang="scss">
$dEasing: cubic-bezier(0, 0, 0.2, 1);

.selected-word-title {
  white-space: nowrap;
  transform-origin: 15px 5px;

  @media (max-width: 720px) {
    transform: scale(0.8);
  }
  @media (max-width: 540px) {
    transform: scale(0.7) rotate(45deg);
  }
  @media (max-width: 361px) {
    transform: scale(0.6) rotate(45deg);
  }
}

.card-above {
  position: absolute !important;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  transform-origin: 0 0;
  transition: opacity 180ms $dEasing 0ms, transform 180ms $dEasing 0ms !important;
  opacity: 0;
  transform: scaleY(0) scaleX(1);
  // z-index: -1;

  &.active {
    transition: opacity 180ms $dEasing 250ms, transform 180ms $dEasing 250ms !important;
    opacity: 1;
    transform: scale(1);
    // z-index: 2;
  }

  > * {
    transition: opacity 0ms $dEasing 200ms;
    opacity: 0;
  }

  &.active > * {
    transition: opacity 200ms $dEasing 450ms;
    opacity: 0.8;
  }

  &__img {
    position: absolute;
    right: -10px;
    bottom: -10px;
    max-height: 80%;
    max-width: 120px;
    filter: saturate(0.5) opacity(0.3);
  }
}
</style>
