(function( $ ) {
    'use strict';

    $(document).ready(function(){
        $(document).find("#accordion").accordion({
            heightStyle: "content"
        });
        var hash = window.location.hash;
        var anchor = $('#' + hash);
        if (anchor.length > 0) {
            anchor.click();
        }
    });
})( jQuery );