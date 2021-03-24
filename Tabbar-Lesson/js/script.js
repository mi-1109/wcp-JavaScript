/* $('要素[属性]')で特定の属性を持つ要素を取得する。
   $('要素[属性 != "値"])によって、属性値が特定の値に等しくない要素だけ取得される。*/
$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event) {
  //tab-contents内のタブがどれかクリックされたら、タブ内のコンテンツを全て非表示
  $("#tab-contents .tab").hide();
  //タブ切り替え時にいったんactiveクラスを削除する
  $("#tab-menu .active").removeClass("active");
  //タブがクリックされたらactiveクラスを付ける
  $(this).addClass("active");
  //タブがクリックされたら取得したhref属性の中身が表示される
  $($(this).attr("href")).show();
  event.preventDefault();
});