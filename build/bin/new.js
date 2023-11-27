'use strict';

console.log(process.argv);
process.on('exit', () => {
  console.log();
});

if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name');
  process.exit(1);
}

const path = require('path');
const fs = require('fs');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');
const componentname = process.argv[2]; // 组件名称 demo-comp
const chineseName = process.argv[3] || componentname; // 中文名称
const groupName = process.argv[4] || 'Others'; // 组名
const GroupName = uppercamelcase(groupName);
const ComponentName = uppercamelcase(componentname);
const PackagePath = path.resolve(__dirname, '../../packages', componentname);
const Files = [
  {
    filename: 'index.js',
    content: `import ${ComponentName} from './src/main';

/* istanbul ignore next */
${ComponentName}.install = function(Vue) {
  Vue.component(${ComponentName}.name, ${ComponentName});
};

export default ${ComponentName};`
  },
  {
    filename: 'src/main.vue',
    content: `<template>
  <div class="ele-${componentname}"></div>
</template>

<script>
export default {
  name: 'Ele${ComponentName}'
};
</script>`
  },
  {
    filename: path.join('../../examples/docs/zh-CN', `${componentname}.md`),
    content: `## ${ComponentName} ${chineseName}`
  },
  {
    filename: path.join('../../test/unit/specs', `${componentname}.spec.js`),
    content: `import { createTest, destroyVM } from '../util';
import ${ComponentName} from 'packages/${componentname}';

describe('${ComponentName}', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(${ComponentName}, true);
    expect(vm.$el).to.exist;
  });
});
`
  },
  {
    filename: path.join('../../packages/theme-chalk/src', `${componentname}.scss`),
    content: `@import "mixins/mixins";
  @import "common/var";

  @include b(${componentname}) {
  }`
  }
//   {
//     filename: path.join('../../types', `${componentname}.d.ts`),
//     content: `import { ElementUIComponent } from './component'
//
// /** ${ComponentName} Component */
// export declare class El${ComponentName} extends ElementUIComponent {
// }`
//   }
];

// 1. 添加到 components.json
const componentsFile = require('../../components.json');
if (componentsFile[componentname]) {
  console.error(`${componentname} 已存在.`);
  process.exit(1);
}
componentsFile[componentname] = `./packages/${componentname}/index.js`;
fileSave(path.join(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n');

// 2. 添加到 index.scss
const sassPath = path.join(__dirname, '../../packages/theme-chalk/src/index.scss');
const sassImportText = `${fs.readFileSync(sassPath)}@import "./${componentname}.scss";`;
fileSave(sassPath)
  .write(sassImportText, 'utf8')
  .end('\n');

// // 3. 添加到 element-ui.d.ts
// const elementTsPath = path.join(__dirname, '../../types/element-ui.d.ts');
//
// let elementTsText = `${fs.readFileSync(elementTsPath)}
// /** ${ComponentName} Component */
// export class ${ComponentName} extends El${ComponentName} {}`;
//
// const index = elementTsText.indexOf('export') - 1;
// const importString = `import { El${ComponentName} } from './${componentname}'`;
//
// elementTsText = elementTsText.slice(0, index) + importString + '\n' + elementTsText.slice(index);
//
// fileSave(elementTsPath)
//   .write(elementTsText, 'utf8')
//   .end('\n');

// 4. 创建 package
Files.forEach(file => {
  fileSave(path.join(PackagePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n');
});

// 5. 添加到 nav.config.json
const navConfigFile = require('../../examples/nav.config.json');

Object.keys(navConfigFile).forEach(lang => {
  let groups = navConfigFile[lang][2].groups;
  let targetGroup = groups.find(group => group.groupName === GroupName);
  if (targetGroup) {
    targetGroup.list.push({
      path: `/${componentname}`,
      title: lang === 'zh-CN' && componentname !== chineseName
        ? `${ComponentName} ${chineseName}`
        : ComponentName
    });
  }
});

fileSave(path.join(__dirname, '../../examples/nav.config.json'))
  .write(JSON.stringify(navConfigFile, null, '  '), 'utf8')
  .end('\n');

console.log('DONE!');
