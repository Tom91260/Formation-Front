 /*--------------------------------------------
                 ~ LE DOM ~
 
 Le Dom est une interface de développement en
 javascript pour html. Grâce au DOM, je vais
 être en mesure d'accéder / modifier mon html.
 
 L'objet "document" : c'est le point d'entrée
 vers mon contenu HTML ! 
 
 Chaque page chargé dans mn navigateur à un
 objet "document". 
 --------------------------------------------*/

// -- Comment puis-je faire pour récuperer les différentes informations de ma page HTML ?
var bonjour = document.getElementById('bonjour');
console.log(bonjour);

/*-----------------------------------------------

         document.getElementByClassName

-----------------------------------------------*/

document.getElementsByClassName('contenu');
console.log('contenu'); 

// -- me  renvoi un tableau JS avec mes éléments HTML, ou encore autrement dit, une "Collection" d'éléments HTML. 

/*-----------------------------------------------

         document.getElementByTagName
 
 document.getElementByTagName() : C'est une
 fonction qui va permettre de récupérer un ou 
 plusieurs éléments (une liste) HTML à partir
 de leur * nom de balise *        
-----------------------------------------------*/

var span = document.getElementByTagName("span");console.log(span);