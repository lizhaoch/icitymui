<template>
  <div class="i-rect"></div>
</template>

<script>
export default {
  name: 'rect'
}
</script>

<style lang="scss" scoped>
.i-rect {
  width: 100%;
  height: 10px;
  background-image: linear-gradient(
    135deg,
    #ececec 0%,
    #ececec 10%,
    #e9e9e9 20%,
    #e9e9e9 30%,
    #ececec 40%,
    #e9e9e9 50%,
    #ececec 60%,
    #e9e9e9 70%,
    #ececec 80%,
    #e9e9e9 90%,
    #ececec 100%
  );
  animation: rect-move 1s linear infinite;
}
@keyframes rect-move {
  0% {
  }
  100% {
    background-position: 20px;
  }
}
</style>
