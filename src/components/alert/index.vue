<template>
  <popup class="i-alert" transition="pop" @edge="dismiss">
    <div class="box" @click.stop v-if="value">
      <div class="content">
        <div class="title" v-if="title">{{ title }}</div>
        <div class="desc">
          <span v-html="content"></span>
        </div>
        <div class="btn">
          <span @click="handleConfirm">
            {{ confirmText }}
          </span>
        </div>
      </div>
    </div>
  </popup>
</template>

<script>
import popup from "../popup/index.vue";

export default {
  name: "i-alert",
  components: { popup },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    confirmText: {
      type: String,
      default: "确定",
    },
    outside: {
      type: String,
      default: "normal",
      validator(value) {
        return ["normal", "cancel"].indexOf(value) !== -1;
      },
    },
    confirm: Function,
  },
  methods: {
    dismiss() {
      if (this.outside === "cancel") {
        this.$emit("cancel");
      }
    },
    handleConfirm() {
      setTimeout(() => {
        this.$emit("confirm");
        this.confirm && this.confirm();
      }, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
