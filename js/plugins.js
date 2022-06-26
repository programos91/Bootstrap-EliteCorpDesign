$(function(){
    var winH      = $(window).height();
    var upperH    = $('.upper-navbar').innerHeight();
    var navH      = $('.navbar').innerHeight();

    $('.slider .image-me').height( winH - (upperH + navH));

    $('.featured-work ul li').on('click', function (){
        $(this).addClass('active').siblings().removeClass('active');
        console.log($(this).data('class'));
        if ($(this).data('class') === 'all') {
            $('.featured-work .row img').css('opacity', 1);
        }else{
            $('.featured-work .row img').css('opacity', 0.2);
            $($(this).data('class')).css('opacity', 1);
        }

    });

});
$('.number').counterUp({time: 2000});