var ball, database, position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "Blue";
    var ballPosition=database.ref('ball/position');
    ballPosition.on("value",readPosition,showError);
}

function draw(){
    background("pink");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
    position = data.val();
    console.log(position.x);
    Ball.x = position.x;
    Ball.y = position.y;
  }

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
