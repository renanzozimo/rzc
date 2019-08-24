<template>
  <div class="full-width main-footer-container" v-resize="setShowTooltip">
    <v-btn class="mr-1" icon color="pink lighten-5" @click="dialog = true">
      <v-icon>mdi-information</v-icon>
    </v-btn>
    <v-tooltip :disabled="showTooltip" color="pink lighten-1" right>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          icon
          color="pink lighten-5"
          href="https://github.com/renanzozimo/rzc"
          target="_blank"
        >
          <v-icon>mdi-github-circle</v-icon>
        </v-btn>
      </template>
      <span>projeto no github</span>
    </v-tooltip>

    <v-dialog v-model="dialog" max-width="340">
      <v-card>
        <v-card-title
          class="d-flex justify-space-between align-center justify-center"
        >
          <span class="headline">Código Secreto</span>

          <v-btn text icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="text-center mt-4">
          Isso é uma simples adaptação digital dos cartões do board game
          <a
            class="pink--text text--darken-1"
            href="https://www.ludopedia.com.br/jogo/codenames"
            target="_blank"
            ><b>Código Secreto</b></a
          >
          da
          <a
            class="pink--text text--darken-1"
            href="https://www.galapagosjogos.com.br/"
            target="_blank"
            ><b>Galápagos Jogos</b></a
          >.
        </v-card-text>

        <v-card-text class="text-center">
          Apenas uma brincadeira para aprender um pouco mais e brincar com os
          amigos.
        </v-card-text>

        <div class="text-center mb-4">
          <img
            src="../assets/logo.svg"
            alt="logo renan zozimo"
            style="height: 160px"
          />
        </div>

        <v-card-text class="text-center pb-7">
          <p>by Renan Zózimo</p>
          <v-btn
            dark
            color="blue"
            href="https://renanzozimo.github.io"
            target="_blank"
            @click="dialog = false"
          >
            renanzozimo.github.io
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>

    <div class="change-view-button">
      <v-tooltip :disabled="showTooltip" color="pink lighten-1" top>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon color="pink lighten-5" to="key">
            <v-icon>mdi-apps</v-icon>
          </v-btn>
        </template>
        <span>chaves dos comandantes</span>
      </v-tooltip>
    </div>
  </div>
</template>

<style lang="scss">
.main-footer-container {
  padding: 12px;
  @media (max-width: 720px) {
    & {
      padding: 12px 4px;
    }
  }
}
</style>

<script>
export default {
  name: "MainFooter",
  data: () => ({
    dialog: false,
    showTooltip: false
  }),
  methods: {
    setShowTooltip() {
      this.showTooltip = window.innerWidth < 420;
    }
  },
  mounted() {
    this.setShowTooltip();
  }
};
</script>
