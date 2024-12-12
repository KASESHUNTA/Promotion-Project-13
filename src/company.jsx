import React from "react";


const companyData = [
  {
    id: 1,
    name: "株式会社ドコモCS様",
    logo: "企業ロゴ1",
    description:
      "弊社内では、ドコモショップにおいて、<br/>高齢のお客様へのスマートフォンサポー<br/>ト業務を円滑に進めるための強力なツー<br/>ルとして活用されています。",
    imageUrl: "./docomo_logo.svg",
    alt: "株式会社docomoのロゴ",
  },
  {
    id: 2,
    name: "株式会社リップルコミュニティ様",
    logo: "企業ロゴ2",
    description:
      "弊社内では入社の面談、商談に利用し、<br/>問題が発生した場合のみZOOMを使う<br/>動きとなっています。追加オプションツー<br/>ルによるGoogleカレンダーへの追加が便<br/>利で社内定例会議など幅広く利用してま<br/>す。",
    imageUrl: "./ripty_logo.svg",
    alt: "株式会社リップルのロゴ",
  },
];

function Companys(props) {
  // 改行文字列を配列に分割
  const descriptionLines = props.description.split('<br/>');

  return (
    <div className="company-card">
      <div className="logo-background">
        <img src={props.imageUrl} alt={props.alt} className="company-logo" />
      </div>
      
      <div className="text-background">
        <p className="company-name">{props.name}</p>
        <p className="company-description">
          {descriptionLines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < descriptionLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}

function Company() {
  return (
    <section id="cases" className="company-section">
      <h2 className="section-title">企業様の導入事例</h2>
      <div className="company-grid">
        {companyData.map((company) => (
          <Companys
            name={company.name}
            key={company.id}
            description={company.description}
            imageUrl={company.imageUrl}
            alt={company.alt}
          />
        ))}
      </div>
    </section>
  );
}

export default Company;