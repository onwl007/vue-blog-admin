<template>
  <div class="login-page">
    <div class="login-bg">
      <div id="particles-background" class="particles-background"></div>
    </div>
    <div class="login-field">
      <div class="login-title">
        <h5 class="title">
          <i class="iconfont icon-logo logo"></i>
        </h5>
        <template v-if="hasAuthCache && !changeUser">
          <img class="avatar" :src="avatar" alt="" v-if="avatar">
          <i class="iconfont icon-avatar" v-else></i>
          <p class="name">
            {{ authInfo.name }}
            <i class="iconfont icon-edit" title="切换用户" @click="handleChangeUser"></i>
          </p>
        </template>
      </div>
      <div class="login-form">
        <div class="form-item user" :class="{ focus: focus.name }" v-if="!hasAuthCache || changeUser">
          <i class="iconfont icon-user"></i>
          <input type="text" class="user-input" placeholder="Username" v-model.trim="loginModel.name" @keyup.enter="handleLogin" @focus="focus.name = true" @blur="focus.name = false">
          <transition name="slide-in-left-fast">
            <i class="iconfont icon-check" v-show="!!loginModel.name"></i>
          </transition>
        </div>
        <div class="form-item password" :class="{ focus: focus.password }">
          <i class="iconfont icon-password"></i>
          <input type="password" class="password-input" placeholder="Password" v-model.trim="loginModel.password" @keyup.enter="handleLogin" @focus="focus.password = true" @blur="focus.password = false">
          <transition name="slide-in-left-fast">
            <i class="iconfont icon-check" v-show="!!loginModel.password"></i>
          </transition>
        </div>
        <div class="submit">
          <div class="submit-btn" @click="handleLogin">log in</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { imageLoad } from '@/utils'
import 'particles.js'
export default {
  name: 'Login-index',
  data () {
    return {
      avatar: '',
      loginModel: {
        name: '',
        password: ''
      },
      chagngeUser: false,
      focus: {
        name: false,
        password: false
      }
    }
  },
  computed: {
    ...mapGetters({
      authInfo: 'auth/info',
      authLoading: 'auth/loading'
    }),
    hasAuthCache () {
      return this.authInfo && this.authInfo.name
    }
  },
  created () {
    if (this.hasAuthCache) {
      this.loginModel.name = this.authInfo.name || ''
    }
  },
  mounted () {
    this.genBackground()
    imageLoad(this.authInfo.avatar, {
      success: () => {
        this.avatar = this.authInfo.avatar
      }
    })
  },
  methods: {
    handleChangeUser () {
      this.loginModel.name = ''
      this.chagngeUser = true
    },
    async handleLogin () {
      const success = await this.$store.dispatch('auth/login', this.loginModel)
      if (success) {
        const query = this.$route.query
        this.$router.push({
          name: query.redirect_uri_name || 'Home',
          params: JSON.parse(query.redirect_params || '{}'),
          query: JSON.parse(query.redirect_query || '{}')
        })
      }
    },
    genBackground () {
      particlesJS('particles-background', {
        'particles': {
          'number': {
            'value': 30,
            'density': {
              'enable': true,
              'value_area': 1000
            }
          },
          'color': {
            'value': '#bfbfbf'
          },
          'shape': {
            'type': 'circle',
            'stroke': {
              'width': 0,
              'color': '#ffffff'
            },
            'polygon': {
              'nb_sides': 10
            },
            'image': {
              'src': 'img/github.svg',
              'width': 100,
              'height': 100
            }
          },
          'opacity': {
            'value': 0.5,
            'random': false,
            'anim': {
              'enable': true,
              'speed': 0.8,
              'opacity_min': 0.3,
              'sync': false
            }
          },
          'size': {
            'value': 15,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 40,
              'size_min': 0.1,
              'sync': false
            }
          },
          'line_linked': {
            'enable': true,
            'distance': 300,
            'color': '#c5c5c5',
            'opacity': 0.4,
            'width': 1
          },
          'move': {
            'enable': true,
            'speed': 2,
            'direction': 'none',
            'random': true,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
              'enable': false,
              'rotateX': 600,
              'rotateY': 1200
            }
          }
        },
        'interactivity': {
          'detect_on': 'canvas',
          'events': {
            'onhover': {
              'enable': false,
              'mode': 'repulse'
            },
            'onclick': {
              'enable': false,
              'mode': 'push'
            },
            'resize': true
          },
          'modes': {
            'grab': {
              'distance': 400,
              'line_linked': {
                'opacity': 1
              }
            },
            'bubble': {
              'distance': 400,
              'size': 40,
              'duration': 2,
              'opacity': 0.8471528471528471,
              'speed': 3
            },
            'repulse': {
              'distance': 200,
              'duration': 0.4
            },
            'push': {
              'particles_nb': 4
            },
            'remove': {
              'particles_nb': 2
            }
          }
        },
        'retina_detect': true
      })
    }
  }
}
</script>

<style lang="stylus">
  @import 'index.styl'
</style>
