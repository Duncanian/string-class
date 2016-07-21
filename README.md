# string-class

[![Coverage Status](https://coveralls.io/repos/github/andela-skieha/string-class/badge.svg?branch=develop)](https://coveralls.io/github/andela-skieha/string-class?branch=develop)
[![Build Status](https://travis-ci.org/andela-skieha/string-class.svg?branch=master)](https://travis-ci.org/andela-skieha/string-class)

## Checkpoint Explanation
This is an extension of the Javascript String class using Prototype Oriented Programming.


The following are the methods involved:
* **hasVowels**

This method evaluates to true or false depending on whether the input string has a vowel(s).

```javascript
'vowels'.toVowels() === true
'n0 vwls'.toVowels() === false
```

* **toUpper**

This method returns the input string with all characters in upper case.

```javascript
'uppercase'.toUpper() yields 'UPPERCASE'
```

* **toLower**

This method returns the input string with all characters in lower case.

```javascript
'LOWERCASE'.toLower() yields 'lowercase'
```

* **ucFirst**

This method returns the input string with the first character in upper case.

```javascript
'titlecase'.ucFirst() yields 'Titlecase'
```

* **isQuestion**

This method evaluates to true or false depending on whether the input string is a question (has a question mark at the end).

```javascript
'Is this a question?'.isQuestion() === true
'This is not a question'.isQuestion() === false
```

* **words**

This method returns an array of words from the input string.

```javascript
'an array of words'.words() yields ['an', 'array', 'of', 'words']
```

* **wordCount**

This method returns the number of words in the input string.

```javascript
'how many words do I have?'.wordCount() === 6
```

* **toCurrency**

This method returns a currency representation of the input string.

```javascript
'1234567.12'.toCurrency() yields '1,234,567.12'
```

* **fromCurrency**

This method returns a number representation of the currency string.

```javascript
'123,456,789.00'.fromCurrency() yields 123456789
```

## Usage
* Clone the repository to your machine.
* cd into the project.
* Start up a node terminal instance.
* Type in `require('../src/string-class')` to access the module.
* Use the methods as above.


## Running The Tests
* Change directory to the root of the project.
* Run `npm install` to install project dependencies.
* Run `npm test` to run the tests.
