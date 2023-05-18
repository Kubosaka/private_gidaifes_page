document.addEventListener('DOMContentLoaded', function(){
    // タブに対してクリックイベントを適用
    const tabs = document.getElementsByClassName('tab');
    for(let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', tabSwitch, false);
    }
  
    // タブをクリックすると実行する関数
    function tabSwitch(){
      // タブのclassの値を変更
      document.getElementsByClassName('is-active')[0].classList.remove('is-active');
      this.classList.add('is-active');
      // コンテンツのclassの値を変更
      document.getElementsByClassName('is-show')[0].classList.remove('is-show');
      const arrayTabs = Array.prototype.slice.call(tabs);
      const index = arrayTabs.indexOf(this);
      document.getElementsByClassName('panel')[index].classList.add('is-show');
    };
  }, false);


document.addEventListener('DOMContentLoaded', function(){
    // タブに対してクリックイベントを適用
    const tabs = document.getElementsByClassName('tab2');
    for(let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', tabSwitch2, false);
    }
  
    // タブをクリックすると実行する関数
    function tabSwitch2(){
      // タブのclassの値を変更
      document.getElementsByClassName('is-active2')[0].classList.remove('is-active2');
      this.classList.add('is-active2');
      // コンテンツのclassの値を変更
      document.getElementsByClassName('is-show2')[0].classList.remove('is-show2');
      const arrayTabs = Array.prototype.slice.call(tabs);
      const index = arrayTabs.indexOf(this);
      document.getElementsByClassName('panel2')[index].classList.add('is-show2');
    };
  }, false);

  $('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    responsive: [
      {
      breakpoint: 769,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
        slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
      }
    },
    {
      breakpoint: 426,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1,//スライドを画面に1枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
      }
    }
  ]
  });
