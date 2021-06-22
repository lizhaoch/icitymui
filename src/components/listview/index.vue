<template>
  <div class="i-listview" ref="listview">
    <div><slot name="header"></slot></div>
    <div
      class="content"
      ref="scroll"
      @touchstart="touchStart($event)"
      @touchmove="touchMove($event)"
      @touchend="touchEnd($event)"
    >
      <loading type="attach" ref="pl"></loading>
      <slot name="content"></slot><slot></slot>
      <loading type="attach" ref="ll"></loading>
      <div class="nodata" v-if="finish > 0">没有更多了</div>
    </div>
    <div><slot name="footer"></slot></div>
  </div>
</template>

<script>
import ball from "./ball";
import Loading from "../spin/index.vue";

export default {
  name: "i-listview",
  components: { Loading },
  props: {
    type: {
      type: String,
      default: "load",
      validator(value) {
        return ["load", "pull", "both"].indexOf(value) !== -1;
      },
    },
    finish: {
      type: Number,
      default: 0,
      validator(value) {
        return [0, 1].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      touchStartY: 0,
      isPulling: false,
      isLoading: false,
      upEdge: 10,
      downEdge: 10,
      loadingHeight: 60,
      dval: 0,
      loadingState: false,
      pullState: false,
    };
  },
  computed: {
    hasPull() {
      return this.type === "pull" || this.type === "both";
    },
    hasLoad() {
      return this.type === "load" || this.type === "both";
    },
  },
  watch: {
    finish(val, oldVal) {
      if (val === 0 && oldVal === 1) {
        this.$refs.scroll.scrollTop = 0;
      }
    },
  },
  methods: {
    touchStart: function (event) {
      this.touchStartY = event.changedTouches[0].screenY;
    },
    touchMove(event) {
      let touchMoveY = event.changedTouches[0].screenY;
      let upLen = this.touchStartY - touchMoveY;
      let downLen = touchMoveY - this.touchStartY;

      let listviewRef = this.$refs.listview;
      let scrollRef = this.$refs.scroll;
      let clientHeight = scrollRef.clientHeight;
      let scrollHeight =
        scrollRef.scrollHeight - listviewRef.offsetTop - scrollRef.offsetTop;
      let scrollTop = scrollRef.scrollTop;
      let bottom = scrollHeight - scrollTop - clientHeight - this.dval;

      if (
        this.hasLoad &&
        this.finish < 1 &&
        scrollTop > 0 &&
        // bottom可能会有些误差，调整为1px
        bottom <= 1 &&
        upLen > this.upEdge
      ) {
        this.setLoadingHeight(this.$refs.ll, 1, upLen, this.upEdge);
      } else if (this.hasPull && scrollTop == 0 && downLen > this.downEdge) {
        ball.start();
        this.setLoadingHeight(this.$refs.pl, 0, downLen, this.downEdge);
      }
    },
    setLoadingHeight(ref, state, len, edge) {
      this.dval = len - edge;
      if (this.dval >= this.loadingHeight) {
        this.dval = this.loadingHeight;
        state == 0 ? (this.isPulling = true) : (this.isLoading = true);
      }
      ref.setHeight(this.dval);
      if (state == 0) {
        this.$refs.scroll.scrollTop += -this.dval;
      } else {
        this.$refs.scroll.scrollTop += this.dval;
      }
    },
    touchEnd(event) {
      // 防止重复加载
      if (this.loadingState || this.pullState) {
        return;
      }
      if (this.isLoading) {
        this.loadingState = true;
        this.$emit("load", () => {
          this.loadingState = false;
          this.$refs.ll.setHeight(0);
          this.isLoading = false;
        });
      } else {
        this.$refs.ll.setHeight(0);
      }

      if (this.isPulling) {
        this.pullState = true;
        this.$emit("pull", () => {
          this.pullState = false;
          ball.stop();
          this.$refs.pl.setHeight(0);
          this.isPulling = false;
        });
      } else {
        this.$refs.pl.setHeight(0);
      }

      this.dval = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
