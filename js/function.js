

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

  // -----------------------------
  // floatボタン表示処理 + footer到達で非表示
  // -----------------------------
  const floatBtn = document.querySelector(".float");
  const footer = document.querySelector("footer");

  if (floatBtn && footer) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const threshold = window.innerWidth >= 1025 ? 800 : 500;

      // 基本の表示・非表示
      if (scrollY > threshold) {
        floatBtn.style.display = "block";
      } else {
        floatBtn.style.display = "none";
      }

      // 画面下端が footer に触れたら消す
      const footerTop = footer.getBoundingClientRect().top + window.pageYOffset;
      const windowBottom = scrollY + window.innerHeight;

      if (windowBottom >= footerTop) {
        floatBtn.style.display = "none";
      }
    });
  }

  // -----------------------------
  // 動画再生処理（音声付き）
  // -----------------------------
  const video = document.getElementById("teacherVideo");
  const playBtn = document.getElementById("playBtn");

  if (video && playBtn) {
    playBtn.addEventListener("click", () => {
      video.muted = false;  // 音声 ON
      video.play();         // 再生
      playBtn.style.display = "none"; // 再生ボタン非表示
    });
  }

});