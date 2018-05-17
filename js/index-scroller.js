var heroShrinker = function() {
    var hero = $('.hero-nav'),
        heroHeight = $('.hero-nav').outerHeight(true);
        $(hero).parent().css('padding-top', heroHeight);
        /*newBackground = "url(http://wefunction.com/wordpress/wp-content/uploads/2015/04/free-photos-sites-vol2.jpg)";*/  
        newBackground = "url(../images/img_fjords_wide)";
    $(window).scroll(function() {
        var scrollOffset = $(window).scrollTop();
        if (scrollOffset < heroHeight) {
            $(hero).css('height', (heroHeight - scrollOffset));          
           /*$('h1').text('About');*/
        }
        if (scrollOffset > (heroHeight - 215)) {
            hero.addClass('fixme');
            /*hero.css("background-image", newBackground);*/  
        } else {
            hero.removeClass('fixme');                  
           /*$('h1').text('About');*/
        };
    });
}
heroShrinker();