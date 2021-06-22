<template>
  <div class="toast">
    <span @click="open">弹窗</span>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$iui.toast.show('I am a toast.')
    }
  }
}
</script>

<style lang="scss" scoped>
.toast {
  padding: 20px;
  span {
    display: block;
    padding: 10px 15px;
    font-size: 14px;
    background-color: #fe952c;
    color: #fff;
    text-align: center;
    border-radius: 4px;
  }
}
</style>