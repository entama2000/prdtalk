$(window).on('load resize', function(){
  var winW = $(window).width();
  var devW = 767;
  var devW2 = 1600;
  if (winW <= devW) {
    //767px以下の時の処理
		$(function () {
			"use strict";
			var flag = "view";

		  $(window).on("scroll", function () {
		    // scrollTop()が「200」より大きい場合
		   //画面トップから、ナビゲーションメニューまでの高さ（ピクセル）を指定すれば、メニュースクロールで
		   //消えていくタイミングでヘッダが表示されて固定される。
		    if ($(this).scrollTop() > 1300 && $(this).scrollTop() < 3200) {
		      if (flag === "view") {
		        $(".selectionOption").stop().css({opacity: '1.0'}).animate({
		          bottom: 100
		        }, 500);

		        flag = "hide";
		      }
		    } else {
		      if (flag === "hide") {
		        $(".selectionOption").stop().animate({bottom:"-66px",opacity: 0}, 500);
				//上にあがり切ったら透過度を0%にして背景が生きるように
		        　　　　//”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
		        flag = "view";
		      }
		    }
		  });
		});
  } else {
    if(winW <= devW2){
    //768pxより大きい時の処理
		$(function () {
			"use strict";
			var flag = "view";

		  $(window).on("scroll", function () {
		    // scrollTop()が「200」より大きい場合
		   //画面トップから、ナビゲーションメニューまでの高さ（ピクセル）を指定すれば、メニュースクロールで
		   //消えていくタイミングでヘッダが表示されて固定される。
		    if ($(this).scrollTop() > 1700 && $(this).scrollTop() < 3700) {
		      if (flag === "view") {
		        $(".selectionOption").stop().css({opacity: '1.0'}).animate({
		          bottom: 100
		        }, 500);

		        flag = "hide";
		      }
		    } else {
		      if (flag === "hide") {
		        $(".selectionOption").stop().animate({bottom:"-66px",opacity: 0}, 500);
				//上にあがり切ったら透過度を0%にして背景が生きるように
		        　　　　//”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
		        flag = "view";
		      }
		    }
		  });
		});
  } else {
    $(function () {
			"use strict";
			var flag = "view";

		  $(window).on("scroll", function () {
		    // scrollTop()が「200」より大きい場合
		   //画面トップから、ナビゲーションメニューまでの高さ（ピクセル）を指定すれば、メニュースクロールで
		   //消えていくタイミングでヘッダが表示されて固定される。
		    if ($(this).scrollTop() > 1700 && $(this).scrollTop() < 3700) {
		      if (flag === "view") {
		        $(".selectionOption").stop().css({opacity: '1.0'}).animate({
		          bottom: 300
		        }, 500);

		        flag = "hide";
		      }
		    } else {
		      if (flag === "hide") {
		        $(".selectionOption").stop().animate({bottom:"-66px",opacity: 0}, 500);
				//上にあがり切ったら透過度を0%にして背景が生きるように
		        　　　　//”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
		        flag = "view";
		      }
		    }
		  });
		});
  }
}
});
//scroll fix header
