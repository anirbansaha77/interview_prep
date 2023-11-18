

// Leetcode accepted solution

 const hashPairs = {
     "(": ")",
     "{": "}",
     "[": "]",
 };
 console.log("Paranthesis matching");
var isValid = function(str) {
    const length = str.length;
    // if string has odd number of chars its invalid
    if(str.length%2 === 1)
        return false;
    // if string starts with closed bracket invalid

    if (str[0] === ']' || str[0] === '}' || str[0] === ')')
        return false;

    // if string ends with closed brackets then its invalid
    if (str[length-1] === '[' || str[length-1] === '{' || str[length-1] === '(')
        return false;
    const stack = [];
    // Loop through each char
    for(let i=0; i< length; i++) {
      // take the first character
      if(str[i] === '(' || str[i] === '{' || str[i] === '[') {
          // if its is open 
        // push it in the stack
        stack.push(str[i]);
      } else if (hashPairs[stack.pop()] !== str[i]) {
        // else if it is closed we need to check if it matches with the corresponding open bracket
        // of the last entered character in the stack
        // if it does not match string is invalid
          return false;
      }
    }

 // once loop completes and stack is empty then the string is valid
return stack.length === 0;
}

export default isValid;