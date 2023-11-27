<template>
  <el-input
    class="ele-input"
    v-model="keyword"
    :class="className"
    :placeholder="placeholder"
    v-bind="$attrs"
    :style="getStyle"
    @keyup.native.enter="handleEnter"
    @clear="handleClear"
    @blur="handleBlur"
  >
    <i
      v-if="search"
      slot="suffix"
      class="el-icon-search el-input__icon"
      @click="handleClickIcon"
    />
  </el-input>
</template>

<script>
import debounce from 'throttle-debounce/debounce';
export default {
  name: 'EleInput',
  components: {},
  mixins: [],
  props: {
    value: [String, Number],
    // 是否展示搜索图标
    search: Boolean,
    // 自定义类名
    className: String,
    width: Number,
    // 查询方法
    searchMethod: Function,
    placeholder: {
      type: String,
      default: '请输入'
    },
    // 防抖延迟
    delay: {
      type: Number,
      default: 500
    },
    // 是否开启防抖
    debounce: Boolean,
    // 手动触发查询
    manual: Boolean
  },
  data() {
    return {
      text: null
    };
  },
  computed: {
    keyword: {
      get() {
        return this.text === null ? this.value : this.text;
      },
      set(val) {
        this.text = val;
        if (!this.manual) {
          this.debounce ? this.debounceSearch() : this.handleSearch();
        }
      }
    },

    getStyle() {
      const obj = {};
      if (this.width !== undefined) {
        obj.width = `${this.width}px`;
      }
      return obj;
    }
  },
  watch: {
  },
  created() {
    this.text = this.value;
    // 注意和lodash中debounce写法不同
    this.debounceSearch = debounce(this.delay, this.handleSearch);
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
    handleClickIcon() {
      this.debounceSearch();
    },
    handleEnter() {
      this.$el.querySelector('input').blur();
      this.debounceSearch();
    },
    handleBlur() {
      this.manual && this.debounceSearch();
    },
    handleClear() {
      this.manual && this.handleSearch();
    },

    /* 触发查找 */
    handleSearch() {
      this.$emit('input', this.text);
      this.$emit('change', this.text);
      this.searchMethod && this.searchMethod(this.text);
    }
  }
};
</script>
