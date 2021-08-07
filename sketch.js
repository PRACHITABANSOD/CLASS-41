var canvas,backgroundImage;

var gameState=0;
var playerCount;

var database;
var form,player,game
var playerInfo;
var allPlayers;

function setup(){
    canvas=createCanvas(700,700);
  database=firebase.database();
  game=new Game();
  game.getState();
  game.start();


}

function draw(){
    background("yellow");
    if(playerCount===4){
      game.update(1);
    }

    if(gameState===1){
      clear();
      game.play();
    }
  
}

