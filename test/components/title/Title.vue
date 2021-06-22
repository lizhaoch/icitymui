<template>
  <div class="title">
    <i-title okText="more">Title</i-title>
  </div>
</template>

<script>
import Title from '../../../lib/title'

export default {
  components: {
    [Title.name]: Title
  }
}
</script>