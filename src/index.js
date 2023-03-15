import { initMixin } from './init.js'
function Vue(options) {
  console.log('index.js第2行:::name', name)
  this._init(options)
}
// 原型方法装载
initMixin(Vue)

export default Vue
