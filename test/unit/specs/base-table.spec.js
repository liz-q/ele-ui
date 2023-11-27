import { createTest, destroyVM } from '../util';
import BaseTable from 'packages/base-table';

describe('BaseTable', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(BaseTable, true);
    expect(vm.$el).to.exist;
  });
});

