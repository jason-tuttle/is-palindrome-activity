function isPalindrome(text) {
  if (text !== text.split('').reverse().join('')) {
    return false;
  } else {
    return true;
  }
}

module.exports = isPalindrome;
