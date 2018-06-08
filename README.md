# dice-similarity-coeff

The Dice Similarity Coefficient is a simple and elegant way to calculate a measure of the similarity of two strings. 
The values produces are bounded between zero and one. 
The algorithm works by comparing the number of identical character pairs between the two strings.

<div>
<iframe  src="http://www.algomation.com/embeddedplayer?embedded=true&algorithm=5b1a8b2995796504002dcd62" width="900" height="556" seamless="seamless" frameborder="0" style="border:1px solid lightgray" scrolling="no"></iframe>
</div>
## Install

```bash

npm install dice-similarity-coeff --save

or 

yarn install dice-similarity-coeff

```

# Running the tests

you need to install <a href="https://facebook.github.io/jest/docs/en/22.1/getting-started.html">jest</a> 

```bash

npm test

or 

yarn test

```


# Usage

```js

import dsc from 'dice-similarity-coeff';

let dsc = dsc.twoStrings('Hello World', 'Hello es6'); 

```

## Examples

```js

import dsc from 'dice-similarity-coeff';
        
let dsc = dsc.twoStrings('Hello World', 'Hello es6'); 

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

kerim selmi <a href="http://www.karimation.com">karimation</a>
# License

This project is licensed under the  <a href="LICENSE">MIT License</a>
