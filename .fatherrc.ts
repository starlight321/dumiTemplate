export default {
  target: 'browser',
  entry: 'src/index.ts',
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  runtimeHelpers: true,
  lessInBabelMode: true,
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
  doc: {
    themeConfig: { mode: 'light' },
    base: '/',
    menu: [],
  },
};
