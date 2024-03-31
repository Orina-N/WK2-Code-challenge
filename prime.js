// You are tasked with writing a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array. How would you implement this function efficiently, ensuring that it accurately identifies prime numbers and returns them in the same order they appear in the input array? For example if you provide an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return an array [2, 3, 5, 7].

// declare function to filter out prime numbers
function  isPrime (anArray) {
    //declare array to hold prime numbers
    let primeArray = [];
    //loop through array
    for (let i = 1; i < anArray.length; i++){
      //declare variable to hold current number
      let currentNum = anArray[i];
      //declare variable to hold boolean
      let isPrime = true;
      //loop through numbers from 1 to current number
      for (let j = 2; j < currentNum; j++){
        //if current number is divisible by any number between 2 and itself, it is not prime
        if (currentNum % j === 0){
          isPrime = false;
        }
      }
      //if current number is prime, push to prime array
      if (isPrime){
        primeArray.push(currentNum);
      }
    }
    return primeArray;
  }
  console.log(isPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,]))