import ts from 'rollup-plugin-ts';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

export default [
  // browser-friendly iife build
  {
    input: 'src/main.ts',
    output: {
      name: 'selectelUi',
      file: 'dist/selectel-ui.iife.min.js',
      format: 'iife',
    },
    plugins: [
      resolve(),
      ts({
        browserslist: {
          path: null,
        },
        tsconfig: {
          target: 'ES2015',
          module: 'es2015',
          experimentalDecorators: true,
          strict: true,
        },
      }),
      terser(),
    ],
  },

  {
    input: 'src/main.ts',
    plugins: [
      resolve(),
      ts({
        browserslist: null,
        tsconfig: {
          target: 'ES2015',
          module: 'es2015',
          experimentalDecorators: true,
          declaration: true,
          strict: true,
        },
      }),
    ],
    output: { file: pkg.main, format: 'es' },
  },
];
