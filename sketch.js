var bg,bg_img
var cloud,cloud_img
var thundercloud,thundercloud_img 
var low_ground,top_ground

function preload(){
  cloud_img = loadAnimation("cloud1.png","cloud2.png")
  thundercloud_img  =loadAnimation("thundercloud.png","thundercloud2.png")
}

function setup() {
  createCanvas(600,800);

  cloud = createSprite(100, 200, 50, 50);
  cloud.addAnimation("cloudy",cloud_img)
  cloud.scale = 0.5
  cloud.positionY += -1

  thundercloud = createSprite(500, 300, 50, 50);
  thundercloud.addAnimation("thunder",thundercloud_img)
  thundercloud.scale = 0.5
   

  //top_ground = createSprite(100,100,50,50)
}

function draw() {
  background("#87CEEB");  
  drawSprites();
}