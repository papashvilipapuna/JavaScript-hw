// 1
let userFirstName = "პაპუნა";
console.log(`სალამი ${userFirstName}`);

// 2
let userBalance = 20;
let cartTotal = 40;
let x = cartTotal - userBalance;

if (userBalance >= cartTotal) {
  console.log("გადახდა წარმატებით შესრულდა");
} else {
  console.log(
    `თქვენ არ გაქვთ საკმარისი თანხა, გთხოვთ დამატებით ჩარიცხოთ ${x} ლარი ოპერაციის დასასრულებლად`
  );
}

// 3
let maxScore = 100;
let barrier = 70;
let studentScore = 90;

if (studentScore >= barrier) {
  console.log(
    `გილოცავთ, თქვენ გადალახეთ ${barrier} ქულიანი ბარიერი ${studentScore}/${maxScore} ქულით`
  );
} else {
  console.log(
    `ვწუხვარ, თქვენ ვერ გადალახეთ ${barrier} ქულიანი ბარიერი ${studentScore}/${maxScore} ქულით`
  );
}

// 4
let shippingIsPossible = false;
let text = [
  `თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდომი არის`,
  `თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდომი არ არის`,
];
if (shippingIsPossible) {
  console.log(text[0]);
} else {
  console.log(text[1]);
}

// 5
let userIsLoggedIn = true;
userFirstName = `პაპუანა`;
let userIsFemale = false;

if (userIsFemale) {
  if (userIsLoggedIn) {
    console.log(`სალამი ქალბატონო ${userFirstName}`);
  } else {
    console.log(`დროებით ქალბატონო ${userFirstName}`);
  }
} else {
  if (userIsLoggedIn) {
    console.log(`სალამი ბატონო ${userFirstName}`);
  } else {
    console.log(`დროებით ბატონო ${userFirstName}`);
  }
}

// 6
let userQuestions = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9];
if (userQuestions.length >= 25) {
    console.log("შემდეგი კითხვის დასმას შეძლებთ 3 საათში");
}

// 7
let userWeights = [60, 65, 70];
let goal = 50;
x = userWeights[userWeights,length - 1] - goal;
console.log(`შედეგის მიღწევამდე დაგრჩა ${x} კილო`);

// 8
let gigosTestResults = [50, 60, 58];
let dif = gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0];
if (0 < dif && dif < 10) {
    console.log(`რავიცი, ნიჭიერია მარა ზარმაცი`);
} else if (dif >= 10) {
    console.log(`კარგი შვილი გყავთ ქალბატონო, ნუ ნერვიულობთ`);
} else if (dif <= 0) {
    console.log(`უხ გიგო გიგოოო`);
}

// 9
gigosTestResults = [50, 60, 55]
dif = gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0];
if (5 > dif && dif >= 2) {
  console.log(`ნიჭიერი მაგრამ ზარმაცი`);
} else if (dif >= 5) {
  console.log(`კარგი ბავშვია`);
} else {
  console.log(`არაფერს არ მიკეთბს`);
}

// 10
let gigosResults = [20, 60, 80, 90];
if (gigosResults[0] >= 25) {
  console.log(`ჩააბარა`);
} else {
  console.log(`ვერ ჩააბარა`);
} if (gigosResults[1] >= 25) {
  console.log(`ჩააბარა`);
} else {
  console.log(`ვერ ჩააბარა`);
} if (gigosResults[2] >= 25) {
  console.log(`ჩააბარა`);
} else {
  console.log(`ვერ ჩააბარა`);
} if (gigosResults[3] >= 25) {
  console.log(`ჩააბარა`);
} else {
  console.log(`ვერ ჩააბარა`);
}