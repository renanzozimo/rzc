<template>
  <div class="d-none d-sm-flex full-width px-3 pt-3 justify-space-between">
    <div class="full-width">
      <v-btn
        class="mr-3"
        outlined
        color="pink lighten-5"
        @click="dialog = true"
      >
        <v-icon left>mdi-information</v-icon> Sobre
      </v-btn>
      <v-tooltip color="pink darken-2" bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            text
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
    </div>
    <div class="full-width text-right d-flex align-center justify-end">
      <v-tooltip color="pink darken-2" bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            text
            icon
            class="mr-3"
            color="pink lighten-5"
            href="https://renanzozimo.github.io"
            target="_blank"
          >
            rz
          </v-btn>
        </template>
        <span>portifólio</span>
      </v-tooltip>
      <v-tooltip color="pink darken-2" bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            text
            icon
            color="pink lighten-5"
            href="https://www.linkedin.com/in/renanzozimo/"
            target="_blank"
          >
            <v-icon>mdi-linkedin-box</v-icon>
          </v-btn>
        </template>
        <span>linkedin</span>
      </v-tooltip>
    </div>

    <v-dialog v-model="dialog" max-width="290">
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
          <img src="../assets/logo.svg" alt="logo renan zozimo" />
        </div>

        <v-card-text class="text-center">
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
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  data: () => ({
    dialog: false
  })
};
</script>
