document.onreadystatechange = function(){
  if (document.readyState == "complete" || document.readyState == "loaded") {
    // Basic no conflict. Using $ for consistency.
    (function($){

        var path = location.pathname;
        var pathFound = false;
        $('nav a').each(function(elem){
          if( elem.href.indexOf(path) > 0 ){
            $(elem).addClass('at');
            pathFound = true;
          }
        });

        if( !pathFound ){
          $( $('nav a').get(1) ).addClass('at');
        }

    })(simpleDOM);
  }
};