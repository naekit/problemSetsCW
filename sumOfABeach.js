// 7
function sumOfABeach(beach) {
    // your code here
    const arr = ['sand','water','fish','sun']
    return  arr.reduce((a,c) => a + (beach.toLowerCase().split(c).length - 1), 0)
}