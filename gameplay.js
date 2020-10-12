
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
    var result = document.getElementById("result");
    result.style.visibility ="";
    // check if game is over
    if(team1.points.length == 5 && team2.points.length == 5){
        button.remove();
        // check if the match is draw Don't forget to use backticks ` ` and $ while calculating
        result.textContent = team1.score === team2.score ? `Its a draw`: `${team1.score > team2.score? team1.name:team2.name} Wins`;
    }
    else{
        // check if the strike is over
        toss = team1.points.length === 5 ? 2 : team2.points.length === 5 ? 1 : toss;
    }
    button.textContent=`${toss === 1? team1.name:team2.name}-shoot-out`
}
var updateNames = () =>{
    document.getElementById("team1").textContent = team1.name;
    document.getElementById("team2").textContent = team2.name;
}
var updateScore = () =>{
    document.getElementById("team1").textContent =team1.score;
    document.getElementById("team2").textContent =team2.score;
updatePoints();

}
var handleShootButtonClick = () =>{
    var points = score[Math.floor(Math.random()*score.length)];
    console.log(points);
  
   
    // check which team is on strike
    if (toss ===1)
      {
       team1.points.push(points);
      team1.score= calculateScore(team1.points); // Update the team score
       
      } 
      else{
       team2.points.push(points);
       team2.score = calculateScore(team2.points); // Update the team score
       
      }
   
      updateButtonText();
      updateScore();
   }
   
   var calculateScore = (points) =>{
   console.log("Calculate score method");
   return points.map(num =>{
    
    return num =='0'? 0: num;
    
    }).reduce((total,num) => total + num
    
    );
   };
   
           
   
   
   var updatePoints = () =>{
       var teamOnePointsElement = document.getElementById("team-1-points").children;
       var teamTwoPointsElement = document.getElementById("team-2-points").children;
       // update points on score board
       team1.points.forEach((point,index)=>{
           teamOnePointsElement[index].textContent = points;
       });
       team2.points.forEach((point,index)=>{
           teamTwoPointsElement[index].textContent = points;
       });
   };