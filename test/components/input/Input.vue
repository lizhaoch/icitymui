<template>
  <div class="input">
    <i-input label="标题" placeholder="请输入内容" />
  </div>
</template>

<script>
import Input from '../../../lib/input'

export default {
  components: {
    [Input.name]: Input
  },
}
</script>