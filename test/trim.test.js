import test from 'ava'
import { trim } from '../src/index'

test('trim left', t => {
    t.is(trim('   joe'), 'joe')
})

test('trim right', t => {
    t.is(trim('joe  '), 'joe')
})

test('trim left and right', t => {
    t.is(trim('  joe  '), 'joe')
})

test('do not trim space in between', t => {
    t.is(trim('  j o e  '), 'j o e')
})

test('trim number', t => {
    t.is(trim(1), '1')
})

test('trim boolean', t => {
    t.is(trim(true), 'true')
})

test('trim object', t => {
    t.is(trim({}), '[object Object]')
})

test('trim undefined', t => {
    t.is(trim(undefined), 'undefined')
})

test('trim null', t => {
    t.is(trim(null), 'null')
})
