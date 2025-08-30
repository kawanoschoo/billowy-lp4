// ローディング画面
$(function() {
	setTimeout(function(){
		$('.logo_fadein p').fadeIn(1500);
	},500);
	setTimeout(function(){
		$('.logo_fadein').fadeOut(1000);
	},2500);
});

$(function() {
    $(window).on('scroll resize', function() {
    var setHeight = 100;
    var wHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    $('.fade-in').each(function() {
        var targetPosition = $(this).offset().top;
        if(scrollTop > targetPosition - wHeight + setHeight) {
        $(this).addClass('show');
        }
    })
    });
});

window.addEventListener("scroll", function () {
    const elm = document.querySelector(".elm");
    const scroll = window.pageYOffset;
    if (scroll > 300) {
    elm.style.opacity = ".8";
    // console.log(scroll);
    } else {
    elm.style.opacity = "0";
    // console.log(scroll);
    }
});

// 一定量スクロールしたらロゴを小さくする
$(function(){
    $(window).scroll(function(){
    if($(window).scrollTop() > 450){
        $(".logo1").addClass("small");
    }else{
        $(".logo1").removeClass("small");
    }
    });
});