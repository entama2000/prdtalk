document.addEventListener('DOMContentLoaded', function() {

  //日付判定
  var today = new Date(Date.now());
  var tomorrow = new Date(today.getFullYear(), today.getMonth(), (today.getDate() + 1), 0, 0, 0);
  var amidaAllResult = localStorage.getItem('amidaResult');

  var amidaToday = new Date(localStorage.getItem('amidaYear'), localStorage.getItem('amidaMonth'), localStorage.getItem('amidaDate'), 0, 0, 0);

  if(today > amidaToday || amidaAllResult === null || amidaAllResult === undefined) {

  document.getElementById('amidaBtn').addEventListener('click', function(){
    var earth = document.getElementById("amidaBox");
    earth.classList.add('active');




    var msg = new Array();
    // 設定開始（メッセージの内容を設定してください）

    msg[0] = 'できる範囲で人の目を見て微笑んでください。';
    msg[1] = '10分間、散歩をしてください。';
    msg[2] = 'エスカレーターではなく階段を使ってください。';
    msg[3] = 'ゴミを１つ拾ってください。';
    msg[4] = 'スマホに入っている1番好きな写真を選んでください。';
    msg[5] = '好きな写真をプリントしてください。';
    msg[6] = '本屋で1分、本を眺めてください。';
    msg[7] = '気になる本があったらタイトルをメモしてください。';
    msg[8] = 'いつもより少しだけ早歩きをしてください。';
    msg[9] = 'ラジオ体操をしてください。';
    msg[10] = '中吊り広告にあったらいいと思う広告を考えてください。';
    msg[11] = '何かに友達を誘ってください。';
    msg[12] = '太陽に向かって深呼吸をしてください。';
    msg[13] = '普段より1０分多く歩いてください。';
    msg[14] = '背筋を伸ばして歩いてください。';
    msg[15] = '席、進路などを譲ってください。';
    msg[16] = 'いつもと同じ予算で、夕食のメニューに一品足せる方法を考えてください。';
    msg[17] = '嫌いな自分を挙げて、１つ捨ててください。';
    msg[18] = '誰かに大きな声で挨拶してください。';
    msg[19] = 'あえいうえお体操をしてください。';
    msg[20] = 'もう少し嫌いな自分を考えてください。';
    msg[21] = '好きな自分を３つ挙げてください。';
    msg[22] = '普段より２０分多く歩いてください。';
    msg[23] = '普段より１５分多く歩いてください。';
    msg[24] = 'いつもより１０分だけ、スマホを見る時間を短くしてください。';
    msg[25] = '鞄に小説を入れて持ち歩いてください。';
    msg[26] = 'いつも見ている景色から、１つ新しい発見をしてください。';
    msg[27] = '寝る前に、１つ感謝してください。';
    msg[28] = '鏡で自分の顔を見たら、笑ってください。';
    msg[29] = '「もっといいことが待っている」と心の中で3回唱えてください。';
    msg[30] = '今気になっていることを３つあげて、ひとつひとつに「大丈夫」と言ってください。';
    msg[31] = '今日の空を見上げて、その空を表現してみてください。';
    msg[32] = 'いやな感じがするものを１つ捨ててください。';
    msg[33] = '毎日使う文房具の１つを大好きなものに買い替えてください。';

    //html/app/js/amida.jsにも追加する



    // 設定終了

    var no = Math.floor(Math.random() * msg.length);

    var msg = String(msg[no]);

    localStorage.setItem('amidaResult', msg);
    localStorage.setItem('amidaYear', tomorrow.getFullYear());
    localStorage.setItem('amidaMonth', tomorrow.getMonth());
    localStorage.setItem('amidaDate', tomorrow.getDate());


    var amidaPaperUp = function() {

      location.href = "amida_result.html";
    }
    setTimeout(amidaPaperUp, 2000);

      audioElem = new Audio();
      audioElem.src = "../music/nc197832.mp3";
      audioElem.volume = 0.3;
      audioElem.play();


  }, false)

} else {
  location.href = "amida_result.html";
}

}, false)
