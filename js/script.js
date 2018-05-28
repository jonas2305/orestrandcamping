
$(document).ready (function () {


    $(".dot").click(function () {
        var dotId = $(this).attr('data-dotid');
        $('#'+dotId).show();
    });

    $(".overlayClose").click(function () {
        $(".videoBeskrivelse").hide();
    });



    $(function(){
        $('#all').click(function(){
            $('.aktivitetElement').show();
            return false;
        });

        $('#15km').click(function(){
            $('.aktivitetElement').show();
            $('.aktivitetElement').not('.a15km').hide();
            return false;
        });

        $('#30km').click(function(){
            $('.aktivitetElement').show();
            $('.aktivitetElement').not('.a30km').hide();
            return false;
        });

        $('#60km').click(function(){
            $('.aktivitetElement').show();
            $('.aktivitetElement').not('.a60km').hide();
            return false;
        });

        $('#60kmPlus').click(function(){
            $('.aktivitetElement').show();
            $('.aktivitetElement').not('.a60kmPlus').hide();
            return false;
        });
    });


});