<template>
  <div class="c-group i-switch" @click="toggle">
    <div class="label" v-html="label"></div>
    <div class="field">
      <div :class="typeClass">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "i-switch",
  props: {
    label: {
      type: String,
      default: "label",
    },
    defaultValue: {
      type: String,
      default: "off",
      validator(value) {
        return ["on", "off"].indexOf(value) !== -1;
      },
    }
  },
  data() {
    return {
      value: this.defaultValue === "on",
    };
  },
  computed: {
    typeClass() {
      return this.value ? "active" : "deactive";
    },
  },
  methods: {
    toggle() {
      this.value = !this.value;
      this.$emit("toggle", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
