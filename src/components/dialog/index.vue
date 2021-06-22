<template>
  <popup class="i-dialog" transition="pop" @edge="handleDismiss">
    <div class="box" @click.stop v-if="value">
      <div class="content">
        <div class="title" v-if="title">{{ title }}</div>
        <div class="desc">
          <span v-html="content"></span>
        </div>
        <div class="btn">
          <span class="cancel" @click="handleCancel">
            {{ cancelText }}
          </span>
          <span class="confirm" @click="handleConfirm">
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
  name: "i-dialog",
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
    cancelText: {
      type: String,
      default: "取消",
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
    cancel: Function,
    confirm: Function,
    dismiss: Function,
  },
  methods: {
    handleDismiss() {
      if (this.outside === "cancel" || this.dismiss) {
        this.$emit("dismiss");
        this.dismiss && this.dismiss();
      }
    },
    handleCancel() {
      setTimeout(() => {
        this.$emit("cancel");
        this.cancel && this.cancel();
      }, 200);
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
