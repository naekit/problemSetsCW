// 7
function maskify(cc) {
    return cc.split('').map((el, ind, arr) => ind > (arr.length - 5) ? el: '#').join('')
  }