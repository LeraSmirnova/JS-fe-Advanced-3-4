let userInput;
const numbers = [];
let total = 0;

for (let i = 0; i < Infinity; i++) {
    userInput = prompt('введите число');
    if (userInput === null) break;
    numbers.push(+userInput);
    total = total + parseInt(userInput);
}
console.log(numbers);
alert(`Сумма чисел равна ${total}`);




