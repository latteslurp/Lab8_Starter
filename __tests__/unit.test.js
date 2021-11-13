// unit.test.js

const { test, expect } = require('@jest/globals');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// isPhoneNumber 
test('(123)456-7980 is a phone number', () => {
    expect(functions.isPhoneNumber('(123)456-7980')).toBe(true);
});

test('123-456-7890 is a phone number', ()=>{
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('12345678900 is not a phone number', ()=>{
    expect(functions.isPhoneNumber('12345678900')).toBe(false);
});

test('not-a-phonenumber is not a phone number', ()=>{
    expect(functions.isPhoneNumber('not-a-phonenumber')).toBe(false);
});

// isEmail
test('hello@gmail.com is a email address', ()=>{
    expect(functions.isEmail('hello@gmail.com')).toBe(true);
});

test('hello_you@gmail.com is a email address', ()=>{
    expect(functions.isEmail('hello_you@gmail.com')).toBe(true);
});

test('hello_you@gmail@gmail.com is not a email address', ()=>{
    expect(functions.isEmail('hello_you@gmail@gmail.com')).toBe(false);
});

test('hello-you@gmail.com is not a email address', ()=>{
    expect(functions.isEmail('hello-you@gmail.com')).toBe(false);
});

// isStrongPassword
test('iamverystrong is a strong password', ()=>{
    expect(functions.isStrongPassword('iamverystrong')).toBe(true);
});

test('evenStronger1 is a strong password', ()=>{
    expect(functions.isStrongPassword('evenStronger1')).toBe(true);
});

test('tooStrong!!! is not a strong password', ()=>{
    expect(functions.isStrongPassword('tooStrong!!!')).toBe(false);
});

test('she is not a strong password', ()=>{
    expect(functions.isStrongPassword('she')).toBe(false);
});

// isDate
test('4/3/2012 is a date', ()=>{
    expect(functions.isDate('4/3/2012')).toBe(true);
});

test('12/11/2021 is a date', ()=>{
    expect(functions.isDate('12/11/2021')).toBe(true);
});

test('33/32/MXMM is not a date', ()=>{
    expect(functions.isDate('tooStrong!!!')).toBe(false);
});

test('she is not a date', ()=>{
    expect(functions.isDate('she')).toBe(false);
});

// isHexColor
test('A11 is a hex color', ()=>{
    expect(functions.isHexColor('A11')).toBe(true)
});

test('FFFFFF is a hex color', ()=>{
    expect(functions.isHexColor('FFFFFF')).toBe(true)
});

test('(12,123,234) is not a hex color', ()=>{
    expect(functions.isHexColor('(12,123,234)')).toBe(false);
});

test('un1c0rn is not a hex color', ()=>{
    expect(functions.isHexColor('un1c0rn'))
});