import { defineConfig } from 'dumi';
// const path = require('path');

const repo = '@sh/test';

export default defineConfig({
  title: repo,
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  // base: `/${repo}/`,
  // publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/@sh/dumi-template',
    },
  ],
  menus: {
    '/': [
      {
        title: 'Home',
        path: 'index',
      },
    ],
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/components': [
      {
        title: 'Foo',
        path: '/components/Foo',
      },
      {
        title: 'Img',
        path: '/components/img',
      },
    ],
  },
  lessLoader: { javascriptEnabled: true },
  dynamicImportSyntax: {},
  // chainWebpack(memo) {
  //   // 设置 alias
  //   memo.resolve.alias.set(repo, path.resolve(__dirname, 'src', 'components'));
  // },
  // more config: https://d.umijs.org/config
});
