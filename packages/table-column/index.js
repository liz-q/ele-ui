import TableColumn from './src/main';

/* istanbul ignore next */
TableColumn.install = function(Vue) {
  Vue.component(TableColumn.name, TableColumn);
};

export default TableColumn;
