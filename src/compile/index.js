const ncname = '[a-zA-Z_][\\w\\-\\.]*'
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
const startTagOpen = new RegExp(`^<${qnameCapture}`)
const startTagClose = /^\s*(\/?)>/
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`)
const attribute =
  /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/

export function compileTemplate(template) {
  console.log('init.js第21行:::template', template)
  let ast = {}
  while (template) {
    let tag = {}
    if (template.startsWith('<')) {
      tag = getTag(template)
      console.log('index.js第13行:::template', template)
    }
    getAttr()
    break
  }

  function getTag() {
    const ret = startTagOpen.exec(template)
    // const ret = template.match(startTagOpen)
    advance(ret[0].length)
    return {
      tag: ret[1],
      children: [],
      attrs: []
    }
  }

  function getAttr() {
    const ret = attribute.exec(template)
    advance(ret[0].length)
    console.log('index.js第33行:::ret', ret);
    console.log('index.js第34行:::te', template);
    // return {
    //   tag: ret[1],
    //   children: [],
    // }
  }

  function advance(steps) {
    return (template = template.slice(steps))
  }
}
