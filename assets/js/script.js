// variable qui permet de selectioner l'action du joueur lord d'un click
var ange = document.getElementById('ange');
ange.addEventListener('click',playerSelection);
var sorciere = document.getElementById('sorciere');
sorciere.addEventListener('click',playerSelection);
var villageois = document.getElementById('villageois');
villageois.addEventListener('click',playerSelection);
var loups_garous = document.getElementById('loups-garous');
loups-garous.addEventListener('click',playerSelection);
var demon = document.getElementById('demon');
demon.addEventListener('click',playerSelection);
//fonction permetant de garder la selection du joueur



var playervar;
function playerSelection() {
    playervar = this.getElementsByTagName("i")[0].getAttribute("class");
    document.getElementById('player').innerHTML = '<i class="' + playervar + '"></i>';
}; 

var botselection;
function botSelection() {
    var choices = document.getElementsByClassName("choice"); // crée un tableau de tous les éléments ayant le classe choice
    var botrandom = Math.floor(Math.random() * choices.length); // chosit aléatoirement dans ce tableau
    botselection = choices[botrandom].getElementsByTagName("i")[0].getAttribute("class"); // ajoute la classe font awesome
    document.getElementById('botselection').innerHTML = '<i class="' + botselection + '"></i>'; // affiche l'élément
    
}


let win_ia = null // variable qui stock la win de l'ia si elle gagne le round
let win_user = null // variable qui stock la win de l'user si il gagne le round
let score_ia = 0 // variable qui stock le score de l'ia 
let score_user = 0 // variable qui stock la win de l'user
let round_comp = null 
let round = 0

var testround;
function roundChange() {
    testround = localStorage.getItem('roundsto');
    if (round_comp == 1) {
        round = round + 1;
        testround = round;
        document.getElementById('round').innerHTML = testround;
        localStorage.setItem('roundsto', testround);
    }
}



function manche() {
    var winCombinations = {
        "fa-regular fa-hand-back-fist pad": ["fa-regular fa-hand-villageois pad", "fa-regular fa-hand-loups-garous pad"],
        "fa-regular fa-hand pad": ["fa-regular fa-hand-back-fist pad", "fa-regular fa-hand-demon pad"],
        "fa-regular fa-hand-villageois pad": ["fa-regular fa-hand pad", "fa-regular fa-hand-loups-garous pad"],
        "fa-regular fa-hand-loups-garous pad": ["fa-regular fa-hand-demon pad", "fa-regular fa-hand pad"],
        "fa-regular fa-hand-demon pad": ["fa-regular fa-hand-back-fist pad", "fa-regular fa-hand-villageois pad"]
    };
    
    if (winCombinations[playervar].includes(botselection)) {
        win_user = 1;
        round_comp = 1;
        roundChange();
        winLoose();
        winrateUser();
    }
    else if (winCombinations[botselection].includes(playervar)) {
        win_ia = 1;
        round_comp = 1;
        roundChange();
        winLoose();
        winrateUser();
    } else {
        win_user = 0;
        win_ia = 0;
        winLoose();
    } 
}


var testrate;
// fonction qui permet de calculer et d'ajouter le score à l'ia ou l'user si l'un d'entre eux gagnent le round
function winLoose() {
    if (win_ia == 1) { // le =1 signifie que l'ia a gagné mais elle peut être changé en fonction du nom que tu donnes à ta variable, ex: win_ia = winTrue, si la valeur n'est pas égale à 1 alors l'ia à perdue le round
        score_ia = score_ia + 1 // on ajoute +1 au score de l'ia si elle à gagné
        document.getElementById('score-ia').innerHTML = score_ia; // on modife le texte qui contient le score en ciblant son id
    } else if(win_user == 1) {
        score_user = score_user + 1 
        document.getElementById('score-user').innerHTML = score_user;
    } 
    if(score_user == 0 || score_ia == 0 ) {
        document.getElementById('score-user').innerHTML = "0";
        document.getElementById('score-ia').innerHTML = "0";
    }
    
    let pourcentageVictoire = ((score_user / testround) * 100).toFixed(2); // pourcentage de victoire
    testrate = pourcentageVictoire

    if(win_ia == 0 || win_user == 0) { //si il y a égalité alors on garde le score des joueurs 
        score_user = score_user
        score_ia = score_ia
    }
    localStorage.setItem('score_usersto', score_user)
    localStorage.setItem('score_iasto', score_ia)
};


// Calcul le pourcentage de victoire de l'utilisateur et l'affiche
var winpourcentage;
function winrateUser() {
    winpourcentage =  document.getElementById('winrate').innerHTML = testrate + "%";
    localStorage.setItem('winpourcentagesto', winpourcentage)
};


function resetBTN () {
    localStorage.clear('score_iasto');
    localStorage.clear('score_usersto');
    localStorage.clear('roundsto');
    localStorage.clear('winpourcentagesto');
}


function resetRound() {
    if (testround == 10) {
        console.log(testround)
        localStorage.clear('score_iasto');
        localStorage.clear('score_usersto');
        localStorage.clear('roundsto');
        localStorage.clear('winpourcentagesto');
        document.getElementById('popup2').classList.remove("d-none")
        document.getElementById('popup2').style.display = "block"
    
    }
};


function victoryMSG() {
    if(score_user>score_ia){
        document.getElementById('victoryMSG').innerHTML="Vous avez gagner GG petit con";
    }
    if(score_ia>score_user){
        document.getElementById('victoryMSG').innerHTML="Vous avez perdu GG grosse merde";
    }if(score_ia==score_user){
        document.getElementById('victoryMSG').innerHTML="Vous avez eu une égaliter bravot mème pas capable de batre un bot";
    }
};


//Button play
var play = document.getElementById('startManche');
// play.addEventListener('click',getRandomChoice);
play.addEventListener('click',() => {botSelection(); manche(); resetRound(); victoryMSG()});
window.onload = function () {
    document.getElementById('round').innerHTML = localStorage.getItem('roundsto');
    document.getElementById('score-user').innerHTML = localStorage.getItem('score_usersto');
    document.getElementById('score-ia').innerHTML = localStorage.getItem('score_iasto');
    document.getElementById('winrate').innerHTML = localStorage.getItem('winpourcentagesto');
};