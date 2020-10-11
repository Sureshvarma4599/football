
var score = [0,1];

var team1 ={
    name: "MANCHESTERCITY",
    points:[],
    score:0
}
var team2 ={
    name:"ASTONVILLA",
    points:[],
    score:0
}
var toss;



window.onload = () =>{
    selectToss();
    updateButtonText();
    updateNames();
    updateScore();
}



var selectToss = () =>{
    toss = Math.round(Math.random())+1;
    console.log(toss);
}
var updateButtonText = () =>{
    var button = document.getElementById("shoot-button")
    console.log(button);
    button.textContent=`${toss === 1? team1.name:team2.name}-shoot-out`
}
var updateNames = () =>{
    document.getElementById("team1").textContent = team1.name;
    document.getElementById("team2").textContent = team2.name;
}
var updateScore = () =>{
    document.getElementById("team1").textContent =team1.score;
    document.getElementById("team2").textContent =team2.score;
}