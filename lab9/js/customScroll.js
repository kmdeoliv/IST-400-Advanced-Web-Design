$.fn.customScroll = function(options) {
    var settings = $.extend({}, {
        duration: 500
    }, options);
    return this.each(function() {
        $(this).click(function() {
            event.preventDefault();
            var href = $(this).attr("href");
            /*console.log(href);*/
            var offset = $(href).offset().top;
            /*console.log(offset);*/
            $('body').animate({
                scrollTop: offset
            }, settings.duration);
        });
    });
};