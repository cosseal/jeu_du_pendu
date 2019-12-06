

var tabMots = [
    "javascript", "moderne", "fusion", "danser", "boissons", "train", "vision", "lunettes", "potion",
    "balancer", "effaceur", "modem", "fauteuil", "seau"
];
var alea = Math.floor(Math.random()*tabMots.length);
var selAlea =tabMots [alea];
var nbLettres = selAlea.length;
var submit = document.getElementById("submit");
var aff = document.getElementById("mad");
var i;

console.log (selAlea);
console.log (nbLettres);

function affNbLettres () {
    aff.innerHTML = "";

    for (i = 0; i<nbLettres; i++) {
        aff.innerHTML += " _ ";
    }
}

affNbLettres();

submit.addEventListener("click", function () {
    var lettre = document.getElementById("lettre");
    var posLettre = selAlea.indexOf(lettre);
    // posLettre [i].innerHTML = lettre;

        for ( i=0; i<nbLettres;i++) {
            if (selAlea [i] === lettre.value) {

// ma logique est de rechercher à ce moment là l'index/les index correspondant à la valeur de ma lettre.
// et donc de créer dans ma boucle, ma var posLettre qui recherche l'index.
// et ensuite, de changer l'inner HTML de ma variable aff en y remplaçant le texte _ par la valeur de ma lettre
// mais je n'y parvient pas...un coup de main? un indice pour avancer? ma logique est-elle bonne?

                console.log (posLettre);

            }

            else {}

            }
    });

