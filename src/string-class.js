// Disabling eslint disallowing extension of native methods
/* eslint no-extend-native: ["error", { "exceptions": ["String"] }] */

String.prototype.hasVowels = function hasVowels() {
  const vowels = new RegExp('[aeiou]', 'i');
  return vowels.test(this);
};

String.prototype.toUpper = function toUpper() {
  const lowerCase = new RegExp('[a-z]', 'g');
  const upperConverter = function upperConverter(letter) {
    return String.fromCharCode(letter.charCodeAt() - 32);
  };
  return this.replace(lowerCase, upperConverter);
};

String.prototype.toLower = function toLower() {
  const upperCase = new RegExp('[A-Z]', 'g');
  const lowerConverter = function lowerConverter(letter) {
    return String.fromCharCode(letter.charCodeAt() + 32);
  };
  return this.replace(upperCase, lowerConverter);
};

String.prototype.ucFirst = function ucFirst() {
  return this[0].toUpper() + this.slice(1);
};

String.prototype.isQuestion = function isQuestion() {
  const questionMark = new RegExp(/\?$/, 'g');
  return questionMark.test(this);
};

String.prototype.words = function words() {
  // replace any non-word character at the beginning/end of the string
  const newString = this.trim().replace((new RegExp(/^\W|\W$/)), '');

  // split the new string at any non-word character excluding the apostrophe
  return newString.split(new RegExp(/[^A-Za-z0-9_']+/, 'g'));
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
  return Number(this.replace(new RegExp(/,/, 'g'), ''));
};
