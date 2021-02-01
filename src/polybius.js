/* eslint-disable strict */
function polybius(input, encode = true) { 
  
  let codeMsg = '';
  const alphabet = {a:11, b:21, c:31, d:41, e:51, 
    f:12, g:22, h:32, 'i/j':42, i:42, j:42, k:52, 
    l:13, m:23, n:33, o:43, p:53, 
    q:14, r:24, s:34, t:44, u:54, 
    v:15, w:25, x:35, y:45, z:55};
   
  if(encode === true){
    //encode here
    const noCaps = input.toLowerCase().split(' ');    
    noCaps.forEach((word)=>{
      let msg = word.split('');
      msg.forEach((letter)=>{
        for(const key in alphabet){
          if(letter === key){
            codeMsg += alphabet[key];
          }
        } 
      });codeMsg += ' ';
    });
  } else {
    const numWords = input.split(' ');
    let valid = true;
    numWords.forEach((words)=>{
      if (words.length % 2 !== 0 || Number(words) !== parseInt(words)){
        valid = false; 
      }
    });
    if(!valid){
      return false;
    }

    //decode here    
    numWords.forEach((word)=>{
      for (let i = 0; i < word.length/2; i++){
        let x = 2*i;
        let numLetter = word.substring(x, x+2);
        for (const key in alphabet) {
          const parsedNumLet = parseInt(numLetter);          
          if (alphabet[key] === parsedNumLet){
            codeMsg += key;
            break;
          }
        }
      }        
      codeMsg += ' ';  
    });
  }
  return codeMsg.trim();
}

module.exports = polybius;
