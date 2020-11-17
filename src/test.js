const Long = require('./long')

const foo = Long.fromInt(-1, true)
const foo1 = Long.fromNumber(1, false)
const bar = foo.mul(foo1)
const foo2 = Long.fromString('214748364899')
const foo3 = Long.fromNumber(parseInt('214748364899'))
console.log(foo2, foo3)
