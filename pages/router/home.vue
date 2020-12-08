<!-- -->
<template>
 <div class="pageContainer">
   首页 {{ name }} {{ title }}
 </div>
</template>

<script>
const getResult = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('电风扇发放')
    }, 3000)
  })
}
export default {
  middleware (context) {
    console.log('尽力啊了')
    // context.redirect('/router/login')
  },
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    const result = await getResult()
    console.log('result', result)
    return {
      title: result
    }
  },
  data: () => ({
    name: '33333'
  }),
  computed: {},

  mounted () {
    console.log('name', this.name)
  },

  methods: {}
}
</script>

<style scoped lang="scss">
</style>
