<template>
  <div class="button">
    <i-button>按钮</i-button>
    <i-button type="primary">按钮</i-button>
    <i-button type="dashed">按钮</i-button>
  </div>
</template>

<script>
import Button from '../../../lib/button'

export default {
  components: {
    [Button.name]: Button
  }
}
</script>