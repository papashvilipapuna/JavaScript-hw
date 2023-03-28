// 6
const userPinCode = 708090;
const currentPinCode = 708090;
const newPinCode = 908070;
const retypeNewPinCode = 908070;
const pinChangeComplete = userPinCode === currentPinCode && newPinCode === retypeNewPinCode;
console.log(pinChangeComplete)

// 7
let health = 90;
let lives = 2;
const gameOver = health === 0 && lives === 0;
console.log(gameOver)

// 8
let capsuleCount = 5;
let capsulePrice = 2;

let userBalance = 50;
let creditCardStatus = capsuleCount * capsulePrice <= userBalance;

paymentComplete = creditCardStatus;
console.log(paymentComplete)

// 9
let availableRooms = 30;
let roomPrice = 150;
let discount = 30/100;

userBalance = 150;
let userHasDiscount = false;
let userRoomCount = 1;

if (userHasDiscount) {
    paymentComplete = userBalance >= (roomPrice * discount) * userRoomCount;
} else {
    paymentComplete = userBalance >= roomPrice * userRoomCount;
}
console.log(paymentComplete)