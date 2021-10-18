<template>
  <v-container>
    <v-form @submit.prevent="accordiontToTable">
      <TextField
        v-model="ftext"
        :type="'accordion'"
        @textfield="textFromField"
      />
      <TextArea v-model="atext" :type="'accordion'" @textarea="textFromArea" />
      <v-expansion-panels>
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
            <IconChooser />

            <v-btn
              :disabled="
                elhead ||
                elquer ||
                elslid ||
                eltext ||
                eltxtimg ||
                eltabl ||
                elvide
              "
              @click="elacco = !elacco"
              >Akkordeon</v-btn
            >
            <v-btn
              :disabled="
                elacco ||
                elquer ||
                elslid ||
                eltext ||
                eltxtimg ||
                eltabl ||
                elvide
              "
              @click="elhead = !elhead"
              >Header</v-btn
            >
            <v-btn
              :disabled="
                elacco ||
                elhead ||
                elslid ||
                eltext ||
                eltxtimg ||
                eltabl ||
                elvide
              "
              @click="elquer = !elquer"
              >Example</v-btn
            >
            <v-btn
              :disabled="
                elacco ||
                elhead ||
                elquer ||
                eltext ||
                eltxtimg ||
                eltabl ||
                elvide
              "
              @click="elslid = !elslid"
              >Slider</v-btn
            >
            <v-btn
              :disabled="
                elacco ||
                elhead ||
                elquer ||
                elslid ||
                eltxtimg ||
                eltabl ||
                elvide
              "
              @click="eltext = !eltext"
              >Text</v-btn
            >
            <v-btn
              :disabled="
                elacco ||
                elhead ||
                elquer ||
                elslid ||
                eltext ||
                eltabl ||
                elvide
              "
              @click="eltxtimg = !eltxtimg"
              >Text mit Bild</v-btn
            >
            <v-btn
              :disabled="
                elacco ||
                elhead ||
                elquer ||
                elslid ||
                eltext ||
                eltxtimg ||
                elvide
              "
              @click="eltabl = !eltabl"
              >Table</v-btn
            >
            <v-btn
              :disabled="
                elacco ||
                elhead ||
                elquer ||
                elslid ||
                eltext ||
                eltxtimg ||
                eltabl
              "
              @click="elvide = !elvide"
              >Video</v-btn
            >
            <Akkordeon v-if="elacco" :type="'expansion'" />
            <Header v-if="elhead" :type="'expansion'" />
            <Example v-if="elquer" :type="'expansion'" />
            <Slider v-if="elslid" :type="'expansion'" />
            <TextText v-if="eltext" :type="'expansion'" />
            <TextImage v-if="eltxtimg" :type="'expansion'" />
            <Table v-if="eltabl" :type="'expansion'" />
            <Video v-if="elvide" :type="'expansion'" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <div class="d-flex justify-center my-2">
        <v-icon v-if="i > 1" @click="i--">mdi-minus-circle-outline</v-icon>
        <v-icon @click="i++">mdi-plus-circle-outline</v-icon>
      </div>
      <v-container>
        <v-btn color="primary" type="submit">Save</v-btn>
      </v-container>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Directus } from '@directus/sdk';

@Component
export default class ClickModul extends Vue {
  table: any | null = null;
  i = 1;
  atext: any;
  ftext: any;
  subftext: any;
  elacco = false;
  elhead = false;
  elquer = false;
  elslid = false;
  eltext = false;
  eltxtimg = false;
  eltabl = false;
  elvide = false;

  textFromArea(text: any) {
    const atext = text;
    this.atext = atext;
  }

  textFromSubField(text: any) {
    const subftext = text;
    this.subftext = subftext;
  }

  textFromField(text: any) {
    const ftext = text;
    this.ftext = ftext;
  }

  async accordiontToTable() {
    const directus = new Directus(this.$config.baseURL);
    this.table = await directus.items('click_modul').createOne([
      {
        textfield: this.ftext,
        textarea: this.atext,
        subtextfield: this.subftext,
      },
    ]);
  }
}
</script>
