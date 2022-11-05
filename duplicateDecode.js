function duplicateEncode(word){
    word = word.toLowerCase()
    let wordArr = word.split('').filter((x,i,arr) => arr.indexOf(x) != i)
    return word.split('').map((x,i,arr) => wordArr.includes(x) ? `)`: `(`).join('')
  }  