function isPalindrome(text) {
  text = text.toLowerCase();
  if (text !== text.split('').reverse().join('')) {
    return false;
  } else {
    return true;
  }
}

module.exports = isPalindrome;
