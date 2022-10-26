// 7

function howManyGifts(maxBudget, gifts){
  let rem = maxBudget
  let giftNum = []
  let sorted = gifts.sort((a,b) => a - b)
  for(let i = 0; i <= sorted.length; i++){
    if(rem <= 0){
      return giftNum.length === 0 ? giftNum.length: 
        rem === NaN ? giftNum.length - 2:
          rem === 0 ? giftNum.length:
            giftNum.length - 1
    } else if(rem > 0){
      if(Number.isFinite(sorted[i])){
        rem = rem - sorted[i]
        giftNum.push(sorted[i])
      }
    }
  }
  return giftNum.length
}

// alternative
// function howManyGifts(m, g){
//   var i = 0;
//   g = g.sort(function(a, b){return a - b});
//   for(; m - g[i] >= 0; i++){
//     m = m - g[i];
//   }
//   return i;
// }