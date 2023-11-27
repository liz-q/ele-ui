import { createTest, destroyVM } from '../util';
import TagColor from 'packages/tag-color';

describe('TagColor', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(TagColor, true);
    expect(vm.$el).to.exist;
  });
});

