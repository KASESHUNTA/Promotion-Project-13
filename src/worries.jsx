import React from "react";

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
        現在使っているWeb会議が<br />
        <span className="highlight highlight-expensive">「高額」</span>
        <span className="highlight highlight-no-feature">「機能がない」</span>
      </>
    ),
    solution: (
      <>
        その悩み、ZION-MEETが
        <span className="highlight highlight-solution">解決</span>
        します！
      </>
    ),
    leftImageUrl: "./worries_left.png",
    rightImageUrl: "./worries_right.png",
    leftAlt: "困っている男性のイラスト",
    rightAlt: "考え込んでいる男性のイラスト",
  },
];
function Worry({
  id,
  key_visual,
  title,
  description,
  solution,
  leftImageUrl,
  rightImageUrl,
  leftAlt,
  rightAlt,
}) {
  return (
    <div className="worry-container">
      <img className="key-visual" src={key_visual} alt="キービジュアル" />
      <h1 className="worry-heading">
        コストを抑えて会社に
        <br />
        あったカスタマイズが
        <br />
        できるZION-MEET
      </h1>
      <div className="worry-content">
        <p className="worry-title">{title}</p>
        <p className="worry-description">{description}</p>
        <p className="worry-solution">{solution}</p>
      </div>
      <img className="worry-image-left" src={leftImageUrl} alt={leftAlt} />
      <img className="worry-image-right" src={rightImageUrl} alt={rightAlt} />
    </div>
  );
}

function Worries() {
  return (
    <section>
      {worriesData.map((worry) => (
        <Worry
          key={worry.id}
          key_visual={worry.key_visual}
          id={worry.id}
          title={worry.title}
          description={worry.description}
          solution={worry.solution}
          leftImageUrl={worry.leftImageUrl}
          rightImageUrl={worry.rightImageUrl}
          leftAlt={worry.leftAlt}
          rightAlt={worry.rightAlt}
        />
      ))}
    </section>
  );
}

export default Worries;
