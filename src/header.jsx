import React, { useState } from "react";
import useMediaQuery from "./assets/UseMediaQuery";
// import{BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Header() {
  const Phone = useMediaQuery("(max-width: 502px)");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsOpen(false); // メニューを閉じる
    }
  };

  return (
    <header>
      <div className="header__logo">
        <a href="#">
          <img src="./ZION_logo.png" alt="株式会社ZIONのロゴ" />
        </a>
      </div>

      <div
        className={`header__btn ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span
          className={`line header__btn__line01 ${isOpen ? "open" : ""}`}
        ></span>
        <span
          className={`line header__btn__line02 ${isOpen ? "open" : ""}`}
        ></span>
        <span
          className={`line header__btn__line03 ${isOpen ? "open" : ""}`}
        ></span>
      </div>

      <nav className={isOpen ? "open" : ""}>
        <div className="GNAVJS">
          <ul className="nav-left">
            <li>
              <a onClick={() => scrollToSection("features")}>ZION-MEETの特長</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("cases")}>導入事例</a>
            </li>
            <li>
            <a onClick={() => scrollToSection(Phone ? "comparison-sp" : "comparison")}>
                競合他社との比較
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection("faq")}>よくある質問</a>
            </li>
        
          </ul>
          <ul className="nav-right">
            <li className="header__button">
              <a href="">お問い合わせ</a>
            </li>
            <li className="header__button">
              <a href="">資料請求</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
