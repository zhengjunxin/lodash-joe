import test from 'ava'
import { isArray } from '../src/index'

test('primitive', t => {
    t.is(isArray([]), true)
})

test('Array Object', t => {
    t.is(isArray(new Array()), true)
})
