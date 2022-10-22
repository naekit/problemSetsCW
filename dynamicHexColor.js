// 6
const generateColor = function() {
    // show em the code!
    let hexString = ['#']
    let nums = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9']
    let letters = ['a', 'b', 'c', 'd', 'e', 'f']
    for(let i = 0; i < 7; i++){
      let randomLetter = Math.floor(Math.random() * 6)
      let randomNum = Math.floor(Math.random() * 11)
      let lowerUpper = Math.ceil(Math.random() * 2)
      let letterOrNum = Math.ceil(Math.random() * 2)
      if(letterOrNum === 1){
        if(lowerUpper === 1){
          hexString.push(letters[randomLetter])
        } else{
          hexString.push(letters[randomLetter].toUpperCase())
        }
      } else{
        hexString.push(nums[randomNum])
      }
    }
    return hexString.join('')                 
};