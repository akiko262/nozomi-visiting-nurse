(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
});
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);

/*TOPへ戻る*/
$(document).ready(function(){
  // ページをスクロールしたときにボタンを表示する
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('#scrollTopBtn').fadeIn();
    } else {
      $('#scrollTopBtn').fadeOut();
    }
  });

  // ボタンをクリックしたときにページの上部にスクロールする
  $('#scrollTopBtn').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
});
// スムーススクロール
$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('.s_01 a[href^="#"]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = -200;
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    var position = target.offset().top + adjust;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
// AOS
AOS.init();
