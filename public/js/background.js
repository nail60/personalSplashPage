

var sizeSVG = function(){
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var bgPoly = document.getElementById('bg');
  console.log(bgPoly.points.getItem(1).x);
  bgPoly.points.getItem(1).x = windowWidth;
  bgPoly.points.getItem(2).x = windowWidth;
  if (windowHeight<542){
    bgPoly.points.getItem(2).y = windowHeight - 200;
    bgPoly.points.getItem(3).y = windowHeight - 100;
  } else{
    bgPoly.points.getItem(2).y = windowHeight - 300;
    bgPoly.points.getItem(3).y = windowHeight - 200;
  }
}
window.onresize= function(event){
  sizeSVG();
};
