import test from 'ava'
import { throttle } from '../src/index'

test('leading', t => {
    let count = 0
    const inc = () => count++
    const throttleInc = throttle(inc, 32)
    throttleInc()
    t.is(count, 1)
})

test.cb('disable leading', t => {
    let count = 0
    const inc = () => count++
    const throttleInc = throttle(inc, 32, {
        leading: false,
    })
    throttleInc()

    t.is(count, 0)

    setTimeout(function() {
        t.is(count, 1)
        t.end()
    }, 32);
})

test.cb('basic throttle', t => {
    let count = 0
    const inc = () => count++
    const throttleInc = throttle(inc, 32)

    throttleInc()
    throttleInc()

    t.is(count, 1)

    setTimeout(function() {
        t.is(count, 2)
        t.end()
    }, 32);
})
