gsap.registerPlugin(ScrollTrigger);
  // プラグインの登録
// GSAPを使って.box要素にアニメーションを適用
// 4本のバーが順に満タンになるアニメーションを作成
let loading_tl = gsap.timeline({});
loading_tl.to("#bar1", {width: "100%",})
.to("#bar2", {width: "100%",})
.to("#bar3", {width: "100%",})
.to("#bar4", {width: "100%",})
.to("#loading-screen", {opacity: 0, duration: 1});

const container = document.querySelectorAll(".container");
const items = document.querySelectorAll(".js-item");

gsap.set(container,{
  width: items.length * 100 + "%"
});
gsap.set(items,{
  width: 100 / items.length + "%"
});

gsap.to(".js-item", {
  xPercent: -100 * (items.length - 1),
  scrollTrigger: {
    trigger: container,
    start: "top top",
    end: container.clientWidth,
    pin: true,
    anticipatePin: 1,
    scrub: true,
  }
});


gsap.fromTo(".subtitle1",{
    opacity:0,
},{
    opacity: 1,
    scrollTrigger: {
        trigger: ".subtitle1",
        start: "end center",
        end: "end top",
        scrub: true,
        // markers: true
    }
});

gsap.fromTo(".subtitle5",{
    opacity:0,
},{
    opacity: 1,
    scrollTrigger: {
        trigger: ".subtitle5",
        start: "end center",
        end: "end top",
        scrub: true,
        // markers: true
    }
});


gsap.fromTo(".all",{
    opacity:0,
}, {
    opacity: 1,          // opacityを1にする
    duration: 2,         // 2秒かけて実行
    scrollTrigger: {
      trigger: ".all",  // 要素がトリガーになる
      start: "top center",       // 要素が画面の中央に来た時に開始
    //   markers: true              // デバッグ用のマーカーを表示
    }
  });

gsap.set(".guruguru_taichi", { opacity: 0, scale: 1, rotation: 0 });
gsap.set(".guruguru_sora", { opacity: 0, scale: 1, rotation: 0 });
gsap.set(".guruguru_yamato", { opacity: 0, scale: 1, rotation: 0 });
gsap.set(".guruguru_koushirou", { opacity: 0, scale: 1, rotation: 0 });

let guruguru_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".guruguru_taichi", // トリガーは最初の要素
      start: "top center", // スクロール開始位置
      endTrigger: ".guruguru_scroll_end", // 最後の要素まで
      end: "center center", // アニメーション終了位置
      scrub: true, // スクロールに同期
      pin: true, // 要素を固定
    //   markers: true // デバッグ用のマーカーを表示
    }
  });
  
  // タイムラインのアニメーション設定
  guruguru_tl.fromTo(".guruguru_taichi",
    { opacity: 1, scale: 1, rotation: 0 }, // 初期状態
    {
      scale: 0, // 小さくする
      rotation: 360, // 回転
      x: 180,
      y: 750,
      duration: 5, // 2秒かけて実行
    }
  )
  .set(".guruguru_sora", { opacity: 1 })
  .to(".guruguru_sora", {
    scale: 0, // 小さくする
    rotation: 360, // 回転
    x: 50,
    y: 750,
    duration: 5, // 2秒かけて実行
  })
  .set(".guruguru_yamato", { opacity: 1 })
  .to(".guruguru_yamato", {
    scale: 0, // 小さくする
    rotation: 360, // 回転
    x: -50,
    y: 750,
    duration: 5, // 2秒かけて実行
  })
  .set(".guruguru_koushirou", { opacity: 1 })
  .to(".guruguru_koushirou", {
    scale: 0, // 小さくする
    rotation: 360, // 回転
    x: -180,
    y: 750,
    duration: 5, // 2秒かけて実行
  }).from(".logo", {
    autoAlpha: 0, //透明度の調整
    scale: 0,
    ease: "power1.in", // アニメーションの変化率 easeをstaggerの外に書くと全体に適用される．staggerの中に書くとstaggerの要素それぞれに適用される．
  });

gsap.set(".dejivise", { opacity: 0, x: -100, rotation: 180 });
gsap.to(".dejivise", {
duration:2,
opacity: 1,
x: 0,
rotation: 360,
scrollTrigger: {
    trigger: ".dejivise", 
  }
});
gsap.set(".dejivise_meibamen", { opacity: 0, x: -100, rotation: 180 });
gsap.to(".dejivise_meibamen", {
duration:2,
opacity: 1,
x: 0,
rotation: 360,
scrollTrigger: {
    trigger: ".dejivise_meibamen", 
  }
});


gsap.set(".dejivise_shinka", { opacity: 0, x: -100, rotation: 180 });
gsap.to(".dejivise_shinka", {
duration:2,
opacity: 1,
x: 0,
rotation: 360,
scrollTrigger: {
    trigger: ".dejivise_shinka", 
  }
});


gsap.set(".dejimon", { opacity: 0 });
gsap.to(".dejimon", {
duration:4,
opacity: 1,
scrollTrigger: {
    trigger: ".dejimon", 
  }
});
gsap.set(".shinka", { opacity: 0 });
gsap.to(".shinka", {
duration:4,
opacity: 1,
scrollTrigger: {
    trigger: ".shinka", 
  }
});
gsap.set(".meibamen", { opacity: 0 });
gsap.to(".meibamen", {
duration:4,
opacity: 1,
scrollTrigger: {
    trigger: ".meibamen", 
  }
});


// 2秒かけてx座標を300px移動し、360度回転
gsap.to(".box", { 
    duration: 2, //アニメーションの継続時間（秒単位）
    x: 300, //x：x座標の移動距離
    rotation: 360 });//rotation：回転角度

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
    each: 0.1
  },
  scrollTrigger: {
      trigger: ".square_block2"
      //  対象物の指定
  }
});

gsap.set(".gureimon", { opacity: 0,scale:0 });

let agumon_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".agumon",
        start: "bottom center",
        endTrigger: ".agumon_scroll_end",
        end: "bottom 70%",
        scrub: true,          // スクロールの進行に応じてアニメーションを連動
        // markers: true         // デバッグ用のマーカーを表示
    }
  });

  agumon_tl.to(".agumon", {
    y:565,
  }).to(".agumon", {
    autoAlpha: 0, //透明度の調整
    scale:0
  }).to(".gureimon", {autoAlpha: 1,scale:2});

  let footer_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-infinity-trigger",
    //   markers: true,       // デバッグ用のマーカーを表示
    }
  });
  
  // タイムラインのアニメーション設定
  footer_tl.fromTo(".dukemon",
    { opacity: 0, scale: 0  }, // 初期状態
    {
      opacity: 1, 
      scale: 1, 
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