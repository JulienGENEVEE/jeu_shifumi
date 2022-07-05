const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
const winnerScores = [0,0];

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", playGame);
}

function playGame(e){
    let playerSelection = e.target.innerText;
    let computerSelection = Math.random();

    if (computerSelection <.34){
        computerSelection = "pierre";
    } else if (computerSelection <=.67){
        computerSelection = "ciseau";            
    } else {
        computerSelection = "feuille";
    }

let result = checkWinner(playerSelection, computerSelection);

if (result === "player"){
    result += "Tu as gagné !";
    winnerScores[0]++;
}

if (result === "computer"){
    result += "l'ordinateur a gagné !";
    winnerScores[1]++;
}

if (result === "Draw"){
    result += "C'est une égalité";
}

score.innerHTML = "Player: [ " + winnerScores[0] + " ] Computer: [ " + winnerScores[1] + " ]";
    messenger("Player joue <strong>" + playerSelection + "</strong> tandis que Computer joue <strong>" + computerSelection + "</strong><br>" + result);

}

function messenger(selectionMessage){
    message.innerHTML = selectionMessage;
}

function checkWinner(player, computer){
    if (player === "pierre"){
        if (computer === "feuille"){;
            return innerHtml=" Vous avez perdu, l'ordinateur a gagné."
        }
        else if (computer === "pierre"){
            return innerHtml= "Vous avez fais égalité."
        }
        else (computer === "ciseau")
            return innerhtml= "Vous avez gagné."
    }
    if (player === "ciseau"){
        if (computer === "pierre"){
            return innerHtml=" Vous avez perdu, l'ordinateur a gagné."
        }
        else if (computer === "ciseau"){
            return innerHtml= "Vous avez fais égalité."
        }
        else (computer === "feuille")
            return innerhtml= "Vous avez gagné."
    }
    if (player === "feuille"){
        if (computer === "ciseau"){
            return innerHtml=" Vous avez perdu, l'ordinateur a gagné."
        }
        else if (computer === "feuille"){
            return innerHtml= "Vous avez fais égalité."
        }
        else (computer === "pierre")
            return innerhtml= "Vous avez gagné."
    }
}
