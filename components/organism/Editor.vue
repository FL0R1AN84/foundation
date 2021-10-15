<template>
  <v-container>
    <v-alert
      v-model="hide"
      border="top"
      color="success"
      type="info"
      elevation="2"
      dismissible
      >Drag an item here
    </v-alert>
    <v-dialog v-if="!hide" v-model="dialog" width="1250px">
      <template #activator="{ on, attrs }">
        <v-btn dark color="accent" class="my-2" v-bind="attrs" v-on="on">
          Preview
        </v-btn>
      </template>
      <v-card>
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close-circle</v-icon>
        </v-btn>
        <Preview />
      </v-card>
    </v-dialog>
    <draggable
      v-model="previewArray"
      class="dragArea list-group"
      ghost-class="ghost"
      group="elements"
      :style="{ 'min-height': '400px' }"
      @change="addUUID"
    >
      <template v-for="element in previewArray">
        <v-card
          :key="element.id"
          class="ma-2 pa-2 element d-flex justify-space-between"
        >
          <component :is="element.name" :key="element.id" :element="element">
          </component>
          <v-icon @click="removeAt(element.id)"> mdi-close-circle </v-icon>
        </v-card>
      </template>
    </draggable>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import draggable from 'vuedraggable';

@Component({
  components: {
    draggable,
  },
})
export default class Editor extends Vue {
  previewArray: any = [];
  dialog = false;
  hide = true;

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  addUUID(evt: any) {
    if (evt.added) {
      this.previewArray[evt.added.newIndex] = {
        ...this.previewArray[evt.added.newIndex],
        id: this.uuid(),
      };
      this.hide = false;
      this.$forceUpdate();
    }
  }

  removeAt(id: number) {
    this.previewArray = this.previewArray.filter(
      (element: any) => element.id !== id
    );
  }
}
</script>

<style scoped lang="scss">
.element {
  align-items: center;
}

.ghost {
  background: var(--akzentgelb);
}
</style>
