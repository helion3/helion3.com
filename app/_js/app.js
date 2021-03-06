// Basic no conflict. Using $ for consistency.
(function($){

  // Dom ready
  $(function(){

    // Set "home" when empty pathname
    var path = location.pathname;
    if( path === "/" ){
      $('nav a').get(0).addClass('at');
      return;
    }

    // Check other links
    var pathFound = false;
    $('nav a').each(function(){
      if( this.href.indexOf(path) > 0 ){
        $(this).addClass('at');
        pathFound = true;
      }
    });

    // Default to "article" for non-empty 
    if( !pathFound ){
      $('nav a').get(1).addClass('at');
    }
  });
})(simpleDOM);