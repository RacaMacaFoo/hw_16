const phrases = [
  "Скільки буде 2+2?",
  "Сонце встає на сході?",
  "Скільки буде 5 / 0?",
  "Якого кольору небо?",
  "Яка правильна відповідь на головне питання життя, всесвіту та всього такого.",
];
const help = ["4", "так", "0", "синє", "42"];
let ball = 0;

for (let i = 0; i < phrases.length; i++) {
  let answer = prompt(phrases[i], help[i]);
  answer === help[i] ? (ball += 10) : (ball += 0);
}

alert(`Your result is - ${ball} balls`);
