<template>
  <v-container v-if="type === 'default'">
    <v-form @submit.prevent="textToTable">
      <TextField v-model="ftext" :type="'text'" @textfield="textFromField" />
      <TextArea v-model="atext" :type="'text'" @textarea="textFromArea" />
      <v-btn color="primary" type="submit">Save</v-btn>
    </v-form>
  </v-container>

  <v-container v-else-if="type === 'expansion'">
    <v-form @submit.prevent="textToTable">
      <TextField v-model="ftext" :type="'text'" @textfield="textFromField" />
      <TextArea v-model="atext" :type="'text'" @textarea="textFromArea" />
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { Directus } from '@directus/sdk';

@Component
export default class TextText extends Vue {
  @Prop({ default: 'default' })
  type!: string;

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
      .items('text')
      .createOne([{ textarea: this.atext, textfield: this.ftext }]);
  }
}
</script>
