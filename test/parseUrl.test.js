import test from 'ava'
import { parseUrl } from '../src/index'

test('parse url', t => {
    const url = 'http://www.baidu.com/a/b/c.html'
    const parsedUrl = {
        matchedUrl: 'http://www.baidu.com/a/b/c.html',
        protocol: 'http',
        host: 'www.baidu.com',
        path: '/a/b/c.html'
    }
    t.deepEqual(parseUrl(url), parsedUrl)
})
