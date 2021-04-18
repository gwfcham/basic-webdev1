$(window).scroll(function () {
    $('.fade-in').each(function () {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
            $(this).addClass('is-visible');
        }
    });
});

function send_mail(){
    var f_name = $('#firstname').val();
    var l_name = $('#lastname').val();
    var ordernum= $('#ordernum').val();
    var message = $('#message').val();
    window.location.href = 'mailto:info@ivilon.com?subject=The subject - ' +f_name +  ' '+ l_name + '-' + ordernum + '&body=' + message;
}


function get_action(form) {
    var v = grecaptcha.getResponse();
    if (v.length == 0) {
        document.getElementById('captcha').innerHTML = "You can't leave Captcha Code empty";
        return false;
    }
    else {
        document.getElementById('captcha').innerHTML = "Captcha completed";
        return true;
    }
}







