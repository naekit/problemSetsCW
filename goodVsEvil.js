// 6
function goodVsEvil(good, evil){
    let goodArr = good.split(' ')
    let badArr = evil.split(' ')
    let scoreG = 0
    let scoreB = 0
    for(let i = 0; i < goodArr.length; i++){
      switch(i){
          case 0:
           scoreG = scoreG + +goodArr[i] * 1
           break;
          case 1:
            scoreG = scoreG + +goodArr[i] * 2
            break;
          case 2:
            scoreG = scoreG + +goodArr[i] * 3
            break;
          case 3:
            scoreG = scoreG + +goodArr[i] * 3
            break;
          case 4:
            scoreG = scoreG + +goodArr[i] * 4
            break;
          case 5:
            scoreG = scoreG + +goodArr[i] * 10
            break;
      }
    }
    for(let i = 0; i < badArr.length; i++){
      switch(i){
          case 0:
           scoreB = scoreB + +badArr[i] * 1
           break;
          case 1:
            scoreB = scoreB + +badArr[i] * 2
            break;
          case 2:
            scoreB = scoreB + +badArr[i] * 2
            break;
          case 3:
            scoreB = scoreB + +badArr[i] * 2
            break;
          case 4:
            scoreB = scoreB + +badArr[i] * 3
            break;
          case 5:
            scoreB = scoreB + +badArr[i] * 5
            break;
          case 6:
            scoreB = scoreB + +badArr[i] * 10
            break;
      }
    }
    return scoreG > scoreB ? 'Battle Result: Good triumphs over Evil':
      scoreB > scoreG ? 'Battle Result: Evil eradicates all trace of Good':
        'Battle Result: No victor on this battle field'
  }
  