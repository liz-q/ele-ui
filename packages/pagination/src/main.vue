<template>
  <el-pagination
    type="manual"
    :layout="layout"
    :page-sizes="pageSizes"
    :page-size="pageSize"
    :hide-on-single-page="false"
    :total="totalNum"
    :current-page="pageNum"
    @size-change="sizeChange"
    @current-change="currentChange"
    :style="getStyle"
  />
</template>

<script>
export default {
  name: 'ElePagination',
  props: {
    total: { type: [Number, String], default: 0 },
    pageSize: { type: Number, default: 15 },
    pageNum: { type: Number, default: 1 },
    pageSizes: { type: Array, default: () => [15, 30, 45, 60, 100] },
    layout: {
      type: String,
      default: 'sizes, total, prev, pager, next'
    },
    marginBottom: {
      type: Number,
      default: 16
    }
  },
  data() {
    return {
    };
  },
  computed: {
    totalNum() {
      return parseInt(this.total, 10);
    },
    getStyle() {
      const style = {};
      if (this.total > 0) {
        style.marginBottom = `${this.marginBottom}px`;
      }
      return style;
    }
  },
  watch: {
    // 假如第二页只有一条数据，此时删除该数据，应该跳转到前一页
    total(newVal, oldVal) {
      if (this.pageNum > 1 && (oldVal - newVal === 1) && (newVal % this.pageSize === 0)) {
        this.currentChange(this.pageNum - 1);
      }
    }
  },
  created() {
  },
  methods: {
    search(params) {
      this.$emit('change', params);
    },

    sizeChange(val) {
      this.search({
        total: this.totalNum,
        pageSize: val,
        pageNum: 1
      });
    },

    currentChange(val) {
      this.search({
        total: this.totalNum,
        pageSize: this.pageSize,
        pageNum: val
      });
    }
  }
};
</script>
