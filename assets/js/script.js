// variable qui permet de selectioner l'action du joueur lord d'un click
var rock = document.getElementById('Rock');
rock.addEventListener('click',playerSelection);
var paper = document.getElementById('Paper');
paper.addEventListener('click',playerSelection);
var scissors = document.getElementById('Scissors');
scissors.addEventListener('click',playerSelection);
var lizard = document.getElementById('Lizard');
lizard.addEventListener('click',playerSelection);
var spock = document.getElementById('Spock');
spock.addEventListener('click',playerSelection);
//fonction permetant de garder la selection du joueur

var playervar;
function playerSelection() {
    playervar = this.getAttribute('data-variable');
    document.getElementById('player').innerHTML = playervar;
    console.log(playervar);
};


// La fonction choisie aléatoirement entre les 5 choix puis récupere leur id
var botselection;
function getRandomChoice() {
    botrandom = Math.floor(Math.random() * 4)
    if (botrandom == 0) {
       botselection = "rock";
       console.log(botselection);
    } else if (botrandom == 1) {
        botselection = "paper";
        console.log(botselection);
    } else if (botrandom == 2) {
        botselection = "scissors";
        console.log(botselection);
    } else if (botrandom == 3) {
        botselection = "lizard";
        console.log(botselection);
    } else if (botrandom == 4) {
        botselection = "spock";
        console.log(botselection);
    }
};   


let win_ia = null // variable qui stock la win de l'ia si elle gagne le round
let win_user = null // variable qui stock la win de l'user si il gagne le round
let score_ia = 0 // variable qui stock le score de l'ia 
let score_user = 0 // variable qui stock la win de l'user
let round_comp = null 
let round = 0

// fonction de la manche
function manche(){
    if((playervar=="rock"&&botselection=="scissors")||(playervar=="rock"&&botselection=="lizard")||(playervar=="paper"&&botselection=="rock")||(playervar=="paper"&&botselection=="spock")||(playervar=="scissors"&&botselection=="paper")||(playervar=="scissors"&&botselection=="lizard")||(playervar=="spock"&&botselection=="rock")||(playervar=="spock"&&botselection=="scissors")||(playervar=="lizard"&&botselection=="spock")||(playervar=="lizard"&&botselection=="paper")){
        console.log("win");
        win_user = 1
        round_comp = 1
        roundChange()
        winLoose()
        winrateUser()
    };
    if((playervar=="rock"&&botselection=="rock")||(playervar=="scissors"&&botselection=="scissors")||(playervar=="paper"&&botselection=="paper")||(playervar=="spock"&&botselection=="spock")||(playervar=="lizard"&&botselection=="lizard")){
        console.log("égalité");
        win_user = 0
        win_ia = 0
        winLoose()
     };
    if((botselection=="rock"&&playervar=="scissors")||(botselection=="rock"&&playervar=="lizard")||(botselection=="paper"&&playervar=="rock")||(botselection=="paper"&&playervar=="spock")||(botselection=="scissors"&&playervar=="paper")||(botselection=="scissors"&&playervar=="lizard")||(botselection=="spock"&&playervar=="rock")||(botselection=="spock"&&playervar=="scissors")||(botselection=="lizard"&&playervar=="spock")||(botselection=="lizard"&&playervar=="paper")){
         console.log("loose");
         win_ia = 1
         round_comp = 1
         roundChange()
         winLoose()
         winrateUser()
      };
}

var testround;
function roundChange() {
    if (round_comp == 1) {
        round = round + 1
        document.getElementById('round').innerHTML = round;
        testround = round
    }
}

var testrate;
// fonction qui permet de calculer et d'ajouter le score à l'ia ou l'user si l'un d'entre eux gagnent le round
function winLoose() {
    if (win_ia == 1) { // le =1 signifie que l'ia a gagné mais elle peut être changé en fonction du nom que tu donnes à ta variable, ex: win_ia = winTrue, si la valeur n'est pas égale à 1 alors l'ia à perdue le round
        score_ia = score_ia + 1 // on ajoute +1 au score de l'ia si elle à gagné
        document.getElementById('score-ia').innerHTML = score_ia; // on modife le texte qui contient le score en ciblant son id
    } 
    else if(win_user == 1) {
        score_user = score_user + 1 
        document.getElementById('score-user').innerHTML = score_user;
    } 
    
    console.log(score_user);
    console.log(score_ia);
    console.log(testround);
    let pourcentageVictoire = ((score_user / testround) * 100); // pourcentage de victoire
    testrate = pourcentageVictoire

    if(win_ia == 0 || win_user == 0) { //si il y a égalité alors on garde le score des joueurs 
        score_user = score_user
        score_ia = score_ia
    }
};


// Calcul le pourcentage de victoire de l'utilisateur et l'affiche
function winrateUser() {
    console.log(testrate);
    document.getElementById('winrate').innerHTML = testrate + "%";
};

//Button play
var play = document.getElementById('startManche');
play.addEventListener('click',getRandomChoice);
play.addEventListener('click',manche);
play.addEventListener('click', () => {
    document.getElementById('botselection').innerHTML = botselection;
});