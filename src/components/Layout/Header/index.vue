<template>
  <el-header height="48px" class="header">
    <a class="collapse" @click="handleToggleCollapseMenue">
      <i class="iconfont" :class="[`icon-${asideCollapse ? 'unfold' : 'fold'}`]"></i>
    </a>
    <div class="action">
      <router-link to="/" class="action-item message">
        <el-badge is-dot>
          <i class="iconfont icon-message"></i>
        </el-badge>
      </router-link>
      <el-menu class="user" mode="horizontal" @select="handleMenuSelect">
        <el-submenu index="submenu">
          <template slot="title">
            <i class="iconfont icon-user"></i>
            <span>{{authInfo.name}}</span>
          </template>
          <el-menu-item index="info">
            <i class="iconfont icon-user-info"></i>
            <span>个人信息</span>
          </el-menu-item>
          <el-menu-item index="logout">
            <i class="iconfont icon-logout"></i>
            <span>退出</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </el-header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Layout-Header',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      asideCollapse: 'app/asideCollapse',
      authInfo: 'auth/info'
    })
  },
  methods: {
    handleToggleCollapseMenu () {
      this.$store.commit('app/SET_ASIDE_COLLAPSE', !this.asideCollapse)
    },
    async handleMenuSelect (index) {
      switch (index) {
        case 'info':
          this.$router.push({ name: 'Auth' })
          break
        case 'logout':
          await this.$store.dispatch('auth/logout')
          this.$router.push({ name: 'Login' })
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="stylus">
  @import 'index.styl'
</style>
