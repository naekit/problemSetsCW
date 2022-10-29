// 6
function findOutlier(integers){
    let odd = 0, even = 0, n1, n2;
    for(let n of integers){
      if(n%2 === 0){
        even += 1
        n1 = n
      } else {
        odd += 1 
        n2 = n
      }      
    }
    return odd > even ? n1: n2
}