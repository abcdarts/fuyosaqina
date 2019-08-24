$(function() {
    $(".switcharea input").click(function() {
    var index = $(this).index();
    $(".productslider__item, .detail__contents").removeClass("current");
    $(".productslider__item").eq(index).addClass("current");
    $(".detail__contents").eq(index).addClass("current");
    });
});