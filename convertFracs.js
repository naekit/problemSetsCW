// 5 kyu

function convertFrac(lst){
    //Your code here
      function getLcd(lst){
      let denom = lst.map(x => x[1])
      let denomProduct = denom.reduce((a,b) => a * b, 1)
      if(denomProduct === 1){
        return denomProduct
      }
      for(let lcd = 2; lcd <= denomProduct; lcd ++){
          if (denom.every(d => lcd % d === 0)) return lcd;
      }
      }
      let lcd = getLcd(lst)
      let newLst = lst.map(x => `(${x[0]*(lcd/x[1])},${lcd})`).join('')
      return newLst
}