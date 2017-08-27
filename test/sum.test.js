import test from 'ava'
import { sum } from '../src/index'

test('return sum of an array of numbers', t => {
    t.is(sum([6, 4, 2]), 12)
})

test('return 0 when passing empty array', t => {
    t.is(sum([]), 0)
})

test('skip undefined values', t => {
    t.is(sum([1, undefined]), 1)
})

test('should not skip NaN values', t => {
    t.is(sum([1, NaN]), NaN)
})

test('should not coerce values to numbers', t => {
    t.is(sum(['1', '2']), '12')
})