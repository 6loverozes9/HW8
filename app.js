// // 1. Переписать функцию sumTwoSmallestNumbers (из практического занятия). Данная функция должна принимать неограниченное кол-во аргументов и возвращать сумму двух наименьших чисел для заданного массива. Если передано меньше 2х аргументов - то должна вывестись ошибка (в консоль) и функция не должна продолжать выполнение.

// // Примеры вызова:

// // console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
// // console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
// // console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")

const sumTwoSmallestNumbersShort = (array) => {
  const sortedArray = array.sort((a, b) => a - b);

  if(array.length < 2){
       return 'Недостаточно элементов в массиве'
  }
  return sortedArray[0] + sortedArray[1];

};

console.log(sumTwoSmallestNumbersShort([19, 5, 42, 2, 77])); // 7
console.log(sumTwoSmallestNumbersShort([1, 3, 2])); // 3
console.log(sumTwoSmallestNumbersShort([1]));


// 2. Написать функцию createCalculator, чтобы ее можно было использовать таким образом:

// const calc = createCalculator(10);

// console.log(calc.sum(5)); /// 15
// console.log(calc.mult(10)); // 150
// console.log(calc.sub(40)); // 110
// console.log(calc.div(10)); // 11
// Для реализации необходимо использовать замыкание.

// Подсказка 1: функция может возвращать любой тип данных

// Подсказка 2: в значении ключа объекта может быть функция (как мы разбирали в примере с функция calc)

const createCalculator = (initialNumber) => {
  const calculator = {
    currentValue: initialNumber,
    sum: (number) => {
      calculator.currentValue += number;
      return calculator.currentValue;
    },
    mult: (number) => {
      calculator.currentValue *= number;
      return calculator.currentValue;
    },
    sub: (number) => {
      calculator.currentValue -= number;
      return calculator.currentValue;
    },
    div: (number) => {
      calculator.currentValue /= number;
      return calculator.currentValue;
    },
  };
  return calculator;
};

const calc = createCalculator(10);
console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11