/** --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de : 
        - Saisir un Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son âge
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE]
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] !
-- */


//correction
//1. Initialisation des Variables

// 2. Création d'une Fonction
function Hello() {

    // 2a. je demande à l'utilisateur son prénom
    let prenom = prompt("Hello ! What is your name ?","<Saisir votre prénom>");console.log(prenom);
    
    // 2b. Je lui demande son âge
    let age = parseint( prompt("Hello" + prenom + "How old are you ?", "Saisir votre Age") );
    console.log(age);
    console.log(typeof age);

    // 2c. Déduire l'année de naissance, et l'afficher dans une "alert".

    // 2d. J'affiche tout ça dans la page (Récapitulatif)
}

// 2. Execution de ma Fonction 

Hello(); 

// 1. Initialisation des Variables
var dateObj        = new Date();
var anneeActuelle  = dateObj.getFullYear();

// 2. Création d'une fonction
function Hello() {

    // 2a je demande à l'utilisateur son prénom
    let prenom = prompt('Quel est ton prénom ?', "Saisir votre prénom..."); 
    let age = parseint ( prompt("Hello" + prenom + " ! How old are you ?", "<Saisir votre Age>") )









}