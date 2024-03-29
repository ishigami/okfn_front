import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint';

const pathSrc = resolve(__dirname, 'src');

const pageData = {
  '/styles.html': {
    colors: [
      {
        name: 'OKFN Blue',
        hex: '#00D1FF',
        code: 'okfn-blue',
        circle: true,
      },
      {
        name: 'OKFN Green',
        hex: '#ADFFED',
        code: 'okfn-green',
        circle: true,
      },
      {
        name: 'OKFN Purple',
        hex: '#E077FF',
        code: 'okfn-purple',
        circle: true,
      },
      {
        name: 'OKFN Yellow',
        hex: '#E4FF36',
        code: 'okfn-yellow',
        circle: true,
      },
      {
        name: 'Black',
        hex: '#000000',
        code: 'black',
        circle: false,
      },
      {
        name: 'Light Gray',
        hex: '#f8f8f8',
        code: 'okfn-light-gray',
        circle: false,
      },
      {
        name: 'White',
        hex: '#ffffff',
        code: 'white',
        circle: false,
      },
      {
        name: 'Link',
        hex: '#00a9e0',
        code: 'okfn-link',
        circle: false,
      },
      {
        name: 'Content box',
        hex: '#e4ff36',
        code: 'okfn-content',
        circle: false,
      },
    ],
    headlines: [
      {
        code: 'h0',
        size: '100px (6.25rem)',
        height: '100%',
        mobileSize: '50px (3.125rem)',
        mobileHeight: '111%',
        weight: 'Bold',
      },
      {
        code: 'h1',
        size: '55px (3.4375rem)',
        height: '100%',
        mobileSize: '33px (2.0625rem)',
        mobileHeight: '107%',
        weight: 'Bold',
      },
      {
        code: 'h2',
        size: '40px (2.5rem)',
        height: '100%',
        mobileSize: '27px (1.6875rem)',
        mobileHeight: '120%',
        weight: 'Bold',
      },
      {
        code: 'h3',
        size: '24px (1.5rem)',
        height: '120%',
        mobileSize: '22px (1.375rem)',
        mobileHeight: '135%',
        weight: 'Bold',
      },
      {
        code: 'h4',
        size: '20px (1.25rem)',
        height: '120%',
        mobileSize: '14px (0.875rem)',
        mobileHeight: '135%',
        weight: 'Bold',
      },
      {
        code: 'h5',
        size: '16px (1rem)',
        height: '120%',
        mobileSize: '12px (0.75rem)',
        mobileHeight: '120%',
        weight: 'Bold',
      },
    ],
    body: [
      {
        name: 'L',
        code: 'okfn-lg',
        size: '40px (2.5rem)',
        height: '120%',
        mobileSize: '32px (2rem)',
        mobileHeight: '130%',
      },
      {
        name: 'M',
        code: 'okfn-md',
        size: '22px (1.375rem)',
        height: '140%',
        mobileSize: '19px (1.1875rem)',
        mobileHeight: '150%',
      },
      {
        name: 'S',
        code: 'okfn-sm',
        size: '16px (1rem)',
        height: '140%',
        mobileSize: '16px (1rem)',
        mobileHeight: '140%',
      },
    ],
  }
}

export default {
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        styles: resolve(__dirname, 'src/styles.html'),
        components: resolve(__dirname, 'src/components.html'),
        'components-2': resolve(__dirname, 'src/components-2.html'),
      }
    }
  },
  publicDir: '../public',
  plugins: [
    handlebars({
      partialDirectory: `${pathSrc}/components`,
      context (pagePath) {
        return pageData[pagePath]
      }
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