<template>
  <div class='i-button'>
    <div :class="[className, type, size, disabledClass]" @click="click">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "i-button",
  props: {
    className: {
      type: String
    },
    type: {
      type: String,
      default: "normal",
      validator(value) {
        return (
          ["normal", "primary", "dashed"].indexOf(value) !== -1
        );
      },
    },
    size: {
      type: String,
      default: "large",
      validator(value) {
        return ["small", "large"].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      DELAY: 300, //防止重复点击
      isHangUp: false, 
    };
  },
  computed: {
    disabledClass() {
      return this.disabled ? 'disable' : ''
    }
  },
  methods: {
    click(event) {
      if (!this.isHangUp && !this.disabled) {
        this.isHangUp = true;
        setTimeout(() => {
          this.isHangUp = false;
        }, this.DELAY);
        this.$emit("click", event);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
