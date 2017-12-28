/* -------------------------------
         LES CONDITIONS
------------------------------- */

var MajoriteLegaleFR = 18;

if(14 >= MajoriteLegaleFR){
    alert('Bienvenue!');
}

else {
    alert("Google")
}

/* -------------------------------------------------------------------------
                              EXERCICE
Créer une fonction permettant de vérifier l'age d'un utilisateur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, sinon, je 
fais une redirection sur Google après lui avoir signalé le soucis.          
-------------------------------------------------------------------------- */

var age = prompt ('Quel age as-tu ?');
if (age >= MajoriteLegaleFR){
    alert('Bienvenue !'); 
} 
    else{
    alert ("Vous n'avez pas l'age légal");   
    } 

// -- 1. Déclarer la Majorité Légale
var MajoritéLegaleFR = 18;

// -- 2 Créer une fonction pour demander son age.
/**
 * Si l'age de l'utilisateur passé en paramètres est supérieur ou égale à la majorité légale, alors la fonction retourne vrai
 * Sinon elle retourne faux.
 * @param {Int} age
 * @return {Boolean}
 */
function verifierAge(age) {
    if(age >= MajoriteLegaleFR) {
        return true;
    }else {
        return false;
    }
}


// -- 3. Je demande à l'utilisateur son âge
var age = parseInt (prompt("Bonjour, Quel age avez-vous?", "<Saisissez votre Age>") );

// -- 4. Vérification de l'Age de l'utilisateur
if(verifierAge(age)){
    // -- 4a. J'affiche un message de bienvenue
    alert('Bienvenue sur mon site internet réservé pour les majeurs');
    document.write('0_0 !!!');
} 
else {
    // -- 4b. J'effectue une redirection
    document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";
}
/* -------------------------------------------------------------------\
                     ~ LES OPERATEURS DE COMPARAISON ~                      
    
 L'opérateur de comparaison " == " signifie : Egal à 
 Il permet de vérifier que 2 variables sont identiques.
 
 L'opérateur de comparaison " === " signifie :
 Strictement Egal à. Il va comparer la valeur et le type de donnée. 

 L'opérateur de comparaison " != " signifie ! Différent de 

 L'opérateur de comparaison " !== " : Strictement
 Différent de. 
\------------------------------------------------------------------- */
























