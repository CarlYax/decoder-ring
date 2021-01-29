/* eslint-disable strict */
const expect = require("chai").expect;
const caesar = require("../src/caesar.js");


describe("caesar", ()=>{

    it("should return false if no value for shift",()=>{
        const input = 'Oh, boy!';
        const shift = 'null';
        const expected = false;
        const actual = caesar(input);
        expect(actual).to.eql(expected);
    });

    it("should return false if 0 for shift",()=>{
        const input = 'Oh, boy!';
        const shift = 0;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.eql(expected);
    });

    it("should return false if shift is over 25",()=>{
        const input = 'Oh, boy!';
        const shift = 27;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.eql(expected);
    });

    it("should return false if shift is under -26",()=>{
        const input = 'Oh, boy!';
        const shift = -29;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.eql(expected);
    });

    it("should ignore capital letters",()=>{
        const input = 'Oh, boy!';
        const shift = 3;
        const expected = 'rk, erb!';
        const actual = caesar(input, shift);
        expect(actual).to.eql(expected);
    });

    it("should wrap +shift past 'z'",()=>{
        const input = 'Oh, boy!';
        const shift = 3;
        const expected = 'rk, erb!';
        const actual = caesar(input, shift);
        expect(actual).to.eql(expected);
    });

    it("should wrap -shift past 'a'",()=>{
        const input = 'Oh, boy!';
        const shift = -3;
        const expected = 'le, ylv!';
        const actual = caesar(input, shift);
        expect(actual).to.eql(expected);
    });

    it("should keep spacing/special characters same after coding",()=>{
        const input = 'Oh, boy!';
        const shift = -3;
        const expected = 'le, ylv!';
        const actual = caesar(input, shift);
        expect(actual).to.eql(expected);
    });

    it("should keep spacing/special characters same after decoding",()=>{
        const input = 'le, ylv!';
        const shift = -3;
        const expected = 'oh, boy!';
        const actual = caesar(input, shift, false);
        expect(actual).to.eql(expected);
    });

})