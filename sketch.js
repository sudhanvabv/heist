var maze
var database, position1, position2

function preload() {
img=loadImage("robber.png")
drinkimg=loadImage("drink.png")
}



function setup() {
  
  createCanvas(windowWidth, windowHeight);
  robber = createSprite(1500,40,20,20)
  
  robber.addImage(img)

  robber.scale=0.25
  robber.setCollider("circle",0,0,80)
 robber.debug=true
  
  
  
  drink=createSprite(756,233,10,10)
  drink.addImage(drinkimg)
  drink.scale=0.03
  police1=createSprite(1300,100,30,30)
  police2=createSprite(180,100,30,30)
  maze1=createSprite(368, 361, 200, 5);
  maze2=createSprite(390,160,5, 100)
  maze3=createSprite(390,312,5, 100)
  maze4=createSprite(590,312,5, 100)
  maze5=createSprite(590,160,5, 100)
  maze6=createSprite(368, 110, 200, 5);
  maze7=createSprite(630, 361, 200, 5);
  maze8=createSprite(630, 110, 200, 5);
  maze9=createSprite(536, 25, 5, 100);
  maze10=createSprite(900, 110, 200, 5);
  maze11=createSprite(900, 361, 200, 5);
  maze12=createSprite(1170, 110, 200, 5);
  maze13=createSprite(1170, 361, 200, 5);
  maze14=createSprite(930,160,5, 100);
  maze15=createSprite(930,312,5, 100);
  maze16=createSprite(1150,160,5, 100);
  maze17=createSprite(1150,312,5, 100);
  maze18=createSprite(150,20,5, 100);
  maze19=createSprite(1000, 25, 5, 100);
  maze20=createSprite(1400, 25, 5, 100);
  maze21=createSprite(147, 440, 5, 560);
  maze22=createSprite(1400, 400, 5, 500);
  maze23=createSprite(30, 213, 70, 5);
  maze24=createSprite(114, 280, 70, 5);
  maze25=createSprite(30, 340, 70, 5);
  maze26=createSprite(114, 400, 70, 5);
  maze27=createSprite(30, 460, 70, 5);
  maze28=createSprite(114, 520, 70, 5);
  maze29=createSprite(30, 580, 70, 5);
  maze30=createSprite(147, 650, 5, 120);
  maze31=createSprite(1510, 213, 70, 5);
  maze32=createSprite(1435, 280, 70, 5);
  maze33=createSprite(1510, 340, 70, 5);
  maze34=createSprite(1435, 400, 70, 5);
  maze35=createSprite(1510, 460, 70, 5);
  maze36=createSprite(1435, 520, 70, 5);
  maze37=createSprite(1510, 580, 70, 5);
  maze38=createSprite(1400, 690, 5, 95);
  maze39=createSprite(760, 361, 100,5)
  maze40=createSprite(420, 480, 550,5)
  maze41=createSprite(1110, 480, 580,5)
  maze41.shapeColor="blue"
  maze42=createSprite(430,415,5,30)
  maze43=createSprite(500,415,5,30)
  maze44=createSprite(570,415,5,30)
  maze45=createSprite(640,415,5,30)
  maze46=createSprite(870,415,5,30)
  maze47=createSprite(940,415,5,30)
  maze48=createSprite(1010,415,5,30)
  maze49=createSprite(1080,415,5,30)
  maze50=createSprite(765, 500,5, 40)
  maze51=createSprite(765, 600,5, 40)
  maze52=createSprite(420, 690, 550,5)
  maze53=createSprite(1110, 690, 580,5)
  maze54=createSprite(765, 580, 1000,5)
  edges=createEdgeSprites()
  

  //createSprite()
  maze42.velocityY=-2;
  maze44.velocityY=2; 
  police1.velocityY=-5
  police2.velocityY=-15
}

function draw() {
  background(0);  
  
  console.log("mouseX="+mouseX)
  console.log("mouseY="+mouseY)
  console.log("width/2="+width/2)
  console.log("height/2="+height/2)
  
  if (keyDown("left")) {
    
    robber.x=robber.x-2
   }
   if (keyDown("right")) {
    
    robber.x=robber.x+2
   }
   if (keyDown("up")) {
   
  robber.y=robber.y-2
   }
   if (keyDown("down")) {
    
    robber.y=robber.y+2

   }
   if(police1.isTouching(robber)){
     robber.x=1500
     robber.y=40
    }
    if(police2.isTouching(robber)){
      robber.x=756
      robber.y=40
     }
  
   robber.collide(maze1)
   robber.collide(maze2)
   robber.collide(maze3)
   robber.collide(maze4)
   robber.collide(maze5)
   robber.collide(maze6)
   robber.collide(maze7)
   robber.collide(maze8)
   robber.collide(maze9)
   robber.collide(maze10)
   robber.collide(maze11)
   robber.collide(maze12)
   robber.collide(maze13)
   robber.collide(maze14)
   robber.collide(maze15)
   robber.collide(maze16)
   robber.collide(maze17)
   robber.collide(maze18)
   robber.collide(maze19)
   robber.collide(maze20)
   robber.collide(maze21)
   robber.collide(maze22)
   robber.collide(maze23)
   robber.collide(maze24)
   robber.collide(maze25)
   robber.collide(maze26)
   robber.collide(maze27)
   robber.collide(maze28)
   robber.collide(maze29)
   robber.collide(maze30)
   robber.collide(maze31)
   robber.collide(maze32)
   robber.collide(maze33)
   robber.collide(maze34)
   robber.collide(maze35)
   robber.collide(maze36)
   robber.collide(maze37)
   robber.collide(maze38)
   robber.collide(maze39)
   robber.collide(maze40)
   robber.collide(maze41)
   robber.collide(maze42)
   robber.collide(maze43)
   robber.collide(maze44)
   robber.collide(maze45)
   robber.collide(maze46)
   robber.collide(maze47)
   robber.collide(maze48)
   robber.collide(maze49)
   robber.collide(maze50)
   robber.collide(maze51)
   robber.collide(maze52)
   robber.collide(maze53)
   robber.collide(maze54)


  
























   //maze42.velocityY=-2;
   //maze42.bounceOff(maze1)
   maze42.bounceOff(maze1)
  maze42.bounceOff(maze40)
  maze44.bounceOff(maze40)
  maze44.bounceOff(maze7)
  
  police1.bounceOff(edges[2])
  police1.bounceOff(maze41)
  police2.bounceOff(edges[2])
  police2.bounceOff(maze40)
  drawSprites();
  

}
