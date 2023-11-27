<template>
  <div class="ele-margin" :style="getStyle">
    <slot></slot>
  </div>
</template>

<script>
import { completeDirection } from 'main/utils/util';
export default {
  name: 'EleMargin',
  props: {
    size: {
      type: Number,
      default: 16
    },
    type: {
      type: Array,
      default() {
        return [1];
      }
    }
  },
  data() {
    return {
    };
  },
  computed: {
    typeFormat() {
      return completeDirection(this.type);
    },
    getStyle() {
      const arr = this.typeFormat.map(v => v === 1 ? `${this.size}px` : 0);
      const [top, right, bottom, left] = arr;
      return {
        marginTop: top,
        marginRight: right,
        marginBottom: bottom,
        marginLeft: left
      };
    }
  }
};
</script>
