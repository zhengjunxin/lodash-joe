import test from 'ava'
import { purgeObject } from '../src/index'

test('purge empty string, null and undefined', t => {
    const obj = {a: '', b: 1, c: undefined, d: null}

    t.deepEqual(purgeObject(obj), {
        b: 1,
    })
})

test('purge string', t => {
    const string = ''
    
    t.deepEqual(purgeObject(string), {})
})

test('purge array', t => {
    const arr = ['', 1, undefined, null]
    
    t.deepEqual(purgeObject(arr), {
        1: 1,
    })
})
