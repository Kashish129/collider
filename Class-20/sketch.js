var fbox,mbox;



function setup() {
  createCanvas(1200,1200);
  fbox=createSprite(200, 200, 50, 80);
  mbox=createSprite(400, 200, 80, 30);

  fbox.shapeColor="green";
  mbox.shapeColor="green";
}

function draw() {
  background("blue");  

  mbox.x=World.mouseX;
  mbox.y=World.mouseY;

  console.log(mbox.y-fbox.y);

  if(mbox.x-fbox.x<65 && fbox.x-mbox.x<65 && mbox.y-fbox.y<55 && fbox.y-mbox.y<55)
  {
    fbox.shapeColor="red";
  mbox.shapeColor="red"; 
  }
  else
  {
    fbox.shapeColor="green";
  mbox.shapeColor="green"; 
  }

  drawSprites();
}