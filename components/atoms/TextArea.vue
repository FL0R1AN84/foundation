<template>
  <v-container>
    <v-toolbar class="d-flex justify-center" elevation="2" dense rounded>
      <v-btn-toggle
        v-model="toggle_multiple"
        color="primary"
        dense
        multiple
        rounded
      >
        <v-btn :value="1" @click="bold = !bold">
          <v-icon>mdi-format-bold</v-icon>
        </v-btn>

        <v-btn :value="2" @click="italic = !italic">
          <v-icon>mdi-format-italic</v-icon>
        </v-btn>

        <v-btn :value="3" @click="underline = !underline">
          <v-icon>mdi-format-underline</v-icon>
        </v-btn>

        <v-btn :value="4">
          <v-icon>mdi-format-color-fill</v-icon>
        </v-btn>
      </v-btn-toggle>

      <div class="mx-4"></div>

      <v-btn-toggle
        v-model="toggle_exclusive"
        color="primary"
        dense
        mandatory
        rounded
      >
        <v-btn :value="1">
          <v-icon>mdi-format-align-left</v-icon>
        </v-btn>

        <v-btn :value="2">
          <v-icon>mdi-format-align-center</v-icon>
        </v-btn>

        <v-btn :value="3">
          <v-icon>mdi-format-align-right</v-icon>
        </v-btn>

        <v-btn :value="4">
          <v-icon>mdi-format-align-justify</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>

    <v-container v-if="type === 'accordion'">
      <v-textarea
        :class="{
          txtbold: bold,
          txtitalic: italic,
          txtunderline: underline,
        }"
        clearable
        label="Beschreibung"
        color="var(--lightgreen-contrast)"
        @change="addText"
      >
      </v-textarea>
    </v-container>

    <v-container v-else-if="type === 'slider'">
      <v-textarea
        :class="{
          txtbold: bold,
          txtitalic: italic,
          txtunderline: underline,
        }"
        clearable
        label="Beschreibung"
        color="var(--lightgreen-contrast)"
        @change="addText"
      ></v-textarea>
    </v-container>

    <v-container v-else-if="type === 'text'">
      <v-textarea
        :class="{
          txtbold: bold,
          txtitalic: italic,
          txtunderline: underline,
        }"
        clearable
        label="Inhalt"
        color="var(--lightgreen-contrast)"
        @change="addText"
      ></v-textarea>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';

@Component
export default class TextArea extends Vue {
  @Prop({ default: 'accordion' })
  type!: string;

  bold = false;
  italic = false;
  underline = false;
  toggle_exclusive = 1;
  toggle_multiple = [];

  @Emit('textarea')
  addText(text: any) {
    return text;
  }
}
</script>

<style scoped>
.txtbold {
  font-weight: bold;
}

.txtitalic {
  font-style: italic;
}

.txtunderline {
  text-decoration: underline;
}
</style>
