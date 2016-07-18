String.prototype.hasVowels = function hasVowels () {
  var vowels = new RegExp('[aeiou]', 'i');
  return vowels.test(this);
};

String.prototype.isQuestion = function isQuestion () {
  var questionMark = new RegExp(/\?$/);
  return questionMark.test(this);
};
