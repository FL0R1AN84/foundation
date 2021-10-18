<template>
  <v-container v-if="type === 'default'">
    <v-form @submit.prevent="textImageToTable">
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

          <Seal v-model="dialog" />
        </v-card>
      </v-dialog>
      <v-card
        v-for="text in table"
        :key="text.id"
        :class="`d-flex wrap justify-${imgPos}`"
      >
        <v-img
          max-height="390"
          max-width="300"
          :src="`${$config.baseURL}/assets/${text.image}?fit=cover&width=390&height=300`"
          :alt="`${text.textfield_big + ' ' + text.textfield_small}`"
        >
        </v-img>
      </v-card>
      <v-switch v-if="table != null" v-model="imgPos" value="end">
        <template #label>Bildposition ändern</template>
      </v-switch>
      <TextField v-model="ftext" :type="'text'" @textfield="textFromField" />
      <TextArea v-model="atext" :type="'text'" @textarea="textFromArea" />
      <Upload :type="'image'" @image="imageFromUpload" />

      <v-btn color="primary" type="submit">Save</v-btn>
    </v-form>
  </v-container>

  <v-container v-else-if="type === 'expansion'">
    <v-form @submit.prevent="textImageToTable">
      <v-dialog v-model="dialog" width="600px">
        <template #activator="{ on, attrs }">
          <v-btn color="primary" class="my-2" dark v-bind="attrs" v-on="on">
            Add seal
          </v-btn>
        </template>
        <v-card>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close-circle</v-icon>
          </v-btn>
          <Seal v-model="dialog" />
        </v-card>
      </v-dialog>
      <v-card
        v-for="text in table"
        :key="text.id"
        :class="`d-flex wrap justify-${imgPos}`"
      >
        <v-img
          max-height="390"
          max-width="300"
          :src="`${$config.baseURL}/assets/${text.image}?fit=cover&width=390&height=300`"
          :alt="`${text.textfield_big + ' ' + text.textfield_small}`"
        >
        </v-img>
      </v-card>
      <v-switch v-if="table != null" v-model="imgPos" value="end">
        <template #label>Change image position</template>
      </v-switch>
      <TextField v-model="ftext" :type="'text'" @textfield="textFromField" />
      <TextArea v-model="atext" :type="'text'" @textarea="textFromArea" />
      <Upload :type="'image'" @image="imageFromUpload" />
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { Directus } from '@directus/sdk';

@Component
export default class TextImage extends Vue {
  @Prop({ default: 'default' })
  type!: string;

  table: any | null = null;
  atext: any;
  ftext: any;
  timage: any;
  dialog = false;
  imgPos: string = 'start';

  textFromArea(text: any) {
    const atext = text;
    this.atext = atext;
  }

  textFromField(text: any) {
    const ftext = text;
    this.ftext = ftext;
  }

  imageFromUpload(image: any) {
    const timage = image;
    this.timage = timage;
  }

  async textImageToTable() {
    const directus = new Directus(this.$config.baseURL);
    this.table = await directus
      .items('text_image')
      .createOne([
        { textarea: this.atext, textfield: this.ftext, image: this.timage },
      ]);
  }
}
</script>
