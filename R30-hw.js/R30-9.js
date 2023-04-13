// 9
let number = 15;

if (number > 2) {
  for (let i = 2; i < number; i++) {
    if (!(number % i === 0)) {
      console.log(`მარტივი რიცხვია`);
    } else {
      console.log(`არ არის მარტივი რიცხვი`);
    }
    break;
  }
}

// იმ ვარიანტზეც გავწერე ვინმე 2ზე დაბალ რიცხვს თუ გამოიყენებს

// else if (number == 1) {
//     console.log(`არ არის მარტივი რიცხვი`);
// } else if (number == 2) {
//     console.log(`მარტივი რიცხვია`);
// } else {
//     console.log(`მინუს რიცხვებს ნუ წერ`);
// }
