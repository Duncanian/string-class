String.prototype.hasVowels = function hasVowels () {
  var vowels = new RegExp('[aeiou]', 'i');
  return vowels.test(this);
};

String.prototype.toUpper = function toUpper () {
  var upperCase = new RegExp('[a-z]', 'g');
  var upperConverter = function upperConverter (letter) {
    return String.fromCharCode(letter.charCodeAt(0) - 32);
  }
  return this.replace(upperCase, upperConverter);
};

String.prototype.toLower = function toLower () {
  var lowerCase = new RegExp('[A-Z]', 'g');
  var lowerConverter = function lowerConverter (letter) {
    return String.fromCharCode(letter.charCodeAt(0) + 32);
  }
  return this.replace(lowerCase, lowerConverter);
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
