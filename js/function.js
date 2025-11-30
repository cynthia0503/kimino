

$(function () {
  // ==============================
  // フェードアップアニメーション
  // ==============================
  function fadeUpOnScroll() {
        $('.fv .fade-up').each(function () {
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll > position - windowHeight + 180) {
        $(this).addClass('.fv fadein-up-active');
      }
    });

    $('.fade-up').each(function () {
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll > position - windowHeight + 180) {
        $(this).addClass('fadein-up-active');
      }
    });
  }

  $(window).scroll(fadeUpOnScroll).scroll();


  // ==============================
  // 無限ループスライダー（Swiper）
  // ==============================
  const swiper1 = new Swiper(".swiper-l", {
    loop: true,
    slidesPerView: 1,
    speed: 5000,
    allowTouchMove: true,
    autoplay: { delay: 0 }
  });

  const swiper2 = new Swiper(".teachers-swiper", {
    loop: true,
    slidesPerView: 1,
    speed: 800,
    allowTouchMove: true,
    autoplay: { delay: 5000 },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    on: {
      init: function () { updateNavButtons(this); },
      slideChange: function () { updateNavButtons(this); }
    }
  });

  function updateNavButtons(swiper) {
    const next = document.querySelector(".swiper-button-next");
    const prev = document.querySelector(".swiper-button-prev");

    prev.style.display = swiper.activeIndex === 0 ? "none" : "";
    next.style.display = swiper.activeIndex === swiper.slides.length - 1 ? "none" : "";
  }


  // ==============================
  // アコーディオン（FAQ等）
  // ==============================
  $('.accordion_one .accordion_header').click(function () {
    const $this = $(this);

    $this.next('.accordion_inner').slideToggle();
    $this.toggleClass("open");

    $('.accordion_one .accordion_header').not($this)
      .next('.accordion_inner').slideUp()
      .end().removeClass("open");

    $('.accordion_one .accordion_header.stay').not($this).toggleClass("open");
  });


  // ==============================
  // 詳細表示ボタン（point3, education）
  // ==============================
  $(".detail-point3").click(function () {
    $('#point3-detail').show();
    $('html, body').animate({ scrollTop: $('#point3-detail').offset().top }, 500);
  });

  $(".detail-education").click(function () {
    $('#education-detail').show();
    $('html, body').animate({ scrollTop: $('#education-detail').offset().top }, 500);
  });
});


// ==============================
// 浮動ボタン表示（PC / スマホ）
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const floatBtn = document.querySelector(".float");
  if (!floatBtn) return;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const threshold = window.innerWidth >= 1025 ? 800 : 500;

    floatBtn.style.display = scrollY > threshold ? "block" : "none";
  });
});