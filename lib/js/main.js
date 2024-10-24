$(document).ready(function () {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    fitscreen = window_height - header_height;

  $(".fullscreen").css("height", window_height);
  $(".fitscreen").css("height", fitscreen);

  //------- Active Nice Select --------//
  $("select").niceSelect();

  $(".img-pop-up").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // Search Toggle
  $("#search_input_box").hide();
  $("#search").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $("#search_input_box").slideUp(500);
  });



  /*=================================
  Javascript for banner area carousel
  ==================================*/
  $(".active-banner-slider").owlCarousel({
    items: 1,
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: true,
    navText: [
      "<img src='/assets/img/banner/prev.png'>",
      "<img src='/assets/img/banner/next.png'>",
    ],
    dots: false,
  });

  /*=================================
  Javascript for product area carousel
  ==================================*/
  $(".active-product-area").owlCarousel({
    items: 1,
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: true,
    navText: [
      "<img src='/assets/img/product/prev.png'>",
      "<img src='/assets/img/product/next.png'>",
    ],
    dots: false,
  });

  /*=================================
  Javascript for single product area carousel
  ==================================*/
  $(".s_Product_carousel").owlCarousel({
    items: 1,
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: false,
    dots: true,
  });

  /*=================================
  Javascript for exclusive area carousel
  ==================================*/
  $(".active-exclusive-product-slider").owlCarousel({
    items: 1,
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: true,
    navText: [
      "<img src='/assets/img/product/prev.png'>",
      "<img src='/assets/img/product/next.png'>",
    ],
    dots: false,
  });

  //--------- Accordion Icon Change ---------//
  $(".collapse")
    .on("shown.bs.collapse", function () {
      $(this)
        .parent()
        .find(".lnr-arrow-right")
        .removeClass("lnr-arrow-right")
        .addClass("lnr-arrow-left");
    })
    .on("hidden.bs.collapse", function () {
      $(this)
        .parent()
        .find(".lnr-arrow-left")
        .removeClass("lnr-arrow-left")
        .addClass("lnr-arrow-right");
    });

  $(document).ready(function () {
    $("#mc_embed_signup").find("form").ajaxChimp();
  });

  if (document.getElementById("js-countdown")) {
    var countdown = new Date("October 17, 2018");

    function getRemainingTime(endtime) {
      var milliseconds = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((milliseconds / 1000) % 60);
      var minutes = Math.floor((milliseconds / 1000 / 60) % 60);
      var hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
      var days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

      return {
        total: milliseconds,
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        days: days,
      };
    }

    function initClock(id, endtime) {
      var counter = document.getElementById(id);
      var daysItem = counter.querySelector(".js-countdown-days");
      var hoursItem = counter.querySelector(".js-countdown-hours");
      var minutesItem = counter.querySelector(".js-countdown-minutes");
      var secondsItem = counter.querySelector(".js-countdown-seconds");

      function updateClock() {
        var time = getRemainingTime(endtime);

        daysItem.innerHTML = time.days;
        hoursItem.innerHTML = ("0" + time.hours).slice(-2);
        minutesItem.innerHTML = ("0" + time.minutes).slice(-2);
        secondsItem.innerHTML = ("0" + time.seconds).slice(-2);

        if (time.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }

    initClock("js-countdown", countdown);
  }

  $(".quick-view-carousel-details").owlCarousel({
    loop: true,
    dots: true,
    items: 1,
  });

  //----- Active No ui slider --------//
  $(function () {
    if (document.getElementById("price-range")) {
      var nonLinearSlider = document.getElementById("price-range");

      noUiSlider.create(nonLinearSlider, {
        connect: true,
        behaviour: "tap",
        start: [500, 4000],
        range: {
          min: [0],
          "10%": [500, 500],
          "50%": [4000, 1000],
          max: [10000],
        },
      });

      var nodes = [
        document.getElementById("lower-value"),
        document.getElementById("upper-value"),
      ];

      nonLinearSlider.noUiSlider.on(
        "update",
        function (values, handle) {
          nodes[handle].innerHTML = values[handle];
        }
      );
    }
  });

  //-------- Have Coupon Button Text Toggle Change -------//
  $(".have-btn").on("click", function (e) {
    e.preventDefault();
    $(".have-btn span").text(function (i, text) {
      return text === "Have a Coupon?" ? "Close Coupon" : "Have a Coupon?";
    });
    $(".cupon-code").fadeToggle("slow");
  });

  $(".load-more-btn").on("click", function (e) {
    e.preventDefault();
    $(".load-product").fadeIn("slow");
    $(this).fadeOut();
  });

  //------- Start Quantity Increase & Decrease Value --------//
  var value,
    quantity = document.getElementsByClassName("quantity-container");

  function createBindings(quantityContainer) {
    var quantityAmount =
      quantityContainer.getElementsByClassName("quantity-amount")[0];
    var increase = quantityContainer.getElementsByClassName("increase")[0];
    var decrease = quantityContainer.getElementsByClassName("decrease")[0];
    increase.addEventListener("click", function () {
      increaseValue(quantityAmount);
    });
    decrease.addEventListener("click", function () {
      decreaseValue(quantityAmount);
    });
  }

  function init() {
    for (var i = 0; i < quantity.length; i++) {
      createBindings(quantity[i]);
    }
  }

  function increaseValue(quantityAmount) {
    value = parseInt(quantityAmount.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    quantityAmount.value = value;
  }

  function decreaseValue(quantityAmount) {
    value = parseInt(quantityAmount.value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0) value--;
    quantityAmount.value = value;
  }

  init();

  //------- End Quantity Increase & Decrease Value --------//

  /*----------------------------------------------------*/
  /*  Google map js
    /*----------------------------------------------------*/

  $(document).ready(function () {
    $('a[data-toggle="tab"]').on("click", function (e) {
      e.preventDefault();
      $(this).tab("show");
    });
  });
});
