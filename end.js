const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostRecenetScore = localStorage.getItem("mostRecenetScore");
const finalScore = document.getElementById("finalScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecenetScore;

username.addEventListener('keyup', () => {
    console.log(username.value);
    
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("Clicked the button");
    e.preventDefault();

    const score = {
        score : mostRecenetScore,
        name: username.value
    };

    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(MAX_HIGH_SCORES);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("/");

    console.log(highScores);

};