

import React from "react";

export const stepData = [
  { id: 1, step: "お申し込み" },
  { id: 2, step: "担当営業からご連絡" },
  { id: 3, step: "構築・設定" },
  { id: 4, step: "利用開始" },
];

function Step({ step }) {
  return (
    <div className="step">
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
