import { initState } from './initState'
import { compileTemplate } from "./compile/index";
export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    const vm = this
    vm.$options = options
    initState(vm)
    let { el, template, render } = options

    el && vm.$mounted(el)
  }

  Vue.prototype.$mount = function (el) {
    let { template, render } = this.$options

    if (typeof el == 'string') {
      el = document.querySelector(el)
    }
    // render获取方式有3种，业务端手写render，通过编译template，未提供template时，编译挂载节点的outerHTML
    if (!render) {
      render = compileTemplate(template || el.outerHTML)
    }

    return this
  }
}

