<!-- -->
<template>
 <div class="pageContainer">
   cart ==== {{ name }}
 </div>
</template>

<script>
export default {
  beforeRouteLeave (to, from, next) {
    // ...
    // const flag = window.confirm('是否离开')
    // console.log('flag', flag)
    // next(flag)
    next()
  },
  components: {

  },
  async asyncData({$axios, route, store, env, params, query, req, res, redirect, error}) {
    const result = await $axios.get('http://192.168.1.5:8080/data/1.json')
    console.log('res', result.data)
    return {
      ...result.data
    }
  },
  data () {
    return {

    }
  },
  computed: {},

  mounted () {},

  methods: {}
}
</script>

<style scoped lang="scss">
</style>
