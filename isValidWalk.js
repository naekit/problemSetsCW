// 6
function isValidWalk(walk) {
    //insert brilliant code here
    let ns = 0, we = 0
    if(walk.length === 10){
      for(let block of walk){
      block === 'n' ? ns += 1:
        block === 's' ? ns -= 1:
          block === 'w' ? we += 1:
            we -= 1
      }
    } else {return false}
    return ns === 0 && we === 0
}