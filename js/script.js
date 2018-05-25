
$(document).ready (function () {


    $(".dot").click(function () {
        var dotId = $(this).attr('data-dotid');
        $('#'+dotId).show();
    });

    $(".overlayClose").click(function () {
        $(".videoBeskrivelse").hide();
    });


});