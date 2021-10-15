<template>
  <v-row class="pa-4">
    <v-col md="9" class="" outlined tile>
      <v-container>
        <v-card>
          <Editor />
        </v-card>
      </v-container>
    </v-col>
    <v-col md="3" outlined tile>
      <v-card>
        <v-toolbar color="primary" dark>
          <template #extension>
            <v-tabs v-model="tabs" centered>
              <v-tab>Items</v-tab>
              <v-tab>Pages</v-tab>
              <v-tab>Media</v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-items v-model="tabs">
          <v-tab-item>
            <Items />
          </v-tab-item>
          <v-tab-item>
            <Pages />
          </v-tab-item>
          <v-tab-item> <Media /> </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Media from '~/components/organism/Media.vue';
import Pages from '~/components/organism/Pages.vue';
import Items from '~/components/organism/Items.vue';
import Editor from '~/components/organism/Editor.vue';

@Component({
  components: {
    Media,
    Pages,
    Items,
    Editor,
  },
  middleware: ['auth'],
})
export default class extends Vue {
  tabs = null;
}
</script>
