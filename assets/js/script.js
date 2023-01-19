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
var skype = document.getElementById('skype')

// Variables pour les anims
var flask = document.getElementById('flask')
var fork = document.getElementById('fork')
var ray = document.getElementById('ray')
var fire = document.getElementById('fire')
var claw = document.getElementById('claw')

var flask2 = document.getElementById('flask2')
var fork2 = document.getElementById('fork2')
var ray2 = document.getElementById('ray2')
var fire2 = document.getElementById('fire2')
var claw2 = document.getElementById('claw2')

// Anims Player
function poisonThrow() {
    flask.classList.remove('d-none')
    gsap.fromTo(".flask", { x: 0 }, { x: -720, rotation: -120 }) 
};  

function removePoison() {
    if (flask.classList != 'd-none') {
        flask.classList.add('d-none')
    }
};

function rayThrow() {
    ray.classList.remove('d-none')
    gsap.fromTo(".ray", { x: 0 }, {x: -720, y: -100 }) 
};  

function removeRay() {
    if (ray.classList != 'd-none') {
        ray.classList.add('d-none')
    }
};

function forkThrow() {
    fork.classList.remove('d-none')
    gsap.fromTo(".fork",{ x: 0 }, { x: -720, rotation: -135 }) 
};  

function removeFork() {
    if (fork.classList != 'd-none') {
        fork.classList.add('d-none')
    }
};

function fireThrow() {
    fire.classList.remove('d-none')
    gsap.set(".fire",{ x: -830, y: 130}) 
};  

function removeFire() {
    if (fire.classList != 'd-none') {
        fire.classList.add('d-none')
    }
};

function clawThrow() {
    claw.classList.remove('d-none')
    gsap.set(".claw", { x: -850 }) 
};  

function removeClaw() {
    if (claw.classList != 'd-none') {
        claw.classList.add('d-none')
    }
};


// Anims IA
function poisonThrowIA() {
    flask2.classList.remove('d-none')
    gsap.fromTo(".flask2", { x: -720 }, { x: 790, rotation: 120 }) 
};  

function removePoisonIA() {
    if (flask2.classList != 'd-none') {
        flask2.classList.add('d-none')
    }
};

function rayThrowIA() {
    ray2.classList.remove('d-none')
    gsap.fromTo(".ray2", { x: -720 }, {x: 790, y: -90 }) 
};  

function removeRayIA() {
    if (ray2.classList != 'd-none') {
        ray2.classList.add('d-none')
    }
};

function forkThrowIA() {
    fork2.classList.remove('d-none')
    gsap.fromTo(".fork2",{ x: -720 }, { x: 790, rotation: 45 }) 
};  

function removeForkIA() {
    if (fork2.classList != 'd-none') {
        fork2.classList.add('d-none')
    }
};

function fireThrowIA() {
    fire2.classList.remove('d-none')
    gsap.set(".fire2",{ x: 920, y: 100}) 
};  

function removeFireIA() {
    if (fire2.classList != 'd-none') {
        fire2.classList.add('d-none')
    }
};

function clawThrowIA() {
    claw2.classList.remove('d-none')
    gsap.set(".claw2", { x: 910 }) 
};  

function removeClawIA() {
    if (claw2.classList != 'd-none') {
        claw2.classList.add('d-none')
    }
};

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

var skype_song = new Audio()
skype_song.src= './assets/audios/skype.mp3'


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

function skypePlay() {
    skype.addEventListener('click', (event) => {
        skype_song.play()
    });
}


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


let win_ia = null
let win_user = null
let score_ia = 0 // score de l'ia initialisé à 0
let score_user = 0 // score du player initialisé à 0
let round_comp = null 
let round = 0 // score du round initialisé à 0

// Compteur de manche
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

// Fonctionnement des ùanches
function manche() {
    removePoison()
    removeFork()
    removeRay()
    removeFire()
    removeClaw()
    removePoisonIA()
    removeForkIA()
    removeRayIA()
    removeFireIA()
    removeClawIA()
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
        win_ia = 0;
        roundChange();
        playerFlask();
        winLoose();
        winrateUser();
    }
    else if (winCombinations[botselection].includes(playervar)) { // compare les cartes du bot aux cartes du player pour savoir qui gagne
        console.log("loose")
        win_ia = 1;
        round_comp = 1;
        win_user = 0;
        roundChange(); 
        iaFlask();
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
        document.getElementById('victoryMSG').innerHTML="Egalité...";
    }
};
// function permetant d'arreter et de relancer le son d'ambiance
function ambiancePlay() {
    song_ambiance.play()
}

function ambianceStop() {
    song_ambiance.pause()
}

// POPUP
var modal_popup = document.getElementById("myModal_popup");


var btn_popup = document.getElementById("myBtn_popup");


var span_popup = document.getElementsByClassName("close_popup")[0];

// affiche le popup
btn_popup.onclick = function() {
  modal_popup.style.display = "block";
}

// close le popup
span_popup.onclick = function() {
  modal_popup.style.display = "none";
}

// ferme quand on clique autre part
window.onclick = function(event) {
  if (event.target == modal_popup) {
    modal_popup.style.display = "none";
  }
}

// buttons audio et mute
var audio = document.getElementById('audio')
var muet = document.getElementById('muet')

audio.addEventListener('click', () => {
    audio.classList.add('d-none')
    muet.classList.remove('d-none')
})

muet.addEventListener('click', () => {
    muet.classList.add('d-none')
    audio.classList.remove('d-none')
})

var effect = document.getElementById('effect')
var noeffect = document.getElementById('noeffect')

effect.addEventListener('click', () => {
    effect.classList.add('d-none')
    noeffect.classList.remove('d-none')

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
})

noeffect.addEventListener('click', () => {
    noeffect.classList.add('d-none')
    effect.classList.remove('d-none')

    sorciere.addEventListener('click',(event) => {
        song_sorciere.pause();
    });
    villageois.addEventListener('click',(event) => {
        song_villageois.pause();
    });
    ange.addEventListener('click',(event) => {
        song_ange.pause();
    });
    demon.addEventListener('click',(event) => {
        song_demon.pause();
    });
    loups_garous.addEventListener('click',(event) => {
        song_lg.pause();
    });
})

// conditions pour les animations du player
function playerFlask() {
    if(playervar == "sorciere" && botselection == "loups-garous" || botselection == "ange") {
        console.log("poison")
        poisonThrow();
    } 
    else if(playervar == "demon" && botselection == "sorciere" || botselection == "loups-garous") {
        console.log("feu")
        fireThrow();
    } 
    else if(playervar == "loups-garous" && botselection == "ange" || botselection == "villageois") {
        console.log("griffe")
        clawThrow();
    } 
    else if(playervar == "ange" && botselection == "demon" || botselection == "villageois") {
        console.log("éclair")
        rayThrow();
    } 
    else if(playervar == "villageois" && botselection == "demon" || botselection == "sorciere") {
        console.log("fourche")
        forkThrow();
    } 
};

// conditions pour les animations de l'ia
function iaFlask() {
    if(botselection == "sorciere" && playervar == "loups-garous" || playervar == "ange") {
        console.log("poison2")
        poisonThrowIA();
    } 
    else if(botselection == "demon" && playervar == "sorciere" || playervar == "loups-garous") {
        console.log("feu2")
        fireThrowIA();
    } 
    else if(botselection == "loups-garous" && playervar == "ange" || playervar == "villageois") {
        console.log("griffe2")
        clawThrowIA();
    } 
    else if(botselection == "ange" && playervar == "demon" || playervar == "villageois") {
        console.log("éclair2")
        rayThrowIA();
    } 
    else if(botselection == "villageois" && playervar == "demon" || playervar == "sorciere") {
        console.log("fourche2")
        forkThrowIA();
    } 
};


//Button play
var play = document.getElementById('startManche'); // on déclare la variable play
// play.addEventListener('click',getRandomChoice);
window.addEventListener('load', (event) => {
    ambiancePlay()
});

play.addEventListener('click',() => {botSelection(); manche(); resetRound(); victoryMSG();}); // on ajoute l'envent click au bouton qui déclanche les fonctions nécessaires au jeu
window.onload = function () { // local storage 
    document.getElementById('round').innerHTML = localStorage.getItem('roundsto');
    document.getElementById('score-user').innerHTML = localStorage.getItem('score_usersto');
    document.getElementById('score-ia').innerHTML = localStorage.getItem('score_iasto');
    document.getElementById('winrate').innerHTML = localStorage.getItem('winpourcentagesto');
};      