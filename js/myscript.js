jQuery(document).ready(function() {
    jQuery('ul.sf-menu').superfish();

    function calculateScroll() {
        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;
        $('.navmenu').find('.scroll_btn a').each(function() {
            contentTop.push($($(this).attr('href')).offset().top);
            contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
        })
        $.each(contentTop, function(i) {
            if (winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom) {
                $('.navmenu li.scroll_btn')
                    .removeClass('active')
                    .eq(i).addClass('active');
            }
        })
    };

    jQuery(document).ready(function() {

        // if single_page
        if (jQuery("#page").hasClass("single_page")) {} else {
            $(window).scroll(function(event) {
                calculateScroll();
            });
            $('.navmenu ul li a, .mobile_menu ul li a, .btn_down').click(function() {
                $('html, body').animate({ scrollTop: $(this.hash).offset().top - 80 }, 500);
                return false;
            });
        };
    });


    /* Superfish */
    jQuery(document).ready(function() {
        if ($(window).width() >= 750) {
            $('.navmenu ul').superfish();
        }
    });


    // /*-----------------------------------------------------------------------------------*/
    // /*	IFRAME TRANSPARENT
    // /*-----------------------------------------------------------------------------------*/
    // jQuery(document).ready(function() {
    //     $("iframe").each(function() {
    //         var ifr_source = $(this).attr('src');
    //         var wmode = "wmode=transparent";
    //         if (ifr_source.indexOf('?') != -1) {
    //             var getQString = ifr_source.split('?');
    //             var oldString = getQString[1];
    //             var newString = getQString[0];
    //             $(this).attr('src', newString + '?' + wmode + '&' + oldString);
    //         } else $(this).attr('src', ifr_source + '?' + wmode);
    //     });
    // });



});

