// -- lesFlemards.js

var Etudiants = ['Riad', 'Aristide', 'Thomas', 'Olivier', 'Florian'];


var PremierTrimestre =[
        {
            Prenom: "Riad",
            Nom   : "Zitouni",
            MoyennesParMatières : {
            Français : 13,
            Maths    : 10,
            Physique : 14,
            Histoire : 9
            }
        },
        {
            Prenom: "Aristide",
            Nom: "Bassole",
            MoyennesParMatières : {
            Français : 14,
            Maths    : 12,
            Physique : 11,
            Histoire : 16
            }
        },
        {
            Prenom: "Thomas",
            Nom: "De Macedo",
            MoyennesParMatières : {
            Français : 14,
            Maths    : 10,
            Physique : 7,
            Histoire : 15
            }
        },
        {
            Prenom: "Olivier",
            Nom: "Charpentier",
            MoyennesParMatières : {
            Français : 15,
            Maths    : 11,
            Physique : 12,
            Histoire : 8
            }
        },
        {
            Prenom: "Florian",
            Nom: "Bouteille",
            MoyennesParMatières : {
            Français : 10,
            Maths    : 14,
            Physique : 16,
            Histoire : 13
            }
        }
];    

console.log(PremierTrimestre);
NbEtudiant = 5;

function w(CeciEstUnParametreDeMaFonction){
    document.write(CeciEstUnParametreDeMaFonction);
}
function l(e) {
    console.log(e);
}

//l(PremierTrimestre);

w('<ol>');
// -- Je souhaite afficher la liste de mes étudiants.
for(let i = 0 ; i <PremierTrimestre.length; i++){ 
    // -- On récupère l'Objet Etudiant de l'Itération
    let Etudiant = PremierTrimestre[i];
    // -- Aperçu dans la console
    l(Etudiant);
    // -- Ici, mes variables seront remises à 0 à chaque étudiant (itération)
    var NombreDeMatiere = 0, SommeDesNotes = 0;
    // -- Afficher le Prénom et le Nom d'un Etudiant
    w('<li>');
        w(Etudiant.Prenom + ' ' + Etudiant.Nom);
        w('<ul>');   
            for(let matiere in Etudiant.moyenne){
                l(matiere);
                l(Etudiant.moyenne[matiere])

                NombreDeMatiere++;
                SommeDesNotes += Etudiant.moyenne[matiere];

                w('<li>');
                    w( matiere + ' : ' + Etudiant.moyenne[matiere] );
                w('</li>')
            }// -- Fin de la Boucle Matière
            w('<li>');
                w('<strong>Moyenne Générale : </strong>' + ( SommeDesNotes / NombreDeMatiere ).toFixed(2) );
            w('</li>');
        w('</ul>');
    w('</li>');    
} // -- Fin de la Boucle Etudiant
w('</ol>');
