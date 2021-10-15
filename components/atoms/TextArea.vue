<template>
  <v-container v-if="type === 'accordion'">
    <v-textarea
      clearable
      label="Description above the accordion"
      color="var(--lightgreen-contrast)"
      @change="addText"
    ></v-textarea>
  </v-container>

  <v-container v-else-if="type === 'slider'">
    <v-textarea
      clearable
      label="Description above the slider"
      color="var(--lightgreen-contrast)"
      @change="addText"
    ></v-textarea>
  </v-container>

  <v-container v-else-if="type === 'text'">
    <v-textarea
      clearable
      label="Description"
      color="var(--lightgreen-contrast)"
      @change="addText"
    ></v-textarea>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class TextArea extends Vue {
  @Prop({ default: 'accordion' })
  type!: string;

  @Emit('textarea')
  addText(text: any) {
    return text;
  }
}
</script>
