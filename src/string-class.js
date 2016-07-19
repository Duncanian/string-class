// Disabling eslint disallowing extension of native methods
/* eslint no-extend-native: ["error", { "exceptions": ["String"] }] */

String.prototype.hasVowels = function hasVowels() {
  const vowels = new RegExp('[aeiou]', 'i');
  return vowels.test(this);
};

String.prototype.toUpper = function toUpper() {
  const upperCase = new RegExp('[a-z]', 'g');
  const upperConverter = function upperConverter(letter) {
    return String.fromCharCode(letter.charCodeAt(0) - 32);
  };
  return this.replace(upperCase, upperConverter);
};

String.prototype.toLower = function toLower() {
  const lowerCase = new RegExp('[A-Z]', 'g');
  const lowerConverter = function lowerConverter(letter) {
    return String.fromCharCode(letter.charCodeAt(0) + 32);
  };
  return this.replace(lowerCase, lowerConverter);
};

String.prototype.ucFirst = function ucFirst() {
  return this[0].toUpper() + this.slice(1);
};

String.prototype.isQuestion = function isQuestion() {
  const questionMark = new RegExp(/\?$/, 'g');
  return questionMark.test(this);
};

String.prototype.words = function words() {
  const placeToSplit = new RegExp(/\W+/, 'g');
  return this.split(placeToSplit);
};

String.prototype.wordCount = function wordCount() {
  return this.words().length;
};

String.prototype.toCurrency = function toCurrency() {
  /*
    The regular expression matcher matches a digit only if it is followed
    by three other digits and a period (.).
  */

  const matcher = new RegExp(/(\d)(?=(\d{3})+\.)/, 'g');
  return parseFloat(this).toFixed(2).replace(matcher, '$1,');
};

String.prototype.fromCurrency = function fromCurrency() {
  const comma = new RegExp(/,/, 'g');
  return Number(this.replace(comma, ''));
};
