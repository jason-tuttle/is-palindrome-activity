function isPalindrome(text) {
  text = text.toLowerCase();
  text = text.replace(/\ /g,'');
  if (text !== text.split('').reverse().join('')) {
    return false;
  } else {
    return true;
  }
}

module.exports = isPalindrome;
