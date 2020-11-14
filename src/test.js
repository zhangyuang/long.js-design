const Long = require('./long')

const foo = Long.fromNumber(-1, false)
const foo1= Long.fromNumber(1, false)
const bar = foo.add(foo1)
console.log(bar)