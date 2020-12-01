$(function (){
    $('.tab').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('a')).removeClass('tabs-content--active');
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });
    $('.pagination__list-item').on("click", ".pagination__list-link", function() {
        $(this).addClass('pagination__list-link__active').parent().siblings().children().removeClass('pagination__list-link__active');
    });
    new WOW().init();
});