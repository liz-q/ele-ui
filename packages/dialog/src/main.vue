<template>
  <div class="ele-dialog">
    <el-dialog
      :title="title"
      :visible.sync="visible"
      :size="size"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <div v-if="refresh">
        <slot name="default"></slot>
      </div>
      <template v-if="hasFooter">
        <span v-if="$slots.footer" slot="footer"><slot name="footer"></slot></span>
        <span v-else slot="footer">
        <el-button type="primary" @click="ok" :loading="okLoading">{{okText}}</el-button>
        <el-button @click="hide">{{cancelText}}</el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'EleDialog',
  props: {
    title: String,
    size: {
      type: String,
      default: 'small'
    },
    hasFooter: {
      type: Boolean,
      default: true
    },
    okLoading: {
      type: Boolean,
      default: false
    },
    // 显示隐藏时是否刷新内容
    visibleRefresh: Boolean,
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  data() {
    return {
      visible: false,
      refresh: true
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    ok() {
      this.$emit('ok', () => {});
    },
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.visibleRefresh && (this.refresh = true);
      } else {
        this.visibleRefresh && (this.refresh = false);
        this.$emit('cancel', () => {});
      }
    }
  }
};
</script>
