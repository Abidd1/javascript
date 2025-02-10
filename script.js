// Jaavascript start foem here

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {

  let isEvenFlag = false;

  if (numbers[i] % 2 === 0) {
    isEvenFlag = true;
  }

  if (isEvenFlag) {
    console.log(numbers[i] + 

" is even");
  } else {
    console.log(numbers[i] + " is odd");
  }
}