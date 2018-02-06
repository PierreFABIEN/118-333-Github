$(function() {
  // On recupere la position du bloc par rapport au haut du site
  var position_top_raccourci = $("#fix-mobile").offset().top;

  //Au scroll dans la fenetre on d�clenche la fonction
  $(window).scroll(function() {

    //si on a defile de plus de 150px du haut vers le bas
    if ($(this).scrollTop() > position_top_raccourci) {

      //on ajoute la classe "fixNavigation" a <div id="fix-mobile">
      $('#fix-mobile').addClass("fixNavigation");
    } else {

      //sinon on retire la classe "fixNavigation" a <div id="fix-mobile">
      $('#fix-mobile').removeClass("fixNavigation");
    }
  });
});
