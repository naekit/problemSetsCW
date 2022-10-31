// 6
function deleteNth(arr,n){
    // ...
    const dict = {}
    return arr.filter((a) => {
      dict[a] = (dict[a] || 0) + 1
      return dict[a] <= n
    })
}