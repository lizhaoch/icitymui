<template>
  <div class="prompt">
    <i-prompt title="prompt" okText="Go">
      This is a description.
    </i-prompt>
  </div>
</template>

<script>
import Prompt from '../../../lib/prompt'

export default {
  components: {
    [Prompt.name]: Prompt
  },
}
</script>