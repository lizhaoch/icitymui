<template>
  <div class="i-tabs">
    <div
      :class="['item', { selected: index === selIndex }]"
      v-for="(item, index) in data"
      :key="index"
      @click="change(index, item)"
    >
      <img 
        v-if="!!item.icon" 
        :src="index === selIndex ? item.iconp || item.icon : item.icon" 
      />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "i-tabs",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selIndex: 0,
    };
  },
  methods: {
    change(index, val) {
      this.selIndex = index;
      this.$emit("change", val);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
