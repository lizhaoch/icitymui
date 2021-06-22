<template>
  <div class="password">
    <i-password label="密码" placeholder="请输入密码" />
  </div>
</template>

<script>
import Password from '../../../lib/password'

export default {
  components: {
    [Password.name]: Password
  },
}
</script>