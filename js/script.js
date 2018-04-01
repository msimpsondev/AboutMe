$(document).ready(function(){
   $('.social-icon').each(function(){

      // wrap the image link in a div
      $( this ).parent().wrap( '<div class="img-link-wrapper" style="display: inline-block; text-align: center;"></div>' );

      // set the height of the div to the height of the image
      var imgHeight = $( this ).height();
      var imgWidth = $( this ).width();
      $( this ).parents( 'div.img-link-wrapper' )
        .css({ 'height' : imgHeight,
               'width' : imgWidth
             });

      // set the rest of the initial css
     $( this ).css({ 'height' : '94%',
                     'width' : 'auto',
                     'margin' : '3% 0'
                   });

   });

   // set up a .hovered class
   $( 'body' ).append( '<style>img.img-link-hovered{ margin-top: 0 !important; margin-bottom: 0 !important; height: 100% !important; }</style>' );

   // add/remove the class on hover
   $( 'a img' ).hover(
     function() {
     $( this ).addClass( 'img-link-hovered' );
     }, function() {
       $( this ).removeClass( 'img-link-hovered' );
     }
   );

});
