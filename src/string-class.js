String.prototype.hasVowels = function hasVowels () {
  var vowels = new RegExp('[aeiou]', 'i');
  return vowels.test(this);
};

String.prototype.toUpper = function toUpper () {
  var upperCase = new RegExp('[a-z]', 'g');
  var converter = function converter (letter) {
    return String.fromCharCode(letter.charCodeAt(0) - 32);
  }
  return this.replace(upperCase, converter);
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

String.prototype.fromCurrency = function fromCurrency () {
  return Number(this.replace(/,/, ''));
};
