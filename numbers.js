// Write a JavaScript function that accepts two numbers to generate an array between them. For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7

//create function that will generate the numbers 
function numberGenerator (num1, num2) {
    //declare variable that will carry the new array
    let newArray = [];
    //create a for loop that loops from the first number and ends at the last number that are called as arguments
    for(let i = num1; i <= num2; i++){
        newArray.push(i)
    }
    return newArray
}
console.log(numberGenerator(-1,5))