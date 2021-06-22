<template>
  <div class="i-skeleton">
    <s-rect class="per60" v-for="i in 6" :key="i"></s-rect>
  </div>
</template>

<script>
import Rect from "./rect.vue";

export default {
  name: "i-skeleton",
  components: { 
    's-rect': Rect 
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
