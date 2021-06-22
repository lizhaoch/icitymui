<template>
  <div class="listview">
    <i-listview>
      <div class="item" v-for="i in 20">
        {{ i }}
      </div>
    </i-listview>
  </div>
</template>

<script>
import ListView from '../../../lib/listview'

export default {
  components: {
    [ListView.name]: ListView
  },
}
</script>

<style lang="scss" scoped>
.item {
  padding: 20px;
  border-bottom: 1px solid #eee;
}
</style>