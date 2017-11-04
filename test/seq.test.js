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
