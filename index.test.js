/*
 * @Author: kerim selmi 
 * @Date: 2018-06-07 10:41:02 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-08 11:51:09
 */
const dsc = require('./index');


/** Comparing 2 exact same strings returns 1 */
test('matching two equal strings', () => {
    expect(dsc.twoStrings('hello world', 'hello world')).toBe(1);
});


/** Comparing 2 different strings returns ]0,1[ */
test('matching two different strings', () => {
    expect(dsc.twoStrings('hello world', 'hello world!')).toBeGreaterThan(0.8);
    expect(dsc.twoStrings('hello world', 'Hello Mr kira')).toBeGreaterThan(0.4);
});


/** Comparing 2 two completely different strings returns 0 */
test('matching two different strings', () => {
    expect(dsc.twoStrings('hello world', 'Mr Kira')).toBe(0);
});