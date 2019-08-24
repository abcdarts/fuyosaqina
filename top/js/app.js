$(function(){
  $('.topslide').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
  });
});

$(function(){
  $('.topslide2').slick({
    infinite: true, //スライドのループ有効化
    dots:false, //ドットのナビゲーションを表示
    centerMode: true, //要素を中央寄せ
    centerPadding:'0%', //両サイドの見えている部分のサイズ
    autoplay:true, //自動再生
    arrows: false, //矢印非表示
    draggable: false, //ドラッグ操作の無効化
  });
});

$(function(){
  $('.topslide3').slick({
    infinite: true, //スライドのループ有効化
    dots:false, //ドットのナビゲーションを表示
    centerMode: true, //要素を中央寄せ
    centerPadding:'0%', //両サイドの見えている部分のサイズ
    autoplay:false, //自動再生
    arrows: true, //矢印非表示
    draggable: true, //ドラッグ操作の無効化
  });
});
