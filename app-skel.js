var work=function(){
  console.log("hciendo algo");
};

var dowork = function(f){
  console.log("start work");
  try {
  f();
}
catch(ex){
console.log(ex);
}
console.log("end work");
};

dowork(work);



