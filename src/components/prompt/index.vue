<template>
  <div class="i-prompt">
    <div class="left">
      <img v-if="icon" class="icon" :src="icon" />
      <div class="content">
        <div class="t1">{{ title }}</div>
        <div class="t2"><slot></slot></div>
      </div>
    </div>
    <div class="right">
      <span v-if="!!okText" @click="click">
        {{ okText }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "i-prompt",
  props: {
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
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
