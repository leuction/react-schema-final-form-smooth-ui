// Rollup plugins.
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'es'
  },
  extensions: ['.js', '.jsx', '.json' ],
  external: ['ajv', 'final-form', 'final-form-arrays', 'react', 'react-dom', 'react-final-form', 'react-final-form-arrays', 'react-schema-final-form', 'smooth-ui', 'styled-components'],
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ [ 'es2015', { modules: false } ], 'stage-0', 'react' ],
      plugins: [ 'external-helpers' ]
    }),
    commonjs({
      include: /node_modules/
    }),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve({
      browser: true,
      main: true
    })
  ],
  sourcemap: true
}
