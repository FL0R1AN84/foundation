<template>
  <v-container>
    <v-btn :disabled="folder" @click="document = !document">New Page</v-btn>
    <v-btn :disabled="document" @click="folder = !folder">New Folder</v-btn>

    <v-container v-if="document" :type="documents">
      <v-form @submit.prevent="docToTable">
        <TextField
          v-model="title"
          :type="'documents'"
          @textfield="textFromField"
        />

        <v-btn color="primary" type="submit">Save</v-btn>
      </v-form>
    </v-container>

    <v-container v-if="folder" :type="docfolder">
      <v-form @submit.prevent="siteToTable">
        <TextField
          v-model="title"
          :type="'docfolder'"
          @textfield="textFromField"
        />
        <v-btn color="primary" type="submit">Save</v-btn>
      </v-form>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { Directus } from '@directus/sdk';

@Component
export default class NewDocuments extends Vue {
  table: any | null = null;
  title: any;

  document = false;
  folder = false;

  textFromField(text: any) {
    const title = text;
    this.title = title;
  }

  async docToTable() {
    const directus = new Directus(this.$config.baseURL);
    this.table = await directus
      .items('documents')
      .createOne([{ name: this.title, file: null }]);
  }

  async siteToTable() {
    const directus = new Directus(this.$config.baseURL);
    this.table = await directus
      .items('documents')
      .createOne([{ name: this.title, file: 'site' }]);
  }
}
</script>
