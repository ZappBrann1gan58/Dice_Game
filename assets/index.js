function rollDice(){
    var player1 = Math.floor((Math.random() * 6 + 1));
    console.log(player1);
    if(player1 === 1){
        document.getElementById("p1Image").src = "./assets/images/dice1.png";
    } else if(player1 === 2) {
        document.getElementById("p1Image").src = "./assets/images/dice2.png";
    } else if(player1 === 3){
        document.getElementById("p1Image").src = "./assets/images/dice3.png";
    } else if (player1 === 4) {
        document.getElementById("p1Image").src = "./assets/images/dice4.png";
    } else if(player1 === 5) {
        document.getElementById("p1Image").src = "./assets/images/dice5.png";
    } else if (player1 === 6) {
        document.getElementById("p1Image").src = "./assets/images/dice6.png";
    }

    var player2 = Math.floor((Math.random() * 6 + 1));
    console.log(player2);
    if(player2 === 1){
        document.getElementById("p2Image").src = "./assets/images/dice1.png";
    } else if(player2 === 2) {
        document.getElementById("p2Image").src = "./assets/images/dice2.png";
    } else if(player2 === 3){
        document.getElementById("p2Image").src = "./assets/images/dice3.png";
    } else if (player2 === 4) {
        document.getElementById("p2Image").src = "./assets/images/dice4.png";
    } else if(player2 === 5) {
        document.getElementById("p2Image").src = "./assets/images/dice5.png";
    } else if (player2 === 6) {
        document.getElementById("p2Image").src = "./assets/images/dice6.png";
    }

    if (player1 > player2){
        document.querySelector("h1").textContent = "Player 1 Wins! - Roll again.";
        document.querySelector(".p1").textContent = "🚩 Player 1";
    } else if (player2 > player1) {
        document.querySelector("h1").textContent = "Player 2 Wins! - Roll again.";
        document.querySelector(".p2").textContent = "🚩 Player 2";
    } else {
        document.querySelector("h1").textContent = "🚩 Tie! - Roll again! 🚩";
    }
}

if (window.performance.navigation.type === 1){
    rollDice();
}
