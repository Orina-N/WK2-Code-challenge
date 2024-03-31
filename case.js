// Write a function that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.


//Declare function that carries out case swap on the strings

function textConverter (string) {
    // declare a variable that will carry value of new string
    let newString = " ";
    for (let i = 0; i < string.length; i++){
     //This condition checks if character at index i in the string is in uppercase   
      if(string.charAt(i) === string.charAt(i).toUpperCase())
      //if the character is in uppercase it is then converted to lowercase and apppended to newString
      {newString += string.charAt(i).toLowerCase();
    }
    // This condition checks if character in index i is in lowercase 
    else if(string.charAt(i) === string.charAt(i).toLowerCase())
    //if the character is in lowercase it is converted to uppercase and appended to newString 
    {
        newString += string.charAt(i).toUpperCase();
      }
      //it deals with characters which can neither be in uppercase nor lowercase 
      else{
        newString += string.charAt(i);
      }
    }

    return newString;
    }
    //the variable carrying the string
  let text = "The Quick Brown Fox";
  //calling the function with the variable carrying the string as its argument
  console.log(textConverter(text));