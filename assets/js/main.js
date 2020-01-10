jQuery( function() {

    jQuery( '.button__menu' ).click(function() {

        jQuery('.button__layer').toggleClass('-is-active');

        jQuery( '.button__caption' )
            .text( ( jQuery( '.button__caption' )
            .text() == 'menu' ) ? 'close' : 'menu' )
            .fadeIn();

        jQuery( this ).toggleClass( '-is-active' );

        jQuery( '.menu' ).toggleClass('-is-active');

        if ( jQuery('.menu').hasClass('-is-active') ) {
            jQuery('.navbar').addClass('-is-active');
            jQuery('.search').addClass('-is-active');
            jQuery('.-white').removeClass('-is-active');
            jQuery('.-brown').addClass('-is-active');

        } else {
            jQuery('.navbar').removeClass('-is-active');
            jQuery('.search').removeClass('-is-active');
            jQuery('.-white').addClass('-is-active');
            jQuery('.-brown').removeClass('-is-active');
        }

    });
    
});
