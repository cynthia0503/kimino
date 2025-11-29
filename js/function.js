$(function () { // DOMの準備ができたら実行
  $(window).scroll(function () {
    $('.fv .fade-up').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 180) {
        $(this).addClass('fadein-up-active');
      }
    });
  }).scroll(); //
  // または .trigger('scroll');
});

$(function () {
  // スクロールイベントハンドラの設定
  $(window).scroll(function () {
    $('.fv .fade-up2').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 180) {
        $(this).addClass('fadein-up-active2');
      }
    });
  }); // ハンドラの設定はここで終了

  // ページ読み込み完了（DOM Ready）後、800ミリ秒（0.8秒）後に実行
  setTimeout(function () {
    $(window).trigger('scroll');
  }, 0);
});


// スクロールしたら下からフェードイン
$(function () {
  $(window).scroll(function () {
    $('.fade-up').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 180) {
        $(this).addClass('fadein-up-active');
      }
    });

    $('.fadein-right').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 180) {
        $(this).addClass('fadein-right-active');
      }
    });

    $('.fadein-left').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 180) {
        $(this).addClass('fadein-left-active');
      }
    });

    $('.fadein-blur').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 180) {
        $(this).addClass('fadein-blur-active');
      }
    });
  });
});


//無限ループスライダー
const swiper1 = new Swiper(".swiper-l", {
  loop: true, // ループ有効
  slidesPerView: 1, // 一度に表示する枚数
  speed: 800, // ループの時間
  allowTouchMove: true, // スワイプ無効
  autoplay: {
    // delay: 3000, // 途切れなくループ
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".teachers-swiper", {
  loop: true, // ★重要：loopがtrueだと「最初」「最後」が存在しなくなる
  slidesPerView: 1,
  speed: 800,
  allowTouchMove: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function () {
      updateNavButtons(this);
    },
    slideChange: function () {
      updateNavButtons(this);
    }
  }
});

// ▼ ナビゲーション非表示関数
function updateNavButtons(swiper) {
  const next = document.querySelector(".swiper-button-next");
  const prev = document.querySelector(".swiper-button-prev");

  // 最初のスライド → prev 隠す
  if (swiper.activeIndex === 0) {
    prev.style.display = "none";
  } else {
    prev.style.display = "";
  }

  // 最後のスライド → next 隠す
  if (swiper.activeIndex === swiper.slides.length - 1) {
    next.style.display = "none";
  } else {
    next.style.display = "";
  }
}



// access

//アコーディオン
// .accordion_one
$(function () {
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.accordion_one .accordion_header').click(function () {
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass("open");
    //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
    $('.accordion_one .accordion_header').not($(this)).next('.accordion_one .accordion_inner').slideUp();
    $('.accordion_one .accordion_header').not($(this)).removeClass("open");
    $('.accordion_one .accordion_header.stay').not($(this)).toggleClass("open");
  });
});



$(function () {
  //ボタンのイベント
  $(".detail-point3").click(function () {
    $('#point3-detail').css("display", "block");
    const qTop = $('#point3-detail').offset().top;
    $("html").animate({ scrollTop: qTop });
  });
  /*point2*/
  $(".detail-education").click(function () {
    $('#education-detail').css("display", "block");
    const qTop = $('#education-detail').offset().top;
    $("html").animate({ scrollTop: qTop });
  });

});


document.addEventListener("DOMContentLoaded", () => {
  const floatBtn = document.querySelector(".float");
  if (!floatBtn) return;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (window.innerWidth >= 1025) {
      // PC: 800px以上スクロールで表示
      if (scrollY > 800) {
        floatBtn.style.display = "block";
      } else {
        floatBtn.style.display = "none";
      }
    } else {
      // スマホ: 500px以上スクロールで表示
      if (scrollY > 500) {
        floatBtn.style.display = "block";
      } else {
        floatBtn.style.display = "none";
      }
    }
  });
});





