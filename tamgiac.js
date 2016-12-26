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
  this.getChuVi = function(){
    var ab = tinhDoDai(this.diemA, this.diemB);
    var bc = tinhDoDai(this.diemB, this.diemC);
    var ac = tinhDoDai(this.diemA, this.diemC);
    return ab + bc + ac;
  }
  function tinhDoDai(a, b){
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    return Math.sqrt(dx*dx + dy*dy);
  }
}

var tg1 = new TamGiac(a, b, c);
console.log(tg1.getChuVi());
