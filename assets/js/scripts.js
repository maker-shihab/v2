$(document).ready(function () {
    $('.page_bar_home').click(function(){
        $('.header').fadeIn('headActive');
    });
    $('.page_bar_undo').click(function(){
        $('.header').fadeOut('headActive');
    });
});

$(document).ready(function(){
    $('.clients_content').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
        }
    ]
    });
});
          