<template>
  <div class="container">
    <transition-group appear tag="div">
      <div v-for="item in list" :key="item.title">
        <delete-item :item="item" @delete="deleteItem"></delete-item>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  components: {
    DeleteItem: () => import('@/components/DeleteItem')
  },
  asyncData () {
    const list = []
    for (let i = 0; i < 20; i++) {
      list.push({
        title: '标题' + i,
        content: '这是内容'
      })
    }
    return {
      list
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    deleteItem (obj) {
      const index = this.list.findIndex(item => item.title === obj.title)
      this.list.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="less">
.v-enter,
.v-leave-to {
  opacity: 0; //设置元素的不透明级别：
  transform: translateY(30px);// 开始和结束位置在Y轴的80px处
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;// 从Y轴的80px处渐渐移动到上面
}
.v-move { transition: all 0.3s ease; }
.v-leave-active{
  width: 100%;
  height: 0;
  position: absolute;
} 
</style>
