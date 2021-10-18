<template>
  <v-container v-if="type === 'default'">
    <v-form @submit.prevent="querToTable"> Lorem Ipsum </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { Directus } from '@directus/sdk';

@Component
export default class Example extends Vue {
  @Prop({ default: 'default' })
  type!: string;

  table: any | null = null;
  platzhalter1: any;
  platzhalter2: any;

  textFromArea(text: any) {
    const platzhalter1 = text;
    this.platzhalter1 = platzhalter1;
  }

  textFromField(text: any) {
    const platzhalter2 = text;
    this.platzhalter2 = platzhalter2;
  }

  async querToTable() {
    const directus = new Directus(this.$config.baseURL);
    this.table = await directus
      .items('Example')
      .createOne([
        { textarea: this.platzhalter1, textfield: this.platzhalter2 },
      ]);
  }
}
</script>
