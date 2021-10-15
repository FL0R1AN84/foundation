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
              <v-tab>Elemente</v-tab>
              <v-tab>Dokumente</v-tab>
              <v-tab>Assets</v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-items v-model="tabs">
          <v-tab-item>
            <Elements />
          </v-tab-item>
          <v-tab-item>
            <Documents />
          </v-tab-item>
          <v-tab-item> <Assets /> </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Assets from '~/components/organism/Assets.vue';
import Documents from '~/components/organism/Documents.vue';
import Elements from '~/components/organism/Elements.vue';
import Editor from '~/components/organism/Editor.vue';

@Component({
  components: {
    Assets,
    Documents,
    Elements,
    Editor,
  },
  middleware: ['auth'],
})
export default class extends Vue {
  tabs = null;
}
</script>

<style>
.v-tabs-slider {
  color: var(--pastellgruen);
}
</style>
