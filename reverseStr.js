// 8
function solution(str){
    return str.split('').map((x,i,a) => x = a[a.length - 1 - i]).join('')
}