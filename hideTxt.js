function getBrowserSize(){
    var w, h;

      if(typeof window.innerWidth != 'undefined')
      {
       w = window.innerWidth; //other browsers
       h = window.innerHeight;
      } 
      else if(typeof document.documentElement != 'undefined' && typeof      document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) 
      {
       w =  document.documentElement.clientWidth; //IE
       h = document.documentElement.clientHeight;
      }
      else{
       w = document.body.clientWidth; //IE
       h = document.body.clientHeight;
      }
    return {'width':w, 'height': h};
}

if(parseInt(getBrowserSize().width) > 2000){
document.getElementById("fadeshow1").style.display = "none";
}

var screenSize = window.innerWidth;

function checkScreen(){
    if (screenSize < 950);
    return console.log( "less then screen size");
    
}

console.log(screenSize)

console.log(checkScreen());

console