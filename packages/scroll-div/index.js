import ScrollDiv from './src/main';

/* istanbul ignore next */
ScrollDiv.install = function(Vue) {
  Vue.component(ScrollDiv.name, ScrollDiv);
};

export default ScrollDiv;
