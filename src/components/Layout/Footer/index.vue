<template>
  <el-footer height='48px' class="footer">
    Designed by onwl007 © 2018
  </el-footer>
</template>

<script>
export default {
  name: 'Layout-Footer',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/stylus/vars/index'
  @import '~@/assets/stylus/mixins/index'

  .footer{
    background-color $white
    box-shadow 4px 4px 40px 0 alpha($black,.05)
    text-align center
    line-height 48px
    color $text-color-secondary
    border-top 1px solid $border-color-4
  }
</style>
