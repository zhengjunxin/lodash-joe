import test from 'ava'
import { array2hash } from '../src/index'

test('transform key', t => {
    const array = [1, 2, 3]
    t.deepEqual(array2hash(array, (item) => item), {
        1: 1,
        2: 2,
        3: 3,
    })
})

test('transform value', t => {
    const array = [1, 2, 3]

    t.deepEqual(array2hash(array, (item) => item, () => true), {
        1: true,
        2: true,
        3: true,
    })
})

test('undefined', t => {
    t.deepEqual(array2hash(undefined, (item) => item, ), {})
})

test('null', t => {
    t.deepEqual(array2hash(null, (item) => item, ), {})
})

test('string', t => {
    t.deepEqual(array2hash('hello', (item) => item, () => true), {
        h: true,
        e: true,
        l: true,
        o: true,
    })
})
