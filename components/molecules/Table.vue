<template>
  <v-container v-if="type === 'default'">
    <v-form @submit.prevent="textToTable">
      <TextField v-model="ftext" :type="'text'" @textfield="textFromField" />
      <TextArea v-model="atext" :type="'text'" @textarea="textFromArea" />
      <v-simple-table>
        <template #default>
          <thead>
            <tr>
              <th v-for="(item, r) in r" :key="r" class="text-left">
                <TextField
                  v-model="ftext"
                  :type="'tabletitle'"
                  @textfield="titleFromTable"
                />
              </th>
              <div class="d-flex justify-center my-2">
                <v-icon v-if="r > 1" @click="r--"
                  >mdi-minus-circle-outline</v-icon
                >
                <v-icon @click="r++">mdi-plus-circle-outline</v-icon>
              </div>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td v-for="(item, r) in r" :key="r">
                <TextField
                  v-model="ftext"
                  :type="'tablerow'"
                  @textfield="rowFromTable"
                />
              </td>
              <div class="d-flex justify-center my-2">
                <v-icon v-if="c > 0" @click="c--"
                  >mdi-minus-circle-outline</v-icon
                >
                <v-icon @click="c++">mdi-plus-circle-outline</v-icon>
              </div>
            </tr>
            <tr v-for="(item, c) in c" :key="c">
              <td v-for="r in r" :key="r">
                <TextField
                  v-model="ftext"
                  :type="'tablerow'"
                  @textfield="rowFromTable"
                />
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <v-btn color="primary" type="submit">Save</v-btn>
    </v-form>
  </v-container>

  <v-container v-else-if="type === 'expansion'">
    <v-form @submit.prevent="textToTable">
      <TextField v-model="ftext" :type="'text'" @textfield="textFromField" />
      <TextArea v-model="atext" :type="'text'" @textarea="textFromArea" />
      <v-simple-table>
        <template #default>
          <thead>
            <tr>
              <th v-for="(item, r) in r" :key="r" class="text-left">
                <TextField
                  v-model="ftext"
                  :type="'tabletitle'"
                  @textfield="titleFromTable"
                />
              </th>
              <div class="d-flex justify-center my-2">
                <v-icon v-if="r > 1" @click="r--"
                  >mdi-minus-circle-outline</v-icon
                >
                <v-icon @click="r++">mdi-plus-circle-outline</v-icon>
              </div>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td v-for="(item, r) in r" :key="r">
                <TextField
                  v-model="ftext"
                  :type="'tablerow'"
                  @textfield="rowFromTable"
                />
              </td>
              <div class="d-flex justify-center my-2">
                <v-icon v-if="c > 0" @click="c--"
                  >mdi-minus-circle-outline</v-icon
                >
                <v-icon @click="c++">mdi-plus-circle-outline</v-icon>
              </div>
            </tr>
            <tr v-for="(item, c) in c" :key="c">
              <td v-for="r in r" :key="r">
                <TextField
                  v-model="ftext"
                  :type="'tablerow'"
                  @textfield="rowFromTable"
                />
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { Directus } from '@directus/sdk';

@Component
export default class Table extends Vue {
  @Prop({ default: 'default' })
  type!: string;

  table: any | null = null;
  c = 0;
  r = 1;
  atext: any;
  ftext: any;
  ttitle: any;
  ttext: any;

  textFromArea(text: any) {
    const atext = text;
    this.atext = atext;
  }

  textFromField(text: any) {
    const ftext = text;
    this.ftext = ftext;
  }

  titleFromTable(text: any) {
    const ttitle = text;
    this.ttitle = ttitle;
  }

  rowFromTable(text: any) {
    const ttext = text;
    this.ttext = ttext;
  }

  async textToTable() {
    const directus = new Directus(this.$config.baseURL);
    this.table = await directus.items('table').createOne([
      {
        textarea: this.atext,
        textfield: this.ftext,
        title: this.ttitle,
        row: this.ttext,
      },
    ]);
  }
}
</script>
