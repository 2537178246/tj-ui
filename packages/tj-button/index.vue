<template>
  <button
    class="tj-button"
    type="button"
    :class="classes"
    :style="style"
    @click="onClick">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { computed, reactive } from 'vue'

export default {
  name: 'TjButton',

  props: {
    label: {
      type: String,
      required: true
    },
    primary: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: function(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
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
        'tj-button--primary': props.primary,
        'tj-button--secondary': !props.primary,
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
  background: transparent;
  border: none;
  border-radius: 0;
  color: #eee;
  box-shadow: 0 0 12px #00CBFF inset;
}

.tj-button--primary {

}

.tj-button--medium {

}

.tj-button--small {

}

.tj-button--secondary {

}

.tj-button--large {

}
</style>
