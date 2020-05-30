const dsc = require('./index');


/** Comparing 2 exact same strings returns 1 */
test('matching two equal strings', () => {
    expect(dsc.twoStrings('hello world', 'hello world')).toBe(1);
});


/** Comparing 2 different strings returns ]0,1[ */
test('matching two different strings', () => {
    expect(dsc.twoStrings('hello world', 'hello world!')).toBeGreaterThan(0.9);
    expect(dsc.twoStrings('hello world', 'Hello es6')).toBeGreaterThan(0.4);
});


/** Comparing 2 two completely different strings returns 0 */
test('matching two different strings', () => {
    expect(dsc.twoStrings('hello world', 'es6')).toBe(0);
});