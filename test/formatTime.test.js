import test from 'ava'
import { formatTime } from '../src/index'

test('format number less than ten', t => {
    t.is(formatTime(9), '09')
})

test('format number greater than ten', t => {
    t.is(formatTime(10), '10')
})

test('format Nan', t => {
    t.is(formatTime(NaN), '')
})

test('format string less than ten', t => {
    t.is(formatTime('9'), '09')
})

test('format string greater than ten', t => {
    t.is(formatTime('10'), '10')
})

test('format undefined', t => {
    t.is(formatTime(undefined), '')
})

test('format null', t => {
    t.is(formatTime(null), '')
})

test('format object', t => {
    t.is(formatTime({}), '')
})
