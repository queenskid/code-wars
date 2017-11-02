'use strict';


function formatWords(words){
  if(words === null) return '';
  for(let i=0; i < words.length; i++) {
    if(words[i] === '') {
      words.splice(i,1);
      i--;
    }
  }
  if(words.length === 0) return '';
  if(words.length > 1) {
    let and = `${words[words.length - 2]} and ${words[words.length - 1]}`;
    words.splice(-1,1);
    words.splice(-1,1);
    words.push(and);
    if(words.length > 1){
      return words.join(', ');
    }
  }
  return words[0];
}
