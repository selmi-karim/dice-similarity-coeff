# dice-similarity-coeff

The Dice Similarity Coefficient is a simple and elegant way to calculate a measure of the similarity of two strings. 
The values produces are bounded between zero and one. 
The algorithm works by comparing the number of identical character pairs between the two strings.

## Install

```bash

npm install dice-similarity-coeff --save

yarn install dice-similarity-coeff

```

# Running the tests

```bash

npm install dice-similarity-coeff --save

yarn test

```


# Usage example


```js

import dsc from 'dice-similarity-coeff';
 
let dsc = dsc.twoStrings('Hello World', 'Hello es6'); 

```
## Examples

```js

twoStrings('hello world','hello es6')
// 0.5
twoStrings('hello world','hello world!')
// 0.9473684210526315
twoStrings('google','facebook')
// 0.16666666666666666
twoStrings('github','microsoft')
// 1 (it is just joke result = 0)

```


# Author

kerim selmi karimation.com <a href="http://www.karimation.com">karimation</a>
# License

This project is licensed under the  <a href="LICENSE">MIT License</a>
