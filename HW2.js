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