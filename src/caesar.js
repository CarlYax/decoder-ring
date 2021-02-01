/* eslint-disable strict */
function caesar(input, shift, encode = true) {
  if (!shift || shift >= 26 || shift <= -26) {
    return false;
  } 
  if (encode === false) {
    shift = shift*-1;
  }
  
  const noCaps = input.toLowerCase().split('');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const fullAlphabet = alphabet + alphabet + alphabet;    
  let codeMsg = '';

  for(let i = 0; i < noCaps.length; i++) {
    let letter = noCaps[i];
    let index = alphabet.indexOf(letter);
    if (index === -1) {
      codeMsg += letter;
    } else {
      index = index + shift + alphabet.length;
      let shiftLetter = fullAlphabet[index];
      codeMsg += shiftLetter;
    }
  }    
  return codeMsg;
}
  

module.exports = caesar;
