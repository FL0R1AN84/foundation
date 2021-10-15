<template>
  <v-sheet class="mx-auto" max-width="100%">
    <v-slide-group v-model="model" active-class="white" show-arrows>
      <v-slide-item v-for="n in 4" :key="n" v-slot="{ active, toggle }">
        <v-card
          :color="active ? undefined : 'accent'"
          class="ma-4"
          height="300"
          width="300"
          @click="toggle"
        >
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="primary"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    model: null,
  }),
};
</script>
