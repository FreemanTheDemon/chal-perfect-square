const perfectSquare = (num) => {
    // check if float n % 1 === 0;
    square = Math.sqrt(num);
    if (square % 1 !== 0) {
        return -1;
    } else {
        return (square + 1) * (square + 1);
    }
}

console.log(perfectSquare(9)); // should return 16 (3x3=9, 4x4=16)

console.log(perfectSquare(289)); // should return 324 (17x17=289 18x18=324)

console.log(perfectSquare(3000)); // should return -1 (sq root of 3000 is 54.77)