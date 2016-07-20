require('../src/string-class.js');

describe('String Class Extension Tests', () => {
  // hasVowels() tests
  describe('hasVowels() Tests', () => {
    it('returns a boolean value', () => {
      expect(typeof ' '.hasVowels()).toBe('boolean');
    });

    it('returns true if string contains vowels', () => {
      expect('has vowels'.hasVowels()).toBe(true);
      expect('HAS VOWELS'.hasVowels()).toBe(true);
      expect('ewiuh 546543857 #^$%5 sguhfer'.hasVowels()).toBe(true);
    });

    it('returns false if string has no vowels', () => {
      expect('n0 vwls'.hasVowels()).toBe(false);
      expect('N0 VWLS'.hasVowels()).toBe(false);
      expect(' '.hasVowels()).toBe(false);
      expect('1234'.hasVowels()).toBe(false);
    });
  });

  // toUpper() tests
  describe('toUpper() Tests', () => {
    const string = 'njerrywerry';

    it('returns a string', () => {
      expect(typeof string.toUpper()).toBe('string');
    });

    it('returns the string with all characters in upper case', () => {
      expect(string.toUpper()).toEqual('NJERRYWERRY');
      expect('NjerryWerry'.toUpper()).toEqual('NJERRYWERRY');
      expect('Njerry Is Uppercase Now'.toUpper()).toEqual('NJERRY IS UPPERCASE NOW');
      expect('njerry 123'.toUpper()).toEqual('NJERRY 123');
    });
  });

  // toLower() tests
  describe('toLower() Tests', () => {
    const string = 'NJERRYWERRY';

    it('returns a string', () => {
      expect(typeof string.toLower()).toBe('string');
    });

    it('returns the string with all characters in lower case', () => {
      expect(string.toLower()).toEqual('njerrywerry');
      expect('NjerryWerry'.toLower()).toEqual('njerrywerry');
      expect('Njerry Is LowerCase Now'.toLower()).toEqual('njerry is lowercase now');
      expect('NJERRy 123'.toLower()).toEqual('njerry 123');
    });
  });

  // ucFirst() tests
  describe('ucFirst() Tests', () => {
    const string = 'njerry';

    it('returns a string', () => {
      expect(typeof string.ucFirst()).toBe('string');
    });

    it('returns the string with the first character to upper case', () => {
      expect(string.ucFirst()).toEqual('Njerry');
      expect('njeRI'.ucFirst()).toEqual('NjeRI');
      expect('njerry werry'.ucFirst()).toEqual('Njerry werry');
    });
  });

  // isQuestion() tests
  describe('isQuestion() Tests', () => {
    it('returns a boolean value', () => {
      expect(typeof ' '.isQuestion()).toBe('boolean');
    });

    it('returns true if string is a question', () => {
      expect('Question?'.isQuestion()).toBe(true);
    });

    it('returns false if string is not a question', () => {
      expect('Not a question'.isQuestion()).toBe(false);
    });

    it('returns false if question mark is not at the end of the string', () => {
      expect('Invalid? Question'.isQuestion()).toBe(false);
    });
  });

  // words() tests
  describe('words() Tests', () => {
    const string = 'array of words';

    it('returns an array', () => {
      expect(typeof string.words()).toBe('object');
      expect(string.words() instanceof Array).toBe(true);
      expect(Array.isArray(string.words())).toBe(true);
    });

    it('returns a list of words in the string as an Array', () => {
      expect(string.words()).toEqual(['array', 'of', 'words']);
      expect('array:of!words?is,here'.words()).toEqual(['array', 'of', 'words', 'is', 'here']);
      expect('array::,*of!,.%^words'.words()).toEqual(['array', 'of', 'words']);
    });
  });

  // wordCount() tests
  describe('wordCount() Tests', () => {
    const string = 'array of words';

    it('returns a number', () => {
      expect(typeof string.wordCount()).toBe('number');
    });

    it('returns an accurate number of words in the string', () => {
      expect(string.wordCount()).toEqual(3);
      expect(string.wordCount()).not.toEqual(4);
    });
  });

  // toCurrency() tests
  describe('toCurrency() Tests', () => {
    const string = '11111.11';

    it('returns a string', () => {
      expect(typeof string.toCurrency()).toBe('string');
    });

    it('returns an accurate currency representation of the string', () => {
      expect(string.toCurrency()).toEqual('11,111.11');
      expect('10000'.toCurrency()).toEqual('10,000.00');
      expect('1234567.12'.toCurrency()).toEqual('1,234,567.12');
      expect('12'.toCurrency()).toEqual('12.00');
    });
  });

  // fromCurrency() tests
  describe('fromCurrency() Tests', () => {
    const string = '11,111.11';

    it('returns a number', () => {
      expect(typeof string.fromCurrency()).toBe('number');
    });

    it('returns an accurate number representation of the Currency String', () => {
      expect(string.fromCurrency()).toEqual(11111.11);
      expect('123,456.00'.fromCurrency()).toEqual(123456);
      expect('123,456,789.00'.fromCurrency()).toEqual(123456789);
    });
  });
});
