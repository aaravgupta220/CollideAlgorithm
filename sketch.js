var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "black";
  movingrect = createSprite(200,200,20,20);
  movingrect.shapeColor = "black";
}

function draw() {
  background(255,255,255);  

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 && 
    fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 && 
    movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
    fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2){
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }else {
    movingrect.shapeColor = "black";
    fixedrect.shapeColor = "black";
  }

  


  drawSprites();
}