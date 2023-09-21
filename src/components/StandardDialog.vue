<template>
  <v-dialog v-model="internalShow" :persistent="persistent" :width="width">
    <v-container>
      <v-row>
        <v-toolbar flat color="primary">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <slot name="header"></slot>
        </v-toolbar>
      </v-row>
      <v-row>
        <div style="background-color: #ffffff; width: 100%; height: 100%" class="pa-4">
          <slot name="content"></slot>
          <div v-if="$slots.footer">
            <v-container style="border-top: 1px solid #cdcdcd; padding: 2% 0 0 0" fluid>
              <v-row justify="end" no-gutters>
                <div>
                  <slot name="footer"></slot>
                </div>
              </v-row>
            </v-container>
          </div>
        </div>
      </v-row>
    </v-container>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StandardDialog',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
      default: false
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    width: {
      type: String,
      required: false,
      default: ''
    },
    persistent: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      internalShow: false
    };
  },
  watch: {
    modelValue: {
      handler: function (val) {
        this.internalShow = val;
      },
      immediate: true
    },
    internalShow: {
      handler: function (val) {
        if (this.modelValue && !val) this.$emit('update:modelValue', val);
      }
    }
  }
});
</script>

<style scoped></style>
