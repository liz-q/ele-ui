import { createTest, destroyVM } from '../util';
import Margin from 'packages/margin';

describe('Margin', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Margin, true);
    expect(vm.$el).to.exist;
  });
});

