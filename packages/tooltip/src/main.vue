<script>
export default {
  name: 'EleTooltip',
  components: {},
  props: {
    content: String,
    className: {
      type: String,
      default: 'el-icon-question'
    },
    placement: {
      type: String,
      default: 'top'
    },
    highLight: Boolean,
    highLightColor: {
      type: String,
      default: '#409EFF'
    }
  },
  computed: {
    getStyle() {
      const style = {
        fontSize: '16px',
        cursor: 'pointer',
        margin: '0 5px'
      };
      this.highLight && (style.color = this.highLightColor);
      return style;
    }
  },
  render(h) {
    const slots = this.$slots;
    const content = this.content;
    const className = this.highLight ? `${this.className} ` : this.className;
    const placement = this.placement;
    const props = {
      ...this.$attrs
    };
    const styles = this.getStyle;
    const events = {
      on: {
        click: (e) => {
          this.$emit('click', e);
        }
      }
    };
    return (
      <el-tooltip
        placement={placement}
        {...{ props }}
      >
        <template slot="content">{slots.default || content}</template>
        {slots.action ? slots.action : (
          <i
            style={styles}
            class={className}
            {...events}
          ></i>
        )}
      </el-tooltip>
    );
  }
};
</script>
