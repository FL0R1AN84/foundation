<template>
  <v-container>
    <v-form @submit.prevent="videoToTable">
      <v-card v-for="video in table" :key="video.id">
        <video height="480" width="270" controls>
          <source
            :src="`${$config.baseURL}/assets/${video.video}`"
            type="video/mp4"
          />
        </video>
      </v-card>
      <TextField v-model="ftext" :type="'text'" @textfield="textFromField" />
      <TextArea v-model="atext" :type="'text'" @textarea="textFromArea" />

      <Upload :type="'video'" @video="videoFromUpload" />
      <v-btn color="primary" type="submit">Save</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Directus } from '@directus/sdk';

@Component
export default class Video extends Vue {
  table: any | null = null;
  atext: any;
  ftext: any;
  vvideo: any;

  textFromArea(text: any) {
    const atext = text;
    this.atext = atext;
  }

  textFromField(text: any) {
    const ftext = text;
    this.ftext = ftext;
  }

  videoFromUpload(video: any) {
    const vvideo = video;
    this.vvideo = vvideo;
  }

  async videoToTable() {
    const directus = new Directus(this.$config.baseURL);
    this.table = await directus
      .items('video')
      .createOne([
        { textarea: this.atext, textfield: this.ftext, video: this.vvideo },
      ]);
  }
}
</script>
