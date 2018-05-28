
$(document).ready (function () {


    $(".dot").click(function () {
        var dotId = $(this).attr('data-dotid');
        $('#'+dotId).show();
    });

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