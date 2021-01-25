$(function() {

    $('.tab').hide();
    $('#home-tab').show();
    $('#home-tab p').textillate();
    $('#home-tab p').textillate({ in : {
            effect: 'fadeIn',
            delay: 200
        }
    });
    $('#home-tab button').click(function() {
        $('.tab').hide();
        $('#about-tab').show();
        $('#about-btn').addClass("active");
        $('nav').addClass("down");
        $('footer a').addClass("fadeUp");
    });
    $(".btn").click(function() {
        $('.btn').removeClass("active");
        $('.tab').hide();
        var idTab = $(this).attr('id');
        var idAttr = idTab.split("-");
        var idTab = idAttr[0];
        var idTab = "#" + idTab + "-tab";
        $(idTab).show();
        $(this).addClass("active");
    });
    $('#projects-tab div').magnificPopup({
        delegate: 'a',
        type: 'image'
    });

});