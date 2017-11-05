import test from 'ava'
import { seq } from '../src/index'

function fail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('fail')
        }, 10)
    })
}

function success() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('success')
        }, 10)
    })
}


test.cb('get the first success as result', t => {
    seq([fail, success])
        .then(res => {
            t.is(res, 'success')
            t.end()
        })
})

test.cb('if all fail, get the last fail as result', t => {
    seq([fail, fail])
        .catch(err => {
            t.is(err, 'fail')
            t.end()
        })
})

test.cb('start with given index', t => {
    const result = []
    const one = () => new Promise((resolve, reject) => setTimeout(() => resolve('one'), 10))
    const two = () => new Promise((resolve, reject) => setTimeout(() => {
        result.push('two')
        return resolve('two')
    }, 10))
    seq([one, two], null, 1)
        .then(res => {
            t.is(res, 'two')
            t.deepEqual(result, ['two'])
            t.end()
        })
})

test.cb('loop all array', t => {
    const result = []
    const one = () => new Promise((resolve, reject) => setTimeout(() => {
        result.push('one')
        return reject('one')
    }, 10))
    const two = () => new Promise((resolve, reject) => setTimeout(() => {
        result.push('two')
        return reject('two')
    }, 10))
    const three = () => new Promise((resolve, reject) => setTimeout(() => {
        result.push('three')
        return reject('three')
    }, 10))

    seq([one, two, three], null, 2)
        .catch(err => {
            t.is(err, 'two')
            t.deepEqual(result, ['three', 'one', 'two'])
            t.end()
        })
})

test.cb('get data as parameter', t => {
    const result = []
    const one = data => new Promise((resolve, reject) => setTimeout(() => {
        data.one = 1
        result.push(data)
        return reject('one')
    }, 10))
    const two = data => new Promise((resolve, reject) => setTimeout(() => {
        data.two = 2
        result.push(data)
        return resolve('two')
    }, 10))

    seq([one, two], {})
        .then(res => {
            t.is(res, 'two')
            t.deepEqual(result, [{one: 1, two: 2}, {one: 1, two: 2}])
            t.end()
        })
})
