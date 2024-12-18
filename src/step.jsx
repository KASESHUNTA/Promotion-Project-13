import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ステップデータの定義
export const stepData = [
  { id: 1, step: "お申し込み" },
  { id: 2, step: "担当営業からご連絡" },
  { id: 3, step: "構築・設定" },
  { id: 4, step: "利用開始" },
];

gsap.registerPlugin(ScrollTrigger);

function Step({ step }) {
  const stepRef = useRef(null);

  useEffect(() => {
    if (stepRef.current) {
      gsap.fromTo(
        stepRef.current,
        { opacity: 0, y: 100 }, // 初期値
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stepRef.current,
            start: "top 80%", // スクロール位置の調整
            end: "top 50%",
            toggleActions: "play none none none", // 一度だけ実行
          },
        }
      );
    }
  }, []);

  return (
    <div ref={stepRef} className="step">
      <p className="step_text_color">{step}</p>
    </div>
  );
}

function StepsFlow() {
  return (
    <section>
      <h2>ご契約の流れ</h2>
      <div className="steps-container">
        {stepData.map((data) => (
          <Step key={data.id} step={data.step} />
        ))}
      </div>
      <p className="step_introduction">最短1〜3日で導入可能</p>
    </section>
  );
}

export default StepsFlow;
