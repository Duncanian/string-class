require('../src/string-class.js');

describe('String Class Extension Tests', function () {

  // hasVowels() tests
  describe('hasVowels() Tests', function () {
    it('returns true if string contains vowels', function () {
      expect('has vowels'.hasVowels()).toBeTruthy();
      expect('HAS VOWELS'.hasVowels()).toBeTruthy();
      expect('ewiuh 546543857 #^$%5 sguhfer'.hasVowels()).toBeTruthy();
    });

    it('returns false if string has no vowels', function () {
      expect('n0 vwls'.hasVowels()).toBeFalsy();
      expect('N0 VWLS'.hasVowels()).toBeFalsy();
      expect(' '.hasVowels()).toBeFalsy();
    });
  });
});
