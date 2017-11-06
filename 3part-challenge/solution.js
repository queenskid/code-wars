//////////// KATA 1 SOLUTION use-map-to-double-the-values-in-an-array ///////////////

function double(array) {
    return array.map(function(n) {
    return n * 2;
  });
}

//////////// KATA 2 SOLUTION List Filtering //////////////

function filter_list(l) {
  return l.filter(function(item) {
  return typeof(item) === 'number';
 });
}

//////////// KATA 3 SOLUTION calculate-average //////////////

function find_average(array) {
  return array.reduce((a, b) => (a + b)) / array.length;
}
