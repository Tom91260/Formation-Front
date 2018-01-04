$(function() {

        // -- Tableau de Membres
        var membres = [
        {'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
        {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
        {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
        {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
        ];

// -- Initialisation des Variables...

// -- Récupération de différents éléments
var form         = $('#refisterForm');
var bienvenue    = $('#Bienvenue');
var pseudo       = $('#pseudo');
var age          = $('#age');
var email        = $('#email');
var mdp          = $('#mdp');
var suubmit      = $('#submit');
var pseudoError  = $('.pseudoError');
var ageError     = $('.ageError');


        // -- ETAPE 1 & 3
        pseudo.on('input', function(e){
            // console.log(pseudo.val());
            // -- A. Parcourir mon tableau de membre.
            for (let i = 0 ; i < membres.length ; i++){
           
                // -- B. Si la saisie d'un pseudo par mon utilisateur correspond à un pseudo dans mon tableau de membre, alors ma condition s'applique.
                if(pseudo.val() === membres[i].pseudo) {
                   
                        // -- C. J'ai trouvé une correspondance, je vais aficher un message d'alerte.
                        pseudoError.fadeIn;
                  
                        // -- Je désactive le bouton.
                        submit.prop('disabled',true);
                        // submit.attr('disabled',true);
                        
                        // -- je stop la boucle
                        break;
                   } else {

                        // -- On cache l'erreur et on réactive le bouton
                        pseudoError.fadeOut();
                        submit.removeAttr('disabled');
                        bienvenue.text(pseudo.val());
                   
                
                   }

                }

        });

        // -- ETAPE 2

        age.on('change', function(e) {
            if(age.val() < 18) {
                    ageError.fadeIn();
                    submit.removeAttr('disabled', true);
            } else {
                ageError.fadeOut();
                submit.removeAttr('disabled');
            }
        });


});

        // -- ETAPE 4A

        form.on('submit', function (event) {
           event.preventDefault();
           let contact = {
                   pseudo  : pseudo.val,
                   age     : age.val(),
                   email   : email.val (),
                   mdp     : mdp.val()

           };
        
        // -- On ajoute le contact avec les membres
        membres.push(contact);

        // -- Réinitialisation du Formulaire
        this.reset();

        // -- ETAPE 4B
        $(`
           <p> 
                Merci ${contact.pseudo} !
                <br><br><strong>Tu es maintenant inscrit Bravo... </strong>
                <br><br><u>Voici la liste de nos membres :</u>
           </p>
        `).appendTo ($('body'));

        // -- Générer la liste de membre
        for (let i = 0; i < membres.length; i++) {
           $(`
                <li>
                      ${membres[i].pseudo} : ${membres[i].age} ans.
                </li>
           `).appendTo(ul);
        }

        ul.appendTo($('body'));

});
