import React from "react";

const questionData = [
  {
    id: 1,
    question: "Q希望する機能はどのくらいで実装できますか？",
    answer: "A希望する機能によりますので、まずは問い合わせてください。",
  },
  {
    id: 2,
    question: "Q希望する機能は有料でしょうか？",
    answer: "A追加機能に応じて料金が発生します。",
  },
  {
    id: 3,
    question: "Q対応OSを教えてください。",
    answer: "ALinux, Windows, Mac, Android, iOSになります。",
  },
  {
    id: 4,
    question: "Qデータのセキュリティはどのように確保されていますか？",
    answer: "Aデータはすべて暗号化され、安全なサーバーで管理されています。",
  },
];

const Question = ({ question, answer }) => (
  <div className="question">
    <p>
      <span className="q-label">Q</span>{question.slice(1)}
    </p>
    <p>
      <span className="a-label">A</span>{answer.slice(1)}
    </p>
  </div>
);

const Questions = () => (
  <section className="questions">
    <h2>よくある質問</h2>
    {questionData.map(({ id, question, answer }) => (
      <Question key={id} question={question} answer={answer} />
    ))}
  </section>
);

export default Questions;
