<script>
export default {
  name: 'EleTableColumn',
  components: {},
  props: {
    // 使用默认过滤器
    defaultFormatter: Boolean,
    // 默认开启 show-overflow-tooltip
    showOverflowTooltip: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  computed: {
  },
  methods: {
    _defaultFormatter(row, { property }, cellValue, index) {
      return property ? (row[property] || '/') : '/';
    }
  },
  created() {
  },
  mounted() {
  },
  watch: {},
  beforeDestroy() {
  },
  render(h) {
    const props = {
      ...this.$attrs,
      showOverflowTooltip: this.showOverflowTooltip
    };
    if (!this.$attrs.formatter && this.defaultFormatter) {
      props.formatter = this._defaultFormatter;
    }

    const events = { on: this.$listeners };

    return (
      <el-table-column
        {...{ props, scopedSlots: this.$scopedSlots }}
        {...events}
      >
        {Object.keys(this.$scopedSlots).map(name => (
          <template slot={name}>{this.$scopedSlots[name]}</template>
        ))}
        {Object.keys(this.$slots).map(name => (
          <template slot={name}>{this.$slots[name]}</template>
        ))}
      </el-table-column>
    );
  }
};
</script>
