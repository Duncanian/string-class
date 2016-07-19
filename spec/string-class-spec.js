require('../src/string-class.js');

describe('String Class Extension Tests', function () {

  // hasVowels() tests
  describe('hasVowels() Tests', function () {
    it('returns a boolean value', function () {
      expect(typeof ' '.hasVowels()).toBe('boolean');
    });

    it('returns true if string contains vowels', function () {
      expect('has vowels'.hasVowels()).toBeTruthy();
      expect('HAS VOWELS'.hasVowels()).toBeTruthy();
      expect('ewiuh 546543857 #^$%5 sguhfer'.hasVowels()).toBeTruthy();
    });

    it('returns false if string has no vowels', function () {
      expect('n0 vwls'.hasVowels()).toBeFalsy();
      expect('N0 VWLS'.hasVowels()).toBeFalsy();
      expect(' '.hasVowels()).toBeFalsy();
      expect('1234'.hasVowels()).toBeFalsy();
    });
  });

  // toUpper() tests
  describe('toUpper() Tests', function () {
    var string = 'njerrywerry';

    it('returns a string', function () {
      expect(typeof string.toUpper()).toBe('string');
    });

    it('returns the string with all characters in upper case', function () {
      expect(string.toUpper()).toEqual('NJERRYWERRY');
      expect('NjerryWerry'.toUpper()).toEqual('NJERRYWERRY');
      expect('Njerry Is Uppercase Now'.toUpper()).toEqual('NJERRY IS UPPERCASE NOW');
    });
  });

  // toLower() tests
  describe('toLower() Tests', function () {
    var string = 'NJERRYWERRY';

    it('returns a string', function () {
      expect(typeof string.toLower()).toBe('string');
    });

    it('returns the string with all characters in lower case', function () {
      expect(string.toLower()).toEqual('njerrywerry');
      expect('NjerryWerry'.toLower()).toEqual('njerrywerry');
      expect('Njerry Is LowerCase Now'.toLower()).toEqual('njerry is lowercase now');
    });
  });

  // ucFirst() tests
  describe('ucFirst() Tests', function () {
    var string = 'njerry';

    it('returns a string', function () {
      expect(typeof string.ucFirst()).toBe('string');
    });

    it('returns the string with the first character to upper case', function () {
      expect(string.ucFirst()).toEqual('Njerry');
      expect('njeRI'.ucFirst()).toEqual('NjeRI');
      expect('njerry werry'.ucFirst()).toEqual('Njerry werry');
    });
  });

  // isQuestion() tests
  describe('isQuestion() Tests', function () {
    it('returns a boolean value', function () {
      expect(typeof ' '.isQuestion()).toBe('boolean');
    });

    it('returns true if string is a question', function () {
      expect('Question?'.isQuestion()).toBeTruthy();
    });

    it('returns false if string is not a question', function () {
      expect('Not a question'.isQuestion()).toBeFalsy();
    });

    it('returns false if question mark is not at the end of the string', function () {
      expect('Invalid? Question'.isQuestion()).toBeFalsy();
    });
  });

  // words() tests
  describe('words() Tests', function () {
    var string = 'array of words';

    it('returns an array', function () {
      expect(typeof string.words()).toBe('object');
      expect(string.words() instanceof Array).toBeTruthy();
      expect(Array.isArray(string.words())).toBeTruthy();
    });

    it('returns a list of words in the string as an Array', function () {
      expect(string.words()).toEqual(['array', 'of', 'words']);
      expect('array:of!words?is,here'.words()).toEqual(['array', 'of', 'words', 'is', 'here']);
      expect('array::,*of!,.%^words'.words()).toEqual(['array', 'of', 'words']);

    });
  });

  // wordCount() tests
  describe('wordCount() Tests', function () {
    var string = 'array of words';

    it('returns a number', function () {
      expect(typeof string.wordCount()).toBe('number');
    });

    it('returns an accurate number of words in the string', function () {
      expect(string.wordCount()).toEqual(3);
      expect(string.wordCount()).not.toEqual(4);
    });
  });

  // fromCurrency() tests
  describe('fromCurrency() Tests', function () {
    var string = '11,111.11';

    it('returns a number', function () {
      expect(typeof string.fromCurrency()).toBe('number');
    });

    it('returns an accurate number representation of the Currency String', function () {
      expect(string.fromCurrency()).toEqual(11111.11);
      expect('123,456.00'.fromCurrency()).toEqual(123456);
      expect('123,456,789.00'.fromCurrency()).toEqual(NaN);
    });
  });
});
