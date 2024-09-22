## Homework 1 - Primitive data types

In this homework, you will complete several functions that will require you to
work with primitive data types in JavaScript.

> You won't need any branching statements like if...else, switch or ternarys.
> This can be solved using the built in operators.

### P1) Booleans

Booleans are binary values meaning they only have two possible values: `true` or `false`.

#### not (!)

The not function acts exactly like the not operator. It flips the value provided.

* If the value is true, we return false.
* If the value is false, we return true.

#### and (&&)

The and function acts exactly like the and operator. It evaluates two values and returns true if both are true.

* If the values are true, true, we return true
* If any of the values are false, we return fasle

#### or (||)

The or function acts exactly like the or operator. It evaluates two values and returns true if either are true.

* If the values are false, false, we return false
* If any of the values are true, we return true

### P2) Numbers

Numbers are exactly what you'd expect, a numerical value. They can be expressed in several formats,
including scientific notation and alternate bases. Unlike other languages, JavaScript does not
have a unique type for integers and floats.

#### remainder (aka modulus %)

The remainder function acts exactly like the modulus operator. It accepts two values and returns the
remainder of dividing the first value by the second value. For example: remainder(a, b) will perform a / b
but only return the remainder. The best way to think about this is to go back to elementary math and
mixed numbers. We don't care about the quotient or the dividend, only the remaining numerator.

> remainder(7, 4) => 3

#### flipSign

The flip sign function transforms a positive number to a negative number, and a negative number to a
positive number.

> flipSign(5) => -5

### P3) Strings

Strings represent zero or more characters in a sequence. JavaScript doesn't have a Char data type,
only strings. 

#### firstAndLastCharacter

This function returns the first and last character from the input string. It returns them as a single
string, not an array or object.

> firstAndLastCharacter("JavaScript") => "Jt"

#### snakecase

This function returns a new string that is the input string lowercased and with spaces replaced as underscores.

> snakecase("JavaScript Rules!") => "javascript_rules!"

### P4) Null and Undefined

JavaScript has two data types the represent nothing or the lack of a value. Undefined is the implicit, no value was set. For example, no value was ever set. Null is the explicit, no value was set. Meaning we intentionally set it to no value. This can be really useful, but also dangerous and error prone.

#### isNull

This function evaluates the input. If the input is `null` it returns a boolean `true`. Otherwise it returns a boolean `false`.

> isNull(undefined) => false

#### isUndefined

This function evaluates the input. If the input is `undefined` it returns a boolean `true`. Otherwise it returns a boolean `false`.

> isUndefined(null) => false

#### isNil

This function evaluates the input. If the input is null OR undefined, it returns a boolean `true`. Otherwise it returns a boolean `false`. You'll need to perform to evaluations and combine them (see: and from p1).

> isNil(0, '') => false
