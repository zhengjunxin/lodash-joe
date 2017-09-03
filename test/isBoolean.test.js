import test from 'ava'
import { isBoolean } from '../src/index'

test('true', t => {
    t.is(isBoolean(true), true)
})

test('false', t => {
    t.is(isBoolean(false), true)
})

test('Boolean Object', t => {
    t.is(isBoolean(new Boolean()), true)
})
