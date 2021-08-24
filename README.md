# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @polinaskrobot/lotide`

**Require it:**

`const _ = require('@polinaskrobot/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `tail(...)`: return values of array exept the first one
* `head(...)`: returns first value of array
* `middle(...)`: returns middle of array
* `countLetters`: count specific letter in the string
* `findKey`: find key with specific condition in value
* `findKeyByValue`: find key by specific value
* `flatten`: unpack nested arrays value within array
* `letterPosition`: provide positions of letter as arrayIndex in the string
* `countOnly`: count only approved values in array
* `eqObjects`: compare two objects
* `eqArrays`: compare two arrays