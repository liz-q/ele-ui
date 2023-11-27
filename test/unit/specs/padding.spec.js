import { createTest, destroyVM } from '../util';
import Padding from 'packages/padding';

describe('Padding', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Padding, true);
    expect(vm.$el).to.exist;
  });
});

