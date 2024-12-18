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
    <section id="comparison-sp" ref={comparisonTableRef}>
      <div className="comparison-table-wrapper-sp">
        <div>
          <h2>他社との料金比較表</h2>
          <p className="comparison_p">
            他社と比較して圧倒的なコストパフォーマンスを実現
          </p>
        </div>
        <div className="comparison-table-wrapper-sp"></div>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ 
            type: 'fraction',
            formatFractionCurrent: (number) => number,
            formatFractionTotal: (number) => number,
            renderFraction: function (currentClass, totalClass) {
              return `<span class="${currentClass}"></span>-<span class="${totalClass}"></span>`;
            }
          }}
          className="comparison-swiper"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <SwiperSlide key={num}>
              <img 
                src={`/SP${num}.png`} 
                alt={`比較表 ${num}`} 
                className="comparison-slide-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ComparisonTableSP;