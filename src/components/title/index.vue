<template>
  <div class="i-title">
    <span class="line"></span>
    <span class="title">
      <slot></slot>
    </span>
    <span class="right" v-if="!!okText" @click="click">
      {{ okText }}
    </span>
  </div>
</template>

<script>
export default {
  name: "i-title",
  props: {
    okText: {
      type: String,
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
