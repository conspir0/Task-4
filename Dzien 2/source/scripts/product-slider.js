import $ from 'jquery';
import Flickity from 'flickity';
//require('flickity');

const initSlider = () => {
    var elem = document.querySelector('.slider__carousel');
    var flkty = new Flickity(elem, {
        contain: true,
        pageDots: false,
        procentPosition: false,
        imageLoaded: true
    });

    var buttonGroup = document.querySelector('.slider__images');
    var buttons = buttonGroup.querySelectorAll('.image__box');
//    buttons = fizzyUIUtils.makeArray( buttons );

    $('.slider__images').on( 'click', '.image__box', function() {
        var index = $(this).index();
        flkty.select( index );
    });
//    buttonGroup.addEventListener( 'click', function( event ) {
//      // filter for button clicks
//      if ( !matchesSelector( event.target, '.image' ) ) {
//        return;
//      }
//      var index = buttons.indexOf( event.target );
//      flkty.select( index );
//    });
}

export default {
    initSlider,
}