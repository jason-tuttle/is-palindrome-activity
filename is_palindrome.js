function isPalindrome(text) {
  if (text !== text.split('').reverse().join('')) {
    return false;
  }
}

module.exports = isPalindrome;
