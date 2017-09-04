import test from 'ava'
import { nth } from '../src/index'

test('zero index', t => {
    const arr = [1, 2, 3]
    t.is(nth(arr, 0), 1)
})

test('positive index', t => {
    const arr = [1, 2, 3]
    t.is(nth(arr, 1), 2)
})

test('negative index', t => {
    const arr = [1, 2, 3]
    t.is(nth(arr, -1), 3)
})

test('string zero index', t => {
    const arr = [1, 2, 3]
    t.is(nth(arr, '0'), 1)
})

test('string positive index', t => {
    const arr = [1, 2, 3]
    t.is(nth(arr, '1'), 2)
})

test('string negative index', t => {
    const arr = [1, 2, 3]
    t.is(nth(arr, '-1'), 3)
})
