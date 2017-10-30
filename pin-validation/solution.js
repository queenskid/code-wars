'use strict';

////////////////////// KATA 1 Solution /////////////////////////////
function validatePIN (pin) {
  if (typeof pin === "string" && !~pin.indexOf('.') && !isNaN(Number(pin)) && (pin.length === 4 || pin.length === 6)) {
    return true;
  } else {
    return false;
  }
};


//////////////////////// KATA 2 Solution //////////////////////////////

function capitalize(s) {
  let S = s.toUpperCase();
  let even = "";
  let odd = "";
  for (let i = 0; i < s.length; ++i) {
    if (i & 1) {
      even += s[i]
      odd += S[i]
    } else {
      even += S[i]
      odd += s[i]
    }
  }
  return [even, odd]
};
