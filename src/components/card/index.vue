<template>
  <div class="i-card">
    <div :class="['container', className]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "i-card",
  props: {
    className: {
      type: String
    },
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
