/*var run = function() {
	var count = 0;
	var blockId = parseInt(Math.random() * 9 + 1);
	var str = String(blockId);
	//console.log(str);
	var block = document.getElementById(str);

	block.style.backgroundColor = "red";
	//console.log(String(blockId));
}
*/
function getBlockId() {
	return parseInt(Math.random() * 9 + 1);
}

function assignBlock(preBlockId) {
	var blockId = getBlockId();

	if (preBlockId === blockId)
		blockId = getBlockId();
	//restrict from choose same block

	var block = document.getElementById(String(blockId));
	block.style.backgroundColor = '#E91E63';
	return block;
}

function resetBlock(block) {
	block.style.backgroundColor = '#7D41EB';
	return parseInt(block.id);
}

var getSec = function() {
	var today = new Date();
	return today.getSeconds();
}

var life = 2;   //no of lives
var score = 0;  //scores
var preBlockId = -1;  //previously assigned blocks
var gameSpeed = 2000;  //gamespeed intially
var block;
var flag = false;
var breakTime;
var count;
var name = prompt('hey just enter your name ','Prasook Jain');
var isGameRun = false;


var runV2 = function() {
	/*
    Added following feature than previous version:-
      1. Lifes
      2. Score
      3. No same block selection consecutivly
    */
	life = 2;
	score = 0;
	count = 0;
	gameSpeed = 2000;
	if(isGameRun == false){
		isGameRun = true;
		showScore();
		showLife();
		runGame();
	}
}

function runGame() {
		if(life<0) {
			exitFunc();
			return;
		}
		block = assignBlock(preBlockId);
		flag = false;
		breakTime = setTimeout(function (){ updateGame(); runGame();},gameSpeed);
}

function updateGame() {
	if(life<0) {
		clearTimeout(breakTime);
	}
	else if(flag == true) {
		score++;
		showScore();
	}
	else if(life>=0) {
		life--;
		showLife();
	}
	if( gameSpeed>1000) gameSpeed -= ++count*10;
	preBlockId = resetBlock(block);
}

function clickedBlock(elem){
	if(elem.id == block.id) flag = true;
}

function exitFunc(){
	isGameRun = false;
	alert('Hey '+name+'!, Your score is '+score);
	}

function showScore(){
	var scoreBlock = document.getElementById('score');
	scoreBlock.innerHTML = "Score : " + String(score);
}

function showLife(){
	var lifeBlock = document.getElementById('life');
	lifeBlock.innerHTML = "Lifes :" + String(life+1);
	lifeBlock.style.background = "red";
	alertLife(lifeBlock);
	lifeBlock.style.background = "transparent";
}
/*Add the alterLife function so that it can see the transaction*/
function alertLife(lifeBlock){
	lifeBlock.style.WebkitTransition = "background 0.5s linear 0s";
	lifeBlock.style.transition = "background 0.5s linear 0s";
}
function getHelp(){
	var helpBox = document.getElementById('helpBox');
	helpBox.style.display = 'block';
}

function closeHelpBox(){
	var helpBox = document.getElementById('helpBox');
	helpBox.style.display = 'none';
}
