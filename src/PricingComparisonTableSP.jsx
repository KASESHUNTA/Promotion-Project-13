import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// GSAP プラグイン登録
gsap.registerPlugin(ScrollTrigger);

function ComparisonTableSP() {
  const comparisonTableRef = useRef(null);

  useEffect(() => {
    if (comparisonTableRef.current) {
      gsap.fromTo(
        comparisonTableRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: comparisonTableRef.current,
            start: "top bottom",
            end: "top 50%",
            once: true,
          },
        }
      );
    }
  }, []);

  return (
    <section id="comparison-sp" ref={comparisonTableRef}>  {/*  セクション全体のラッパー。GSAPのアニメーション対象 */}
      <div className="comparison-table-wrapper-sp"> {/*  スタイリングのためのラッパー */}
        <div>
          <h2>他社との料金比較表</h2> 
          <p className="comparison_p">
            他社と比較して圧倒的なコストパフォーマンスを実現
          </p> 
        </div>
        <div className="comparison-table-wrapper-sp"></div> 

  
        <Swiper
          modules={[Pagination, Navigation]} // Swiperの機能としてページネーションとナビゲーションを有効化
          spaceBetween={30} // 各スライド間の間隔を30pxに設定
          slidesPerView={1} // 1スライドずつ表示
          navigation // 前後に移動できる矢印を表示
          pagination={{ 
            type: 'fraction', // ページネーションのタイプをフラクション（1/7のような表示）に
            formatFractionCurrent: (number) => number, // 現在のページ番号をそのまま表示
            formatFractionTotal: (number) => number, // 総ページ数をそのまま表示
            renderFraction: function (currentClass, totalClass) { // ページネーションのカスタム表示
              return `<span class="${currentClass}"></span>-<span class="${totalClass}"></span>`;
            }
          }}
          className="comparison-swiper" // Swiper自体のクラス名
        >
          {[1, 2, 3, 4, 5, 6, 7].map((num) => ( // 1～7の番号を配列にしてmapでループ処理
            <SwiperSlide key={num}> {/*  SwiperSlide（スライド1つ分）をループで作成 */}
              <img 
                src={`/SP${num}.png`} // 画像のパスを `/SP1.png`, `/SP2.png`, ... のように動的に設定
                alt={`比較表 ${num}`} // 画像の説明文（アクセシビリティ用）
                className="comparison-slide-image" // スタイリング用のクラス
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ComparisonTableSP;