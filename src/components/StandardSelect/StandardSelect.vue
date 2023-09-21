<template>
  <v-select variant="outlined" :items="items" :label="label" item-title="text" item-value="value">
  </v-select>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

export type MyItem = {
  text: string;
  value: string;
};

export default defineComponent({
  name: 'StandardSelect',
  props: {
    label: {
      type: String,
      default: undefined
    },
    items: {
      type: Array as PropType<MyItem[]>,
      required: true
    }
  }
});
</script>

<style scoped></style>
