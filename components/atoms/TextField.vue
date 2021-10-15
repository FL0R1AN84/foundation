<template>
  <container v-if="type === 'accordion'">
    <h1>
      <v-text-field
        counter="50"
        maxlength="50"
        label="Headline"
        color="var(--lightgreen-contrast)"
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
        color="var(--lightgreen-contrast)"
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
      color="var(--lightgreen-contrast)"
      clearable
      @change="addText"
    ></v-text-field>
  </container>
  <container v-else-if="type === 'docfolder'">
    <v-text-field
      counter="50"
      maxlength="50"
      label="New Folder"
      color="var(--lightgreen-contrast)"
      clearable
      @change="addText"
    ></v-text-field>
  </container>

  <container v-else-if="type === 'headerbig'">
    <v-text-field
      counter="50"
      maxlength="50"
      label="Text big"
      color="var(--lightgreen-contrast)"
      clearable
      @change="addText"
    ></v-text-field>
  </container>
  <container v-else-if="type === 'headersmall'">
    <v-text-field
      counter="50"
      maxlength="50"
      label="Text small"
      color="var(--lightgreen-contrast)"
      clearable
      @change="addText"
    ></v-text-field>
  </container>

  <container v-else-if="type === 'sealtop'">
    <v-text-field
      counter="25"
      maxlength="25"
      label="Text small top"
      color="var(--lightgreen-contrast)"
      clearable
      @change="addText"
    ></v-text-field>
  </container>
  <container v-else-if="type === 'sealcenter'">
    <v-text-field
      counter="25"
      maxlength="25"
      label="Text big center"
      color="var(--lightgreen-contrast)"
      clearable
      @change="addText"
    ></v-text-field>
  </container>
  <container v-else-if="type === 'sealbottom'">
    <v-text-field
      counter="25"
      maxlength="25"
      label="Text small bottom"
      color="var(--lightgreen-contrast)"
      clearable
      @change="addText"
    ></v-text-field>
  </container>

  <container v-else-if="type === 'slider'">
    <v-text-field
      counter="50"
      maxlength="50"
      label="Slider Text"
      color="var(--lightgreen-contrast)"
      clearable
      @change="addText"
    ></v-text-field>
  </container>
  <container v-else-if="type === 'sliderheader'">
    <v-text-field
      counter="50"
      maxlength="50"
      label="Headline"
      color="var(--lightgreen-contrast)"
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
        color="var(--lightgreen-contrast)"
        clearable
        @change="addText"
      ></v-text-field>
    </h1>
  </container>

  <container v-else-if="type === 'tablerow'">
    <v-text-field
      label="Entry into the table"
      color="var(--lightgreen-contrast)"
      clearable
      @change="addText"
    ></v-text-field>
  </container>

  <container v-else-if="type === 'text'">
    <v-text-field
      counter="50"
      maxlength="50"
      label="Headline"
      color="var(--lightgreen-contrast)"
      clearable
      @change="addText"
    ></v-text-field>
  </container>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class TextField extends Vue {
  @Prop({ default: 'accordion' })
  type!: string;

  @Emit('textfield')
  addText(text: any) {
    return text;
  }
}
</script>
