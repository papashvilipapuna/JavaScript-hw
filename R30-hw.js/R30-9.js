// 9
let x = -5;
let isPrime = x === 2 ? true : false;

for (let i = 2; i < ((x < 0) ? (x * -1) : x); i++) {
  if (x % i === 0) {
    isPrime = false;
    break;
  } else {
    isPrime = true;
  }
}

console.log("isPrime", isPrime);