<template>
  <button
    class="tj-button"
    type="button"
    :disabled="disabled"
    :class="classes"
    :style="style"
    @click="onClick">
    <span><slot /></span>
  </button>
</template>

<script lang="ts">
import { computed, reactive } from 'vue'

export default {
  name: 'TjButton',

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'info'
    },
    round: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: value => (
        ['small', 'medium', 'large', 's', 'm', 'l'].indexOf(value) !== -1
      )
    },
    backgroundColor: {
      type: String
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        'tj-button': true,
        'tj-button--round': props.round,
        [`tj-button--${props.type || 'info'}`]: true,
        [`tj-button--${props.size || 'medium'}`]: true
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor
      })),
      onClick() {
        emit('click')
      }
    }
  }
}
</script>

<style scoped lang="less">
.tj-button {
  line-height: 26px;
  font-size: 15px;
  border: none;
  border-radius: 0;
  color: #eee;
  box-shadow: 0 0 12px #00CBFF inset;
  cursor: pointer;
}

.tj-button--round {
  border-radius: 25px;
}

.tj-button--medium, .tj-button--m {
  font-size: 14px;
  padding: 4px 10px;
}

.tj-button--small, .tj-button--s {
  font-size: 12px;
  padding: 3px 8px;
}

.tj-button--large, .tj-button--l {
  font-size: 14px;
  padding: 5px 12px;
}

.tj-button--info {
  background: transparent;
  color: #333;
}
</style>
