<template>
  <div class="c-group i-password">
    <div class="label" v-html="$options.filters.formatLabel(label)"></div>
    <div class="field">
      <input
        :type="inputType"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
        ref="input"
        id="i-password"
        autocomplete="off"
      />
    </div>
    <div v-if="type === 'toggle'" class="state" @click="toggle">
      <i class="iconfont" v-if="isShow">&#xe613;</i>
      <i class="iconfont" v-else>&#xe614;</i>
    </div>
  </div>
</template>

<script>
import { formatLabel } from "../../util/filters";

export default {
  name: "i-password",
  props: {
    type: {
      type: String,
      default: "normal",
      validator(value) {
        return ["normal", "toggle"].indexOf(value) !== -1;
      },
    },
    label: {
      type: String,
      default: "label",
    },
    placeholder: String,
    value: String,
  },
  data() {
    return {
      inputType: "password",
      isShow: false,
    };
  },
  filters: {
    formatLabel,
  },
  methods: {
    toggle() {
      let tmp = this.$refs.input.value;
      this.isShow = !this.isShow;
      this.inputType = this.isShow ? "text" : "password";
      this.value = tmp;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
