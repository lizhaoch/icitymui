<template>
  <div class="dialog">
    <span @click="open">弹窗</span>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$iui.dialog.show({
        title: 'I am a dialog.'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog {
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