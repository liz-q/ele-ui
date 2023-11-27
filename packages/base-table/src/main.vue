<template>
  <el-table
    ref="eleBaseTable"
    v-loading="loading"
    :stripe="false"
    :data="data"
    :border="border"
    :cell-style="cell_Style"
    highlight-current-row
    v-bind="bindProps"
    v-on="$listeners"
  >
    <el-table-column
      v-if="selectionInner&&radioInner"
      label="选择"
      width="55"
      align="center"
    >
      <template slot-scope="scope">
        <el-radio v-model="radioRow" :label="scope.row">{{""}}</el-radio>
      </template>
    </el-table-column>
    <el-table-column
      v-if="selectionInner&&!radioInner"
      type="selection"
      align="center"
      width="55"
      :reserve-selection="true"
      v-bind="selectionProps"
    ></el-table-column>
    <el-table-column
      v-if="index"
      label="序号"
      type="index"
      width="55"
      :index="indexMethod"
    ></el-table-column>
    <slot />
  </el-table>
</template>

<script>
import { traverseTree } from 'main/utils/util';
export default {
  name: 'EleBaseTable',
  components: {},
  mixins: [],
  props: {
    baseList: Object, // BaseList 实例
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    cellStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    // 紧凑型。当表格行内有标签之类的内容时，行高会被撑开，此时减小单元格的padding-top 和 padding-bottom
    compact: {
      type: Boolean,
      default: false
    },
    // 单选
    radio: {
      type: Boolean,
      default: false
    },
    selection: {
      type: Boolean,
      default: false
    },
    selectionProps: {
      type: Object,
      default() {
        return {};
      }
    },
    index: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      radioItem: '',
      radioInner: false,
      selectionInner: false
    };
  },
  computed: {
    radioRow: {
      get() {
        return this.radioItem;
      },
      set(val) {
        this.$emit('radio-change', val);
        this.radioItem = val;
      }
    },
    cell_Style() {
      const style = { ...this.cellStyle };
      if (this.compact) {
        style.paddingTop = '6px';
        style.paddingBottom = '6px';
      }
      return style;
    },
    bindProps() {
      if (this.$attrs['max-height']) {
        return this.$attrs;
      }
      delete this.$attrs['max-height'];
      return this.$attrs;
    },
    table() {
      return this.$refs.eleBaseTable;
    }
  },
  watch: {
    data: {
      handler() {
        this.doLayout();
      },
      immediate: true
    },
    radio(val) {
      this.selectionInner = false;
      this.$nextTick(() => {
        this.selectionInner = true;
        this.radioInner = val;
      });
    }
  },
  created() {
    this.radioInner = this.radio;
    this.selectionInner = this.selection;
  },
  mounted() {
  },
  beforeUpdate() {
  },
  updated() {
  },
  beforeDestroy() {
  },
  methods: {
    getTable() {
      return this.$refs.eleBaseTable;
    },

    doLayout() {
      this.$nextTick(() => {
        this.$refs.eleBaseTable && this.$refs.eleBaseTable.doLayout();
      });
    },

    /**
     * @function 展开/折叠全部
     * @param expanded {boolean} true 展开全部 false 折叠全部
     * */
    toggleExpandedAll(expanded) {
      traverseTree(this.data, (node) => {
        this.table.toggleRowExpansion(node, expanded);
      });
    },

    indexMethod(index) {
      if (!this.baseList) return index + 1;
      return (this.baseList.pageNum - 1) * this.baseList.pageSize + index + 1;
    }
  }
};
</script>
