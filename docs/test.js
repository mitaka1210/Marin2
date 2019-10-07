$('li.nav-about').click(function () {
    $(this).find('ul').toggle();
    $(this).siblings('li').find('ul').hide();
});

$(' li.nav-industry').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, "fast");
    $(this).find('ul').toggle();
    $(this).siblings('li').find('ul').hide();
});
$('li.nav-application').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, "fast");
    $(this).find('ul').toggle();
    $(this).siblings('li').find('ul').hide();
});
