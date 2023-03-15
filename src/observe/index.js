import { newArr } from './arr'

export function observe(data) {
  if (typeof data !== 'object' || !data) {
    return data
  }

  return new Observer(data)
}

class Observer {
  constructor(data) {
    if (data instanceof Array) {
      // 拓展数组原型链，便于进行数组方法劫持
      data.__proto__ = newArr
      this.walkArray(data)
    } else {
      this.walk(data)
    }
  }

  walk(data) {
    const keys = Object.keys(data)
    keys.forEach((k) => {
      defineReactive(data, k, data[k])
    })
  }

  walkArray(datasets) {
    datasets.forEach((v) => {
      observe(v)
    })
  }
}

function defineReactive(obj, k, v) {
  if (typeof v === 'object') {
    // 嵌套对象递归进行劫持
    observe(v)
  }
  Object.defineProperty(obj, k, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('index.js第27行:::get v', v)
      return v
    },
    set(val) {
      if (v === val) {
        return
      }
      //   修改属性值为对象时，重新进行数据劫持，由于observe第一层进行了判断，此处无需再次判断
      //   if (typeof val === 'object') {
      observe(val)
      //   }
      console.log('ob.js第24行:::set data')
      v = val
    },
  })
}
