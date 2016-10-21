/*$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4
})
});*//*
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})*/

$(document).ready(function () {
        // Menu.
    var $menu = $('#menu');
    var $body = $('body');

    $menu.wrapInner('<div class="inner"></div>');

    $menu._locked = false;

    $menu._lock = function() {

        if ($menu._locked)
            return false;

        $menu._locked = true;

        window.setTimeout(function() {
            $menu._locked = false;
        }, 350);

        return true;

    };

    $menu._show = function() {

        if ($menu._lock())
            $body.addClass('is-menu-visible');

    };

    $menu._hide = function() {

        if ($menu._lock())
            $body.removeClass('is-menu-visible');

    };

    $menu._toggle = function() {

        if ($menu._lock())
            $body.toggleClass('is-menu-visible');

    };

    $menu
        .appendTo($body)
        .on('click', function(event) {
            event.stopPropagation();
        })
        .on('click', 'a', function(event) {

            var href = $(this).attr('href');

            event.preventDefault();
            event.stopPropagation();

            // Hide.
                $menu._hide();

            // Redirect.
                if (href == '#menu')
                    return;

                window.setTimeout(function() {
                    window.location.href = href;
                }, 350);

        })
        .append('<a class="close" href="#menu">Close</a>');

    $body
        .on('click', 'a[href="#menu"]', function(event) {

            event.stopPropagation();
            event.preventDefault();

            // Toggle.
                $menu._toggle();

        })
        .on('click', function(event) {

            // Hide.
                $menu._hide();

        })
        .on('keydown', function(event) {

            // Hide on escape.
                if (event.keyCode == 27)
                    $menu._hide();

        });

    $("#testimonial").owlCarousel({
        items: 1,
        loop:true,
        autoplay: true,
        navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
        center: true,
        margin: 10,
        nav: true,
        dots: false,
        autoHeight: true
    });

    $("#innerheader2").owlCarousel({
        items: 1,
        loop:true,
        autoplay: true,
        /*navText: [],
        center: true,
        margin: 10,
        nav: true,
        autoHeight: true*/
    });

});

$('.inline-popup').magnificPopup({
  type:'inline',
  midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  gallery:{
    enabled:true
  }
});
