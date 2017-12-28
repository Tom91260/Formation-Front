/* ------------------------------
       LA CONCATENATION
--------------------------------*/

var debutDePhrase      = "Aujourd'hui"
var laDate             = new Date();
var suiteDePhrase      = ", sont présents : ";
var nombreDeStagiaires = 18;
var finDePhrase         = "stagiaires.<br>";

// -- Nous souhaitons maintenant, grâce à la concaténation afficher tout ce petit monde, en un seul moreceau !

document.write(debutDePhrase + laDate.getDate() + '/' + ( laDate.getMonth ()+1) + '/' + laDate.getFullYear() + nombreDeStagiaires + finDePhrase );

var Phrase1     = "Je m'appelle";
var Phrase2     = "Thomas et j'ai";
var age         = 21;
var Phrase3     = "ans !";

document.write(Phrase1 + Phrase2 + age + Phrase3);


