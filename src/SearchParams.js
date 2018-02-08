class SearchParams {
    constructor(querystring = '') {
        this.qs = querystring.split('&').map(kv => {
            const pair = kv.split('=')
            return {
                key: pair[0],
                value: pair[1],
            }
        })
    }
    // append kv
    append(key, value) {
        this.qs.push({
            key,
            value,
        })
    }
    // remove kv
    delete(key) {
        const index = this.qs.findIndex(kv => kv.key === key)
        this.qs.splice(index, 1)
    }
    get(key) {
        const kv = this.qs.find(kv => kv.key === key)
        return kv ? kv.value : undefined
    }
    has(key) {
        return !!this.qs.find(kv => kv.key === key)
    }
    keys() {
        return this.qs.map(kv => kv.key)
    }
    set(key, value) {
        const kv = this.qs.find(kv => kv.key === key)
        if (kv) {
            kv.value = value
        }
        return this
    }
    values() {
        return this.qs.map(kv => kv.value)
    }
    // 没想到的接口
    // use for for of loop
    entries() {

    }
    // get will return the first match key, but getAll return all match key
    getAll() {

    }
    // sort by key in place
    sort(fn) {
        this.qs.sort((kv1, kv2) => kv1.key > kv2.key)
        return this
    }
    // return query string
    toString() {
        return this.qs.map(kv => [kv.key, kv.value].join('=')).join('&')
    }
}
SearchParams.stringify = function(obj) {
    const kvs = []
    Object.keys(obj).forEach(key => {
        const value = obj[key]
        if (Array.isArray(value)) {
            value.forEach(v => {
                kvs.push([key, v].join('='))
            })
        }
        else if (typeof value === 'object') {
            kvs.push([key, ''].join('='))
        }
        else {
            kvs.push([key, value].join('='))
        }
    })
    return kvs.join('&')
}

export default SearchParams
