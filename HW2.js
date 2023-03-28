// 1
let userIsLoggedIn = true;
let videoIsCommentable = true;
const userCanComment = userIsLoggedIn && videoIsCommentable;
console.log(userCanComment)

// 2
userIsLoggedIn = "true";
let userIsBlocked = "false";
let userCanPost = userIsLoggedIn && !userIsBlocked; 
console.log(userCanPost)


// 3
let balance = 45;
let userCartTotal = 50;
let paymentComplete = balance >= userCartTotal;
console.log(paymentComplete)

// 4
let userIsAdmin = true;
let userIsModerator = false;
let userIsCommentAuthor = false;

let userCanDelete = userIsAdmin || userIsModerator || userIsCommentAuthor;
console.log(userCanDelete)

// 5
let presidentKey = true;
let primeMinisterKey = true;
let generalOfArmiesKey = true;
let masterKey = false;
let bombWillLaunch = presidentKey && primeMinisterKey && generalOfArmiesKey && masterKey;
console.log(bombWillLaunch)

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