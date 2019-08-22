<template>
  <div
    class="loading-container d-flex justify-center align-center flex-column"
    :class="{ active: active }"
  >
    <div class="pb-6" style="width: 120px">
      <img src="../assets/finn_and_Jake.png" class="full-width" />
    </div>
    <v-progress-circular
      :size="120"
      :width="3"
      indeterminate
      color="red"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    active: Boolean
  }
};
</script>

<style lang="scss">
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
  z-index: 3;

  &.active {
    transition: opacity 200ms ease-in-out 10ms, transform 0ms linear 0ms;
    opacity: 1;
    transform: scale(1);
  }
}
</style>
