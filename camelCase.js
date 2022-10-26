// 6

function toCamelCase(str){
    let mappedArr = str.split(/[^A-Za-z]/)
                      .map((x, i, list) => 
                        {
                          if(i==0){
                            return x[0]+x.slice(1)
                          } else {
                            return x[0].toUpperCase()+x.slice(1)
                        }})
    return str !== '' ? mappedArr.join(''):
      str
}