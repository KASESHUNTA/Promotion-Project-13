function Header() {
  return (
    <header>
      <div className="header__logo">
        <a href="#">
          <img src="./ZION_logo.png" alt="株式会社ZIONのロゴ" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">ZION-MEETの特長</a>
          </li>
          <li>
            <a href="">導入事例</a>
          </li>
          <li>
            <a href="">よくある質問</a>
          </li>
          <li>
            <a href="">競合他社との比較</a>
          </li>
          <li className="header__button">
            <a href="">お問い合わせ</a>
          </li>
          <li className="header__button">
            <a href="">資料請求</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}


export default Header;
