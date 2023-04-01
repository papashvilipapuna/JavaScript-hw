// 1
console.log("სალამი გენაცვალე")

let userMessages = 5;
newMessages = userMessages > 0;

if (newMessages) {
    console.log("შენ გაქვს რამდენიმე წაუკითხავი მესიჯი")
}

// 2
let userBalance = 56;
let cartTotal = 45;
if (userBalance >= cartTotal) {
    console.log("გადახდა წარმატებით შესრულდა");
} else {
    console.log("თქვენ არ გაქვთ საკმარისი თანხა");
}

// 3
let testScore = 98;
if (testScore >= 95) {
    console.log("გილოცავ შენ მოხვდი ნოვატორში")
} else if (testScore >= 70) {
    console.log("გილოცავ კემბრიჯში მოხვდი")
} else {
    console.log("გეპეიში გიწევს")
}

// 4
let adminSale = 50 / 100;
let frequentClientSale = 30 / 100;
let studentSale = 40/ 100;
userBalance = 50;
cartTotal = 45;
let userIsAdMIN = true;
let userIsFrequentClient = false;
let userIsStudent = false;

if (userIsAdMIN && userBalance >= cartTotal - cartTotal * adminSale) {
    console.log("გადახდა წარმატებით შესრულდა");
} else if (userIsFrequentClient && userBalance >= cartTotal - cartTotal * frequentClientSale ) {
    console.log("გადახდა წარმატებით შესრულდა");
} else if (userIsStudent && userBalance >= cartTotal - cartTotal * studentSale) {
    console.log("გადახდა წარმატებით შასრულდა");
} else {
    console.log("თქვენ არ გაქვთ საკმარისი თანხა");
}

// 5
let fuel = 150;
let igoetamdeFuel = 10;
let goramdeFuel = 20;
let xashuramdeFuel = 30;
let quatisamdeFuel = 50;
let batumamdeFuel = 80;

if (igoetamdeFuel <= fuel) {
    console.log("იგოეთმდე თუ ჩახვალ");
} if (fuel >= goramdeFuel) {
    console.log("გორამდე გაგიქაჩავს");
} if (fuel >= xashuramdeFuel) {
    console.log("ჰა ხაშურამდეც გაგიქაჩავს");
} if (fuel >= quatisamdeFuel) {
    console.log("ქუთაისამდე გეყოფა");
} if (fuel >= batumamdeFuel) {
    console.log("ბათუმამდეც გეყოფა");
}

// 6
let batumidanBackFuel = fuel - batumamdeFuel;
if (batumamdeBackFuel >= )