window.onload = choosePic;

var myPix = new Array("images/button1.png","images/cover pic.png","images/meme laugh.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}


  var canvas = document.getElementById('memecanvas');
  ctx = canvas.getContext('2d');
 
  var deviceWidth = window.innerWidth;;
  canvasWidth = Math.min(600, deviceWidth-20);
  canvasHeight = Math.min(480, deviceWidth-20);
 
  canvas.width = canvasWidth;
  canvas.height = canvasHeight
  var img = document.getElementById('myPicture');
 
  // When the image has loaded...
  img.onload = function() {
    // Work out where to center it
    x = canvas.width/2 - img.width/2;
    y = canvas.height/2 - img.height/2;
 
    // Draw it
    ctx.drawImage(img, x, y);
  }
