<template>
  <popup class="i-image-picker" @edge="dismiss" @touchmove.native.prevent>
    <div class="box" @click.stop v-if="value">
      <span class="t1" v-if="title">{{ title }}</span>
      <span class="item t2" optional @click="handleConfirm('camera')">拍照</span>
      <span class="item t3" optional @click="handleConfirm('gallery')"
        >从手机图库选择</span
      >
      <span class="line"></span>
      <span class="t4" @click="handleCancel">取消</span>
    </div>
  </popup>
</template>

<script>
import popup from "../popup/index.vue";

export default {
  name: "i-image-picker",
  components: { popup },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    outside: {
      type: String,
      default: "cancel",
      validator(value) {
        return ["normal", "cancel"].indexOf(value) !== -1;
      },
    },
    title: {
      type: String,
      default: "请选择",
    },
    confirm: Function,
    cancel: Function,
  },
  methods: {
    dismiss() {
      if (this.outside === "cancel") {
        this.onCancel();
      }
    },
    handleCancel() {
      this.cancel && this.cancel();
      this.$emit("cancel");
    },
    handleConfirm(type) {
      setTimeout(() => {
        this.confirm && this.confirm(type);
        this.$emit("confirm", type);
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
