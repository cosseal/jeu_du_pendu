

var tabMots = [
    "javascript", "moderne", "fusion", "danser", "boissons", "train", "vision", "lunettes", "potion",
    "balancer", "effaceur", "modem", "fauteuil", "seau"
];
var alea = Math.floor(Math.random()*tabMots.length);
var selAlea =tabMots [alea];
var lettre = document.getElementById("lettre").value;
var nbLettres = selAlea.length;
var submit = document.getElementById("submit");
var aff = document.getElementById("mad");


console.log (selAlea);
console.log (nbLettres);

function affNbLettres () {
    aff.innerHTML = "";

    for (i = 0; i<nbLettres; i++) {
        aff += "_";
    }

}
affNbLettres();

submit.addEventListener("click", function () {


})

function comparer() {


    
}