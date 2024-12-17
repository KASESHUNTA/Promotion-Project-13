import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAPプラグイン登録
gsap.registerPlugin(ScrollTrigger);

// データ定義
export const worriesData = [
  {
    id: 1,
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
        <div className="yazirusi"></div>
      </>
    ),
    solution: (
      <p className="worry-solution">
      その悩み、
      <br className="solution-break" />
      ZION-MEETが
      <span className="highlight highlight-solution">解決</span>
      します！
    </p>
    ),
    leftImageUrl: "./worries_left.png",
    rightImageUrl: "./worries_right.png",
    leftImageUrlSP: "./worries_SP_leftpng.png",
    rightImageUrlSP: "./worries_SP_right.png",
    leftAlt: "困っている男性のイラスト",
    rightAlt: "考え込んでいる男性のイラスト",
  },
];

// 個別コンポーネント
function Worry({
  key_visual,
  title,
  description,
  solution,
  leftImageUrl,
  rightImageUrl,
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
      if (window.innerWidth <= 502) {
        setCurrentLeftImage(leftImageUrlSP);
        setCurrentRightImage(rightImageUrlSP);
      } else {
        setCurrentLeftImage(leftImageUrl);
        setCurrentRightImage(rightImageUrl);
      }
    };

    window.addEventListener("resize", handleResize);

    // 初回実行
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [leftImageUrl, rightImageUrl, leftImageUrlSP, rightImageUrlSP]);

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
            end: "top 50%",      // スクロール終了位置
            once: true,          // 一度だけ再生
          },
        }
      );
    }
  }, []);

  return (
    <div ref={worryRef} className="worry-container">
      {/* キービジュアル */}
      <img className="key-visual" src={key_visual} alt="キービジュアル" />

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