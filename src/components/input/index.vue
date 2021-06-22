<template>
  <div class="c-group i-input" :class="[borderClass]">
    <div class="label" v-html="$options.filters.formatLabel(label)"></div>
    <div class="field">
      <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
        id="i-input"
        autocomplete="off"
      />
    </div>
  </div>
</template>

<script>
import { formatLabel } from "../../util/filters";

export default {
  name: "i-input",
  props: {
    type: {
      type: String,
      default: "text",
      validator(value) {
        return ["text", "number"].indexOf(value) !== -1;
      },
    },
    label: {
      type: String,
      default: "label",
    },
    placeholder: String,
    value: String,
  },
  filters: {
    formatLabel,
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
