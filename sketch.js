var fixedRect, movingRect,edges;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
edges= createEdgeSprites();
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;
}

function draw() {
  background(0,0,0);  
 bounceOff(fixedRect,movingRect);
 if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "magenta";
  fixedRect.shapeColor = "white";
 }else {
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor= "red";
 }
  createEdgeSprites()
  movingRect.bounceOff(edges)
  fixedRect.bounceOff(edges)
  drawSprites();
}

