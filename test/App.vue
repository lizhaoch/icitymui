<template>
  <div class="app">
    <span @click="go('spin')">Spin</span>
    <span @click="go('button')">Button</span>
    <span @click="go('card')">Card</span>
    <span @click="go('badge')">Badge</span>
    <span @click="go('tabs')">Tabs</span>
    <span @click="go('prompt')">Prompt</span>
    <span @click="go('title')">Title</span>
    <span @click="go('skeleton')">Skeleton</span>
    <span @click="go('search')">Search</span>
    <span @click="go('alert')">Alert</span>
    <span @click="go('dialog')">Dialog</span>
    <span @click="go('toast')">Toast</span>
    <span @click="go('imagePicker')">ImagePicker</span>
    <span @click="go('picker')">Picker</span>
    <span @click="go('input')">Input</span>
    <span @click="go('password')">Password</span>
    <span @click="go('switch')">Switch</span>
    <span @click="go('listview')">ListView</span>
  </div>
</template>

<script>
export default {
  methods: {
    go(name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './App.scss';
</style>