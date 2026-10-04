// Custom Script for CodeGym Career Landing Page

$(document).ready(function () {
    // Kích hoạt hiệu ứng Material Design Ripple
    Waves.attach('.btn', ['waves-light']);
    Waves.init();

    // Smooth Scrolling khi nhấp vào liên kết menu Navigation
    $('.smooth-scroll a[href*="#"], a.smooth-scroll[href*="#"]').on('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // Xử lý gửi Form Đăng ký (Hero & Main Form)
    $('#hero-form, #main-register-form').on('submit', function (e) {
        e.preventDefault();
        alert('Cảm ơn bạn đã đăng ký! Chuyên gia tư vấn CodeGym Career sẽ liên hệ với bạn trong vòng 24 giờ.');
        this.reset();
    });
});