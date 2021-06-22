<template>
  <div class="badge">
    <i-badge :count=99>
      <div class="box"></div>
    </i-badge>
  </div>
</template>

<script>
import Badge from '../../../lib/badge'

export default {
  components: {
    [Badge.name]: Badge
  }
}
</script>

<style lang="scss" scoped>
.badge {
  padding: 10px;
}
.box {
  width: 100px;
  height: 100px;
  background-color: #eee;
}
</style>