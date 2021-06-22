<template>
  <div class="switch">
    <i-switch label="开关" defaultValue="off" />
  </div>
</template>

<script>
import Switch from '../../../lib/switch'

export default {
  components: {
    [Switch.name]: Switch
  },
}
</script>