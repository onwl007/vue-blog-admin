<template>
  <div class="form-edit">
    <slot></slot>
    <transition name="summary" appear>
      <div class="summary" :style="summaryStyle" v-if="canEdit">
        <div class="wrapper">
          <el-button class="btn cancle-btn" :disabled="loading" plain v-if="showCancle" @click="handleCancle">{{cancleText}}</el-button>
          <el-button class="btn submit-btn" :loading="loading" type="primary" @click="handleSubmit">
            {{loading ? submitLoadingText : submitText }}
          </el-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FormEdit',
  props: {
    showCancel: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    submitText: {
      type: String,
      default: '提交'
    },
    submitLoadingText: {
      type: String,
      default: '提交中...'
    },
    canEdit: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      asideCollapse: 'app/asideCollapse'
    }),
    summaryStyle () {
      return {
        left: this.asideCollapse ? '62px' : '198px'
      }
    }
  },
  methods: {
    handleCancle () {
      this.$emit('cancle')
    },
    handleSubmit () {
      this.$emit('submit')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/vars/index';
@import '~@/assets/stylus/mixins/index';

.form-edit {
  .summary {
    position: fixed;
    right: 0;
    bottom: 48px;
    background-color: alpha($white, 0.6);
    box-shadow: 0 -5px 40px -10px alpha($black, 0.1);
    transition: all 0.5s $fuck;

    .wrapper {
      flexLayout(, center, , wrap);
      margin: 0 auto;
      padding: 16px 24px;

      .btn {
        flex: 1 0;
        max-width: 300px;
        height: 48px;
        margin: 0 24px;
        font-weight: bold;
        letter-spacing: 1px;
      }
    }
  }
}

.summary-enter, .summary-leave-active {
  transform: translateY(100%);
}
</style>
