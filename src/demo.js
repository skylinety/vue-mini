// import Vue from "../dist/index.js";
// console.log('index.html第12行:::vue', Vue);
const skyline = new vue({
  data() {
    return {
      test: 1,
      testObj: {
        a: 2,
        b: [{ c: 1 },[ 2, 3, [{d: 2}]], 4, '5'],
      },
    }
  },
  props: {},
})
skyline._data.test = 2
// skyline.test = 2
skyline._data.test = { c: 2, d: 3 }
skyline._data.testObj.b.push({c:222})
console.log('demo.js第14行:::skyline', skyline)
