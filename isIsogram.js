// 7
function isIsogram(str){
    //...
    str = str.toLowerCase()
    return str  === str.split('').filter((x,i,arr) => arr.indexOf(x) === i).join('')
}