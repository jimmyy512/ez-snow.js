import resolve from '@rollup/plugin-node-resolve'
import commonJS from '@rollup/plugin-commonjs'
import babel from "rollup-plugin-babel"
import { uglify } from "rollup-plugin-uglify";
export default {
  input: 'lib/ezSnow/main.js',
  output: {
    file: 'dist/ezSnow.umd.js',
    format: 'umd',
    sourcemap: true,
    name: "ezSnow"
  },
  plugins: [
    resolve(),
    commonJS(),
    uglify(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};