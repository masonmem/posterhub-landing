$(document).ready(function(){

    var isMobile = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = true;
    }

    //var isMobile = window.matchMedia("only screen and (max-width: 760px)");

    // Disable scroll
    $('.carousel').flipster(
    {
        enableMousewheel: false
    }
    );


    $('.flip').on(isMobile ? 'touchend' : 'click', function() {
        // If the item clicked on is not the focus and has been flipped, reset it to the poster
        var reflip_case = false;
        $('.flip.details').each(function() {
            if($(this).closest('li').parent().attr('class').indexOf('flip-current') < 0) {
                $(this).flippyReverse();
                $(this).removeClass('details');
                reflip_case = true;
            }
        });

        // If item is clicked on and has been flipped, reset it to the poster
        if ($(this).attr('class').indexOf('details') >= 0) {
            $(this).flippyReverse();
            $(this).removeClass("details");
        }
        else if (!reflip_case) { // Else, it should be flipped to show poster details
            var details = $(this).children('.posterDetails').html();
            $(this).flippy({
                color_target: '#fff',
                duration: 150,
                verso: '<div style="height: ' + $(this).css('height') + '; width: ' + $(this).css('width') + '; background: #fff; color: #000;">' + details + '</div>'
            });

            // Mark the item as having been flipped
            $(this).addClass('details');
        }
    });

});
