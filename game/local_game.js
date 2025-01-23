import * as THREE from 'three';

import {updateGameData} from './game.js'

let fieldWidth = 80;
let fieldHeight = 50;

// Paddles
let paddleSize = new THREE.Vector2(2, 8);

let paddle1Position = new THREE.Vector2(-36, 0);
let paddle2Position = new THREE.Vector2(36 , 0);

let paddleVelocity = 30;

//Ball
let ballSize = new THREE.Vector2(2, 2);
let ballPosition = new THREE.Vector2(0, 0);
let ballVelocity = 30;
let ballDirection = new THREE.Vector2(1, 0);

let hit = "";
let gameDuration = 120;
let tiemLeft = 120;

export function movePaddles(user1Input, user2Input){
    if (user1Input == "DOWN"){
        paddle1Position.y -= paddleVelocity * delta;
        if (paddle1Position.y < -(fieldHeight - paddleSize.y) / 2)
            paddle1Position.y = -(fieldHeight - paddleSize.y) / 2;
    }
    else if (user1Input == "UP"){
        paddle1Position.y += paddleVelocity * delta;
        if (paddle1Position.y > (fieldHeight - paddleSize.y) / 2)
            paddle1Position.y = (fieldHeight - paddleSize.y) / 2;
    }

    if (user2Input == "DOWN"){
        paddle2Position.y -= paddleVelocity * delta;
        if (paddle2Position.y < -(fieldHeight - paddleSize.y) / 2)
            paddle2Position.y = -(fieldHeight - paddleSize.y) / 2;
    }
    else if (user2Input == "UP"){
        paddle2Position.y += paddleVelocity * delta;
        if (paddle2Position.y > (fieldHeight - paddleSize.y) / 2)
            paddle2Position.y = (fieldHeight - paddleSize.y) / 2;
    }
}

function collides(paddle) {
    
    var x_overlap = Math.abs(ballPosition.x - paddle.x) - paddleSize.x / 2 - ballSize.x / 2;
    var y_overlap = Math.abs(ballPosition.y - paddle.y) - paddleSize.y / 2 - ballSize.y / 2;

    return x_overlap <= 0 && y_overlap <= 0;
}

function updateBall(delta_time){
    ballPosition.setX(ballPosition.x + ballDirection.x * ballVelocity * delta_time);
    ballPosition.setY(ballPosition.y + ballDirection.y * ballVelocity * delta_time);

    if (ballDirection.x < 0 && collides(paddle1Position)){
        var angle = (ballPosition.y - paddle1Position.y) / paddleSize.y * 80;
        ballDirection = new THREE.Vector2(Math.cos(angle * Math.PI / 180), Math.sin(angle * Math.PI / 180));
    }
    else if (ballDirection.x > 0 && collides(paddle2Position)){
        var angle = (ballPosition.y - paddle2Position.y) / paddleSize.y * 80;
        ballDirection = new THREE.Vector2(-Math.cos(angle * Math.PI / 180), Math.sin(angle * Math.PI / 180));
    }
    else if (ballPosition.y - ballSize.y / 2 < -fieldHeight / 2 || ballPosition.y + ballSize.y / 2 > fieldHeight / 2)
        ballDirection.y *= -1;

    else if (ballPosition.x < -fieldWidth / 2){
        hit = "right scored";
        ballPosition = new THREE.Vector2(0, 0);
        ballDirection = new THREE.Vector2(-1, 0);
    }
    else if (ballPosition.x > fieldWidth / 2){
        hit = "left scored";
        ballPosition = new THREE.Vector2(0, 0);
        ballDirection = new THREE.Vector2(1, 0);
    }
}

function generateGameData(){
    const data = {
        "state":{
            "Ball":[
                ballPosition.x,
                ballPosition.y
            ],
            "Left_Player":[
                paddle1Position.x,
                paddle1Position.y
            ],
            "Right_Player":[
                paddle2Position.x,
                paddle2Position.y
            ],
            "Hit": hit,
            "Time": tiemLeft,
        }
    }
    //console.log(data);
    updateGameData(data);
    //console.log(data);
    hit = "";
}

let startTime;
let lastFrame;
let delta;
export function startGame(){
    startTime = Date.now();
    lastFrame = Date.now();
    paddle1Position.y = 0;
    paddle2Position.y = 0;
    ballPosition = new THREE.Vector2(0, 0);
    ballDirection = new THREE.Vector2(1, 0);
}

export function update(){
    tiemLeft = gameDuration + startTime / 1000  - Date.now() / 1000;
    delta = (Date.now() - lastFrame) / 1000;
    updateBall(delta);
    lastFrame = Date.now();

    generateGameData();
}