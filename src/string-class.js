String.prototype.hasVowels = function hasVowels () {
  var vowels = new RegExp('[aeiou]', 'i');
  return vowels.test(this);
};

String.prototype.isQuestion = function isQuestion () {
  var questionMark = new RegExp(/\?$/);
  return questionMark.test(this);
};

String.prototype.words = function words () {
  var placeToSplit = new RegExp(/\W+/);
  return this.split(placeToSplit);
};

String.prototype.wordCount = function wordCount () {
  return this.words().length;
};
