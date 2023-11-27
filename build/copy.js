const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const libBase = path.resolve(__dirname, '../lib');
const to = path.resolve(__dirname, 'D:/lizheng/gpbp-std-center-web/packages/_components/ele/ele-ui');

cleanDir(to);
makeDir(to);

const list = [
  {
    from: libBase,
    to: to
  }
];

list.forEach(({ from, to }) => {
  copyFile(from, to);
});

function copyFile(from, to) {
  const child = shell.exec(`npx cp-cli ${from} ${to}`); // 同步复制
  if (child.code !== 0) {
    console.log('[复制错误]', child.stderr);
  }
}

function cleanDir(pathStr) {
  fs.rmdirSync(pathStr, { recursive: true });
}

function makeDir(pathStr) {
  fs.mkdirSync(pathStr);
}
