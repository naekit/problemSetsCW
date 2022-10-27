// 6
function findOdd(A) {
    //happy coding!
    const arrMap = A.reduce((obj,b) => {
      obj[b] = ++obj[b] || 1;
      return obj
    }, {})
    for(const key in arrMap){
      if(arrMap[key] % 2 === 1){
        return +key
      }
    }
}