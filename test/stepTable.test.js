import test from 'ava'
import { stepTable } from '../src/index'

test('simple step table', t => {
    const table = {
        0: 'c',
        50: 'b',
        100: 'a',
    }
    t.is(stepTable(table, -1), 'c')
    t.is(stepTable(table, 0), 'b')
    t.is(stepTable(table, 1), 'b')
    t.is(stepTable(table, 51), 'a')
    t.is(stepTable(table, 101), undefined)
})

