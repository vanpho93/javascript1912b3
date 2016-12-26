// Point (x, y)
// TamGiac (diemA, diemB, diemC)
// Private Tinh do dai
// Phuong thuc tinh chu vi

// var dx = x1 - x0;
// var dy = y1 - y0;
// var chieuDai1Canh = Math.sqrt(dx*dx + dy*dy)

function Point(x, y){
  this.x = x;
  this.y = y;
}

var a = new Point(0, 0);
var b = new Point(1, 0);
var c = new Point(0, 1);

function TamGiac(diemA, diemB, diemC){
  this.diemA = diemA;
  this.diemB = diemB;
  this.diemC = diemC;
  var ab = tinhDoDai(this.diemA, this.diemB);
  var bc = tinhDoDai(this.diemB, this.diemC);
  var ac = tinhDoDai(this.diemA, this.diemC);

  this.max = Math.max(ab, bc, ac);
  this.getChuVi = function(){
    return ab + bc + ac;
  }
  function tinhDoDai(a, b){
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    return Math.sqrt(dx*dx + dy*dy);
  }
}

var tg1 = new TamGiac(a, b, c);
var tg2 = new TamGiac(new Point(1,1), new Point(1,2), new Point(3,1));
var tg3 = new TamGiac(new Point(0,0), new Point(1,1), new Point(2,2));
var tg4 = new TamGiac(new Point(3,3), new Point(4,4), new Point(1,2));
var tg5 = new TamGiac(new Point(1,2), new Point(3,4), new Point(4,3));
var arr = [tg1, tg2, tg3, tg4, tg5];

var arrNum = [-5, 4, 6, 7, 8, 9, -1, 23, -45];
//
// var is = arrNum.every(e => e > 3 );
// var bis = arrNum.some(e => e > 7);
//
// console.log('True or false?: ', bis);
var isBig = arr.every(tamGiac => tamGiac.getChuVi() > 4);
// var isMax = arr.every(tamGiac => tamGiac.max > 2);
var indexTamGiac = arr.find(e => e.max < 2);
//console.log(indexTamGiac);
// console.log(isBig);
//console.log(tg1.max);

// var a = {b: 'PHP'};
// var c = {b: 'PHP'};
// console.log(a == d);
var arrSoChan = arrNum.filter(e => e % 2 == 0);
var arrSqr = arrNum.map(e => e*e);
// console.log(arrSqr);
var sort = arrNum.sort((a, b) => a - b);
console.log(sort);

var sortTamGiac = arr.sort((a, b) => a.max - b.max);
console.log(sortTamGiac.map(e => e.max));
