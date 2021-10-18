<template>
  <v-container class="sidebar">
    <draggable
      v-model="itemsArray"
      class="d-inline-flex flex-wrap justify-space-around dragArea list-group"
      ghost-class="ghost"
      :group="{ name: 'items', pull: 'clone', put: false }"
      :sort="false"
    >
      <v-card v-for="item in itemsArray" :key="item.id" class="ma-2 py-4 item">
        <v-icon>{{ item.icon }}</v-icon>
        <v-card-text> {{ item.title }}</v-card-text>
      </v-card>
    </draggable>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import draggable from 'vuedraggable';
import Accordion from '~/components/molecules/Accordion.vue';
import CardSlider from '~/components/molecules/CardSlider.vue';
import ClickModul from '~/components/molecules/ClickModul.vue';
import Example from '~/components/molecules/Example.vue';
import Header from '~/components/molecules/Header.vue';
import Separator from '~/components/molecules/Separator.vue';
import Slider from '~/components/molecules/Slider.vue';
import Table from '~/components/molecules/Table.vue';
import TextColumns from '~/components/molecules/TextColumns.vue';
import TextImage from '~/components/molecules/TextImage.vue';
import TextText from '~/components/molecules/TextText.vue';
import Video from '~/components/molecules/Video.vue';

@Component({
  components: {
    draggable,
    Accordion,
    CardSlider,
    Header,
    ClickModul,
    Example,
    Slider,
    Table,
    TextText,
    TextImage,
    TextColumns,
    Separator,
    Video,
  },
})
export default class Items extends Vue {
  itemsArray = [
    {
      name: Accordion,
      icon: 'mdi-format-list-checkbox',
      title: 'Accordion',
    },
    {
      name: CardSlider,
      icon: 'mdi-image-move',
      title: 'CardSlider',
    },
    {
      name: Header,
      icon: 'mdi-format-align-top',
      title: 'Header',
    },
    {
      name: ClickModul,
      icon: 'mdi-cursor-default-click-outline',
      title: 'ClickModul',
    },
    {
      name: Example,
      icon: 'mdi-link-plus',
      title: 'Example',
    },
    {
      name: Slider,
      icon: 'mdi-image-move',
      title: 'Slider',
    },
    {
      name: Table,
      icon: 'mdi-table',
      title: 'Table',
    },
    {
      name: TextText,
      icon: 'mdi-text',
      title: 'Text',
    },
    {
      name: TextImage,
      icon: 'mdi-text-account',
      title: 'Text with image',
    },
    {
      name: TextColumns,
      icon: 'mdi-text-short',
      title: 'Text with columns',
    },
    {
      name: Separator,
      icon: 'mdi-minus',
      title: 'Separator',
    },
    {
      name: Video,
      icon: 'mdi-video',
      title: 'Video',
    },
  ];
}
</script>

<style scoped lang="scss">
.item {
  text-align: center;
  height: 100px;
  max-height: 100px;
  width: 150px;
  max-width: 150px;

  &:active {
    background: var(--accent);
    box-shadow: none;
  }
}

.ghost {
  background: var(--accent);
}
</style>
