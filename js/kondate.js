// alert(1111);

$(".btn_input").on("click", function() {
    
    // 乱数を作成
    // 0-3：和食、4-6：洋食、7-9：中華
    let random_mainDish = Math.floor(Math.random() *10 )

    if (random_mainDish >= 0 && random_mainDish < 4) {
        var random_sideDish = Math.floor(Math.random() *4 )
        var random_soup = Math.floor(Math.random() *4 )
    }else if (random_mainDish >= 4 && random_mainDish < 7) {
        var random_sideDish = Math.floor(Math.random() *3 +4 )
        var random_soup = Math.floor(Math.random() *3 +4 )
    }else if (random_mainDish >= 7 && random_mainDish < 9) {
        var random_sideDish = Math.floor(Math.random() *3 +7 )
        var random_soup = Math.floor(Math.random() *3 +7 )
    }else if (random_mainDish === 9) {
        var random_sideDish = Math.floor(Math.random() *3 +7 )
    }

    // 条件分岐
    let title_mainDish = document.getElementById("result__title-mainDish");
    let thumbnail_mainDish = document.getElementById("result__thumbnail-mainDish");
    let title_stapleFood = document.getElementById("result__title-stapleFood");
    let thumbnail_stapleFood = document.getElementById("result__thumbnail-stapleFood");
    let title_sideDish = document.getElementById("result__title-sideDish");
    let thumbnail_sideDish = document.getElementById("result__thumbnail-sideDish");
    let title_soup = document.getElementById("result__title-soup");
    let thumbnail_soup = document.getElementById("result__thumbnail-soup");

    // 主菜
    if (random_mainDish === 0) {
        title_mainDish.innerHTML = "肉じゃが";
        thumbnail_mainDish.src = "img/mainDish_肉じゃが.png";
    }else if (random_mainDish === 1) {
        title_mainDish.innerHTML = "豚肉のしょうが焼き";
        thumbnail_mainDish.src = "img/mainDish_豚肉のしょうが焼き.png";
    }else if (random_mainDish === 2) {
        title_mainDish.innerHTML = "ぶりの照り焼き";
        thumbnail_mainDish.src = "img/mainDish_ぶりの照り焼き.png";
    }else if (random_mainDish === 3) {
        title_mainDish.innerHTML = "鶏の唐揚げ";
        thumbnail_mainDish.src = "img/mainDish_鶏の唐揚げ.png";
    }else if (random_mainDish === 4) {
        title_mainDish.innerHTML = "ハンバーグ";
        thumbnail_mainDish.src = "img/mainDish_ハンバーグ.png";
    }else if (random_mainDish === 5) {
        title_mainDish.innerHTML = "サーモンムニエル";
        thumbnail_mainDish.src = "img/mainDish_サーモンムニエル.png";
    }else if (random_mainDish === 6) {
        title_mainDish.innerHTML = "ビーフシチュー";
        thumbnail_mainDish.src = "img/mainDish_ビーフシチュー.png";
    }else if (random_mainDish === 7) {
        title_mainDish.innerHTML = "焼き餃子";
        thumbnail_mainDish.src = "img/mainDish_焼き餃子.png";
    }else if (random_mainDish === 8) {
        title_mainDish.innerHTML = "八宝菜";
        thumbnail_mainDish.src = "img/mainDish_八宝菜.png";
    }else if (random_mainDish === 9) {
        title_mainDish.innerHTML = "坦々麺";
        thumbnail_mainDish.src = "img/mainDish_坦々麺.png";
    }
    
    // 主食
    if (random_mainDish === 6) {
        title_stapleFood.innerHTML = "パン";
        thumbnail_stapleFood.src = "img/stapleFood_パン.png";
    }else if (random_mainDish === 9) {
        title_stapleFood.innerHTML = "-";
        thumbnail_stapleFood.src = "img/NoImage.png";
        title_soup.innerHTML = "-";
        thumbnail_soup.src = "img/NoImage.png";
    }else {
        title_stapleFood.innerHTML = "ご飯";
        thumbnail_stapleFood.src = "img/stapleFood_ご飯.png";
    }
    
    // 副菜
    if (random_sideDish === 0) {
        title_sideDish.innerHTML = "ひじきの炒め煮";
        thumbnail_sideDish.src = "img/sideDish_ひじきの炒め煮.png";
    }else if (random_sideDish === 1) {
        title_sideDish.innerHTML = "茶碗蒸し";
        thumbnail_sideDish.src = "img/sideDish_茶碗蒸し.png";
    }else if (random_sideDish === 2) {
        title_sideDish.innerHTML = "小松菜と桜海老の蒸し煮";
        thumbnail_sideDish.src = "img/sideDish_小松菜と桜海老の蒸し煮.png";
    }else if (random_sideDish === 3) {
        title_sideDish.innerHTML = "だし巻き卵";
        thumbnail_sideDish.src = "img/sideDish_だし巻き卵.png";
    }else if (random_sideDish === 4) {
        title_sideDish.innerHTML = "グリーンサラダ";
        thumbnail_sideDish.src = "img/sideDish_グリーンサラダ.png";
    }else if (random_sideDish === 5) {
        title_sideDish.innerHTML = "ジャーマンポテト";
        thumbnail_sideDish.src = "img/sideDish_ジャーマンポテト.png";
    }else if (random_sideDish === 6) {
        title_sideDish.innerHTML = "ラタトゥイユ";
        thumbnail_sideDish.src = "img/sideDish_ラタトゥイユ.png";
    }else if (random_sideDish === 7) {
        title_sideDish.innerHTML = "春巻き";
        thumbnail_sideDish.src = "img/sideDish_春巻き.png";
    }else if (random_sideDish === 8) {
        title_sideDish.innerHTML = "棒棒鶏";
        thumbnail_sideDish.src = "img/sideDish_棒棒鶏.png";
    }else if (random_sideDish === 9) {
        title_sideDish.innerHTML = "中華風野菜炒め";
        thumbnail_sideDish.src = "img/sideDish_中華風野菜炒め.png";
    }

    // 汁物
    if (random_soup === 0) {
        title_soup.innerHTML = "なめこのお味噌汁";
        thumbnail_soup.src = "img/soup_なめこのお味噌汁.png";
    }else if (random_soup === 1) {
        title_soup.innerHTML = "あさりのお味噌汁";
        thumbnail_soup.src = "img/soup_あさりのお味噌汁.png";
    }else if (random_soup === 2) {
        title_soup.innerHTML = "しめじのお吸い物";
        thumbnail_soup.src = "img/soup_しめじのお吸い物.png";
    }else if (random_soup === 3) {
        title_soup.innerHTML = "豚汁";
        thumbnail_soup.src = "img/soup_豚汁.png";
    }else if (random_soup === 4) {
        title_soup.innerHTML = "オニオンコンソメスープ";
        thumbnail_soup.src = "img/soup_オニオンコンソメスープ.png";
    }else if (random_soup === 5) {
        title_soup.innerHTML = "ねぎとじゃがいものスープ";
        thumbnail_soup.src = "img/soup_ねぎとじゃがいものスープ.png";
    }else if (random_soup === 6) {
        title_soup.innerHTML = "パンプキンスープ";
        thumbnail_soup.src = "img/soup_パンプキンスープ.png";
    }else if (random_soup === 7) {
        title_soup.innerHTML = "中華風卵スープ";
        thumbnail_soup.src = "img/soup_中華風卵スープ.png";
    }else if (random_soup === 8) {
        title_soup.innerHTML = "わかめスープ";
        thumbnail_soup.src = "img/soup_わかめスープ.png";
    }else if (random_soup === 9) {
        title_soup.innerHTML = "幻のスープ";
        thumbnail_soup.src = "img/soup_幻のスープ.png";
    }

    // タブ

// ↓このかっこは削除しない
});
