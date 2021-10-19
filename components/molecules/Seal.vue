<template>
  <v-container>
    <v-progress-linear
      :active="hasSaved"
      :indeterminate="hasSaved"
      absolute
      bottom
    ></v-progress-linear>
    <v-sheet
      v-for="text in table"
      :key="text.id"
      rounded="circle"
      class="mx-auto pa-5"
      height="135"
      width="135"
      color="info"
      :style="{ 'text-align': 'center' }"
    >
      <h4>
        {{ text.st_textfield }}
      </h4>
      <h2>
        {{ text.sc_textfield }}
      </h2>
      <h4>
        {{ text.sb_textfield }}
      </h4>
    </v-sheet>
    <v-form @submit.prevent="textToSeal">
      <TextField
        v-model="sttext"
        :type="'sealtop'"
        @textfield="textFromSealT"
      />
      <TextField
        v-model="sctext"
        :type="'sealcenter'"
        @textfield="textFromSealC"
      />
      <TextField
        v-model="sbtext"
        :type="'sealbottom'"
        @textfield="textFromSealB"
      />
      <v-btn color="primary" type="submit">Save</v-btn>
      <v-snackbar v-model="hasSaved" :timeout="2000" rounded absolute top>
        <div class="text-center">Wurde gespeichert</div>
      </v-snackbar>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Directus } from '@directus/sdk';

@Component
export default class Text extends Vue {
  table: any | null = null;
  hasSaved = false;
  sttext: any;
  sctext: any;
  sbtext: any;

  textFromSealT(text: any) {
    const sttext = text;
    this.sttext = sttext;
  }

  textFromSealC(text: any) {
    const sctext = text;
    this.sctext = sctext;
  }

  textFromSealB(text: any) {
    const sbtext = text;
    this.sbtext = sbtext;
  }

  async textToSeal() {
    this.hasSaved = true;
    const directus = new Directus(this.$config.baseURL);
    this.table = await directus.items('seal').createOne([
      {
        st_textfield: this.sttext,
        sc_textfield: this.sctext,
        sb_textfield: this.sbtext,
      },
    ]);
  }
}
</script>
