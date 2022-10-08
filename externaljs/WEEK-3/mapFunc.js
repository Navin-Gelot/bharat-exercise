// const myFunction = () => {};

//[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
const sqrtOnPow = (elements) => {
  elements.forEach((element) => {
    console.log(Math.sqrt(element));
  });
};

const generatePower = (elements) => {
  const powArray = new Array();
  for (let index = 0; index < elements.length; index++) {
    powArray[index] = Math.pow(elements[index], 2);
  }
  return powArray;

  // const sumArray = elements.map((current, index) => {
  //   const before = elements[index - 1];
  //   const after = elements[index + 1];
  //   let sum = 0;
  //   if (before === undefined) {
  //     sum = current + after;
  //   } else if (after === undefined) {
  //     sum = before + current;
  //   } else {
  //     sum = before + after + current;
  //   }
  //   return sum;
  // });
};

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//[3, 6, 9, 12...]
const powerArray = generatePower(myArray);
sqrtOnPow(powerArray);
