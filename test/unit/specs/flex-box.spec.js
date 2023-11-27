import { createTest, destroyVM } from '../util';
import FlexBox from 'packages/flex-box';

describe('FlexBox', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(FlexBox, true);
    expect(vm.$el).to.exist;
  });
});

