// import { observe } from './index'

const arrProto = Array.prototype

// newArr.__proto =  Array.prototype
export const newArr = Object.create(arrProto)

// 策略模式
const resetMethods = ['pop', 'shift', 'push', 'unshift', 'splice']

resetMethods.forEach((m, i) => {
  newArr[m] = function (...args) {
    console.log('arr.js第10行:::方法 劫持', this)
    const ob = this.__ob__
    // 使用observe的方式
    // args.forEach((v) => {
    //   observe(v)
    // })
    // 复用Observer实例
    let datasets = null
    switch (i) {
      case 2:
      case 3:
        datasets = args
        break
      case 4:
        datasets = args.slice(2)
      default:
        break
    }
    datasets && ob.walkArray(datasets)

    return arrProto[m].call(this, ...args)
  }
})
