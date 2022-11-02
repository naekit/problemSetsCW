// 7
function printerError(s) {
    // your code
  let count = [0,0]
  s.split('').map(x => x > 'm' ? count[0] += 1: count[1] = s.length)
  return count.join('/')
}