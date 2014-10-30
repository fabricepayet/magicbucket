(function () {
    "use strict";

    var timeout;

    function slideMate () {
        var $currentA = $( 'a[data-mate].active' );

        if( $currentA.length <= 0 ) {
            $currentA = $( '.members li:last-child a');
        }

        var $currentLi = $currentA.removeClass( 'active' ).parent( 'li' ),
            currentIndex = $currentLi.index(),
            max = $currentLi.parent('ul' ).children('li' ).length - 1,
            nextIndex = ++currentIndex;

        if( nextIndex > max ) {
            nextIndex = 0;
        }

        $currentLi.parent( 'ul' ).find( 'li:eq(' + nextIndex + ') a' ).addClass( 'active' );
        $( '.mates article' ).removeClass( 'active' );
        $( '.mates article:eq(' + nextIndex + ')' ).addClass( 'active' );

        timeout = setTimeout( slideMate, 3000 )
    }

    slideMate();

    $( 'a[data-mate]' ).on( 'click', function () {
        clearTimeout( timeout );

        var $this = $( this ),
            mate = $this.attr( 'data-mate' );

        $( 'a[data-mate], .mate[data-mate]' ).removeClass( 'active' );

        $this.addClass( 'active' );
        $( '.mate[data-mate="' + mate + '"]' ).addClass( 'active' );

        return false;
     } );
}());

// Smooth scroll
$( "a[href^=\"#\"]" ).on( "click", function () {
    var theId = $( this ).attr( "href" ),
        $targetElement = $( theId );

    if( $targetElement.length > 0 ) {
        $( "html, body" ).animate( {
            scrollTop : $( theId ).offset().top
        }, "slow" );
    }

    //return false;
});