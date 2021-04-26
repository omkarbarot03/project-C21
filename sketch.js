var canvas;
var music;
var cs1,cs2,cs3,cs4;
var edges,ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
     //create 4 different surfaces
    canvas = createCanvas(800,600);
  cs1=createSprite(0,550,360,10)
    cs1.shapeColor="blue";
    cs2=createSprite(280,550,150,10);
     cs2.shapeColor="yellow";
     cs3=createSprite(480,550,150,10);
      cs3.shapeColor="green";
      cs4=createSprite(650,550,150,10);
       cs4.shapeColor="orange";

        //create box sprite and give velocity
       ball=createSprite(random(20,750),100,40,40);
        ball.shapeColor="white";

        ball.velocityX=5;
        ball.velocityY=7;
  
   



   

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   edges=createEdgeSprites();

   ball.bounceOff(edges);

  
    //add condition to check if box touching surface and make it box
      if(cs1.isTouching(ball) && ball.bounceOff(cs1)){
          ball.shapeColor=rgb(255,128,0);
          music.play();

      }
        if(cs2.isTouching(ball)){
            ball.shapeColor=rgb(255,128,0);
            ball.velocityX=0;
            ball.velocityY=0;
            music.stop();

        }

         if(cs3.isTouching(ball) && ball.bounceOff(cs3)){
             ball.shapeColor=rgb(153,0,76);
             ball.velocityX=0;
            ball.velocityY=0;
             music.stop();

         }

           if(cs4.isTouching(ball) && ball.bounceOff(cs4)){
               ball.shapeColor=rgb(0,100,0);
              
               music.stop();

           }
drawSprites()
    }