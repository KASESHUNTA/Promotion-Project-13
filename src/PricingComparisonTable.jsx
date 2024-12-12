import React from "react";

// データ定義
const tableData = [
{
  label: "",
  ZION:  <img src="./ZION_logo2.png" alt="ZIONロゴ" className="zion-logo" />,
  A: "A社",
  B: "B社",
  C: "C社",



},
  {
    label: "使用環境",
    ZION: "Webブラウザ",
    A: "専用アプリケーション",
    B: "Webブラウザ",
    C: "専用アプリケーション",
  }, 
  {
    label: "アカウント登録",
    ZION: <span className="highlight-zion">不要</span>,
    A: "主催者は必要",
    B: "主催者は必要",
    C: "必要",
  },
  {
    label: "参加人数",
    ZION: <span className="highlight-unlimited">無制限</span>,
    A: (
      <>
        100人（ベーシック）
        <br />
        300人（ビジネスプラン）
      </>
    ),
    B: (
      <>
        100人（Free）
        <br />
        200人（Business）
      </>
    ),
    C: (
      <>
        100人（無料版）
        <br />
        300人（Business Standard）
      </>
    ),
  },
  {
    label: "使用時間",
    ZION: <span className="highlight-unlimited">無制限</span>,
    A: (
      <>
        40分（ベーシック）
        <br />
        無制限（ビジネスプラン）
      </>
    ),
    B: (
      <>
        40分（Free）
        <br />
        24時間（Business）
      </>
    ),
    C: (
      <>
        60分（無料版）
        <br />
        無制限（Business Standard）
      </>
    ),
  },
  {
    label: "会議資料",
    ZION: <span className="highlight-zion">◯</span>,
    A: <span className="highlight-zion">◯</span>,
    B: <span className="highlight-zion">◯</span>,
    C: <span className="highlight-limited">△（有料プランのみ）</span>,
  },
  {
    label: "ブレイクアウトルーム",
    ZION: <span className="highlight-zion">◯</span>,
    A: <span className="highlight-zion">◯</span>,
    B: <span className="highlight-zion">◯</span>,
    C: <span className="highlight-limited">△（有料プランのみ）</span>,
  },
  {
    label: "金額",
    ZION: (
      <span className="highlight-zion">
        初期費用:36,000円
        <br />
        月額:5,000円～ ※想定金額
      </span>
    ),
    A: (
      <>
        ビジネスプラス:
        <br />
        1人: ¥34,342/年
        <br />
        1人: ¥3,380/月
      </>
    ),
    B: (
      <>
        Business:
        <br />
        1人: ¥26,001/年
        <br />
        1人: ¥2,600/月
      </>
    ),
    C: (
      <>
        Business Standard:
        <br />
        1人: ¥18,874/年
        <br />
        1人: ¥2,482/月
      </>
    ),
  },
];


// ... existing code ...

// コンポーネント定義
function ComparisonTable() {
  return (
    <section id="comparison">
      <div className="comparison-table-wrapper">
        {/* タイトル部分 */}
        <div>
          <h2>他社との料金比較表</h2>
          <p className="comparison_p">
            他社と比較して圧倒的なコストパフォーマンスを実現
          </p>
        </div>

        {/* 比較表 */}
        <div className="whole-table">
          <div className="comparison-table">
         
            <dl>
              {tableData.map((row, index) => (
                <div className="row" key={index}>
                  <dt>{row.label}</dt>
                  <dd className="row_border" data-content={row.label === "金額" ? "pricing" : row.label === "使用時間" ? "time" : row.label === "参加人数" ? "participants" : ""}>{row.ZION}</dd>
                  <dd data-content={row.label === "金額" ? "pricing" : row.label === "使用時間" ? "time" : row.label === "参加人数" ? "participants" : ""}>{row.A}</dd>
                  <dd data-content={row.label === "金額" ? "pricing" : row.label === "使用時間" ? "time" : row.label === "参加人数" ? "participants" : ""}>{row.B}</dd>
                  <dd data-content={row.label === "金額" ? "pricing" : row.label === "使用時間" ? "time" : row.label === "参加人数" ? "participants" : ""}>{row.C}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );

  
}



export default ComparisonTable;