$( 'a[data-mate]' ).on( 'click', function () {
    var $this = $( this ),
        mate = $this.attr( 'data-mate' );

    $( 'a[data-mate], .mate[data-mate]' ).removeClass( 'active' );

    $this.addClass( 'active' );
    $( '.mate[data-mate="' + mate + '"]' ).addClass( 'active' );

    return false;
} );