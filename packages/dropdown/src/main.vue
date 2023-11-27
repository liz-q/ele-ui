<template>
  <el-dropdown class="ele-dropdown" v-bind="$attrs" v-on="$listeners" :trigger="trigger">
    <!-- 只有文本 -->
    <template>
      <!-- 有下拉箭头 -->
      <span v-if="triggerEle==='button'" class="ele-dropdown__link">
      {{text}}<i class="el-icon-arrow-down ele-icon--right"></i>
      </span>
      <template v-else>{{text}}</template>
    </template>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(item, index) in options"
        :key="index"
        v-bind="item"
      >
        {{item.label}}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'EleDropdown',
  props: {
    text: {
      type: String,
      default: '更多'
    },
    triggerEle: {
      type: String,
      default: 'button' // text button
    },
    trigger: {
      type: String,
      default: 'click' // hover, click
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
  }
};
</script>
