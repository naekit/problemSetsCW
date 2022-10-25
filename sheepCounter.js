// 8
var countSheep = function (num){
    //your code here
    let str = ""
    for(let i = 1; i <= num; i++){
      num ? str += `${i} sheep...`: 0
    }
    return str
}