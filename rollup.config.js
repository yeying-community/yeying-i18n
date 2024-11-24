import json from '@rollup/plugin-json'

export default {
  input: 'src/index.js', // 你的入口文件
  output: {
    file: 'dist/bundle.js',
    format: 'es'
  },
  plugins: [
    json()
  ]
}
