String.prototype.hasVowels = function hasVowels () {
  var vowels = new RegExp('[aeiou]', 'i');
  return vowels.test(this);
};
