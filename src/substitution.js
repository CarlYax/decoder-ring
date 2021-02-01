/* eslint-disable strict */

function isUnique(input) {
  const object = input.split("").reduce((acc, char) => {
    acc[char] = true;
    return acc;
  }, {});
  return Object.keys(object).length === input.length;
}

function substitution(input, alphabet, encode = true) {
  if (!alphabet || alphabet.length !== 26) return false;
  if (!isUnique(alphabet)) return false;
  
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  const alphArr = alph.split('');
  const alphabetArr = alphabet.split('');
  const noCaps = input.toLowerCase().split('');
  let codeMsg = '';

  if (encode === true) {
    //need to take each char of input and compare to index of alphArr
    //if index = -1, add char to msg,
    //else take the index value and add the char at alphabetArr[i] to msg
    for(let i = 0; i < noCaps.length; i++) {
      let letter = noCaps[i];
      let index = alph.indexOf(letter);
      if (index === -1) {
        codeMsg += letter;
      } else {
        codeMsg += alphabetArr[index];
      }
    }    
  } else {
    //take the char of input and compare to index of alphabetArr
    //if index = -1, add char to msg
    //else take the index value and add the cahr at alphArr[i] to msg
    for(let i = 0; i < noCaps.length; i++) {
      let letter = noCaps[i];
      let index = alphabet.indexOf(letter);
      if (index === -1) {
        codeMsg += letter;
      } else {
        codeMsg += alphArr[index];
      }
    }    
  }
  return codeMsg;
}

module.exports = substitution;
