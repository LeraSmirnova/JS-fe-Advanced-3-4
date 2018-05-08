//--------------- TASK #2 ---------------------
/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/

// function findLongestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     str.forEach(function(str) {
//         if (longest < str.length) {
//             longest = str.length;
//             word = str;
//         }
//     });
//     return word;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // вернет 'jumped'
  
// console.log(findLongestWord("Google do a roll")); // вернет 'Google'
  
// console.log(findLongestWord("May the force be with you")); // вернет 'force'


//---------------- TASK #4----------------------

/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
// const findLargestNumber = function(numbers){
//     let largestNum = numbers[0];
    
//     for(i=1, max=numbers.length; i<max; i+=1){
//         const elem = numbers[i];
//         if(largestNum<elem){
//             largestNum=elem;
//         }
//     }
//     return largestNum;
// }
// console.log(
//     findLargestNumber([1, 2, 3])
//   ); // вернет 3
  
//   console.log(
//     findLargestNumber([27, 12, 18, 5])
//   ); // вернет 27
  
//   console.log(
//     findLargestNumber([31, 128, 14, 74])
//   );



//---------------- TASK #5----------------------

/*  
  Есть массив уникальных чисел uniqNumbers.
  
  Написать функцию, addUniqNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqNumbers только уникальные,
  а повторяющиеся игнорирует.
*/