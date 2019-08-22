<template>
  <div>
    <v-card class="card-above red" :class="{ active: color === 'red' }">
      <h4 class="text-uppercase disable-select white--text pa-2">
        {{ word }}
      </h4>
      <img class="card-above__img" src="../assets/spy.svg" alt="spy" />
    </v-card>
    <v-card class="card-above blue" :class="{ active: color === 'blue' }">
      <h4 class="text-uppercase disable-select white--text pa-2">
        {{ word }}
      </h4>
      <img class="card-above__img" src="../assets/spy.svg" alt="spy" />
    </v-card>
    <v-card
      class="card-above yellow lighten-4"
      :class="{ active: color === 'yellow' }"
    >
      <h4 class="text-uppercase disable-select pa-2">
        {{ word }}
      </h4>
      <img class="card-above__img" src="../assets/people.svg" alt="spy" />
    </v-card>
    <v-card
      class="card-above deep-purple"
      :class="{ active: color === 'deep-purple' }"
    >
      <h4 class="text-uppercase disable-select white--text pa-2">
        {{ word }}
      </h4>
      <img class="card-above__img" src="../assets/death.svg" alt="spy" />
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

.card-above {
  position: absolute !important;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: opacity 200ms $dEasing 0ms, transform 200ms $dEasing 0ms,
    z-index 0ms linear 200ms !important;
  opacity: 0;
  transform: translateY(-16px);
  z-index: -1;

  &.active {
    transition: opacity 200ms $dEasing 250ms, transform 200ms $dEasing 250ms,
      z-index 0ms linear 0ms !important;
    opacity: 1;
    transform: translateY(0);
    z-index: 2;
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
    filter: saturate(0.5) opacity(0.5);
  }
}
</style>
