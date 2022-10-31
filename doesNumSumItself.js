function narcissistic(value) {
    return value === ('' + value).split('').reduce((a,b,_,arr) => a + ((+b) ** arr.length), 0)
}  