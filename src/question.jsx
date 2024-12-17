import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

gsap.registerPlugin(ScrollTrigger);

const Question = ({ question, answer }) => {
  const questionRef = useRef(null);

  useEffect(() => {
    if (questionRef.current) {
      gsap.fromTo(
        questionRef.current,
        { opacity: 0, y: 100 }, // 初期値
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: questionRef.current,
            start: "top bottom",  // 開始位置
            end: "top 50%",       // 終了位置
            once: true,           // 一度だけ
          },
        }
      );
    }
  }, []);

  return (
    <div ref={questionRef} className="question">
      <p>
        <span className="q-label">Q</span>{question.slice(1)}
      </p>
      <p>
        <span className="a-label">A</span>{answer.slice(1)}
      </p>
    </div>
  );
};

const Questions = () => (
  <section id="faq" className="questions">
    <h2>よくある質問</h2>
    {questionData.map(({ id, question, answer }) => (
      <Question key={id} question={question} answer={answer} />
    ))}
  </section>
);

export default Questions;