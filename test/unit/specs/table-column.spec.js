import { createTest, destroyVM } from '../util';
import TableColumn from 'packages/table-column';

describe('TableColumn', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(TableColumn, true);
    expect(vm.$el).to.exist;
  });
});

