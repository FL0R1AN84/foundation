<template>
  <v-container>
    <v-form @submit.prevent="slideToTable">
      <TextField
        v-model="ftext"
        :type="'sliderheader'"
        @textfield="textFromField"
      />
      <TextArea v-model="atext" :type="'slider'" @textarea="textFromArea" />
      <v-carousel
        v-if="table != null"
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-carousel-item v-for="slider in table" :key="slider.id">
          <v-row class="fill-height" align="center" justify="center">
            <img
              :src="`${$config.baseURL}/assets/${slider.image}?fit=cover&width=1080&height=400`"
              :alt="`${slider.title}`"
            />
            <div class="text-h2 primary--text ml-8 boxlabel">
              <h2>{{ slider.title }}</h2>
            </div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
      <TextField :type="'slider'" @textfield="slideTextfromTextfield" />
      <Upload :type="'image'" @image="slideImagefromUpload" />
      <v-btn color="primary" type="submit">Save</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Directus } from '@directus/sdk';

@Component
export default class Slider extends Vue {
  table: any | null = null;
  atext: any;
  ftext: any;
  sftext: any;
  simage: any;

  textFromArea(text: any) {
    const atext = text;
    this.atext = atext;
  }

  textFromField(text: any) {
    const ftext = text;
    this.ftext = ftext;
  }

  slideTextfromTextfield(text: any) {
    const sftext = text;
    this.sftext = sftext;
  }

  slideImagefromUpload(image: any) {
    const simage = image;
    this.simage = simage;
  }

  async slideToTable() {
    const directus = new Directus(this.$config.baseURL);
    this.table = await directus.items('slider').createOne([
      {
        textarea: this.atext,
        textfield: this.ftext,
        image: this.simage,
        title: this.sftext,
      },
    ]);
    const response = await directus.items('slider').readMany();
    this.table = response.data;
  }
}
</script>

<style scoped>
.boxlabel {
  position: relative;
  bottom: 80px;
}
</style>
