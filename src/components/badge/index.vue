<template>
  <div class="i-badge">
    <span class="count"> {{count>99?'99+':count}} </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "i-badge",
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
