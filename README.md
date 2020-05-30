# dice-similarity-coeff  ![release](https://github.com/selmi-karim/dice-similarity-coeff/workflows/release/badge.svg)

The Dice Similarity Coefficient is a simple and elegant way to calculate a measure of the similarity of two strings. 
The values produces are bounded between zero and one. 

The algorithm works by comparing the number of identical character pairs between the two strings.

<img src="screenshots/test.gif"  />


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

let result = dsc.twoStrings('Hello World', 'Hello es6'); 

```

## Examples

```js

import dsc from 'dice-similarity-coeff';
        

dsc.twoStrings('hello world','hello es6')
// 0.5
dsc.twoStrings('hello world','hello world!')
// 0.9473684210526315
dsc.twoStrings('google','facebook')
// 0.16666666666666666
dsc.twoStrings('github','microsoft')
// 1 (it is just joke result = 0)
dsc.simSort('hello',['hella','world','helloo','hel'])
// ["helloo","hella","hel","world"]

```

## NPM scripts

 - `npm run release`: release new version
 - `npm run lint`: Lints code
 - `npm run lint:fix`: Lints auto-fix code
 - `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)

## Git Hooks

There is already set a `precommit` hook for formatting your code with Prettier :nail_care:

By default, there are two disabled git hooks. They're set up when you run the `npm run semantic-release-prepare` script. They make sure:
 - You follow a [conventional commit message](https://github.com/conventional-changelog/conventional-changelog)

This makes more sense in combination with [automatic releases](#automatic-releases)


## Built With

* [Github Actions](https://github.com/actions) - CI & CD
* [npm](https://www.npmjs.com) - Dependency Management
* [nodejs](https://nodejs.org/en/)



## Versioning and Release

### Semantic Versioning

We follow the [**Semantic Versioning**](https://semver.org/#summary]) scheme.
> set of rules and requirements that dictate how version numbers are assigned and incremented. These rules are based on but not necessarily limited to pre-existing widespread common practices in use in both closed and open-source software... Under this scheme, version numbers and the way they change convey meaning about the underlying code and what has been modified from one version to the next.

Reading the semantic versioning docs more than once will get you a solid understanding on how we version and tag our software releases. 

### Semantic Release

We use **[semantic-release](https://github.com/semantic-release/semantic-release)** to manage and automate complex release workflows.
>**semantic-release** automates the whole package release workflow including: determining the next version number, generating the release notes and publishing the package.
This removes the immediate connection between human emotions and version numbers, strictly following the [Semantic Versioning](http://semver.org/) specification.

As a SWE you will not be versioning nor releasing manually software, as everything is automated. But a solid insight on how we do things will make your vision and sense of understanding match your teammate's.




# License

This project is licensed under the  <a href="LICENSE">MIT License</a>
