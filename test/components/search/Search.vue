<template>
  <div class="search">
    <i-search></i-search>
  </div>
</template>

<script>
import Search from '../../../lib/search'

export default {
  components: {
    [Search.name]: Search
  },
}
</script>