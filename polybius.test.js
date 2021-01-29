/* eslint-disable strict */
const expect = require("chai").expect;
const polybius = require("../src/polybius.js");


describe("polybius", ()=>{

  it("should encode 'i' to 42",()=>{
    const expected = '42';
    const actual = polybius('i');
    expect(actual).to.eql(expected);
  });

  it("should encode 'j' to 42",()=>{
    const expected = '42';
    const actual = polybius('j');
    expect(actual).to.eql(expected);
  });

  it("should decode '42' to 'i/j'",()=>{
    const expected = "i/j";
    const actual = polybius('42', false);
    expect(actual).to.eql(expected);
  });

  it("should ignore capital letters when decoding",()=>{
    const expected = 'aha';
    const actual = polybius('113211', false);
    expect(actual).to.eql(expected);
  });

  it("should ignore capital letters when encoding",()=>{
    const expected = '113211';
    const actual = polybius('AhA');
    expect(actual).to.eql(expected);
  });

  it("should keep spacing the same after encoding",()=>{
    const expected = '31 45';
    const actual = polybius('c y');
    expect(actual).to.eql(expected);
  });

  it("should keep spacing the same after decoding",()=>{
    const expected = 'c y';
    const actual = polybius('31 45', false);
    expect(actual).to.eql(expected);
  });

  it("should return a string",()=>{        
    const actual = polybius('c y');
    expect(actual).to.be.a('string');
  });

  it("should return 'false' if input includes non-numbers when decoding",()=>{        
    const actual = polybius('11212d', false);
    expect(actual).to.be.false;
  });

  it("should return 'false' if input has odd number, not counting spaces when decoding",()=>{        
    const actual = polybius('11 21 31 411', false);
    expect(actual).to.be.false;
  });

})