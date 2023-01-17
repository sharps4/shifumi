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
//fonction permetant de garder la selection du jouer

function playerSelection() {
console.log("tegzeest");
}




// fonction de la manche
function manche(playerSelection,){
    if((playerSelection==rock&&borselection==scissors)||(playerSelection==paper&&borselection==rock)||(playerSelection==scissors&&borselection==paper)||(playerSelection==spock&&borselection==rock)||(playerSelection==spock&&borselection==scissors)||(playerSelection==lizard&&borselection==spock)||(playerSelection==lizard&&borselection==paper)){
        
    };
    if((playerSelection==rock&&borselection==rock)||(playerSelection==scissors&&borselection==scissors)||(playerSelection==paper&&borselection==paper)||(playerSelection==spock&&borselection==spock)||(playerSelection==lizard&&borselection==lizard)){
        
    }else{

    }
}




let win_ia = win-ia // variable qui stock la win de l'ia si elle gagne le round
let win_user = win-user // variable qui stock la win de l'user si il gagne le round
let score_ia = score-ia // variable qui stock le score de l'ia 
let score_user = score-user // variable qui stock la win de l'user


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


var ia_rock =""
var ia_paper =""
var ia_scissors =""
var ia_lizard =""
var ia_spock=""

function getRandomChoice(max) {
    return Math.floor(Math.random() * 5);
}

if (Marh.floor)