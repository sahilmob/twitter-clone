$(function() {
    //Apply tooltip for each element with data-toggle attr. = tooltip
    $('[data-toggle="tooltip"], #tweetMoreBtn').tooltip({
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
})