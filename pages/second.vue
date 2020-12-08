<template>
  <div class="container">
    11111111
    <van-button type="primary">这是iview的button</van-button>
  </div>
</template>

<script>
export default {
  components: {
  },
  
  asyncData ({ query }) {
    return {
      name: query.name
    }
  },
  
  data () {
    return {
      title: '这是新页面'
    }
  },
  created () {},
  mounted () {},
  methods: {},
  head () {
    return {
      title: '这是第二个页面',
      meta: [{
        charset: 'utf-8'
      }]
    }
  }
}
</script>

<style scoped lang="less">
.container {
  color: red;
}
</style>
