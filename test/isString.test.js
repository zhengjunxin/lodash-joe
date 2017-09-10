import test from 'ava'
import { isString } from '../src/index'

test('primitive', t => {
    t.is(isString(''), true)
})

test('object', t => {
    t.is(isString(new String()), true)
})
