import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAPプラグイン登録
gsap.registerPlugin(ScrollTrigger);

// データ定義
export const worriesData = [
  {
    id: 1,
    infiniteScroll: (
      <div className="infinite-scroll-container">
        <div className="infinite-scroll-content">
          <div className="scroll-item">画像1</div>
          <div className="scroll-item">画像2</div>
          <div className="scroll-item">画像3</div>
          {/* テスト用のダミーコンテンツ - 後で実際の画像に置き換え可能 */}
        </div>
        <div className="infinite-scroll-content">
          <div className="scroll-item">画像1</div>
          <div className="scroll-item">画像2</div>
          <div className="scroll-item">画像3</div>
        </div>
      </div>
    ),
    key_visual: "./key_visual.png",
    title: (
      <>
        こんなお
        <span className="highlight-title">悩み</span>
        はありませんか？
      </>
    ),
    description: (
      <>
        現在使っているWeb会議が
        <br />
        <span className="highlight highlight-expensive">「高額」</span>
        <span className="highlight highlight-no-feature">「機能がない」</span>
      </>
    ),
    yazirusi: (
      <div className="yazirusi">
        <svg
          className="worriessvg"
          xmlns="http://www.w3.org/2000/svg"
          width="112"
          height="64"
          viewBox="0 0 112 64"
          fill="none"
        >
          <path
            d="M50.6967 61.3033C53.6256 64.2322 58.3744 64.2322 61.3033 61.3033L109.033 13.5736C111.962 10.6447 111.962 5.89592 109.033 2.96699C106.104 0.038057 101.355 0.0380573 98.4264 2.96699L56 45.3934L13.5736 2.96699C10.6447 0.0380612 5.89592 0.0380614 2.96699 2.96699C0.0380574 5.89593 0.0380576 10.6447 2.96699 13.5736L50.6967 61.3033ZM48.5 49L48.5 56L63.5 56L63.5 49L48.5 49Z"
            fill="#EDEBEB"
          />
        </svg>
      </div>
    ),
    solution: (
      <>
        その悩み、
        <br className="solution-break" />
        ZION-MEETが
        <span className="highlight highlight-solution">解決</span>
        します！
      </>
    ),
    leftImageUrl: "./worries_left.png",
    rightImageUrl: "./worries_right.png",
    leftImageUrlTablet: "./worries_SP_leftpng1024.png", // タブレット用画像
    rightImageUrlTablet: "./worries_right1024.png", // タブレット用画像
    leftImageUrlSP: "./worries_SP_leftpng.png",
    rightImageUrlSP: "./worries_SP_right.png",
    leftAlt: "困っている男性のイラスト",
    rightAlt: "考え込んでいる男性のイラスト",
  },
];

// 個別コンポーネント
function Worry({
  key_visual,
  infiniteScroll,
  title,
  description,
  solution,
  leftImageUrl,
  rightImageUrl,
  leftImageUrlTablet,
  rightImageUrlTablet,
  leftImageUrlSP,
  rightImageUrlSP,
  leftAlt,
  rightAlt,
}) {
  const [currentLeftImage, setCurrentLeftImage] = useState(leftImageUrl);
  const [currentRightImage, setCurrentRightImage] = useState(rightImageUrl);
  const worryRef = useRef(null);

  // 画像の切り替え処理
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 502) {
        // スマホ用画像
        setCurrentLeftImage(leftImageUrlSP);
        setCurrentRightImage(rightImageUrlSP);
      } else if (width <= 1024) {
        // タブレット用画像
        setCurrentLeftImage(leftImageUrlTablet);
        setCurrentRightImage(rightImageUrlTablet);
      } else {
        // PC用画像
        setCurrentLeftImage(leftImageUrl);
        setCurrentRightImage(rightImageUrl);
      }
    };

    window.addEventListener("resize", handleResize);

    // 初回実行
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [
    leftImageUrl,
    rightImageUrl,
    leftImageUrlTablet,
    rightImageUrlTablet,
    leftImageUrlSP,
    rightImageUrlSP,
  ]);

  // アニメーションの設定
  useEffect(() => {
    if (worryRef.current) {
      gsap.fromTo(
        worryRef.current,
        { opacity: 0, y: 100 }, // 初期状態
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: worryRef.current,
            start: "top bottom", // スクロール開始位置
            end: "top 50%", // スクロール終了位置
            once: true, // 一度だけ再生
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".scroll",
      { opacity: 0, y: 50 }, // 初期状態
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".key-visual-container", // トリガー要素
          start: "top bottom", // アニメーション開始位置
          end: "center center", // アニメーション終了位置
          scrub: true, // スクロールに合わせる
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.to(".scroll", {
      y: 1, // 上下の移動量
      duration: 1, // アニメーションの長さ
      ease: "power1.inOut", // イージング
      repeat: -1, // 無限ループ
      yoyo: true, // 往復アニメーション
    });
  }, []);

  // 無限スクロールのアニメーション
  useEffect(() => {
    gsap.to(".infinite-scroll-content", {
      x: "-100%",
      repeat: -1,
      duration: 20,
      ease: "none",
      repeatDelay: 0,
    });
  }, []);

  return (
    <div ref={worryRef} className="worry-container">
      {infiniteScroll}
      {/* キービジュアル */}
      <div className="key-visual-container">
        <div className="scroll">
          <p>
            scroll
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="33"
                viewBox="0 0 38 33"
                fill="none"
              >
                <path
                  d="M17.2322 31.7678C18.2085 32.7441 19.7915 32.7441 20.7678 31.7678L36.6777 15.8579C37.654 14.8816 37.654 13.2986 36.6777 12.3223C35.7014 11.346 34.1184 11.346 33.1421 12.3223L19 26.4645L4.85786 12.3223C3.88155 11.346 2.29864 11.346 1.32233 12.3223C0.34602 13.2986 0.34602 14.8816 1.32233 15.8579L17.2322 31.7678ZM16.5 2.98122e-08L16.5 30L21.5 30L21.5 -2.98122e-08L16.5 2.98122e-08Z"
                  fill="white"
                />
              </svg>
            </span>
          </p>
        </div>
        <img className="key-visual" src={key_visual} alt="キービジュアル" />
      </div>

      {/* 見出し */}
      <h1 className="worry-heading">
        コストを抑えて会社に
        <br />
        あったカスタマイズが
        <br />
        できるZION-MEET
      </h1>

      {/* 説明部分 */}
      <div className="worry-content">
        <p className="worry-title">{title}</p>
        <p className="worry-description">{description}</p>
        <p className="worry-solution">{solution}</p>
      </div>

      {/* イメージ表示 */}
      <div className="worry-images-container">
        <img
          className="worry-image-left"
          src={currentLeftImage}
          alt={leftAlt}
        />
        <img
          className="worry-image-right"
          src={currentRightImage}
          alt={rightAlt}
        />
      </div>
    </div>
  );
}

// 親コンポーネント
function Worries() {
  return (
    <section>
      {worriesData.map((worry) => (
        <Worry key={worry.id} {...worry} />
      ))}
    </section>
  );
}

export default Worries;
