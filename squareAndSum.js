// 8
function squareSum(numbers){
    return numbers.map(x => x ** 2).reduce((a,b) => a + b, 0)
}