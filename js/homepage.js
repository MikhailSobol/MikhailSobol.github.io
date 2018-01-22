$(document).ready(function () {
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();

        move_text_with_scroll(scroll);
        make_active_with_scroll(scroll);

        widen_hr(scroll, '.about-wrapper');
        widen_hr(scroll, '.news-wrapper');
        widen_hr(scroll, '.services-wrapper');
        widen_hr(scroll, '.clients-wrapper');
    });

    $('footer').footerReveal({ shadow: false, zIndex: -1001 });
    scroll_to_section_on_click('.header-wrapper', '.home', 0);
    scroll_to_section_on_click('.about-wrapper', '.about', -200);
    scroll_to_section_on_click('.news-wrapper', '.news', -100);
    scroll_to_section_on_click('.services-wrapper', '.services', -100);
    scroll_to_section_on_click('.clients-wrapper', '.clients', 0);
    scroll_to_section_on_click('.clients-wrapper', '.contact', 0);
});
