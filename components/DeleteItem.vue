<template>
  <div class="mainContainer">
    <div
      class="item"
    >
      <div
        class="maincontent"
        :style="styleobject"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <span>{{ item.title }}</span>
        <span>{{ item.content }}</span>
      </div>
      <div class="cell-read">
        <span class="show">标记为已读</span>
      </div>
      <div class="cell-delete" @click="deleteItem(item)">
        <span class="show">删除</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      startTx: 0,
      endTx: 0,
      distanceX: 0,
      startMarginLeft: 0,
      marginLeft: 0
    }
  },
  computed: {
    styleobject () {
      return {
        marginLeft: this.marginLeft + 'px'
      }
    }
  },
  created () {},
  mounted () {},
  methods: {
    handleTouchStart (e) {
      this.startTx = e.touches[0].clientX
    },
    handleTouchMove (e) {
      this.endTx = e.changedTouches[0].clientX
      this.distanceX = this.startTx - this.endTx
      const marginLeft = this.startMarginLeft - this.distanceX
      this.marginLeft = marginLeft < -120 ? -120 : marginLeft
    },
    handleTouchEnd (e) {
      if (this.marginLeft > -60) {
        this.marginLeft = 0
      } else {
        this.marginLeft = -120
      }
      // 记录此时的位置
      this.startMarginLeft = this.marginLeft
    },
    deleteItem (item) {
      this.$emit('delete', item)
    }
  }
}
</script>

<style scoped lang="less">
@height: 60px;
.mainContainer {
  .item {
    // border-bottom: 1px solid #ccc;
    height: @height;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 13px;
    transition: all .3s ease;
    overflow: hidden;
    .maincontent {
      width: 100%;
      height: 100%;
      display: flex;
      line-height: @height;
      flex-shrink: 0;
    }
    .cell-read {
      width: 80px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ccc;
    }
    .cell-delete {
      width: 40px;
      height: 100%;
      display: flex;
      flex-shrink: 1;
      align-items: center;
      justify-content: center;
      background-color: red;
    }
    .show {
      // width: 0; /* 宽度为0 */
      font-size: 12px;
      white-space: nowrap;
      margin-left: 5%;/* 这里一定要用百分比，不然会撑出高度，无法完全缩放为0 */
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: #eaeaea;
      transform: scaleY(0.5);
    }
  }
}
</style>
