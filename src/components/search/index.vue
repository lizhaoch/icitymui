<template>
  <form @submit.prevent="search">
    <div class="i-search">
      <div class="box">
        <input
          v-if="isInput"
          type="search"
          ref="input"
          :placeholder="placeholder"
          :value="value"
          @change="$emit('change', $event.target.value)"
          @input="$emit('input', $event.target.value)"
          @focus="$emit('focus', $event.target.value)"
          @keydown="searchByKeydown($event)"
          id="i-search-input"
          autocomplete="off"
        />
        <span v-else id="i-search-do" :class="[alignClass]" @click="enable">
          <i class="iconfont">&#xe606;</i>&nbsp;<slot>搜索</slot>
        </span>
      </div>
      <div class="cancel" v-if="isInput" @click="cancel">取消</div>
    </div>
  </form>
</template>

<script>
export default {
  name: "i-search",
  props: {
    value: {
      type: String,
    },
    type: {
      type: String,
      default: "normal",
      validator(value) {
        return ["normal", "image", "focus"].indexOf(value) !== -1;
      },
    },
    placeholder: {
      type: String,
      default: "请输入搜索内容",
    },
    align: {
      type: String,
      default: "left",
      validator(value) {
        return ["left", "center"].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      isInput: this.type === "focus",
    };
  },
  computed: {
    alignClass() {
      return this.align === "center" ? "align-center" : "";
    },
  },
  methods: {
    searchByKeydown(ev) {
      if (ev.keyCode == 13) {
        this.onEnable();
      }
    },
    enable() {
      if (this.type !== "image") {
        this.isInput = true;
        this.$nextTick(() => {
          this.$refs.input.focus();
        });
      } else {
        this.$emit("search");
      }
    },
    cancel() {
      this.$refs.input.value = "";
      this.isInput = false;
      this.$emit("cancel");
    },
    search() {
      let tmp = this.$refs.input.value;
      if (tmp) {
        this.$emit("search", tmp);
      }
    },
  },
  mounted() {
    if (this.isInput) {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
