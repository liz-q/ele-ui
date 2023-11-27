<template>
  <span
    v-if="cont || $slots.default"
    class="ele-tag-color"
    :class="[
      `ele-tag-color--${size}`,
      `ele-tag-color--${type}`,
      { 'is-bold': bold }
    ]"
    :style="getStyle"
  >
    <slot v-if="$slots.default"></slot>
    <template v-else>{{cont || ''}}</template>
  </span>
</template>

<script>
export default {
  name: 'EleTagColor',
  mixins: [],
  components: {},
  props: {
    colors: {},
    cont: {},
    bold: Boolean,
    type: {
      type: String,
      default: 'default',
      validator(val) {
        return ['default', 'warn', 'error', 'info', 'success'].includes(val);
      }
    },
    size: {
      type: String,
      default: 'small',
      validator(val) {
        return ['small', 'mini'].includes(val);
      }
    },
    // top=10 向上偏移10px
    // bottom=-10 向下偏移-10px
    // right=10 向右偏移10px
    // left=-10 向左偏移-10px
    offset: String
  },
  data() {
    return {
    };
  },
  computed: {
    getStyle() {
      let style = {};
      if (this.offset) {
        const [direction, num] = this.offset.split('=');
        if (direction && ['top', 'right', 'bottom', 'left'].includes(direction) && num) {
          const D = ['top', 'bottom'].includes(direction) ? 'Y' : 'X';
          style.transform = `translate${D}(${num}px)`;
        }
      }
      if (this.colors && Object.prototype.toString.call(this.colors) === '[object Array]' && this.colors.length) {
        const [color, bgColor, borderColor] = this.colors;
        color && (style.color = color);
        bgColor && (style.backgroundColor = bgColor);
        borderColor && (style.borderColor = borderColor);
      }
      return style;
    }
  },
  methods: {
  },
  created() {
  },
  mounted() {
  },
  watch: {},
  beforeUpdate() {
  },
  updated() {
  },
  beforeDestroy() {
  }
};
</script>
