<template>
  <div
    class="ele-title"
    :class="[
      typeof size === 'string' ? 'ele-title--' + size : ''
    ]"
    :style="getStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EleTitle',
  props: {
    size: {
      type: [String, Object], // 'large', 'medium', 'small', 'mini'
      default: 'small'
    }
  },
  computed: {
    getStyle() {
      if (typeof this.size === 'object') {
        return this.size;
      }
      return '';
    }
  }
};
</script>
