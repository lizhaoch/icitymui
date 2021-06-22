<template>
  <div class="picker">
    <span @click="open">弹窗</span>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$iui.picker.show({
        title: '请选择',
        data: [
          { name: '新闻' },
          { name: '科技' },
          { name: '运动' }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.picker {
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