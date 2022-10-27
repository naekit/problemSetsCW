// 7
const findNextSquare = (sq) => Math.sqrt(sq) % 1 === 0 ? (Math.sqrt(sq)+1) * (Math.sqrt(sq)+1) : -1;