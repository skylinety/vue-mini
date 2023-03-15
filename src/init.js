import { initState } from "./initState";
export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    // this.stateMixin(this)
    const vm = this
    vm.$options = options
    initState(vm)
  }
}