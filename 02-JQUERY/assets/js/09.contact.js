// -- Initialisation de jQuery (DOM READY)
$(function() {
    
    // -- Déclaration de Variables
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
    function ajouterContact(UnContact) {

        // -- Ajouter "UnContact" dans "CollectionDeContacts"
        CollectionDeContacts.push(UnContact);
        // -- Observez l'ajout des contacts dans la collection.
        console.log(CollectionDeContacts);   
        $('.aucuncontact').hide();

        // -- Misa à jour du HTML
        $(`  
          <tr>
                <td>` + UnContact.nom + `</td>
                <td>${UnContact.prenom}</td>
                <td>${UnContact.email}</td>
                <td>${UnContact.tel}</td>
            </tr>
        `).appendTo ($('#LesContacts > tbody'));
      
        // -- Réinitialisation du Formulaire
        reinitialisationDuFormulaire();

        // -- Afficher la Notification
        afficheUnenotification();

        // -- En Javascript
        document.getElementById('contact').reset();

        // -- Autre méthode
        $('#contact.form-control').val('');
        
    }

    // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
    function reinitialisationDuFormulaire() {
        
        // -- En jQuery
        $('#contact').get(0).reset();
    }

    // -- Affichage d'une Notification
    function afficheUneNotification() {
        $('.alert-contact').fadeIn().delay(4000).fadeOut();
    }

    // -- Vérification de la présence d'un Contact dans Contacts
    function estCeQunContactEstPresent(UnEmail) {
        // -- Booleen qui indique la présence d'un contact dans ma collection. 
        let estPresent = false;

        // -- On parcourt le tableau à la recherche d'une correspondance.
        for(let i = 0 ; i < CollectionDeContacts.length ; i++){
            if(UnEmail === CollectionDeContacts[i].email) {
                // -- Si une correspondance est trouvé "estPresent" passe à VRAI (true)
                estPresent = true;
                // -- On arrête la boucle, plus besoin de poursuivre.
                break;
            }
        } // -- endfor

        // -- on retourne le booleen
        return estPresent;
    
    }
    // -- Vérification de la validité d'un Email
    // : https://paulund.co.uk/regular-expression-to-validate-email-address
    function validateEmail(email){
        var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var valid = emailReg.test(email);

        if(!valid) {
            return false;
        } else {
            return true;
        }
    }

    /* --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon Formulaire
    $('#contact').on('submit', function(e) {

        // -- Stopper la redirection de la page
        e.preventDefault();

        // -- Récupération des champs à vérifier
        prenom = $("#prenom");
        nom    = $("#nom");
        tel    = $("#tel");
        mail   = $("#mail");

        // -- Vérification des informations...
        let mesInformationsSontValides = true;
    

        // -- Vérification du Prénom
        if(prenom.val().length == 0) {
            // -- Le champ est incorrect car il n'a pas été remplit...
            let mesInformationsSontValides = false;
        }

        // -- Vérification du Nom
        if(nom.val().length == 0) {
            // -- Le champ est incorrect car il n'a pas été remplit...
            let mesInformationsSontValides = false;
        }

        // -- Vérification du Tel
        if(nom.val().length == 0) {
            // -- Le champ est incorrect car il n'a pas été remplit...
            let mesInformationsSontValides = false;
        }

        // -- Vérification du Mail
        if(!validateEmail(email.val())) {
            mesInformationsSontValides = false;
        }

        // -- Dans le cas d'une boucle de vérification
        let ChampsAVerifier = $('#contact input:not(input[type=submit])');
        // console.log(ChampsAVerifier);
      
        for(let i = 0 ; i < ChampsAVerifier.length ; i++) {
            /*Version 1*//*
            let champ = ChampsAVerifier [i];
            // console.log($(champ));
            if($(champ.val().length == 0) {
                mesInformationsSontValides = false;
            }
        */
        
        }

        // -- Si mesInformationsSontValides
            if(mesInformationsSontValides) {
                // -- Tout est correct, Préparation du Contact
                let Contact = {
                    //cle      //valeur
                    nom         : nom.val(),
                    prenom      : prenom.val(),
                    email       : email.val(),
                    tel         : tel.val()

            };
                
        // -- Aperçu dans la console
         console.log(Contact);

        // -- Vérifier si le contact est présent, s'il ne l'es pas, executer ajouterContact...
        if(estCeQunContactEstPresent(Contact.email)) {
            alert('ATTENTION\nCe contact est déjà présent.')
        } else {
            // -- Ajout du Contact à la Collection.
            ajouterContact
        }


        else {
            // -- alert
            alert('ATTENTION\nVeuillez bien remplir tous les champs.');
        }
        // -- Sinon...
        });

}); // -- Fin de jQuery READY !