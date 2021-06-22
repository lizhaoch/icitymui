<template>
  <transition name="fade">
    <div :class="['i-toast', alignClass]" @touchmove.prevent v-if="value">
      <div class="box">
        <slot>{{ text }}</slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "i-toast",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
