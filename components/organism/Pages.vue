<template>
  <v-container class="sidebar">
    <NewDocuments />

    <v-treeview
      v-model="tree"
      :open="initiallyOpen"
      :items="table"
      item-key="name"
      open-on-click
    >
      <template #prepend="{ item, open }">
        <v-icon v-if="item.file">
          {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
        </v-icon>
        <v-icon v-else> mdi-file-document-outline </v-icon>
      </template>
    </v-treeview>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'nuxt-property-decorator';
import { Directus } from '@directus/sdk';

@Component
export default class Documents extends Vue {
  initiallyOpen = ['public'];
  table: any;
  tree = [];

  async created() {
    const directus = new Directus(this.$config.baseURL);
    const response = await directus.items('documents').readMany();
    this.table = response.data;
    this.$forceUpdate();
  }
}
</script>
