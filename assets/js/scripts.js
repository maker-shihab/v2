$(document).ready(function () {
    $('.page_bar_home').click(function(){
        $('.header').fadeIn('headActive');
    });
    $('.page_bar_undo').click(function(){
        $('.header').fadeOut('headActive');
    });
});