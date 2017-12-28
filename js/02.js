// -- Déclarer un Tableau indexé
var monTableau = []; 
var myArray    = new Array;

// -- Affecter des caleurs à un tableau indexé
monTableau[0]= "Marie-Pierre";
monTableau[1]= "Hugo";
monTableau[2]= "Hamid";

// -- Afficher le contenue de mon tableau dans la console.
console.log(monTableau[1]); // -- Hugo
console.log(monTableau[2]); // -- Hamid
console.log(monTableau); // -- Afficher toutes les données.

// -- Déclarer et Affecter des valeurs à un tableau indexé.
var NosPrenoms = ["Marie-Pierre", "Thomas", "Olivier", "Chloé", "Riad", "Hugo"];
console.log(NosPrenoms); 

// -- Déclarer et Affecter des valeurs à un Objet
// -- PAS DE TABLEAU ASSOCIATIF EN JS !!!!!!!!!!!!
var Coordonnee = {
    prenom: "Hugo",
    nom   : "LIEGARD",
    age   : 28
};

console.log(Coordonnee);
console.log(typeof Coordonnee);

// -- Je vais créer 2 tableaux indexés
var listeDePrenoms = ["Hugo", "Marie-Pierre", "Lounis", "Romain"];
var listeDeNoms    = ["LIEGARD", "DUPROUX", "DGADEN", "ELIE"];

// -- Je vais créer un tableau à 2 dimensions à partir de mes 2 tableaux précédents.

var Annuaire = [ listeDePrenoms, listeDeNoms ];
console.log(Annuaire);

// -- Hugo LIEGARD

console.log(Annuaire[0][0]);
console.log(Annuaire[1][0]);

var  AnnuaireDesStagiaires   = [ 
    { prenom: 'Hugo', nom : 'Thomas', tel : '0783971515' },
    { prenom: 'Olivier', nom : 'Brassart', tel : '0768359015' },
    { prenom: 'Thomas', nom : 'De Macedo', tel : '0625888048' },
];

console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[1]);
console.log(AnnuaireDesStagiaires[1]['prenom']);
console.log(AnnuaireDesStagiaires[1].prenom);

// -- Exemple de Tableau 3D

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        coordonnees : {
                        email   : "wf3@hl-media.fr",
                        adresse : {
                                    ville   : "Ducos",
                                    cp      :  97224,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 108 328",
                                    fax     : "0596 108 632",
                                    port    : "0783 97 15 15"
                                  }
                      }
    },
    {
        prenom      : "Rodrigue",
        nom         : "NOUEL",
        coordonnees : {
                        email   : "wellcommunication.net@gmail.com",
                        adresse : {
                                    ville   : "Fort-de-France",
                                    cp      : 97200,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 XXX XXX",
                                    fax     : "0596 XX XX XX",
                                    port    : "0696 07 04 34"
                                  }
                      }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.tel.port);
console.log(Contacts[1].coordonnees.tel.port);

/* --------------------------------------------------------------------
|                     ~AJOUTER UN ELEMENT😄~                          |
-------------------------------------------------------------------- */

var Couleurs = [ "Rouge", "Jaune", "Vert"];

/**
 * Si je souhaite ajouter un élément dans mon tableau.
 * Je fais appel à la fonction push() qui me renvoi le 
 * nombre d'éléments de mon tableau; que je peux récupérer
 * facultativement dans un variable.
 */

 console.log(Couleurs);
 var nombreElementsDeMonTableau= Couleurs.push("Orange");
 console.log(Couleurs);
 console.log(nombreElementsDeMonTableau);

 /**
  * NB : La fonction unshift () permet d'ajouter un ou plusieurs éléments
  * en début de tableau.
  */
  /*----------------------------------------
     RECUPERER ET SORTIR LE DERNIER ELEMENT
    ----------------------------------------*/
/**
 * La fonction pop () me permet de supprimer le dernier élément de mon tableau et d'en rrécupérer la valeur.
 * 
 * La même chose est possible avec le premier élément ; en utilisant la fonction shift
 * 
 * NB : La fonction splice () vous permet de faire sortir un ou plusieurs éléments de votre tableau.  
 */


var monDernierElement = Couleurs.pop();
console.log(monDernierElement);
console.log(Couleurs);  




















