'Use Strict';

var replaceDots = function(str) {
  var str = 'one.two.three';
  var fix = str.replace(/\./g, '-');
  return fix;
};
