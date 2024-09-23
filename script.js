gsap.registerPlugin(ScrollTrigger);// プラグインの登録

// 4本のバーが順に満タンになるアニメーションを作成
let loading_tl = gsap.timeline({});
loading_tl.to("#bar1", {width: "100%"})//toはアニメーション時間がデフォルトで0.5s.width: "100%"指定により緑のバーが伸びる
.to("#bar2", {width: "100%",})
.to("#bar3", {width: "100%",})
.to("#bar4", {width: "100%",})
.to("#loading-screen", {opacity: 0, duration: 1});


const container = document.querySelectorAll(".container");//containerクラスを持つ要素の情報を取得
const items = document.querySelectorAll(".js-item");

gsap.set(".container",{
  width: items.length * 100 + "%"
});//items.lengthはjs-itemの要素の数のこと．今回は3つあるのでwidthは300%になる．
gsap.set(".js-item",{
  width: 100 / items.length + "%"
});//親要素(.container)の幅を100%として子要素(.js-item)の幅を均等にする．

gsap.to(".js-item", {
  xPercent: -100 * (items.length - 1),//xPercentは要素の幅の割合(%)で移動する．xPercent:-100だと要素の幅の100%分左に移動する．
  scrollTrigger: {
    trigger: ".container",//スクロールアニメーション発生のトリガーとなる要素を指定
    start: "top top",//スクロールアニメーションの開始位置を指定."top top"は親要素の上端とスクロールした時の画面上端が一致した時にアニメーションが開始する．
    end: container.clientWidth,//スクロールアニメーションの終了位置を指定.container. clientWidthはcontainerの要素の横幅を指定している．スクロールがその横幅分進んだ時にアニメーションが終了する．
    pin: true,//スクロールアニメーションの間、要素を固定するかどうかを指定．
    anticipatePin: 1,//pin:trueの時に使用するオプションで、pinの開始前にアニメーションを開始する時間を指定．値が1だと、固定される直前に少し滑らかに動く．
    scrub: true,//スクロールとアニメーションを連動させるかどうかを指定．
  }
});


gsap.fromTo(".subtitle1",{
    opacity:0,//透明度を0にする
},{
    opacity: 1,//透明度を1にする
    scrollTrigger: {
        trigger: ".subtitle1",//スクロールアニメーション発生のトリガーとなる要素を指定
        start: "end center",//スクロールアニメーションの開始位置を指定."end center"は要素の中央が画面の下端に来た時にアニメーションが開始する．
        end: "end top",//スクロールアニメーションの終了位置を指定."end top"は要素の上端が画面の上端に来た時にアニメーションが終了する．
        scrub: true,//スクロールとアニメーションを連動させるかどうかを指定．
        // markers: true  // デバッグ用のマーカーを表示
    }
});

gsap.fromTo(".subtitle5",{
    opacity:0,//透明度を0にする
},{
    opacity: 1,//透明度を1にする
    scrollTrigger: {
        trigger: ".subtitle5",//スクロールアニメーション発生のトリガーとなる要素を指定
        start: "end center",//スクロールアニメーションの開始位置を指定."end center"は要素の中央が画面の下端に来た時にアニメーションが開始する．
        end: "end top",//スクロールアニメーションの終了位置を指定."end top"は要素の上端が画面の上端に来た時にアニメーションが終了する．
        scrub: true,//スクロールとアニメーションを連動させるかどうかを指定．
        // markers: true
    }
});


gsap.fromTo(".all",{
    opacity:0,//透明度を0にする
}, {
    opacity: 1,//透明度を1にする
    duration: 2,//アニメーションの継続時間（秒単位）.2秒かけて実行．
    scrollTrigger: {
      trigger: ".all",//スクロールアニメーション発生のトリガーとなる要素を指定
      start: "top center",//スクロールアニメーションの開始位置を指定."top center"は要素の中央が画面の上端に来た時にアニメーションが開始する．
    //   markers: true  // デバッグ用のマーカーを表示
    }
  });

gsap.set(".guruguru_taichi", { 
    opacity: 0, // 透明度
    scale: 1, // 大きさ
    rotation: 0// 回転
 });
gsap.set(".guruguru_sora", { opacity: 0, scale: 1, rotation: 0 });
gsap.set(".guruguru_yamato", { opacity: 0, scale: 1, rotation: 0 });
gsap.set(".guruguru_koushirou", { opacity: 0, scale: 1, rotation: 0 });

let guruguru_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".guruguru_taichi", // スクロールアニメーション発生のトリガーとなる要素を指定
      start: "top center", // スクロールアニメーションの開始位置
      endTrigger: ".guruguru_scroll_end", // スクロールアニメーションの終了位置
      end: "center center", // スクロールアニメーションの終了位置
      scrub: true, // スクロールに同期．
      pin: true, // 要素を固定
    //   markers: true // デバッグ用のマーカーを表示
    }
  });
  
  // タイムラインのアニメーション設定
  guruguru_tl.fromTo(".guruguru_taichi",
    { opacity: 1, scale: 1, rotation: 0 },
    {
      scale: 0, // 小さくする
      rotation: 360, // 回転
      x: 180,//アニメーション終了時のx座標増加分
      y: 750,//アニメーション終了時のy座標増加分
    }
  )
  .set(".guruguru_sora", { opacity: 1 })
  .to(".guruguru_sora", {
    scale: 0, // 小さくする
    rotation: 360, // 回転
    x: 50,
    y: 750,
  })
  .set(".guruguru_yamato", { opacity: 1 })
  .to(".guruguru_yamato", {
    scale: 0, // 小さくする
    rotation: 360, // 回転
    x: -50,
    y: 750,
  })
  .set(".guruguru_koushirou", { opacity: 1 })
  .to(".guruguru_koushirou", {
    scale: 0, // 小さくする
    rotation: 360, // 回転
    x: -180,
    y: 750,
  }).from(".logo", {
    autoAlpha: 0, //透明度の調整
    scale: 0,
    ease: "power1.in", // アニメーションの変化率．色々な種類があるから試してみるといいよ．
  });

gsap.set(".dejivise", { opacity: 0, x: -100, rotation: 180 });//初期状態の設定
gsap.to(".dejivise", {
duration:2,//アニメーションの継続時間（秒単位）
opacity: 1,//透明度を1にする
x: 0,//x座標
rotation: 360,//回転
scrollTrigger: {
    trigger: ".dejivise", //スクロールアニメーション発生のトリガーとなる要素を指定
  }
});

gsap.set(".dejivise_shinka", { opacity: 0, x: -100, rotation: 180 });// 初期状態の設定
gsap.to(".dejivise_shinka", {
duration:2,//アニメーションの継続時間（秒単位）
opacity: 1,//透明度を1にする
x: 0,//x座標
rotation: 360,//回転
scrollTrigger: {
    trigger: ".dejivise_shinka", //スクロールアニメーション発生のトリガーとなる要素を指定
  }
});

gsap.set(".dejivise_meibamen", { opacity: 0, x: -100, rotation: 180 });// 初期状態の設定
gsap.to(".dejivise_meibamen", {
duration:2,//アニメーションの継続時間（秒単位）
opacity: 1,//透明度を1にする
x: 0,//x座標
rotation: 360,//回転
scrollTrigger: {
    trigger: ".dejivise_meibamen", //スクロールアニメーション発生のトリガーとなる要素を指定
  }
});



gsap.set(".dejimon", { opacity: 0 });//初期状態の設定
gsap.to(".dejimon", {
duration:4,//アニメーションの継続時間（秒単位）
opacity: 1,//透明度を1にする
scrollTrigger: {
    trigger: ".dejimon", //スクロールアニメーション発生のトリガーとなる要素を指定
  }
});

gsap.set(".shinka", { opacity: 0 });//初期状態の設定
gsap.to(".shinka", {
duration:4,//アニメーションの継続時間（秒単位）
opacity: 1,//透明度を1にする
scrollTrigger: {
    trigger: ".shinka", //スクロールアニメーション発生のトリガーとなる要素を指定
  }
});
gsap.set(".meibamen", { opacity: 0 });//初期状態の設定
gsap.to(".meibamen", {
duration:4,//アニメーションの継続時間（秒単位）
opacity: 1,//透明度を1にする
scrollTrigger: {
    trigger: ".meibamen", //スクロールアニメーション発生のトリガーとなる要素を指定
  }
});


gsap.fromTo(".circle", 
    { y: -30 },
    { y: 30,
      ease: "power1.inOut", // アニメーションの変化率 easeをstaggerの外に書くと全体に適用される．staggerの中に書くとstaggerの要素それぞれに適用される．
      stagger: { // 複数の要素にアニメーションを適用
        each: 0.15, // 要素間のアニメーション開始時間差
        repeat: -1, // 無限に繰り返し
        yoyo: true  // アニメーションの反復
     }
  });

gsap.set(".square", { opacity: 0, x: 100 })

const tl = gsap.timeline({ 
    repeat: -1, // 無限に繰り返し
    repeatDelay: 1 // 繰り返しの間隔
});

tl.to(".num1", {
  opacity: 1, x: 0
}).to(".num2", {
  opacity: 1, x: 0
}).to(".num3", {
  opacity: 1, x: 0
}).to(".num4", {
  opacity: 1, x: 0
}).to(".num1", {
  opacity: 0, x: -100
}).to(".num2", {
  opacity: 0, x: -100
}).to(".num3", {
  opacity: 0, x: -100
}).to(".num4", {
  opacity: 0, x: -100
})


gsap.from(".square2", {
  x: 100,
  y: 100,
  autoAlpha: 0, //透明度の調整
  stagger: {
    each: 0.1  // 要素間のアニメーション開始時間差
  },
  scrollTrigger: {
      trigger: ".square_block2"
      //  対象物の指定
  }
});

gsap.set(".gureimon", { opacity: 0,scale:0 });

let agumon_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".agumon",//スクロールアニメーション発生のトリガーとなる要素を指定
        start: "bottom center",//スクロールアニメーションの開始位置を指定."bottom center"は要素の中央が画面の下端に来た時にアニメーションが開始する．
        endTrigger: ".agumon_scroll_end",//スクロールアニメーションの終了位置を指定
        end: "bottom 70%",//スクロールアニメーションの終了位置を指定."bottom 70%"は要素の下端が画面の下端から70%の位置に来た時にアニメーションが終了する．
        scrub: true,          // スクロールの進行に応じてアニメーションを連動
        // markers: true         // デバッグ用のマーカーを表示
    }
  });

  agumon_tl.to(".agumon", {
    y:565,//y座標
  }).to(".agumon", {
    autoAlpha: 0, //透明度の調整
    scale:0//大きさの調整
  }).to(".gureimon", {autoAlpha: 1,scale:2});

// 左に無限スクロール
gsap.to(".scroll-infinity__list--left", {
    xPercent: -100,           // 100%横方向に移動
    duration: 10,             // アニメーションの長さ（秒）
    repeat: -1,               // 無限ループ
    ease: "linear",           // 線形アニメーション
  });
  // 右に無限スクロール
gsap.fromTo(".scroll-infinity__list--right",{
    xPercent: -100            //左に100%からスタート
}, {
    xPercent: 0,              // 右に100%移動（-100%から0%へ）
    duration: 10,             // アニメーションの長さ（秒）
    repeat: -1,               // 無限ループ
    ease: "linear",           // 線形アニメーション
  });
  


  let footer_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-infinity-trigger",//スクロールアニメーション発生のトリガーとなる要素を指定
    //   markers: true,       // デバッグ用のマーカーを表示
    }
  });
  
  // タイムラインのアニメーション設定
  footer_tl.fromTo(".dukemon",
    { opacity: 0, scale: 0  }, // 初期状態
    {
      opacity: 1, // 透明度
      scale: 1, // 大きさ
    }
  ).fromTo(".beelzebumon",
    { opacity: 0, scale: 0  }, // 初期状態
    {
      opacity: 1, 
      scale: 1, 
    }
  ).fromTo(".victorygreymon",
    { opacity: 0, scale: 0 }, // 初期状態
    {
      opacity: 1, 
      scale: 1, 
    }
  );