// 7
function sumTwoSmallestNumbers(numbers) {  
    let min1 = Math.min(...numbers)
    numbers = numbers.filter(n => n !== min1)
    return min1 + Math.min(...numbers)
}