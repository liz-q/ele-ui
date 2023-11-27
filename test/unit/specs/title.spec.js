import { createTest, destroyVM } from '../util';
import Title from 'packages/title';

describe('Title', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Title, true);
    expect(vm.$el).to.exist;
  });
});

