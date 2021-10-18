<template>
  <v-container>
    <v-form @submit.prevent="textToTable">
      <TextField v-model="ftext" :type="'text'" @textfield="textFromField" />
      <TextArea v-model="atext" :type="'text'" @textarea="textFromArea" />
      <v-btn color="primary" type="submit">Save</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Directus } from '@directus/sdk';

@Component
export default class TextColumns extends Vue {
  table: any | null = null;
  atext: any;
  ftext: any;

  textFromArea(text: any) {
    const atext = text;
    this.atext = atext;
  }

  textFromField(text: any) {
    const ftext = text;
    this.ftext = ftext;
  }

  async textToTable() {
    const directus = new Directus(this.$config.baseURL);
    this.table = await directus
      .items('text_column')
      .createOne([{ textarea: this.atext, textfield: this.ftext }]);
  }
}
</script>
