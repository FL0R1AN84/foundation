<template>
  <v-container class="pastellgruen">
    <draggable
      v-model="elementsArray"
      class="d-inline-flex flex-wrap justify-space-around dragArea list-group"
      ghost-class="ghost"
      :group="{ name: 'elements', pull: 'clone', put: false }"
      :sort="false"
    >
      <v-card
        v-for="element in elementsArray"
        :key="element.id"
        class="ma-2 py-4 element"
      >
        <v-icon>{{ element.icon }}</v-icon>
        <v-card-text> {{ element.title }}</v-card-text>
      </v-card>
    </draggable>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import draggable from 'vuedraggable';
import CardSlider from '~/components/molecules/CardSlider.vue';
import Accordion from '~/components/molecules/Accordion.vue';
import Header from '~/components/molecules/Header.vue';
import KlickModul from '~/components/molecules/KlickModul.vue';
import Querverweis from '~/components/molecules/Querverweis.vue';
import Slider from '~/components/molecules/Slider.vue';
import Tabelle from '~/components/molecules/Tabelle.vue';
import TextText from '~/components/molecules/TextText.vue';
import TextBild from '~/components/molecules/TextBild.vue';
import TextSpalten from '~/components/molecules/TextSpalten.vue';
import Trennlinie from '~/components/molecules/Trennlinie.vue';
import Video from '~/components/molecules/Video.vue';

@Component({
  components: {
    draggable,
    Accordion,
    CardSlider,
    Header,
    KlickModul,
    Querverweis,
    Slider,
    Tabelle,
    TextText,
    TextBild,
    TextSpalten,
    Trennlinie,
    Video,
  },
})
export default class Elements extends Vue {
  elementsArray = [
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
      name: KlickModul,
      icon: 'mdi-cursor-default-click-outline',
      title: 'KlickModul',
    },
    {
      name: Querverweis,
      icon: 'mdi-link-plus',
      title: 'Querverweis',
    },
    {
      name: Slider,
      icon: 'mdi-image-move',
      title: 'Slider',
    },
    {
      name: Tabelle,
      icon: 'mdi-table',
      title: 'Tabelle',
    },
    {
      name: TextText,
      icon: 'mdi-text',
      title: 'Text',
    },
    {
      name: TextBild,
      icon: 'mdi-text-account',
      title: 'Text mit Bild',
    },
    {
      name: TextSpalten,
      icon: 'mdi-text-short',
      title: 'Text mit Spalten',
    },
    {
      name: Trennlinie,
      icon: 'mdi-minus',
      title: 'Trennlinie',
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
.element {
  text-align: center;
  height: 100px;
  max-height: 100px;
  width: 150px;
  max-width: 150px;

  &:active {
    background: var(--green);
    box-shadow: none;
  }
}

.ghost {
  background: var(--akzentgelb);
}
</style>
