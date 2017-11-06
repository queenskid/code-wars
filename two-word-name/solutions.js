'use strict';

function abbrevName(name){
  let nameArray = name.split(' ');
  let firstName = nameArray.shift();
  let lastName = nameArray.shift();
  let firstInitial = firstName.charAt().toUpperCase();
  let lastInitial = lastName.charAt().toUpperCase();

  return `${firstInitial}.${lastInitial}`;
}
