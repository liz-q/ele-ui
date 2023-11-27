import BaseTable from './src/main';

/* istanbul ignore next */
BaseTable.install = function(Vue) {
  Vue.component(BaseTable.name, BaseTable);
};

export default BaseTable;
