const assert = require("assert");
const isPalindrome = require("../is_palindrome");

describe("isPalindrome", function () {
  it("can detect that something isn't a palindrome", function () {
    assert(!isPalindrome("programming"));
    assert(!isPalindrome("javascript"));
  });

  it("can detect one-word lowercased palindromes", function () {
    assert(isPalindrome("level"));
    assert(isPalindrome("seveneves"));
    assert(isPalindrome("mum"));
  });

  it("can detect one-word capitalized palindromes", function () {
    assert(isPalindrome("Racecar"));
    assert(isPalindrome("Seveneves"));
    assert(isPalindrome("Level"));
  });

  it("can detect multi-word lowercased palindromes", function () {
    assert(isPalindrome("stunt nuts"));
    // TODO add some more examples
  });

  it("can detect multi-word multi-cased palindromes", function () {
    assert(isPalindrome("Race Car"));
    // TODO add some more examples
  });

  it("can detect palindromes with commas", function () {
    assert(isPalindrome("Red rum, sir, is murder"))
    // TODO add some more examples
  });

  it("can detect palindromes with periods", function () {
    // TODO write tests
  });

  it("can detect palindromes with exclamation marks", function () {
    // TODO write tests
  });

  it("can detect palindromes with dashes", function () {
    // TODO write tests
  });

  it("can detect palindromes with question marks", function () {
    // TODO write tests
  });
});
