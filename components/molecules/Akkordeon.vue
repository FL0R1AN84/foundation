<template>
  <v-container>
    <v-form @submit.prevent="accordiontToTable">
      <TextField
        v-model="ftext"
        :type="'accordion'"
        @textfield="textFromField"
      />
      <TextArea v-model="atext" :type="'accordion'" @textarea="textFromArea" />
      <v-expansion-panels focusable>
        <v-expansion-panel v-for="(item, i) in i" :key="i">
          <v-expansion-panel-header>
            <div>{{ i + 1 }}. Akkordeon Element</div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <TextField
              v-model="ftext"
              :type="'subaccordion'"
              @textfield="textFromSubField"
            />
            <v-btn :disabled="eltextimg || eltable" @click="eltext = !eltext"
              >Text</v-btn
            >
            <v-btn :disabled="eltext || eltable" @click="eltextimg = !eltextimg"
              >Text mit Bild</v-btn
            >
            <v-btn :disabled="eltext || eltextimg" @click="eltable = !eltable"
              >Tabelle</v-btn
            >
            <TextText v-if="eltext" :type="'expansion'" />
            <TextBild v-if="eltextimg" :type="'expansion'" />
            <Tabelle v-if="eltable" :type="'expansion'" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <div class="d-flex justify-center my-2">
        <v-icon v-if="i > 1" @click="i--">mdi-minus-circle-outline</v-icon>
        <v-icon @click="i++">mdi-plus-circle-outline</v-icon>
      </div>
      <v-container>
        <v-btn
          dark
          color="var(--green-interactive)"
          :style="{ color: 'var(--green)' }"
          type="submit"
          >Speichern</v-btn
        >
      </v-container>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Directus } from '@directus/sdk';

@Component({
  components: {},
})
export default class Akkordeon extends Vue {
  table: any | null = null;
  i = 1;
  atext: any;
  ftext: any;
  subftext: any;
  eltext = false;
  eltextimg = false;
  eltable = false;

  textFromArea(text: any) {
    const atext = text;
    this.atext = atext;
  }

  textFromField(text: any) {
    const ftext = text;
    this.ftext = ftext;
  }

  textFromSubField(text: any) {
    const subftext = text;
    this.subftext = subftext;
  }

  async accordiontToTable() {
    const directus = new Directus(this.$config.baseURL);
    this.table = await directus.items('accordion').createOne([
      {
        textfield: this.ftext,
        textarea: this.atext,
        subtextfield: this.subftext,
      },
    ]);
  }
}
</script>
