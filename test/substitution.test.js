/* eslint-disable strict */
const expect = require("chai").expect;
const substitution = require("../src/substitution.js");


describe("substitution", ()=>{

  it("should return 'false' if alphapbet is < 26",()=>{ 
    const input = 'Hi';
    const alphabet = 'abc';      
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });

  it("should return 'false' if alphabet is > 26",()=>{
    const input = 'Hi';
    const alphabet = 'abcabcabcabcabcabcabcabcabc';
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });

  it("should return the correct message",()=>{
    const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
    const expected = 'yox';
    const actual = substitution('cba', alphabet);
    expect(actual).to.eql(expected);
  });

  it("should return 'false' if alphabet contains duplicate letters",()=>{
    const alphabet = 'abcabcabcabcabcabcabcabcab';
    const actual = substitution('hi', alphabet);
    expect(actual).to.be.false;
  });

  it("should ignore capital letters",()=>{
    const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
    const expected = 'xoy';
    const actual = substitution('AbC', alphabet);
    expect(actual).to.eql(expected);
  });

  it("should maintain spaces after encoding",()=>{
    const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
    const expected = 'y e';
    const actual = substitution('c y', alphabet);
    expect(actual).to.eql(expected);
  });

  it("should maintain spaces after decoding",()=>{
    const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
    const expected = 'c y';
    const actual = substitution('y e', alphabet, false);
    expect(actual).to.eql(expected);
  });

  // it("should...",()=>{
  //     const expected = ;
  //     const actual = substitution();
  //     expect(actual).to.eql(expected);
  // });

  // it("should...",()=>{
  //     const expected = ;
  //     const actual = substitution();
  //     expect(actual).to.eql(expected);
  // });

})