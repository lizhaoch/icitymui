<template>
  <div class="spin">
    <i-spin />
  </div>
</template>

<script>
import Spin from '../../../lib/spin'

export default {
  components: {
    [Spin.name]: Spin
  }
}
</script>