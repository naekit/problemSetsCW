// 8
function positiveSum(arr) {
    let acc = 0
    for(let i = 0; i < arr.length; i++){
      arr[i] > 0 ? acc += arr[i]: 0
    }
    return acc
}