<script>
import { completeDirection } from 'main/utils/util';
export default {
  name: 'ElePadding',
  props: {
    size: {
      type: Number,
      default: 16
    },
    sizes: {
      type: Array,
      default() {
        return [];
      }
    },
    type: {
      type: Array,
      default() {
        return [1]; // 默认上右下左四个方向都有size 0代表没值
      }
    },
    flex: {
      type: Boolean,
      default: false
    },
    // 内部元素间距
    gutter: Number
  },
  data() {
    return {
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.gutter && this.$slots.default.forEach(vNode => {
        vNode.elm && vNode.elm.style && (vNode.elm.style.marginLeft = `${this.gutter / 2}px`);
        vNode.elm && vNode.elm.style && (vNode.elm.style.marginRight = `${this.gutter / 2}px`);
      });
    });
  },
  computed: {
    typeFormat() {
      return completeDirection(this.type);
    },
    getFlexStyle() {
      return this.flex ? {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...this.$attrs // flex其他属性
      } : {};
    },
    getGutterStyle() {
      return this.gutter ? {
        marginLeft: `-${this.gutter / 2}px`,
        marginRight: `-${this.gutter / 2}px`
      } : {};
    },
    getStyle() {
      const getSize = (index) => {
        if (!this.sizes.length) return this.size;
        switch (index) {
          case 0:
            return this.sizes[0];
          case 1:
            return this.sizes[1] || this.sizes[0];
          case 2:
            return this.sizes[2] || this.sizes[0];
          case 3:
            return this.sizes[3] || this.sizes[1] || this.sizes[0];
        }
      };
      const arr = this.typeFormat.map((v, i) => v === 1 ? `${getSize(i)}px` : 0);
      const [top, right, bottom, left] = arr;
      return {
        boxSizing: 'border-box',
        paddingTop: top,
        paddingRight: right,
        paddingBottom: bottom,
        paddingLeft: left,
        ...this.getFlexStyle,
        ...this.getGutterStyle
      };
    }
  },
  render(h) {
    return h('div', {
      style: this.getStyle
    }, this.$slots.default);
  }
};
</script>
