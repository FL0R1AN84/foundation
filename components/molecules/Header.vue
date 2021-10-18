<template>
  <v-container>
    <v-form @submit.prevent="headerToTable">
      <v-dialog v-model="dialog" width="600px">
        <template #activator="{ on, attrs }">
          <v-btn class="primary--text my-2" v-bind="attrs" v-on="on">
            Add seal
          </v-btn>
        </template>
        <v-card>
          <v-card-actions class="justify-end">
            <v-btn icon @click="dialog = false">
              <v-icon>mdi-close-circle</v-icon>
            </v-btn>
          </v-card-actions>
          <Siegel v-model="dialog" />

          <Seal />
        </v-card>
      </v-dialog>
      <v-card v-for="header in table" :key="header.id">
        <v-img
          class="white--text align-end"
          :src="`${$config.baseURL}/assets/${header.image}?fit=cover&width=1080&height=400`"
          :alt="`${header.textfield_big + ' ' + header.textfield_small}`"
        >
          <v-card-title>{{ header.textfield_big }}</v-card-title>
          <v-card-subtitle>{{ header.textfield_small }}</v-card-subtitle>
        </v-img>
      </v-card>
      <TextField
        v-model="ftext"
        :type="'headerbig'"
        @textfield="textFromFieldBig"
      />
      <TextField
        v-model="atext"
        :type="'headersmall'"
        @textfield="textFromFieldSmall"
      />
      <div class="d-flex">
        <Upload :type="'image'" @image="slideImagefromUpload" />
        <IconChooser />
      </div>
      <v-btn color="primary" type="submit">Save</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Directus } from '@directus/sdk';

@Component
export default class Header extends Vue {
  table: any | null = null;
  btext: any;
  stext: any;
  himage: any;
  dialog = false;

  textFromFieldBig(text: any) {
    const btext = text;
    this.btext = btext;
  }

  textFromFieldSmall(text: any) {
    const stext = text;
    this.stext = stext;
  }

  slideImagefromUpload(image: any) {
    const himage = image;
    this.himage = himage;
  }

  async headerToTable() {
    const directus = new Directus(this.$config.baseURL);
    this.table = await directus.items('header').createOne([
      {
        image: this.himage,
        textfield_big: this.btext,
        textfield_small: this.stext,
      },
    ]);
  }
}
</script>
