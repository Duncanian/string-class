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
});
