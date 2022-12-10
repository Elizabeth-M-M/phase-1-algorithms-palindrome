
function isPalindrome(word) {
  let new1 =[];
  let new2 =[];
  let z;
  let y;
  let midNumberIndex = Math.floor(word.length/2)
  let x = word.split('')

  if(word.length % 2 == 0){
    for(char in x){
    if(char<midNumberIndex){
      new1.push(x[char])
      y = new1.join('');
    }else{
      new2.unshift(x[char])
      z = new2.join('');
    }
  }
  }else{
    for(char in x){
    if(char<midNumberIndex){
      new1.push(x[char])
      y = new1.join('');
    }else if(char>midNumberIndex){
      new2.unshift(x[char])
      z = new2.join('');
    }
  }
  }
  return y===z;
}
isPalindrome("abba")

/*
initialize two empty arrays and two variables;

find mid number index and assign midNumberIndex
split the word into an array and assign x;

depending on if word is even or odd, loop over the split word(x);
if element is less than midNumberIndex, push into one empty array and join while assigning a variable(y);
if element is equal or more than midNumberIndex(depending), unshift into the other empty array and join while assigning a variable(z);

return y === z;

*/

/*
A palindrome can have odd or even numbers in length and repeat each other forward and backward from the mid.
My solution aims to split the word into two and turn one side of the split to reverse and compare the two split ends using strict equality operator
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
