/*---------------------------------------

   LE CHAINAGE DE METHODE AVEC JQUERY 

---------------------------------------*/

$(function() {
    // -- Je souhaite cacher toutes les div de ma page HTML
    console.log($('div'));

    $('div').hide('slow', function(){
        // -- une fois que la méthode hide() est terminée, mon alerte peux s'éxecuter.
        alert('Fin du hide');
        // -- NB : La fonction s'éxecutera pour l'ensemble des élémnets du sélecteur.

        $('div').css('background','yellow');
        $('div').css('color','red');

        // je fais réapparaître mes div avec les modifications de style
        $('div').show('slow');

    }); // Fin fonction anonyme et du hide

    $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);
    
});
