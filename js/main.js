// 'use strict';

(function ($) {

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //offCanvas Menu
    $(".canvasOpen").on('click', function () {
        $(".offCanvas-menu-wrapper").addClass("showCanvas-menu-wrapper");
        $(".offCanvas-menu-overlay").addClass("active");
    });

    $(".canvasClose, .offCanvas-menu-overlay").on('click', function () {
        $(".offCanvas-menu-wrapper").removeClass("showCanvas-menu-wrapper");
        $(".offCanvas-menu-overlay").removeClass("active");
    });


})(jQuery);