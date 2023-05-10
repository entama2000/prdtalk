$(function(){

    //個別印刷ボタンをクリックした時
   $('.print-btn').on('click', function(){
     //プリントしたいエリアの取得
     var printPage = $(this).closest('.print-page').html();

        //プリント用の要素「#print」を作成
       $('body').append('<div id="print"></div>');
       $('#print').append(printPage);

        //「#print」以外の要素に非表示用のclass「print-off」を指定
        $('body > :not(#print)').addClass('print-off');
        $('.no-print').addClass('print-off');
      window.print();

     //window.print()の実行後、作成した「#print」と、非表示用のclass「print-off」を削除
     $('#print').remove();
     $('.print-off').removeClass('print-off');
   });


});
