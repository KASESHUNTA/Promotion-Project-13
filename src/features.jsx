import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

export const featuresData = [
  {
    id: 1,
    title: "01:シンプルなUI",
    description: `直感的な操作で、会議に集中できるシン<br>プルなUIが特長であり、
      必要な機能に迷<br>わずアクセスでき、スムーズに会議を進<br>められます。`,
    imageUrl: "./01_features.png",
    alt: "ZION-MEETを実際に使用している画像",
  },
  {
    id: 2,
    title: "02:低コストを実現",
    description: `手軽なコストで導入できるうえ、ビジネス<br>に必要な機能をしっかりと備えています。<br>
      他社に負けない充実した機能と導入のしや<br>すさで、気軽に利用を始められるWeb会議<br>ツールです。`,
    imageUrl: "./02_features.png",
    alt: "低コストをアピールしている画像",
  },
  {
    id: 3,
    title: "03:カレンダーとの連携",
    description: `MTGカレンダー作成アプリを利用するこ<br>とで、
      Googleカレンダーへ会議予定を簡<br>単に登録し、
      参加者への招待もスムーズ<br>に行えます。スケジュール管理が一元化<br>されるため、
      参加者は予定を見逃すこと<br>なく、効率的に会議に参加できるメリッ<br>トがあります。`,
    imageUrl: "./03_features.png",
    alt: "ZION-MEETのMTGの画面",
  },
  {
    id: 4,
    title: "04:独自のロゴマークの設定可能",
    description: `Web会議ツールで独自のロゴを設定す<br>ることで、
      ブランドの認知向上やプロ<br>フェッショナルな印象の強化が図れま<br>す。
      また、内部会議では一体感を促進<br>し、組織文化の向上にも貢献します。`,
    imageUrl: "./04_features.png",
    alt: "ZION-MEETの画面、ロゴマークの設定の画像",
  },
  {
    id: 5,
    title: "05:カスタマイズについて",
    description: `オープンソースのためご利用ユーザーに合わ<br>せて、
      勤怠機能の追加やその他、希望機能の<br>追加も可能です。
      これにより、必要な機能を<br>導入しコストを最適化しながら業務に合っ<br>たツールを構築することができます。
      <br>※追加機能に応じて料金が発生します。`,
    imageUrl: "./05_features.png",
    alt: "会社員がPCを触っている画像",
  },
];

// GSAP プラグイン登録
gsap.registerPlugin(ScrollTrigger);

function Feature({ id, title, description, imageUrl, alt }) {
  const featureRef = useRef(null);

  useEffect(() => {
    if (featureRef.current) {
      gsap.fromTo(
        featureRef.current,
        { opacity: 0, y: 100 },  // 初期値
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: featureRef.current,
            start: "top bottom",  // 開始位置
            end: "top 50%",       // 終了位置
            once: true,           // 一度だけ

          },
        }
      );
    }
  }, []);
  

  // 改行タグの処理
  const formattedDescription = description.split("<br>").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div
      ref={featureRef}
      className={clsx("class1", id % 2 === 0 && "class2")}
    >
      <div className="feature_text">
        <h3 className="features_title">{title}</h3>
        <p className="features_description">{formattedDescription}</p>
      </div>
      <div className="feature_bgc">
        <img
          className={clsx("feature_img", id === 2 && "feature_img_id2")}
          src={imageUrl}
          alt={alt}
        />
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="features">
      <h2>ZION-MEETの特長</h2>
      {featuresData.map((feature) => (
        <Feature
          key={feature.id}
          id={feature.id}
          title={feature.title}
          description={feature.description}
          imageUrl={feature.imageUrl}
          alt={feature.alt}
        />
      ))}
    </section>
  );
}

export default Features;