import React from 'react';



const feeData = [
  {
    id: 1,
    title: "スタンダードプラン",
    price: "5000円〜/月",
    description: "弊社サーバーにて運用",
    imageUrl:"./standard.png",
    alt: "スタンダートプランの画像",

  },
  {
    id: 2,
    title: "ビジネスプラン",
    price: "15000円〜/月",
    description: "取引先サーバーに直接取り込むプラン",
    imageUrl:"./business.png",
    alt: "ビジネスプランの画像",
  },

 
];

function FeeItem({ title, price, description, imageUrl, alt, type }) {
  // 価格表示を「数字」「〜」「円」「/月」の4つに分割
  const [priceBase] = price ? price.split('円') : [''];
  const [priceNumber, priceTilde] = priceBase ? priceBase.split('〜') : ['', ''];
  
  return (
    <div className={`fee-item ${type}`}>
      <img className="fee_img" src={imageUrl} alt={alt} />
      <h4>{title}</h4>
      {price && (
        <div className="price-container">
          <span className="price-number">{priceNumber}</span>
          <span className="price-tilde">円</span>
          <span className="price-unit">〜</span>
          <span className="price-period">/月</span>
        </div>
      )}
      <p className="description">{description}</p>
    </div>
  );
}

function FeeList() {
  const regularPlans = feeData.slice(0, 2);

  return (
    <div className="fee-list">
      <h2>料金</h2>
      <p className='fee_common'>プラン共通:初期費用36,000円</p>
     
      <div className="fee-plans">
        {regularPlans.map((plan) => (
          <FeeItem
            key={plan.id}
            title={plan.title}
            price={plan.price}
            description={plan.description}
            imageUrl={plan.imageUrl}
            alt={plan.alt}
            type={plan.id === 1 ? 'standard' : 'business'}

          />
        ))}
      </div>
      <p  className='fee_Note'>※1. ご利用開始まで1～3営業日いただきます。<br/>※2. プランによってはご利用開始時期が変動する場合があります。<br/>※3. ビジネスプランの場合、保守料金として別途ご請求になる場合がございます</p>
    </div>
  );
} 
export default FeeList;