import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint';

const pathSrc = resolve(__dirname, 'src');

export default {
  root: 'src',
  build: {
    outDir: '../dist'
  },
  publicDir: '../public',
  plugins: [
    handlebars({
      partialDirectory: `${pathSrc}/components`,
    }),
    eslint({
      include: [ 'src/**/*.js' ],
      exclude: [ 'node_modules', 'dist' ],
    }),
    stylelint({
      include: [ 'src/**/*.css' ],
      exclude: [ 'node_modules', 'dist' ],
    }),
  ],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       imports: [
  //         `${pathSrc}/styles/basic/index`,
  //       ],
  //     },
  //   },
  // },
}