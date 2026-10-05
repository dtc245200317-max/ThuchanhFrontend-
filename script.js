// Đợi cấu trúc DOM tải hoàn tất trước khi kích hoạt kịch bản
document.addEventListener("DOMContentLoaded", function () {
    // 1. Truy vấn phần tử nút biểu tượng menu và danh sách menu
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    // 2. Lắng nghe sự kiện click vào biểu tượng ☰
    menuIcon.addEventListener("click", function () {
        // Bật/Tắt class 'active' trên .nav-links
        navLinks.classList.toggle("active");
    });
});