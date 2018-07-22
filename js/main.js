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