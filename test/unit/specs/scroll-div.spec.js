import { createTest, destroyVM } from '../util';
import ScrollDiv from 'packages/scroll-div';

describe('ScrollDiv', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(ScrollDiv, true);
    expect(vm.$el).to.exist;
  });
});

