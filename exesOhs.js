// 7
function XO(str) {
    let xo = [0,0]
    str.split('').map(x => x.toLowerCase() === 'o' ? xo[0] += 1: 
                      x.toLowerCase() === 'x' ? xo[1] += 1: x)
    return xo[0] === xo[1]
}