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
export const isArray = Array.isArray || function (array) {
    return Object.prototype.toString.call(array) === '[object Array]'
}

export const isString = string => typeof string === 'string' || Object.prototype.toString.call(string) === '[object String]'

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

export function throttle(func, wait, options = {}) {
    let timeId, args
    let previous = 0

    return function () {
        args = arguments
        const now = Date.now()

        // 第一次调用，但 leading 被禁止，则在 wait 后执行
        if (!previous && options.leading === false) {
            previous = now
        }
        const remain = wait - (now - previous)

        if (remain <= 0) {
            previous = now
            func.apply(null, args)
        }
        else if (!timeId && options.trailing !== false) {
            timeId = setTimeout(function () {
                // 进入 !previous && options.leading === false 的条件
                previous = options.leading === false ? 0 : Date.now()
                timeId = null
                func.apply(null, args)
            }, remain)
        }
    }
}

export const debounce = (func, wait, immediate) => {
    let timeId, args
    return function () {
        args = arguments

        if (timeId) {
            clearTimeout(timeId)
        }

        timeId = setTimeout(function () {
            timeId = null
            func.apply(null, args)
        }, wait)
    }
}

export const trim = str => String(str).replace(/^\s+|\s+$/g, '')

export const formatTime = num => {
    let result = ''
    const type = typeof num
    if ((type === 'number' || type === 'string') && Number.isInteger(+num)) {
        result = num > 9 ? '' + num : '0' + num
    }
    return result
}

export const array2hash = (array, transformKey, transformValue = item => item) => {
    const result = {}
    if (array && array.length) {
        for (let i = 0; i < array.length; i++) {
            const item = array[i]
            const key = transformKey(item, i, array)
            result[key] = transformValue(item, i, array)
        }
    }
    return result
}

export const purgeObject = (object, fn = (key, value) => value != null && value !== '') => {
    const result = {}
    let key
    object = Object(object)

    for (key in object) {
        if (object.hasOwnProperty(key) && fn(key, object[key])) {
            result[key] = object[key]
        }
    }
    return result
}

export const seq = (array, data, index = 0, count = array.length) => {
    return array[index % array.length](data).catch(error => {
        return --count > 0 ? seq(array, data, index + 1, count) : Promise.reject(error)
    })
}

// step access table
// loop the table to find the which step the input is
/**
 * 
 * @param {Object} table A object which key for the step, and value for the data
 * @param {number} number step
 */
export const stepTable = (table, number) => {
    // init the default output
    const defaultOutput = undefined;
    // bailout if number isn't number type
    if (typeof number !== 'number') {
        return defaultOutput;
    }
    // gather all steps
    const steps = Object.keys(table);
    // loop the steps, and compare with the number
    for (let i = 0; i < steps.length; i++) {
        // if number less than the step, return the data
        if (number < steps[i]) {
            return table[steps[i]];
        }
    }
    // if can not find the step,return defaultOupout
    return defaultOutput;
}
