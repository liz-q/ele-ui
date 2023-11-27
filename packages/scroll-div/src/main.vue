<template>
  <div class="ele-scroll-div">
    <slot v-if="height > 0" :height="height"/>
    <div class="ele-scroll-div__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EleScrollDiv',
  props: {
    reduce: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      height: 0,
      resizeTimer: null,
      observer: null
    };
  },
  mounted() {
    this.setMutationObserver();
    this.watchFooterSizeChange();
    this.watchWindowSizeChange();
    this.$nextTick(() => {
      this.setContHeight();
    });
  },
  methods: {
    /* 计算高度 */
    setContHeight() {
      try {
        const elRect = this.$el.getBoundingClientRect();
        const footerH = this.getFooterHeight();
        this.height = document.body.clientHeight - elRect.top - footerH - this.reduce;
      } catch (err) {
        this.height = 500;
      }
    },

    getFooterHeight() {
      const footer = this.$el.querySelector('.ele-scroll-div__footer');
      const {height} = footer.getBoundingClientRect();
      return height;
    },

    debounceSetContHeight() {
      const me = this;
      if (this.resizeTimer) {
        window.clearTimeout(this.resizeTimer);
      }
      this.resizeTimer = setTimeout(function() {
        me.setContHeight();
      }, 300);
    },

    /* 监听窗口尺寸变化 */
    watchWindowSizeChange() {
      const me = this;
      window.addEventListener('resize', function() {
        me.debounceSetContHeight();
      });
    },

    /* 监听footer容器尺寸变化 */
    watchFooterSizeChange() {
      const footer = this.$el.querySelector('.ele-scroll-div__footer');
      this.observer.observe(footer, {
        childList: true,
        attributes: true,
        attributeFilter: ['style']
      });
    },

    setMutationObserver() {
      const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      this.observer = new MutationObserver((mutationList, observe) => {
        this.debounceSetContHeight();
      });
    }
  }
};
</script>
