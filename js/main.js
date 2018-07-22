$(function() {
    //Apply tooltip for each element with data-toggle attr. = tooltip
    $('[data-toggle="tooltip"], #tweetMoreBtn, #moreUserActions').tooltip({
        delay: {
            show: 200,
            hide: 0
        },
        animation: false
    })

    // Hide tooltip when drop-down menu is shown
    $('#tweetMoreBtn').on('click', function() {
        $('#tweetMoreBtn').tooltip('hide')
    })

    $('[data-toggle="popover"]').popover({
        html: true,
        content: function() {
            return $('#user-' + $(this).attr('data-user')).html()
        },
        trigger: "hover",
        placement: 'top',
        delay: 200
    })
})

$(document).ready(function() {
    $(window).scroll(function() {
        var navOffset = $('.navbar-secondary').offset().top
        console.log(navOffset)
        if (navOffset > 470.1) {
            $(".banner").addClass('bannerSticky')
            $(".google-logo").addClass('hide')
            $(".google-logo-small").addClass('show')
        } else {
            $(".banner").removeClass('removeClass')
            $(".google-logo").removeClass('hide')
            $(".google-logo-small").removeClass('show')
        }
    })
})