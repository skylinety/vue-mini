import { observe } from './index'

const arrProto = Array.prototype

// newArr.__proto =  Array.prototype
export const newArr = Object.create(arrProto)

// 策略模式
const resetMethods = ['push', 'pop', 'shift', 'unshift', 'splice']

resetMethods.forEach((m) => {
  newArr[m] = function (...args) {
    console.log('arr.js第10行:::方法 劫持')
    args.forEach((v) => {
      observe(v)
    })
    arrProto[m].call(this, ...args)
  }
})
