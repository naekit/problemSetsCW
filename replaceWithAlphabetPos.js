// 6
function alphabetPosition(text) {
    return text.split('')
      .map((x,i) => x.toLowerCase() != x.toUpperCase() && x.toLowerCase().charCodeAt() - 96)
      .filter(x => x && x).join(' ')
}