var tamGiac = {
  a: 3,
  b: 5,
  c: 7
}

var tg = Object.assign({},tamGiac);
var mangProps = Object.keys(tamGiac);
tamGiac.a = 10;
console.log(mangProps);

console.log(tamGiac[mangProps[0]])

console.log('SO HUU: ',tamGiac.hasOwnProperty('d'));
