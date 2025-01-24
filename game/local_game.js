import * as THREE from 'three';

import {updateGameData, setGameRunningToFalse, stopAnimation} from './game.js'
import { setScores } from '../js/gameUITools.js';
import { startBackgroundAnimation } from '../js/background.js';
import { pages } from "../controllers/index.js";

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
let ballVelocityIncrement = 1;
let ballCurrentVelocity;
let ballDirection = new THREE.Vector2(1, 0);

let hit = "";
let gameDuration = 3;
let timeLeft = 120;

let leftScore = 0;
let rightScore = 0;

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

let stopped = false;
function stopGame(){
    stopped = true;
    ballCurrentVelocity = ballVelocity;
    setTimeout(() => {
        stopped = false;
        }, 3000);
}

function scoreBall(side){
    if (side == -1){
        leftScore++;
        hit = "left scored";
        ballDirection = new THREE.Vector2(1, 0);
    }
    else{
        rightScore++;
        hit = "right scored";
        ballDirection = new THREE.Vector2(-1, 0);
    }
    setScores(leftScore, rightScore);
    ballPosition = new THREE.Vector2(0, 0);
    stopGame();
}

function updateBall(delta_time){

    ballPosition.setX(ballPosition.x + ballDirection.x * ballCurrentVelocity * delta_time);
    ballPosition.setY(ballPosition.y + ballDirection.y * ballCurrentVelocity * delta_time);

    if (ballDirection.x < 0 && collides(paddle1Position)){
        var angle = (ballPosition.y - paddle1Position.y) / paddleSize.y * 80;
        ballDirection = new THREE.Vector2(Math.cos(angle * Math.PI / 180), Math.sin(angle * Math.PI / 180));
        ballCurrentVelocity += ballVelocityIncrement;
    }
    else if (ballDirection.x > 0 && collides(paddle2Position)){
        var angle = (ballPosition.y - paddle2Position.y) / paddleSize.y * 80;
        ballDirection = new THREE.Vector2(-Math.cos(angle * Math.PI / 180), Math.sin(angle * Math.PI / 180));
        ballCurrentVelocity += ballVelocityIncrement;
    }
    else if (ballPosition.y - ballSize.y / 2 < -fieldHeight / 2 || ballPosition.y + ballSize.y / 2 > fieldHeight / 2){
        ballDirection.y *= -1;
        ballCurrentVelocity += ballVelocityIncrement;
    }

    else if (ballPosition.x < -fieldWidth / 2){
        scoreBall(1);
    }
    else if (ballPosition.x > fieldWidth / 2){
        scoreBall(-1);
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
            "Time": timeLeft,
        }
    }
    updateGameData(data);
    hit = "";
}


let lastFrame;
let delta;
export function startGame(){
    lastFrame = Date.now();
    paddle1Position.y = 0;
    paddle2Position.y = 0;
    ballPosition = new THREE.Vector2(0, 0);
    ballDirection = new THREE.Vector2(1, 0);
    stopGame();
    timeLeft = gameDuration;
}

function endGame(){
    setGameRunningToFalse();
    stopAnimation();
    startBackgroundAnimation();
    pages.play();
}

export function update(){
    if (timeLeft <= 0 && leftScore != rightScore){
        endGame();
        return;
    }
    delta = (Date.now() - lastFrame) / 1000;
    if (!stopped){
        timeLeft -= delta;
        if (timeLeft < -1)
            timeLeft = -1;
        updateBall(delta);
    }
    lastFrame = Date.now();

    generateGameData();

}