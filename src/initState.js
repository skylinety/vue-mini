import { observe } from './observe/index.js'

export function initState(vm) {
  const opts = vm.$options
  const data = opts.data
  initData(vm, data)
}

function initData(vm, data) {
  const _data = (vm._data = typeof data === 'function' ? data.call(vm) : data)
  const o = observe(_data)
  proxy(_data, vm)
}

function proxy(renter, rentee) {
  const keys = Object.keys(renter)
  keys.forEach((k) => {
    Object.defineProperty(rentee, k, {
      enumerable: true,
      configurable: true,
      get() {
        return renter[k]
      },
      set(val) {
        renter[k] = val
        console.log('initState.js第24行:::set data')
      },
    })
  })
}
