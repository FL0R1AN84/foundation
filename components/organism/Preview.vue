<template>
  <v-container>
    <div v-for="item in table" :key="item.id">{{ item.id }}</div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Directus } from '@directus/sdk';

@Component({
  components: {},
})
export default class Preview extends Vue {
  table: any | null = null;

  async created() {
    const directus = new Directus(this.$config.baseURL);
    const response = await directus.items('preview').readMany();
    this.table = response.data;
  }
}
</script>
