// 7
function highAndLow(numbers){
    // ...
    let arr = numbers.split(' ').map(x => +x)
    return `${Math.max(...arr).toString()} ${Math.min(...arr).toString()}`
}