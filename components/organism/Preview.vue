<template v-for="item in table" :key="item.id">
  <v-container>
    <v-card>
      <v-banner dark color="primary" elevation="1">Name - Titel</v-banner>
      <br />
      <v-card-title>Preview - Work in progress</v-card-title>
      <br />
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Directus } from '@directus/sdk';

@Component
export default class Preview extends Vue {
  table: any | null = null;

  async created() {
    const directus = new Directus(this.$config.baseURL);
    const response = await directus.items('preview').readMany();
    this.table = response.data;
  }
}
</script>
