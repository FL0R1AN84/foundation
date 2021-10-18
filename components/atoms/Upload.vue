<template>
  <v-container v-if="type === 'image'">
    <v-file-input
      v-model="image"
      show-size
      accept="image/png, image/jpeg"
      prepend-icon="mdi-camera"
      label="Add image"
      @change="addImageUpload"
    ></v-file-input>
  </v-container>

  <v-container v-else-if="type === 'video'">
    <v-file-input
      v-model="video"
      show-size
      accept="video/mp4, video/m4v"
      prepend-icon="mdi-video"
      label="Add video"
      @change="addVideoUpload"
    ></v-file-input>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';

@Component
export default class Upload extends Vue {
  @Prop({ default: 'image' })
  type!: string;

  image: any;
  video: any;

  $api: any;

  @Emit('image')
  async addImageUpload() {
    const formData = new FormData();
    formData.append('file', this.image);
    const upload = await this.$api.upload(formData);
    this.image = null;
    return upload;
  }

  @Emit('video')
  async addVideoUpload() {
    const formData = new FormData();
    formData.append('file', this.video);
    const upload = await this.$api.upload(formData);
    this.video = null;
    return upload;
  }
}
</script>
