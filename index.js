function isPalindrome(word) { 
  // Write your algorithm here
}
function isPalindrome(str) {
  // Step 1: Remove non-letter characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

  // Step 2: Initialize pointers
  let left = 0;
  let right = cleanStr.length - 1;

  // Step 3: Compare characters
  while (left < right) {
    // Step 4: If characters are not equal, it's not a palindrome
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }

    // Step 5: Move pointers
    left++;
    right--;
  }

  // Step 7: All characters have been compared and found to be equal, it's a palindrome
  return true;
}
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
