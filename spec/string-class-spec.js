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
    string = '11,111.11';

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
