$(function(){
  $('.carousel').slick({
    infinite: true, //スライドのループ有効化
    dots:false, //ドットのナビゲーションを表示
    centerMode: true, //要素を中央寄せ
    centerPadding:'0%', //両サイドの見えている部分のサイズ
    autoplay:true, //自動再生
    arrows: false, //矢印非表示
    draggable: false, //ドラッグ操作の無効化
  });
});


$(function() {
	// 初期表示を非表示にする
	$('.color2,.color3').hide();

	$("#button__color2").click(function() {
		// 1秒かけて表示する
    $(".color2").show();
    $(".color1,.color3").hide();
	});

	$("#button__color3").click(function() {
		// 1秒かけて非表示にする
    $(".color3").show();
    $(".color1,.color2").hide();
  });

  $("#button__color1").click(function() {
		// 1秒かけて非表示にする
    $(".color1").show();
    $(".color2,.color3").hide();
	});
});
