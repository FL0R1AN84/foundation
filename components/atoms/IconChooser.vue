<template>
  <v-container>
    <v-select
      v-model="select"
      label="Icon auswählen:"
      :items="icons"
      item-text="icon"
      item-value="icon"
      return-object
    >
      <template #item="{ item }">
        <v-icon>{{ item.icon }}</v-icon>
      </template>

      <template #selection>
        <v-icon>{{ select.icon }}</v-icon>
      </template>
    </v-select>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class IconChooser extends Vue {
  select = {};
  test = [];
  icons = [
    { icon: 'mdi-plus' },
    { icon: 'mdi-minus' },
    { icon: 'mdi-information' },
    { icon: 'mdi-close' },
  ];
}
</script>
