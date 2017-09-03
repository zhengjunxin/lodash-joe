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
