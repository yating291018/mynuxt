export default ({ redirect }) => {
  console.log('触发了全局守卫')
  redirect('/router/login')
}