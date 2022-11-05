// 7
function longest(s1, s2) {
    return (s1 + s2).split('').filter((x,i,arr) => arr.indexOf(x) == i).sort().join('')
}