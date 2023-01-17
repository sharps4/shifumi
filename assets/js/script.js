// variable qui permet de selectioner l'action du joueur lord d'un click
var rock = document.getElementById('Rock');
rock.addEventListener('click',playSelection);

function playSelection() {
let selection=playSelection.addEventListener;
console.log("tegzeest");
}




let win_ia = win-ia // variable qui stock la win de l'ia
let win_user = win-user // variable qui stock la win de l'user
let score_ia = score-ia // variable qui stock le score de l'ia 
let score_user = score-user // variable qui stock la win de l'user

function winLoose() {
    if (win_ia = 1) {
        score_ia = score_ia+1
        document.getElementById('score-ia').innerHTML = score_ia;
    } else {
        score_user = score_user + 1
        document.getElementById('score-user').innerHTML = score_user;
    }
};