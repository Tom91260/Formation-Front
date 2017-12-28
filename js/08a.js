
/* -------------------------------------------------------------------\
                            EXERCICE :
 J'arrive sur un Espace Sécurisé au moyen d'un email ou d'un mdp.
 Je dois saisir mon email et mon mot de passe afin d'être authentifié
 sur le site. 

 En cas d'échec une alert m'informe du problème.
 Si tous se passe bien, un message de bienvenue m'accueil.
\------------------------------------------------------------------- */

// -- BASE DE DONNEES 
var email, mdp;

email = "wf3@h1-media.fr";
mdp   = "wf3";

var login = "prompt" ("Login :"," <veuillez saisir votre email>");
var mdp = "prompt" ("mdp :"," <veuillez saisir votre mot de passe>");

logintrue = "wf3@h1-media.fr";
loginmdp = "wf3";

function verifierLogin (login) {
    if(login == email) {
        return true;
    } else {
        return false;
        alert("le login est incorrect"); 
    }
}

function verifierMdp (mdp) {
    if(mdp == loginmdp) {
        return true;
    } else {
        alert("le mdp est incorrect")
        return false;
    }
}

verif 

// correction 

// -- 1. Demander à l'utilisateur son email
var emailUser = prompt("Bonjour, Quel est votre email ?", "<Saisissez votre email>");

// -- 2. J vérifie si l'email saisie (emailUser) correspond à celui en BDD (email)
if(emailUser == email) {
    // -- 2a. Tout est ok, je continu la vérification avec le mot de passe.
    // -- 2a1. Je demande à l'utilisateur son mot de passe
    let mdpUser = prompt("Votre mot de passe ?","<Saisir votre mot de passe...>");
    //2a2 Vérification du mot de passe
    if(mdpUser == mdp){
        alert('Bienvenue !');
    }else {
        alert("ATTENTION, nous n'avons pas reconnu votre mot de passe ")    
    }
} else {
    //2b. Les emails ne correspondent pas...
    alert("ATTENTION, nous n'avons pas reconnu votre email");    
}

//-- EXEMPLE AVEC LES FONCTIONS

function monUtilisateurEstCorrect(emailUser,mdpUser){  
    if(emailUser === email && mdpuser === mdp){
        return true;
    }
    else{
        return false;
    }
}

var login = "prompt" ("Login :"," <veuillez saisir votre email>");
var mdp = "prompt" ("mdp :"," <veuillez saisir votre mot de passe>");

if( monUtilisateurEstCorrect(emailuser, mdpUser) ){
    alert("Bienvenue" + emailUser);
}else {
    alert("ATTENTION, email/mot de passe incorrect.");
}
/*-----------------------------------------------------------------------------
      ~ LES OPERATEURS LOGIQUES ~  
      
 L'opérateur ET : && ou AND Si la combinaison emailUser et email correspond 
 ET la combinaison mdpUser
 et mdp correspond.--> Dans cette condition, les 2 doivent OBLIGATOIREMENT 
 correspondre
 pour être validée.Ex. if(emailUser == email &&  mdpUser == mdp) {...}
    #### L'opérateur OU : || ou OR  ##### 
 Si la combinaison emailUser et email correspond OU la combinaison mdpUser
 et mdp correspond.--> Dans cette condition, au moinsl'une des deux doit    
 correspondre pour être validée. Ex. if(emailUser ==email || mdpUser == mdp)
  {...} #### L'opérateur "!" ou encore NOT ####l'opérateur "!" signifie le 
 contraire de... ou NOT var monUtilisateurEstApprouve = true;
 if(!monUtilisateurEstApprouve) {...}:Mon utilisateur n'est pas approuvé.
 Reviens à écrire: if(monUtilisateurEstApprouve == false) {...}
-----------------------------------------------------------------------------*/




