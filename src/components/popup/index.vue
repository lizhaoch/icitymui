<template>
  <transition name="fade">
    <div class="i-popup" @click.stop="dismiss" v-show="isShow">
      <transition
        :name="transition"
        v-on:before-enter="toggle"
        v-on:after-leave="toggle"
      >
        <slot></slot>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    transition: {
      type: String,
      default: "popup",
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
    dismiss() {
      this.$emit("dismiss");
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../style.scss';
</style>
