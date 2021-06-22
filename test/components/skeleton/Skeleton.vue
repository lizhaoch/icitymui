<template>
  <div class="skeleton">
    <i-skeleton></i-skeleton>
  </div>
</template>

<script>
import Skeleton from '../../../lib/skeleton'

export default {
  components: {
    [Skeleton.name]: Skeleton
  },
}
</script>