$(document).ready(function () {
    "use strict"; // Bắt đầu chế độ nghiêm ngặt, giúp phát hiện lỗi trong mã JavaScript.

    //------- Kích hoạt Nice Select --------//
    $("select").niceSelect(); // Sử dụng Nice Select để cải thiện giao diện dropdown select.

    /*==========================
    JavaScript cho header sticky
    ============================*/
    $(".sticky-header").sticky(); // Kích hoạt chức năng sticky cho header, làm cho nó luôn hiển thị ở đầu trang khi cuộn.

    // Hiệu ứng hover cho menu dropdown
    $(".navbar-nav li.dropdown").hover(
        function () {
            // Khi di chuột vào item dropdown
            $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn(500); // Hiện dropdown menu với hiệu ứng fadeIn.
        },
        function () {
            // Khi chuột rời khỏi item dropdown
            $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut(500); // Ẩn dropdown menu với hiệu ứng fadeOut.
        }
    );

    // Chọn tất cả các liên kết có chứa hash
    $('.main-menubar a[href*="#"]')
        // Loại bỏ các liên kết không thực sự trỏ đến đâu cả
        .not('[href="#"]') // Loại bỏ liên kết trống
        .not('[href="#0"]') // Loại bỏ liên kết không chỉ đến #0
        .click(function (event) {
            // Xử lý các liên kết trên trang
            if (
                location.pathname.replace(/^\//, "") == // Kiểm tra xem đường dẫn hiện tại có trùng với đường dẫn của liên kết không
                this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname // Kiểm tra xem hostname có giống nhau không
            ) {
                // Tìm phần tử để cuộn tới
                var target = $(this.hash); // Lấy phần tử tương ứng với hash trong liên kết
                target = target.length
                    ? target // Nếu tìm thấy phần tử với hash
                    : $("[name=" + this.hash.slice(1) + "]"); // Nếu không, tìm phần tử với name tương ứng
                // Kiểm tra xem phần tử cuộn tới có tồn tại không
                if (target.length) {
                    // Chỉ ngăn chặn mặc định nếu animation thực sự sẽ xảy ra
                    $("html, body").animate(
                        {
                            scrollTop: target.offset().top - 70, // Cuộn đến vị trí của phần tử (giảm 70px để không bị che bởi header sticky)
                        },
                        1000, // Thời gian cuộn (1000ms = 1 giây)
                        function () {
                            // Callback sau khi animation
                            // Phải thay đổi focus!
                            var $target = $(target); // Gán phần tử mục tiêu vào biến $target
                            $target.focus(); // Đặt focus vào phần tử mục tiêu
                            if ($target.is(":focus")) {
                                // Kiểm tra xem mục tiêu đã được focus chưa
                                return false; // Nếu đã focus thì không làm gì thêm
                            } else {
                                $target.attr("tabindex", "-1"); // Thêm tabindex cho các phần tử không thể focus
                                $target.focus(); // Đặt lại focus vào phần tử mục tiêu
                            }
                        }
                    );
                }
            }
        });
});
