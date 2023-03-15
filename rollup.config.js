import babel from 'rollup-plugin-babel'
// import babel from 'rollup-plugin-babel/dist/rollup-plugin-babel.esm'
import serve from 'rollup-plugin-serve'

export default {
  input: './src/index',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'vue',
    sourcemap: true,
  },
  plugin: [
    babel({
      excludes: ['node_modules'],
    }),
    serve({
      port: 8088,
      // 当前目录
      contentBase: '',
      openPage: './index.html',
    }),
  ],
}
