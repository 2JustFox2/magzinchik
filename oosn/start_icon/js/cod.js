$(window).scroll(function(){
    $('.main-nav-wrap').toggleClass('header-has-background', $(this).scrollTop() > 0);
});