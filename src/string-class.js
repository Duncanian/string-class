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

String.prototype.ucFirst = function ucFirst () {
  return this[0].toUpper() + this.slice(1);
};

String.prototype.isQuestion = function isQuestion () {
  var questionMark = new RegExp(/\?$/, 'g');
  return questionMark.test(this);
};

String.prototype.words = function words () {
  var placeToSplit = new RegExp(/\W+/, 'g');
  return this.split(placeToSplit);
};

String.prototype.wordCount = function wordCount () {
  return this.words().length;
};

String.prototype.toCurrency = function toCurrency () {
  /*
    The regular expression matcher matches a digit only if it is followed
    by three other digits and a period (.).
  */

  var matcher = new RegExp(/(\d)(?=(\d{3})+\.)/, 'g');
  return parseFloat(this).toFixed(2).replace(matcher, '$1,');
};

String.prototype.fromCurrency = function fromCurrency () {
  var comma = new RegExp(/,/, 'g');
  return Number(this.replace(comma, ''));
};
