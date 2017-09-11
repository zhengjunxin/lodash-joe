import test from 'ava'
import { debounce } from '../src/index'

test.cb('basic debounce', t => {
    let count = 0
    const inc = () => count++
    const debounceInc = debounce(inc, 32)
    debounceInc()
    t.is(count, 0)

    setTimeout(function() {
        t.is(count, 1)
        t.end()
    }, 32);
})
