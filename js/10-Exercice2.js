/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

var Etudiants = ['Riad', 'Aristide', 'Thomas', 'Olivier', 'Florian'];


var PremierTrimestre = [
        {
            Prenom: "Riad",
            Nom   : "Zitouni",
            MoyennesParMatières : {
            Français : 13,
            Maths    : 10,
            Physique : 14,
            Histoire : 9
            }
        }
    [
        {
            Prenom: "Aristide",
            Nom: "Bassole",
            MoyennesParMatières : {
            Français : 14,
            Maths    : 12,
            Physique : 11,
            Histoire : 16
            }
        }
    ]
    [
        {
            Prenom: "Thomas",
            Nom: "De Macedo",
            MoyennesParMatières : {
            Français : 14,
            Maths    : 10,
            Physique : 7,
            Histoire : 15
            }
        }
    ]
    [
        {
            Prenom: "Olivier",
            Nom: "Charpentier",
            MoyennesParMatières : {
            Français : 15,
            Maths    : 11,
            Physique : 12,
            Histoire : 8
            }
        }
    ]  
    [
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
    ]
]; 
console.log(PremierTrimestre);
NbEtudiant = 5;

for(let i= 0; i <= NbEtudiant; i++) {
    var MoyennesGénérale = PremierTrimestre[i]. MoyennesParMatières.Français +
    PremierTrimestre[i]. MoyennesParMatières.Maths + PremierTrimestre[i]. MoyennesParMatières.Physique +
    PremierTrimestre[i]. MoyennesParMatières.Histoire/NbEtudiant;
}



   