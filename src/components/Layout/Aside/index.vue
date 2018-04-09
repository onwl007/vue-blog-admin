<template>
  <el-aside class="aside" :class="{ collapse: asideCollapse}" :width="asideCollapse ? '64px' : '200px'">
    <div class="admin-field">
      <router-link class="avatar" :to="{ name: 'Auth'}">
        <img :src="avatar" :alt="authInfo.name" v-if="avatar">
        <img :src="logo" alt="" v-else>
      </router-link>
      <div class="info">
        <h3 class="name">{{ authInfo.name }}</h3>
        <p class="slogan">{{ authInfo.slogan }}</p>
      </div>
    </div>
    <div class="menu-field">
      <el-menu class="menu-list" :default-active="defaultActive" :collpapse="asideCollapse" router>
        <template v-for="menu in appRoutesMenu">
          <el-submenu :key="menu.path" :index="menu.path" v-if="menu.children">
            <template slot="title">
              <i class="iconfont" :class="[`icon-${menu.meta.icon}`]"></i>
              <span slot="title">{{ menu.meta.title}}</span>
            </template>
            <el-menu-item v-for="submenu in menu.children" :key="submenu.path" :index="`${menu.path}/${submenu.path}`">
              <i class="iconfont" :class="[`icon-${submenu.meta.icon}`]"></i>
              <span slot="title">{{ submenu.meta.title }}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item :key="menu.path" :index="menu.path" v-else>
            <i class="iconfont" :class="[`icon-${menu.meta.icon}`]"></i>
            <span slot="title">{{ menu.meta.title}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </el-aside>
</template>

<script>
import { mapGetters } from 'vuex'
import { imageLoad } from '@/utils'
import logo from '@@/static/image/logo.svg'

export default {
  name: 'Layout-Aside',
  data () {
    return {
      logo,
      avatar: ''
    }
  },
  computed: {
    ...mapGetters({
      appRoutesMenu: 'app/routesMenu',
      asideCollapse: 'app/asideCollapse',
      authinfo: 'auth/info'
    }),
    defaultActive () {
      return this.$route.fullPath
    }
  },
  watch: {
    'authInfo.avatar' (val, oldVal) {
      this.loadAvatar(val)
    }
  },
  mounted () {
    this.loadAvatar(this.authInfo.avatar)
  },
  methods: {
    loadAvatar (url) {
      this.avatar = ''
      imageLoad(url, {
        success: () => {
          this.avatar = url
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import 'index.styl';
</style>
