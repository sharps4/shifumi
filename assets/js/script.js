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

function playerSelection() {
    let player = this.getAttribute('data-variable');
    document.getElementById('player').innerHTML = player;
console.log(player);
};


// La fonction choisie aléatoirement entre les 5 choix puis récupere leur id
function getRandomChoice() {
    let botrandom = Math.floor(Math.random() * 5)
    if (botrandom == 1) {
       let botselection = "rock";
       document.getElementById('botselection').innerHTML = botselection;
       console.log(botselection);
    } else if (botrandom == 2) {
        let  botselection = "paper";
        document.getElementById('botselection').innerHTML = botselection;
        console.log(botselection);
    } else if (botrandom == 3) {
        let botselection = "scissors";
        document.getElementById('botselection').innerHTML = botselection;
        console.log(botselection);
    } else if (botrandom == 4) {
        let botselection = "lizard";
        document.getElementById('botselection').innerHTML = botselection;
        console.log(botselection);
    } else if (botrandom == 5) {
        let botselection = "spock";
        document.getElementById('botselection').innerHTML = botselection;
        console.log(botselection);
    }
};   







// fonction de la manche
function manche(playerSelection,getRandomChoice){
    if((player==rock&&botselection==scissors)||(player==paper&&botselection==rock)||(player==scissors&&botselection==paper)||(player==spock&&botselection==rock)||(player==spock&&botselection==scissors)||(player==lizard&&botselection==spock)||(player==lizard&&botselection==paper)){
        console.log("win");
    };
    if((player==rock&&botselection==rock)||(player==scissors&&botselection==scissors)||(player==paper&&botselection==paper)||(player==spock&&botselection==spock)||(player==lizard&&botselection==lizard)){
        console.log("égaliter");
    }else{
        console.log("lose");
    }
};




let win_ia = null // variable qui stock la win de l'ia si elle gagne le round
let win_user = null // variable qui stock la win de l'user si il gagne le round
let score_ia = null // variable qui stock le score de l'ia 
let score_user = null // variable qui stock la win de l'user


// fonction qui permet de calculer et d'ajouter le score à l'ia ou l'user si l'un d'entre eux gagnent le round
function winLoose() {
    if (win_ia == 1) { // le =1 signifie que l'ia a gagné mais elle peut être changé en fonction du nom que tu donnes à ta variable, ex: win_ia = winTrue, si la valeur n'est pas égale à 1 alors l'ia à perdue le round
        score_ia = score_ia+1 // on ajoute +1 au score de l'ia si elle à gagné
        document.getElementById('score-ia').innerHTML = score_ia; // on modife le texte qui contient le score en ciblant son id
    } else { // sinon c'est l'user qui a gagné
        score_user = score_user + 1 
        document.getElementById('score-user').innerHTML = score_user;
    }
};


// Calcul le pourcentage de victoire de l'utilisateur et l'affiche
var pourcentageVictoire = ((score_user / manche) * 100).toFixed(2)
function winrateUser() {
    document.getElementById('winrate').innerHTML = pourcentageVictoire;
};

//Button play
var play = document.getElementById('startManche');
play.addEventListener('click',getRandomChoice);

//fonction fonctionement du jeu
function shifumi(){
    
}   