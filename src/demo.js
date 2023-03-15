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
// skyline._data.test = 2
skyline.test = 2
console.log('demo.js第17行:::skyline.test', skyline.test);
console.log('demo.js第17行:::skyline.test', skyline.testObj);
console.log('demo.js第18行:::s', skyline);
