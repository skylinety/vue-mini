// import Vue from "../dist/index.js";
// console.log('index.html第12行:::vue', Vue);
const skyline = new vue({
  // el: "#app",
  data() {
    return {
      test: 1,
      testObj: {
        a: 2,
        b: [{ c: 1 }, [2, 3, [{ d: 2 }]], 4, '5'],
      },
    }
  },
  props: {},
  // template: '<div id="test">{{test}}</div>',
}).$mount("#app")
// skyline._data.test = 2
skyline.test = 2
