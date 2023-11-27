<template>
  <div class="ele-flex-box" :style="getStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EleFlexBox',
  computed: {
    getStyle() {
      return this.$attrs;
    }
  }
};
</script>
