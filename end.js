const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostRecenetScore = localStorage.getItem("mostRecenetScore");
const finalScore = document.getElementById("finalScore");

finalScore.innerText = mostRecenetScore;

username.addEventListener('keyup', () => {
    console.log(username.value);
    
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("Clicked the button");
    e.preventDefault();
} 