// 7

function howManyGifts(maxBudget, gifts){
    // your code goes here
    let rem = maxBudget
    let giftNum = 0
    for(let i = 0; i < gifts.length; i++){
      if(rem > 0){
        rem = rem - gifts[i]
        giftNum++
      } else {
        return giftNum
      }
    }
}
