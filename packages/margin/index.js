import Margin from './src/main';

/* istanbul ignore next */
Margin.install = function(Vue) {
  Vue.component(Margin.name, Margin);
};

export default Margin;
