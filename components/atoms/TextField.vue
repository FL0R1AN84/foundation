<template>
  <container v-if="type === 'accordion'">
    <h1>
      <v-text-field
        counter="50"
        maxlength="50"
        label="Headline"
        clearable
        @change="addText"
      ></v-text-field>
    </h1>
  </container>
  <container v-else-if="type === 'subaccordion'">
    <h1>
      <v-text-field
        counter="50"
        maxlength="50"
        label="Item Headline"
        clearable
        @change="addText"
      ></v-text-field>
    </h1>
  </container>

  <container v-else-if="type === 'documents'">
    <v-text-field
      counter="50"
      maxlength="50"
      label="New Page"
      clearable
      @change="addText"
    ></v-text-field>
  </container>
  <container v-else-if="type === 'docfolder'">
    <v-text-field
      counter="50"
      maxlength="50"
      label="New Folder"
      clearable
      @change="addText"
    ></v-text-field>
  </container>

  <container v-else-if="type === 'headerbig'">
    <v-text-field
      counter="50"
      maxlength="50"
      label="Text big"
      clearable
      @change="addText"
    ></v-text-field>
  </container>
  <container v-else-if="type === 'headersmall'">
    <v-text-field
      counter="50"
      maxlength="50"
      label="Text small"
      clearable
      @change="addText"
    ></v-text-field>
  </container>

  <container v-else-if="type === 'sealtop'">
    <v-text-field
      counter="25"
      maxlength="25"
      label="Text small top"
      clearable
      @change="addText"
    ></v-text-field>
  </container>
  <container v-else-if="type === 'sealcenter'">
    <v-text-field
      counter="25"
      maxlength="25"
      label="Text big center"
      clearable
      @change="addText"
    ></v-text-field>
  </container>
  <container v-else-if="type === 'sealbottom'">
    <v-text-field
      counter="25"
      maxlength="25"
      label="Text small bottom"
      clearable
      @change="addText"
    ></v-text-field>
  </container>

  <container v-else-if="type === 'slider'">
    <v-text-field
      counter="50"
      maxlength="50"
      label="Slider Text"
      clearable
      @change="addText"
    ></v-text-field>
  </container>
  <container v-else-if="type === 'sliderheader'">
    <v-text-field
      counter="50"
      maxlength="50"
      label="Headline"
      clearable
      @change="addText"
    ></v-text-field>
  </container>

  <container v-else-if="type === 'tabletitle'">
    <h1>
      <v-text-field
        counter="50"
        maxlength="50"
        label="Table title"
        clearable
        @change="addText"
      ></v-text-field>
    </h1>
  </container>

  <container v-else-if="type === 'tablerow'">
    <v-text-field
      label="Entry into the table"
      clearable
      @change="addText"
    ></v-text-field>
  </container>

  <container v-else-if="type === 'text'">
    <v-text-field
      counter="50"
      maxlength="50"
      label="Headline"
      clearable
      @change="addText"
    ></v-text-field>
  </container>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';

@Component
export default class TextField extends Vue {
  @Prop({ default: 'accordion' })
  type!: string;

  @Emit('textfield')
  addText(text: any) {
    return text;
  }
}
</script>
