import test from 'ava'
import { SearchParams } from '../src/index'
import querystring from 'querystring'

test('stringify', t => {
    const obj = { foo: 'bar', baz: ['qux', 'quux'], corge: '', bar: {a: 1, b: 2}, o: 'e' }
    t.is(SearchParams.stringify(obj), querystring.stringify(obj))
})

test('append', t => {
    const qs = new SearchParams('a=1')
    qs.append('b', 2)
    t.is(qs.toString(), 'a=1&b=2')
})

test('delete', t => {
    const qs = new SearchParams('a=1&a=2')
    qs.delete('a')
    t.is(qs.toString(), 'a=2')
})

test('get', t => {
    const qs = new SearchParams('a=1&a=2')
    t.is(qs.get('a'), '1')
})

test('has', t => {
    const qs = new SearchParams('a=1')
    t.is(qs.has('a'), true)
})

test('don"t has', t => {
    const qs = new SearchParams('a=1')
    t.is(qs.has('b'), false)
})

test('keys', t => {
    const qs = new SearchParams('a=1&b=2')
    t.deepEqual(qs.keys(), ['a', 'b'])
})

test('set', t => {
    const qs = new SearchParams('a=1&b=2')
    t.is(qs.set('a', 3).toString(), 'a=3&b=2')
})

test('values', t => {
    const qs = new SearchParams('a=1&b=2')
    t.deepEqual(qs.values(), ['1', '2'])
})

test('sort', t => {
    const qs = new SearchParams('b=2&a=1')
    t.deepEqual(qs.sort().keys(), ['a', 'b'])
})
