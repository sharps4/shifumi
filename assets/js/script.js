// variable qui permet de selectioner l'action du joueur lord d'un click
var ange = document.getElementById('ange');
ange.addEventListener('click',playerSelection);
var sorciere = document.getElementById('sorciere');
sorciere.addEventListener('click',playerSelection);
var villageois = document.getElementById('villageois');
villageois.addEventListener('click',playerSelection);
var loups_garous = document.getElementById('loups-garous');
loups_garous.addEventListener('click',playerSelection);
var demon = document.getElementById('demon');
demon.addEventListener('click',playerSelection);

// déclaration des variable contenant le son
var song_ambiance = new Audio()
song_ambiance.src = './assets/audios/ambiance.mp3'

var song_sorciere = new Audio()
song_sorciere.src = './assets/audios/sorciere.mp3';

var song_villageois = new Audio()
song_villageois.src = './assets/audios/villageois.3gp';

var song_ange = new Audio()
song_ange.src = './assets/audios/ange.mp3';

var song_demon = new Audio()
song_demon.src = './assets/audios/demon.mp3';

var song_lg = new Audio()
song_lg.src = './assets/audios/lg.mp3';


// son produit lord de la selection 
sorciere.addEventListener('click',(event) => {
    song_sorciere.play();
});
villageois.addEventListener('click',(event) => {
    song_villageois.play();
});
ange.addEventListener('click',(event) => {
    song_ange.play();
});
demon.addEventListener('click',(event) => {
    song_demon.play();
});
loups_garous.addEventListener('click',(event) => {
    song_lg.play();
});

// fonction permetant de garder la selection du joueur
var audio = new Audio('../audios/');
audio.play();

var playervar;
function playerSelection() { // carte jouée par le joueur
playervar = this.getAttribute("id");
document.getElementById('player').innerHTML = '<img src="assets/img/' + playervar + '.png" width="200" height="200">';
};

var botselection;
function botSelection() { // carte jouée par le bot
var choices = document.getElementsByClassName("choice");
var botrandom = Math.floor(Math.random() * choices.length);
botselection = choices[botrandom].getAttribute("id");
document.getElementById('botselection').innerHTML = '<img src="assets/img/' + botselection + '.png" width="200" height="200">';
};


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
};


function manche() {
    var winCombinations = { // Tableau des win conditions
        "sorciere": ["loups-garous", "ange"],
        "villageois": ["sorciere", "demon"],
        "ange": ["demon", "villageois"],
        "demon": ["sorciere", "loups-garous"],
        "loups-garous": ["ange", "villageois"]
    };
    
    if (winCombinations[playervar].includes(botselection)) { // compare les cartes du player aux cartes du bot pour savoir qui gagne
        console.log("win")
        win_user = 1;
        round_comp = 1;
        roundChange();
        winLoose();
        winrateUser();
        throwFlask()
    }
    else if (winCombinations[botselection].includes(playervar)) { // compare les cartes du bot aux cartes du player pour savoir qui gagne
        console.log("loose")
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
};


var testrate;
// fonction qui permet de calculer et d'ajouter le score à l'ia ou l'user si l'un d'entre eux gagnent le round
function winLoose() {
    if (win_ia == 1) { // le =1 signifie que l'ia a gagné mais elle peut être changé en fonction du nom que tu donnes à ta variable, ex: win_ia = winTrue, si la valeur n'est pas égale à 1 alors l'ia à perdue le round
        score_ia = score_ia + 1 // on ajoute +1 au score de l'ia si elle à gagné
        document.getElementById('score-ia').innerHTML = score_ia; // on modife le texte qui contient le score en ciblant son id
        document.getElementById('winorloose').innerHTML = "Perdu !";
    } else if(win_user == 1) {
        score_user = score_user + 1 
        document.getElementById('score-user').innerHTML = score_user;
        document.getElementById('winorloose').innerHTML = "Gagné !";
    } else if(win_user == 0 && win_ia == 0){
        document.getElementById('winorloose').innerHTML = "Egalité !";
    }
    if(score_user == 0 ) {
        document.getElementById('score-user').innerHTML = "0";
    } else if (score_ia == 0){
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


function resetBTN () { // reset toutes les valeurs stockées dans le local storage quand on clique sur le bouton reset
    localStorage.clear('score_iasto');
    localStorage.clear('score_usersto');
    localStorage.clear('roundsto');
    localStorage.clear('winpourcentagesto');
}


function resetRound() { // quand on atteint 10 manches le jeu se reset et un popup s'affiche pour nous dire si on a gagné ou perdu
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


function victoryMSG() { // popup de victoire ou défaite
    if(score_user>score_ia){
        document.getElementById('victoryMSG').innerHTML="Vous avez gagné GG";
    }
    if(score_ia>score_user){
        document.getElementById('victoryMSG').innerHTML="Vous avez perdu...";
    }if(score_ia==score_user){
        document.getElementById('victoryMSG').innerHTML="Egalité entre vous et le bot...";
    }
};
// function permetant d'arretet et de relancer le son d'amniance
function ambiancePlay() {
    song_ambiance.play()
}

function ambianceStop() {
    song_ambiance.pause()
}

//Button play
var play = document.getElementById('startManche'); // on déclare la variable play
// play.addEventListener('click',getRandomChoice);
window.addEventListener('load', (event) => {
    ambiancePlay()
});

play.addEventListener('click',() => {botSelection(); manche(); resetRound(); victoryMSG()}); // on ajoute l'envent click au bouton qui déclanche les fonctions nécessaires au jeu
window.onload = function () { // local storage 
    document.getElementById('round').innerHTML = localStorage.getItem('roundsto');
    document.getElementById('score-user').innerHTML = localStorage.getItem('score_usersto');
    document.getElementById('score-ia').innerHTML = localStorage.getItem('score_iasto');
    document.getElementById('winrate').innerHTML = localStorage.getItem('winpourcentagesto');
};


function throwFlask() {
    if (playervar == sorciere && botselection == loups-garous || botselection == ange) {
        flask.addEventListener("click", throwFlask);
    };
    if(botselection == sorciere && playervar == loups-garous || playervar == ange) {
    //flask.style.display = "block";
    flask.addEventListener("click", reverseThrowFlask);
    };
    
};


var flask = document.getElementById("flask");
          
          // Animation qui déplace la fiole vers la droite
          function throwFlask() {
            flask.style.right = "700px";
            flask.style.transform = "rotate(-120deg)";
          }
          function reverseThrowFlask() {
            flask.style.marginRight = "100px"
            flask.style.left = "700px";
            flask.style.transform = "rotate(120deg)";
          }