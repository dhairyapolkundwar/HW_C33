const Engine= Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world
var bg, backgroundImage;
var snow 
var snowGroup = []

var snowImage = "snow4.webp"

function setup() {
  var canvas = createCanvas(800,600);

  
  engine = Engine.create()
  world = engine.world
}

function draw() {
  if(backgroundImage){
    background(backgroundImage);  Engine.update(engine)
  }

  

  getBG()
  generateSnow(frameCount%15)
  for(let i = 0; i < snowGroup.length; i++){
    snowGroup[i].display()
  }
  
}

async function getBG(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var resJSON = await response.json()

  var datetime = resJSON.datetime
  var hour = datetime.slice(11, 13)

  if(hour >= 5 && hour < 18){
    bg = "snow1.jpg"
  } else if(hour >= 18 && hour < 22){
    bg = "snow3.jpg"
  } else {
    bg = "snow2.jpg"
  }

  backgroundImage = loadImage(bg)

}

function generateSnow(timePeriod){
    if(timePeriod === 0){
      
      var randomX = Math.round(random(50, 750))

      
      snowGroup.push(new Snow(randomX, snowImage))
      
      
    }
}