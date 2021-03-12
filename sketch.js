var ball;
var database;
var position;

function readpos(data){
  position = data.val()
  console.log(position)
  ball.x = position.x
  ball.y = position.y
}

function showError(){
console.log("Error occured; Try again")
}

function setup(){
    createCanvas(500,500);
    database = firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var positionref = database.ref('ball/position').on("value",readpos,showError)
}

function draw(){
    background("white");
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

function changePosition(x,y){
    database.ref('ball/position').set({
        'x': ball.x+x,
        'y': ball.y+y
    })
}
