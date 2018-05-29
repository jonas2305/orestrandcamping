
$(document).ready (function () {

    //jQuery til BURGERMENU ÅBEN
    $('.menuknap').click(function () {
        $('.topnavContentWrapper').show();
    });
    //jQuery til BURGERMENU LUKKE
    $('.burgermenuClose').click(function () {
        $('.topnavContentWrapper').hide();
    });



    //jQuery til oversigtkort
    //VISER TILHØRENDE VIDEOBOKS
    $(".dot").click(function () {
        var dotId = $(this).attr('data-dotid');
        $('#'+dotId).show();
    });
    //SKJULER ALLE VIDEOBOKSE
    $(".overlayClose").click(function () {
        $(".videoBeskrivelse").hide();
    });


    // jQuery til filterfunktion
    $(function(){
        // VISER ALLE ELEMENTER
        $('#all').click(function(){
            $('.aktivitetElement').show();
        });

        //SKJULER ALLE PÅ NÆR 0-15KM
        $('#15km').click(function(){
            $('.aktivitetElement').show();
            $('.aktivitetElement').not('.15km').hide();
        });

        //SKJULER ALLE PÅ NÆR 15-30KM
        $('#30km').click(function(){
            $('.aktivitetElement').show();
            $('.aktivitetElement').not('.30km').hide();
        });

        //SKJULER ALLE PÅ NÆR 30-60KM
        $('#60km').click(function(){
            $('.aktivitetElement').show();
            $('.aktivitetElement').not('.60km').hide();
        });

        $('#60kmPlus').click(function(){
            $('.aktivitetElement').show();
            $('.aktivitetElement').not('.60kmPlus').hide();
        });
    });


});