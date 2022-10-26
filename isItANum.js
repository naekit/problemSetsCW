// 7

function isItANum(str) {
    // your code here;
        let numStr = []
        let strNum = str.split('').map(x => x !== " " ? +x: NaN)
        for(let i = 0; i < strNum.length; i++){
          strNum[i] >= 0 && strNum[i] !== NaN ? numStr.push(strNum[i]): 0
        }
        return numStr.length === 11 && numStr[0] === 0 ? numStr.join(''):"Not a phone number"
}