
function make_active($class_to_become_active) {
    $('.active').removeClass('active');
    $($class_to_become_active).addClass('active');
}

function move_text_with_scroll($scroll) {
    if ($scroll < 500) {
        $('.header-text-wrapper').css({
            'transform': 'translate(0px, ' + $scroll / 8 + '%)'
        });
    }
}

function make_class_active_with_scroll($scroll, $class, $to_be_active) {
    if ($scroll >= $($class).offset().top - 250) {
        make_active($to_be_active);
    }
}

function make_active_with_scroll($scroll) {
    make_class_active_with_scroll($scroll, '.header-wrapper', '.home');
    make_class_active_with_scroll($scroll, '.about-wrapper', '.about');
    make_class_active_with_scroll($scroll, '.services-wrapper', '.services');
    make_class_active_with_scroll($scroll, '.news-wrapper', '.news');
    make_class_active_with_scroll($scroll, '.clients-wrapper', '.clients');
    make_class_active_with_scroll($scroll, '#footer', '.contact');
}

function scroll_to_section_on_click($section, $button, $coef) {
    $($button).click(function() {
        $('html, body').animate({
            scrollTop: $($section).offset().top + $coef
        }, 2000);
    });
}

function widen_hr($scroll, $item) {
  if ($scroll >= $($item).offset().top - 350) {
    $('.section-header-underline', $item).css("width", "40%");
  }
}
