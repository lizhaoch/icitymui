<template>
  <popup class="i-picker" @edge="dismiss">
    <div class="box" @click.stop v-if="value">
      <span class="t1" v-if="title">{{ title }}</span>
      <div class="dynamic" ref="dynamic">
        <span
          v-for="(v, index) in data"
          :key="index"
          @click="handleConfirm(v, index)"
          >{{ v[dataKey] }}</span
        >
      </div>
      <span class="line"></span>
      <span @click="handleCancel">取消</span>
    </div>
  </popup>
</template>

<script>
import popup from "../popup/index.vue";

export default {
  name: "i-picker",
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
      default: "",
    },
    data: {
      type: Array,
      default: () => [],
    },
    dataKey: {
      type: String,
      default: "name",
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
    handleConfirm(val, index) {
      setTimeout(() => {
        this.confirm && this.confirm(val, index);
        this.$emit("confirm", val, index);
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
