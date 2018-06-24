import numeral from 'numeral';

var bytes = function bytes(value) {
  return numeral(value).format('0 b');
};

console.log(bytes(1234143222));
