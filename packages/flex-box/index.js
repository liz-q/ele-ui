import FlexBox from './src/main';

/* istanbul ignore next */
FlexBox.install = function(Vue) {
  Vue.component(FlexBox.name, FlexBox);
};

export default FlexBox;
