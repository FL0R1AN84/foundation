<template>
  <v-container class="sidebar">
    <Upload />
    <v-treeview
      v-model="tree"
      :open="initiallyOpen"
      :items="table"
      item-key="filename_download"
      open-on-click
    >
      <template #prepend="{ item }">
        <v-dialog transition="dialog-top-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <v-icon> mdi-file-image-outline </v-icon>
              {{ item.filename_download }}
            </div>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="accent" dark>{{ item.title }}</v-toolbar>
              <v-card-text>
                <div class="text-h2 pa-12">
                  <v-img
                    max-height="960"
                    max-width="540"
                    :src="`${$config.baseURL}/assets/${item.id}?fit=cover`"
                    :alt="`${item.title}`"
                  >
                  </v-img>
                </div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </template>
    </v-treeview>

    <!--
    </v-dialog> -->
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Directus } from '@directus/sdk';

@Component
export default class Assets extends Vue {
  initiallyOpen = ['public'];
  table!: any;
  tree = [];
  $api: any;

  // async created(item: any) {
  //   const directus = new Directus(this.$config.baseURL);
  //   const response = await directus.transport.get('folders', item);
  //   this.table = response.data;
  //   this.$forceUpdate();
  // }

  async created(item: any) {
    const directus = new Directus(this.$config.baseURL);
    const response = await directus.transport.get('files', item);
    this.table = response.data;
    this.$forceUpdate();
  }
}
</script>
