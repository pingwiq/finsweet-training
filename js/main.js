// ---------------------rating reviews
$(function () {
  const progressDone = document.querySelectorAll(".progress-done");

  progressDone.forEach((progress) => {
    progress.style.width = progress.getAttribute("data-done") + "%";
  });

  // -------------------------------------------- modal window
  const modalController = () => {
    const buttonElem = document.querySelector(".rating__button");
    const modalElem = document.querySelector(".modal");

    modalElem.style.cssText = `
	display: flex;
	visibility: hidden;
	opacity: 0;
	transition: opacity 300ms ease-in-out;
	background-color: rgba(109, 108, 115, 0.6);
`;

    const closeModal = (event) => {
      const target = event.target;

      if (target === modalElem || target.closest(".modal__close")) {
        modalElem.style.opacity = 0;

        setTimeout(() => {
          modalElem.style.visibility = "hidden";
        }, 300);
      }
    };

    const openModal = () => {
      modalElem.style.visibility = "visible";
      modalElem.style.opacity = 1;
    };

    buttonElem.addEventListener("click", openModal);
    modalElem.addEventListener("click", closeModal);
  };

  modalController();

  // --------------------------------mixitup (blog)-------------------------------
  var mixer = mixitup(".blog__list");

  $(".blog__filter-btn").on("click", function () {
    $(".blog__filter-btn").removeClass("blog__filter-btn--active");
    $(this).addClass("blog__filter-btn--active");
  });

  // ------------------------------testimonials slider---------------------//
  $(".testimonials__slider").slick({
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    draggable: false,
    dots: true,
    appendDots: $(".testimonials__dots"),
    waitForAnimate: false,
  });

  $(".testimonials__prev").on("click", function (e) {
    e.preventDefault();
    $(".testimonials__slider").slick("slickPrev");
  });

  $(".testimonials__next").on("click", function (e) {
    e.preventDefault();
    $(".testimonials__slider").slick("slickNext");
  });

  // ---------------- faq accordion-------------------- /
  $(".faq__acc-link").on("click", function (e) {
    e.preventDefault();
    //
    // $(this).toggleClass('faq__acc-link--active')
    if ($(this).hasClass("faq__acc-link--active")) {
      $(this).removeClass("faq__acc-link--active");
      $(this).children(".faq__acc-text").slideUp();
    } else {
      $(".faq__acc-link").removeClass("faq__acc-link--active");
      $(".faq__acc-text").slideUp();
      $(this).addClass("faq__acc-link--active");
      $(this).children(".faq__acc-text").slideDown();
    }
  });

  $(
    ".header__nav-list a, .service__button, .header__content-btn, .learn__more-btn, .contact__us-btn, .footer__nav-list a"
  ).on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  setInterval(() => {
    if (
      $(window).scrollTop() > 0 &&
      $(".header__top").hasClass("header__top--open") === false
    ) {
      $(".burger").addClass("burger--follow");
    } else {
      $(".burger").removeClass("burger--follow");
    }
  }, 0);

  $(".burger, .overlay").on("click", function (e) {
    e.preventDefault();
    $(".header__top").toggleClass("header__top--open");
    $(".overlay").toggleClass("overlay--show");
  });
});
