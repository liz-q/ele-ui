import TagColor from './src/main';

/* istanbul ignore next */
TagColor.install = function(Vue) {
  Vue.component(TagColor.name, TagColor);
};

export default TagColor;
