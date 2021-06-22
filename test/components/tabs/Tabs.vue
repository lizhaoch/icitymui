<template>
  <div class="tabs">
    <i-tabs :data="TBAS"></i-tabs>
  </div>
</template>

<script>
import Tabs from '../../../lib/tabs'

export default {
  components: {
    [Tabs.name]: Tabs
  },
  data() {
    return {
      TBAS: [
        { name: 'News' },
        { name: 'Technology' },
        { name: 'Sports' },
      ]
    }
  }
}
</script>