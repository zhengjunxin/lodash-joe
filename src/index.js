export const sum = array => {
    let result

    if (array && array.length) {
        for (let i = 0; i < array.length; i++) {
            const current = array[i]
            if (current !== undefined) {
                result = result === undefined ? current : result + current
            }
        }
    }
    else {
        result = 0
    }
    return result
}

// 参考 underscore 的处理方法
// 先用全等比较能提高性能
export const isBoolean = boolean => boolean === true || boolean === false || Object.prototype.toString.call(boolean) === '[object Boolean]'

// array instanceof Array 在多全局变量会错误，因为他依赖于 window.Array，但不同 window 下的 window.Array 是不同的
// Array.isArray 或者 Object.prototype.toString 则可以解决多全局变量下的问题
// 参考：http://web.mit.edu/jwalden/www/isArray.html
export const isArray = Array.isArray || function(array) {
    return Object.prototype.toString.call(array) === '[object Array]'
}

export const nth = (array, n) => {
    let result = undefined
    if (array && array.length) {
        const index = ~~n
        result = array[index < 0 ? (array.length + index) : index]
    }
    return result
}

export const parseUrl = url => {
    // 注意是 (\w+) 才能把协议分成一组
    // (\w)+ 会只把一个字符分成一组
    const array = url.match(/(\w+):\/\/([\w.]+)(\/\S*)/)
    let result = null
    if (array) {
        result = {
            matchedUrl: array[0],
            protocol: array[1],
            host: array[2],
            path: array[3]
        }
    }
    return result
}
