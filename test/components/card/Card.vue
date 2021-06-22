<template>
  <div class="card">
    <i-card className="custom-card">
      I am a card.
    </i-card>
  </div>
</template>

<script>
import Card from '../../../lib/card'

export default {
  components: {
    [Card.name]: Card
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 10px;
}
.custom-card {
  padding: 0;
}
</style>